'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type ConsentSettings = {
    analytics: boolean;
};

type PrivacyContextType = {
    analyticsConsent: boolean;
    saveConsent: (settings: ConsentSettings) => void;
    acceptAll: () => void;
    rejectAll: () => void;
    isLoading: boolean;
};

const PrivacyContext = createContext<PrivacyContextType | undefined>(undefined);

export function PrivacyProvider({ children }: { children: ReactNode }) {
    const [analyticsConsent, setAnalyticsConsent] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Usamos setTimeout para evitar la actualización síncrona de estado dentro del efecto
        // que causa el error de ESLint "cascading renders".
        const timer = setTimeout(() => {
            const storedConsent = localStorage.getItem('cookie-consent-settings');

            if (storedConsent) {
                try {
                    const settings: ConsentSettings = JSON.parse(storedConsent);
                    setAnalyticsConsent(settings.analytics);
                } catch {
                    // Si falla el parseo, asumimos rechazado y limpiamos
                    localStorage.removeItem('cookie-consent-settings');
                    setAnalyticsConsent(false);
                }
            } else {
                // Compatibilidad con versión anterior
                const oldConsent = localStorage.getItem('cookie-consent');
                if (oldConsent === 'true') {
                    setAnalyticsConsent(true);
                }
            }

            setIsLoading(false);
        }, 0);

        return () => clearTimeout(timer);
    }, []);

    const saveConsent = (settings: ConsentSettings) => {
        localStorage.setItem('cookie-consent-settings', JSON.stringify(settings));
        localStorage.removeItem('cookie-consent');
        setAnalyticsConsent(settings.analytics);
    };

    const acceptAll = () => {
        saveConsent({ analytics: true });
    };

    const rejectAll = () => {
        saveConsent({ analytics: false });
    };

    return (
        <PrivacyContext.Provider value={{ analyticsConsent, saveConsent, acceptAll, rejectAll, isLoading }}>
            {children}
        </PrivacyContext.Provider>
    );
}

export const usePrivacy = () => {
    const context = useContext(PrivacyContext);
    if (!context) throw new Error('usePrivacy must be used within a PrivacyProvider');
    return context;
};