'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type PrivacyContextType = {
    analyticsConsent: boolean;
    giveConsent: () => void;
    revokeConsent: () => void;
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
            const storedConsent = localStorage.getItem('cookie-consent');

            if (storedConsent === 'true') {
                setAnalyticsConsent(true);
            }

            setIsLoading(false);
        }, 0);

        return () => clearTimeout(timer);
    }, []);

    const giveConsent = () => {
        localStorage.setItem('cookie-consent', 'true');
        setAnalyticsConsent(true);
    };

    const revokeConsent = () => {
        localStorage.setItem('cookie-consent', 'false');
        setAnalyticsConsent(false);
    };

    return (
        <PrivacyContext.Provider value={{ analyticsConsent, giveConsent, revokeConsent, isLoading }}>
            {children}
        </PrivacyContext.Provider>
    );
}

export const usePrivacy = () => {
    const context = useContext(PrivacyContext);
    if (!context) throw new Error('usePrivacy must be used within a PrivacyProvider');
    return context;
};