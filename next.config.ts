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

export default nextConfig;