// src/app/layout.tsx

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import {PORTFOLIO_DATA} from '@/lib/constants';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: PORTFOLIO_DATA.name+' | Desarrollador Full Stack',
    template: '%s | Mi Portafolio',
  },
  description:
    'Portafolio profesional de un desarrollador Full Stack especializado en React, Next.js y tecnologías modernas.',
  robots: {
    index: true,
    follow: true,
  },
  authors: [
    {
      name: PORTFOLIO_DATA.name,
    },
  ],
  creator: PORTFOLIO_DATA.name,
  publisher: 'Vercel',
  keywords: [
    'Desarrollador',
    'Full Stack',
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Portfolio',
    'Web Developer',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Preconectarse a recursos externos */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Manifest para PWA */}
        <link rel="manifest" href="/manifest.json" />

        {/* Theme color */}
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className={`${inter.className} bg-white text-slate-900 antialiased`}>
        {/* Skip to main content link (accessibility) */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded"
        >
          Ir al contenido principal
        </a>

        {/* Main content */}
        <div id="main">
          {children}
        </div>

        {/* Script para análisis (comentado - descomentar cuando uses Vercel Analytics) */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
              if (process.env.NODE_ENV === 'production') {
                import('@vercel/analytics/react').then(({ Analytics }) => {
                  // Analytics tracking
                });
              }
            `,
          }}
        /> */}
      </body>
    </html>
  );
}
