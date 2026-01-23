'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { usePrivacy } from '@/providers/PrivacyProvider';
import Link from 'next/link';

export default function CookieBanner() {
    const [showBanner, setShowBanner] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const [showConfig, setShowConfig] = useState(false);
    const [preferences, setPreferences] = useState({ analytics: false });

    const { acceptAll, rejectAll, saveConsent, isLoading } = usePrivacy();
    const pathname = usePathname();

    useEffect(() => {
        if (!isLoading) {
            // Envolvemos en un setTimeout para evitar el error de ESLint
            const timer = setTimeout(() => {
                const hasConsent = localStorage.getItem('cookie-consent-settings') || localStorage.getItem('cookie-consent');
                const isLegalPage = pathname?.startsWith('/legal');

                if (!hasConsent) {
                    // --- USUARIO SIN DECIDIR ---
                    if (isLegalPage) {
                        // Si está leyendo legal, muestro botón discreto
                        setShowBanner(false);
                        setShowButton(true);
                    } else {
                        // Si navega normal, bloqueamos
                        setShowBanner(true);
                        setShowButton(false);
                    }
                } else {
                    // --- USUARIO YA DECIDIÓ ---
                    setShowBanner(false);
                    setShowButton(true);
                }
            }, 0);

            return () => clearTimeout(timer);
        }
    }, [isLoading, pathname]);

    // Bloqueo de scroll
    useEffect(() => {
        if (showBanner) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [showBanner]);

    const handleAcceptAll = () => {
        acceptAll();
        setShowBanner(false);
        setShowButton(true);
        setShowConfig(false);
    };

    const handleRejectAll = () => {
        rejectAll();
        setShowBanner(false);
        setShowButton(true);
        setShowConfig(false);
    };

    const handleSavePreferences = () => {
        saveConsent(preferences);
        setShowBanner(false);
        setShowButton(true);
        setShowConfig(false);
    };

    const handleReopen = () => {
        setShowButton(false);
        setShowBanner(true);
        setShowConfig(false);
    };

    // Botón Flotante
    if (!showBanner && showButton) {
        return (
            <button
                onClick={handleReopen}
                aria-label="Configurar Cookies"
                className="fixed bottom-4 left-4 z-[60] p-3 bg-white dark:bg-slate-900 rounded-full shadow-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:scale-110 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group"
                title="Gestionar Privacidad"
            >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="absolute left-14 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Privacidad
        </span>
            </button>
        );
    }

    // Banner Modal
    if (showBanner) {
        return (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md animate-in fade-in duration-300">
                <div className="w-full max-w-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl rounded-2xl p-6 md:p-8 transform transition-all scale-100">

                    {!showConfig ? (
                        <>
                            <div className="text-center mb-6">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 text-2xl mb-4">
                                    🍪
                                </div>
                                <h5 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                                    Valoramos tu privacidad
                                </h5>
                                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                    Usamos cookies para mejorar tu experiencia. Necesitamos que elijas una opción para continuar navegando.
                                </p>
                            </div>

                            <div className="flex flex-col gap-3">
                                <button
                                    onClick={handleAcceptAll}
                                    className="w-full px-6 py-3.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-xl hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-lg"
                                >
                                    Aceptar todas
                                </button>
                                <div className="grid grid-cols-2 gap-3">
                                    <button
                                        onClick={() => setShowConfig(true)}
                                        className="px-4 py-3 border border-slate-200 dark:border-slate-700 font-medium text-slate-700 dark:text-slate-300 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                                    >
                                        Configurar
                                    </button>
                                    <button
                                        onClick={handleRejectAll}
                                        className="px-4 py-3 border border-slate-200 dark:border-slate-700 font-medium text-slate-700 dark:text-slate-300 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                                    >
                                        Rechazar
                                    </button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <h5 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Configuración de Cookies</h5>
                            <div className="space-y-4 mb-6">
                                <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                    <div>
                                        <span className="text-sm font-bold text-slate-900 dark:text-white block">Técnicas</span>
                                        <span className="text-xs text-slate-500">Necesarias para el funcionamiento.</span>
                                    </div>
                                    <input type="checkbox" checked disabled className="accent-blue-600 w-5 h-5 opacity-50 cursor-not-allowed" />
                                </div>
                                <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                    <div>
                                        <span className="text-sm font-bold text-slate-900 dark:text-white block">Analíticas</span>
                                        <span className="text-xs text-slate-500">Nos ayudan a mejorar la web.</span>
                                    </div>
                                    <input
                                        type="checkbox"
                                        checked={preferences.analytics}
                                        onChange={(e) => setPreferences({...preferences, analytics: e.target.checked})}
                                        className="accent-blue-600 w-5 h-5 cursor-pointer"
                                    />
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <button
                                    onClick={() => setShowConfig(false)}
                                    className="flex-1 py-2 text-sm font-medium text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
                                >
                                    Volver
                                </button>
                                <button
                                    onClick={handleSavePreferences}
                                    className="flex-1 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-700"
                                >
                                    Guardar preferencias
                                </button>
                            </div>
                        </>
                    )}

                    <div className="mt-6 text-center pt-4 border-t border-slate-100 dark:border-slate-800">
                        <Link href="/legal/cookies" className="text-xs text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 underline decoration-slate-300 underline-offset-2">
                            Leer Política de Cookies
                        </Link>
                    </div>

                </div>
            </div>
        );
    }

    return null;
}