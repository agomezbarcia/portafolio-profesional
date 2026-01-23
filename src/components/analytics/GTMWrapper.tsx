'use client';

import { GoogleTagManager } from '@next/third-parties/google';
import { usePrivacy } from '@/providers/PrivacyProvider';

export default function GTMWrapper() {
    const { analyticsConsent } = usePrivacy();

    // Bloqueo total hasta que acepten
    if (!analyticsConsent) {
        return null;
    }

    return <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID || ''} />;
}