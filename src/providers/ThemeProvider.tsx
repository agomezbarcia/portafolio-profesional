// src/providers/ThemeProvider.tsx
'use client';

import * as React from 'react';
import {ThemeProvider as NextThemesProvider} from 'next-themes';

// Añade 'nonce' a las props aceptadas
export function ThemeProvider({
                                  children,
                                  nonce,
                                  ...props
                              }: React.ComponentProps<typeof NextThemesProvider> & { nonce?: string }) {

    return (
        // Pasa el nonce al componente de next-themes
        <NextThemesProvider {...props} nonce={nonce}>
            {children}
        </NextThemesProvider>
    );
}