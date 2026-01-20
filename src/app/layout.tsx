// src/app/layout.tsx

import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import {Analytics} from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';
import {PORTFOLIO_DATA} from '@/lib/constants';
import {ThemeProvider} from '@/providers/ThemeProvider';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
    title: {
        default: PORTFOLIO_DATA.name + ' | Desarrollador Full Stack',
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
        <html lang="es" className="scroll-smooth" suppressHydrationWarning>
            <head>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="theme-color" content="#3b82f6"/>
            </head>
            <body className={`${inter.className} antialiased`}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-300">
                        <div id="main">{children}</div>
                    </div>
                </ThemeProvider>
                <Analytics/>
                <SpeedInsights />
            </body>
        </html>
    );
}