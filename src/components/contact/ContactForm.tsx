'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';
import { sendEmail } from '@/actions/send-email';
import { useFormStatus } from 'react-dom';
import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile';

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-sm"
        >
            {pending ? (
                <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"/>
                    <span>Enviando...</span>
                </>
            ) : (
                <>
                    <span>Enviar mensaje</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                    </svg>
                </>
            )}
        </button>
    );
}

export default function ContactForm() {
    const ref = useRef<HTMLFormElement>(null);
    const turnstileRef = useRef<TurnstileInstance>(null);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const [token, setToken] = useState<string>('');

    async function handleSubmit(formData: FormData) {
        if (!token) {
            setStatus('error');
            setErrorMessage('Por favor, verifica que eres humano.');
            return;
        }

        formData.append('cf-turnstile-response', token);
        const result = await sendEmail({}, formData);

        // Reset del widget tras el envío
        if (turnstileRef.current?.reset) {
            turnstileRef.current.reset();
        }
        setToken('');

        if (result?.error) {
            setStatus('error');
            setErrorMessage(result.error);
        } else {
            setStatus('success');
            ref.current?.reset();
        }
    }

    // Estado de éxito compacto
    if (status === 'success') {
        return (
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-8 text-center animate-fade-up">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-green-600 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                    </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">¡Mensaje enviado!</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Te responderé lo antes posible.</p>
                <button
                    onClick={() => setStatus('idle')}
                    className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                    Enviar otro mensaje
                </button>
            </div>
        );
    }

    return (
        <form ref={ref} action={handleSubmit} className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                    <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">Nombre</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-sm"
                        placeholder="Tu nombre"
                    />
                </div>
                <div className="space-y-1.5">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-sm"
                        placeholder="tu@email.com"
                    />
                </div>
            </div>

            <div className="space-y-1.5">
                <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">Mensaje</label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-sm resize-none"
                    placeholder="¿Cómo puedo ayudarte?"
                />
            </div>

            <div className="hidden justify-center pt-2 scale-90 origin-center">
                <Turnstile
                    ref={turnstileRef}
                    siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ''}
                    onSuccess={setToken}
                    options={{ theme: 'auto', language: 'es' }}
                />
            </div>

            {status === 'error' && (
                <div role="alert" className="p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg text-sm text-center">
                    {errorMessage}
                </div>
            )}

            {/* Checkbox de Privacidad */}
            <div className="flex items-start gap-3 pt-2">
                <input
                    type="checkbox"
                    id="privacy-policy"
                    name="privacy-policy" // Importante para validarlo si quisieras en el server
                    required
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:ring-offset-slate-900"
                />
                <label htmlFor="privacy-policy" className="text-xs text-slate-600 dark:text-slate-400">
                    He leído y acepto la <Link href="/legal/privacidad" className="text-blue-600 hover:underline dark:text-blue-400" target="_blank">política de privacidad</Link>.
                    Entiendo que mis datos serán usados únicamente para responder a mi consulta.
                </label>
            </div>

            <SubmitButton />
        </form>
    );
}