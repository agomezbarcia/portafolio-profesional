'use client';

import { Analytics } from '@vercel/analytics/react';
import { usePrivacy } from '@/providers/PrivacyProvider';

export default function AnalyticsWrapper() {
    const { analyticsConsent } = usePrivacy();

    // Si no hay consentimiento, NO renderizamos nada.
    // Esto asegura que NO se descargue ningún script ni se ponga ninguna cookie.
    if (!analyticsConsent) {
        return null;
    }

    return <Analytics />;
}