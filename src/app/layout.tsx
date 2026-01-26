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

// Define tu URL base real aquí para evitar errores de metadata
const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://agomezbarcia.vercel.app/';

export const metadata: Metadata = {
    metadataBase: new URL(BASE_URL),
    title: {
        default: PORTFOLIO_DATA.name + ' | Desarrollador Full Stack',
        template: '%s | Mi Portafolio',
    },
    description: PORTFOLIO_DATA.bio,
    robots: {
        index: true,
        follow: true,
    },
    authors: [{ name: PORTFOLIO_DATA.name }],
    creator: PORTFOLIO_DATA.name,
    publisher: 'Vercel',
    keywords: ['Desarrollador', 'Full Stack', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Portfolio'],
    openGraph: {
        type: 'website',
        locale: 'es_ES',
        url: BASE_URL,
        siteName: PORTFOLIO_DATA.name,
        images: [
            {
                url: '/opengraph-image.png',
                width: 1200,
                height: 630,
                alt: PORTFOLIO_DATA.name,
            },
        ],
    },
};

export default async function RootLayout({
                                             children,
                                         }: Readonly<{
    children: React.ReactNode;
}>) {
    const nonce = (await headers()).get('x-nonce') ?? undefined;

    const imageUrl = new URL('/opengraph-image.png', BASE_URL).toString();

    // --- ESTRUCTURA JSON-LD (SEO OPTIMIZADO) ---
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: PORTFOLIO_DATA.name,
        jobTitle: PORTFOLIO_DATA.tagline,
        url: BASE_URL,
        image: imageUrl,
        description: PORTFOLIO_DATA.bio,
        mainEntityOfPage: {
            "@type": "ProfilePage",
            "@id": BASE_URL
        },
        address: {
            '@type': 'PostalAddress',
            addressLocality: PORTFOLIO_DATA.location,
            addressCountry: 'ES'
        },
        email: `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`,
        sameAs: [
            PORTFOLIO_DATA.social.github,
            PORTFOLIO_DATA.social.linkedin,
        ],
        knowsAbout: [
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Full Stack Development",
            "Software Engineering"
        ]
    };

    return (
        <html lang="es" suppressHydrationWarning>
        <head>
            {/* Inyección del JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </head>
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