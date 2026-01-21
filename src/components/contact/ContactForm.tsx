'use client';

import {useRef, useState} from 'react';
import {sendEmail} from '@/actions/send-email';
import {useFormStatus} from 'react-dom';
import { Turnstile } from '@marsidev/react-turnstile';

// Componente pequeño para el botón de envío
function SubmitButton() {
    const {pending} = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className="w-full px-8 py-4 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-all duration-200 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
            {pending ? (
                <>
                    <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
                    Enviando...
                </>
            ) : (
                <>
                    Enviar mensaje
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                    </svg>
                </>
            )}
        </button>
    );
}

export default function ContactForm() {
    const ref = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const [token, setToken] = useState<string>('');

    async function handleSubmit(formData: FormData) {
        // Validamos que el usuario haya pasado el reto de seguridad
        if (!token) {
            setStatus('error');
            setErrorMessage('Por favor, completa la verificación de seguridad.');
            return;
        }

        // Añadimos el token al FormData para enviarlo al servidor
        formData.append('cf-turnstile-response', token);

        setErrorMessage('');
        const result = await sendEmail(null, formData);

        if (result?.error) {
            setStatus('error');
            setErrorMessage(result.error);
            // Resetear el token si falla
            setToken('');
        } else {
            setStatus('success');
            ref.current?.reset();
            setToken(''); // Limpiamos el token
        }
    }

    return (
        <div className="w-full max-w-lg mx-auto bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800">

            {/* Mensaje de Éxito */}
            {status === 'success' ? (
                <div className="text-center py-12 animate-fade-in-up">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">¡Mensaje enviado!</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6">
                        Gracias por contactarme. Te responderé lo antes posible.
                    </p>
                    <button
                        onClick={() => setStatus('idle')}
                        className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                    >
                        Enviar otro mensaje
                    </button>
                </div>
            ) : (
                /* Formulario */
                <form ref={ref} action={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                            Nombre
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            placeholder="Tu nombre"
                            className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="tu@email.com"
                            className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                        />
                    </div>

                    {/* --- Campo mensaje --- */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                            Mensaje
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={4}
                            placeholder="¿En qué puedo ayudarte?"
                            className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
                        />
                    </div>

                    {/* --- Widget de seguridad --- */}
                    <div className="flex justify-center">
                        <Turnstile
                            siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ''}
                            onSuccess={(token) => setToken(token)}
                            options={{
                                theme: 'auto',
                                language: 'es',
                            }}
                        />
                    </div>

                    {status === 'error' && (
                        <div className="p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg text-sm">
                            {errorMessage}
                        </div>
                    )}

                    <SubmitButton />
                </form>
            )}
        </div>
    );
}