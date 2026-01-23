'use client';

import { SpeedInsights } from '@vercel/speed-insights/next';
import { usePrivacy } from '@/providers/PrivacyProvider';

export default function SpeedInsightsWrapper() {
    const { analyticsConsent } = usePrivacy();

    // Si no hay consentimiento, no cargamos nada
    if (!analyticsConsent) {
        return null;
    }

    return <SpeedInsights />;
}