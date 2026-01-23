// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
    const isDev = process.env.NODE_ENV === 'development';
    const cfChallengeHash = "'sha256-mjAPvJKRBATPwtDkDe1t+tw2mbmVjgXVfYImJfeAdz8='";

    const cspHeader = `
    default-src 'self';
    script-src 'self' ${isDev ? "'unsafe-eval'" : ""} https://challenges.cloudflare.com https://va.vercel-scripts.com https://www.googletagmanager.com 'nonce-${nonce}' ${cfChallengeHash};
    style-src 'self' 'unsafe-inline'; 
    img-src 'self' blob: data: https://challenges.cloudflare.com https://images.unsplash.com https://www.googletagmanager.com https://www.google-analytics.com;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    frame-src https://challenges.cloudflare.com https://www.googletagmanager.com;
    connect-src 'self' https://challenges.cloudflare.com https://vercel.live https://vitals.vercel-insights.com https://www.googletagmanager.com https://www.google-analytics.com https://region1.google-analytics.com;
    worker-src 'self' blob:; 
    upgrade-insecure-requests;
  `;

    const contentSecurityPolicyHeaderValue = cspHeader.replace(/\s{2,}/g, ' ').trim();

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-nonce', nonce);
    requestHeaders.set('Content-Security-Policy', contentSecurityPolicyHeaderValue);

    const response = NextResponse.next({
        request: { headers: requestHeaders },
    });

    response.headers.set('Content-Security-Policy', contentSecurityPolicyHeaderValue);

    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('X-Frame-Options', 'DENY'); // Cambio de SAMEORIGIN a DENY si no usas iframes internos
    response.headers.set('X-XSS-Protection', '1; mode=block');
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

    // Feature Policy (Permissions-Policy) más restrictiva
    response.headers.set(
        'Permissions-Policy',
        'camera=(), microphone=(), geolocation=(), payment=(), usb=(), bluetooth=()'
    );

    return response;
}

export const config = {
    matcher: [
        {
            source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
            missing: [
                { type: 'header', key: 'next-router-prefetch' },
                { type: 'header', key: 'purpose', value: 'prefetch' },
            ],
        },
    ],
};