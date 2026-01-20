'use client'; // Necesario para manejo de errores

import { useEffect } from 'react';

export default function Error({
                                  error,
                                  reset,
                              }: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">

            {/* Tarjeta con efecto Glassmorphism sutil en dark mode */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl dark:shadow-2xl dark:shadow-blue-900/10 max-w-md w-full border border-slate-100 dark:border-slate-800 text-center transform transition-all hover:scale-[1.01] duration-300">

                {/* Icono de error animado */}
                <div className="w-20 h-20 bg-red-50 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-6 group">
                    <svg className="w-10 h-10 text-red-500 dark:text-red-400 group-hover:rotate-12 transition-transform duration-300"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3">
                    ¡Vaya! Algo salió mal
                </h2>

                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                    Ha ocurrido un error inesperado al cargar esta sección. No te preocupes, suele ser algo temporal.
                </p>

                <button onClick={reset} className="w-full px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all duration-200 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900">
                    Intentar de nuevo
                </button>

                <div className="mt-6">
                    <a href="/" className="text-sm font-medium text-slate-500 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        O volver al inicio
                    </a>
                </div>
            </div>
        </div>
    );
}