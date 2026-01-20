import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Página no encontrada | 404',
    description: 'La página que buscas no existe.',
};

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">

            {/* Contenedor Visual con Animación */}
            <div className="relative mb-8 text-center">
                {/* Texto de fondo grande con degradado y animación de pulso lento */}
                <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 select-none animate-pulse">
                    404
                </h1>

                {/* Texto superpuesto flotante */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 animate-bounce">
                    Ups, algo falta aquí
                  </span>
                </div>
            </div>

            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-md mb-8 text-center leading-relaxed">
                Parece que el enlace está roto o la página ha sido movida.
                No te preocupes, puedes volver a territorio seguro.
            </p>

            <Link href="/" className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 flex items-center gap-2 group">
                {/* Flecha animada al hacer hover */}
                <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Volver al inicio
            </Link>
        </div>
    );
}