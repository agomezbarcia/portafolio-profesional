// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Optimizaciones de imagen
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.example.com',
      },
    ],
  },

  // Configuración experimental
  experimental: {
    optimizePackageImports: ['@vercel/analytics', 'next-themes'],
  },

  // Otras optimizaciones
  compress: true,
  productionBrowserSourceMaps: false,
  poweredByHeader: false, // oculta que uso Next.js

  // Configuración de Turbopack
  turbopack: {
    resolveAlias: {
      '@': './src',
    },
  },

  // Headers DE SEGURIDAD
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
          },

          {
            // Fuerza HTTPS y evita ataques de downgrade
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
          {
            // Define qué scripts y conexiones son válidos (Cloudflare, Vercel, etc.)
            key: "Content-Security-Policy",
            value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
        ],
      },
    ];
  },

  // Redirects y Rewrites
  async redirects() {
    return [];
  },
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [],
    };
  },
};

// Definición de la Política de Seguridad de Contenido (CSP)
// Autorizo explícitamente a Cloudflare Turnstile y Vercel Analytics
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' https://challenges.cloudflare.com https://va.vercel-scripts.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data: https://challenges.cloudflare.com https://images.unsplash.com; 
  font-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  frame-src https://challenges.cloudflare.com;
  connect-src 'self' https://challenges.cloudflare.com https://vercel.live https://vitals.vercel-insights.com;
  upgrade-insecure-requests;
`;

export default nextConfig;