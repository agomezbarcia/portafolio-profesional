'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LEGAL_LINKS = [
    { href: '/legal/aviso-legal', label: 'Aviso Legal', icon: '⚖️' },
    { href: '/legal/privacidad', label: 'Política de Privacidad', icon: '🔒' },
    { href: '/legal/cookies', label: 'Política de Cookies', icon: '🍪' },
];

export default function LegalLayout({
                                        children,
                                    }: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const currentYear = new Date().getFullYear();

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">

            {/* --- HEADER --- */}
            <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-30 bg-opacity-80 backdrop-blur-md">
                <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                    <Link
                        href="/"
                        className="flex items-center text-sm font-medium text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors group"
                    >
                        <svg className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Volver al portafolio
                    </Link>
                    <div className="text-xs font-mono text-slate-400 border border-slate-200 dark:border-slate-800 rounded px-2 py-1">
                        LEGAL CENTER
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
                <div className="flex flex-col md:flex-row gap-8 lg:gap-16">

                    {/* --- NAVEGACIÓN LATERAL (Desktop) / SUPERIOR (Mobile) --- */}
                    <aside className="md:w-64 flex-shrink-0">
                        <div className="sticky top-24">
                            <h1 className="text-2xl font-bold mb-6 tracking-tight">Marco Legal</h1>

                            <nav className="flex md:flex-col gap-2 overflow-x-auto pb-4 md:pb-0 no-scrollbar">
                                {LEGAL_LINKS.map((link) => {
                                    const isActive = pathname === link.href;
                                    return (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className={`
                        flex items-center whitespace-nowrap px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200
                        ${isActive
                                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                                                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                                            }
                      `}
                                        >
                                            <span className="mr-3 text-lg opacity-80">{link.icon}</span>
                                            {link.label}
                                        </Link>
                                    );
                                })}
                            </nav>

                            <div className="hidden md:block mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
                                <p className="text-xs text-slate-400">
                                    Documentación oficial de <br/>
                                    <strong className="text-slate-700 dark:text-slate-300">Abraham Gómez Barcia</strong>
                                </p>
                                <p className="text-xs text-slate-400 mt-2">
                                    &copy; {currentYear} Todos los derechos reservados.
                                </p>
                            </div>
                        </div>
                    </aside>

                    {/* --- CONTENIDO PRINCIPAL --- */}
                    <main className="flex-1 min-w-0 animate-fade-up">
                        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-12 shadow-sm">
                            {children}
                        </div>
                    </main>

                </div>
            </div>
        </div>
    );
}