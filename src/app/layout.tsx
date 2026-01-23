// src/app/layout.tsx

import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { Inter } from 'next/font/google';
import { PrivacyProvider } from "@/providers/PrivacyProvider";
import AnalyticsWrapper from "@/components/analytics/AnalyticsWrapper";
import SpeedInsightsWrapper from "@/components/analytics/SpeedInsightsWrapper";
import GTMWrapper from "@/components/analytics/GTMWrapper";
import './globals.css';
import { PORTFOLIO_DATA } from '@/lib/constants';
import { ThemeProvider } from '@/providers/ThemeProvider';
import CookieBanner from "@/components/ui/CookieBanner";

const inter = Inter({ subsets: ['latin'] });

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

export default async function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const nonce = (await headers()).get('x-nonce') ?? undefined;
    return (
        <html lang="es" suppressHydrationWarning>
        <body className={`${inter.className} antialiased bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            nonce={nonce}
        >
            <PrivacyProvider>

                {children}

                <CookieBanner />
                <AnalyticsWrapper />
                <SpeedInsightsWrapper />
                <GTMWrapper />

            </PrivacyProvider>
        </ThemeProvider>
        </body>
        </html>
    );
}