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

  // Optimizaciones de compilación
  swcMinify: true,

  // Configuración experimental para mejor rendimiento
  experimental: {
    // Optimización de bundling
    optimizePackageImports: ['@vercel/analytics', 'next-themes'],
  },

  // Headers para seguridad y rendimiento
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
            value: 'geolocation=(), microphone=(), camera=()',
          },
        ],
      },
    ];
  },

  // Redirects (si es necesario)
  async redirects() {
    return [];
  },

  // Rewrites (si es necesario)
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [],
    };
  },

  // Configuración de Turbopack
  turbopack: {
    resolveAlias: {
      '@': './src',
    },
  },

  // Otras optimizaciones
  compress: true,
  productionBrowserSourceMaps: false,
  poweredByHeader: false,

  // Configuración de eslint
  eslint: {
    dirs: ['src'],
  },
};

export default nextConfig;
