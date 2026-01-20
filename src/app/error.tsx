'use client'; // Necesario para manejo de errores

import {useEffect} from 'react';

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
        <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-slate-50 text-center">
            <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full border border-slate-100">
                {/* Icono de error */}
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                    </svg>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                    ¡Vaya! Algo salió mal
                </h2>

                <p className="text-slate-600 mb-8">
                    Ha ocurrido un error inesperado al cargar esta sección. No te preocupes, suele ser temporal.
                </p>

                <button
                    onClick={reset}
                    className="w-full px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
                >
                    Intentar de nuevo
                </button>
            </div>
        </div>
    );
}