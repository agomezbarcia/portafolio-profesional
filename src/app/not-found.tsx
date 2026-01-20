import Link from 'next/link';
import type { Metadata, Viewport } from 'next';

// Metadatos específicos para la página 404
export const metadata: Metadata = {
    title: 'Página no encontrada - 404',
    description: 'La página que buscas no existe o ha sido movida.',
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    themeColor: '#ffffff',
};

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-slate-50 text-center">
            {/* Ilustración abstracta con CSS puro */}
            <div className="relative mb-8">
                <h1 className="text-9xl font-extrabold text-slate-200 select-none">404</h1>
                <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-semibold text-slate-600 bg-slate-50 px-2">
            Página no encontrada
          </span>
                </div>
            </div>

            <p className="text-lg text-slate-600 max-w-md mb-8">
                Parece que te has perdido en el ciberespacio. La página que buscas no existe o ha cambiado de dirección.
            </p>

            <Link
                href="https://agomezbarcia.vercel.app"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 flex items-center gap-2"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Volver al inicio
            </Link>
        </div>
    );
}