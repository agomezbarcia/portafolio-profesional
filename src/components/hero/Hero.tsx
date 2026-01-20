// src/components/hero/Hero.tsx

'use client';

import { PORTFOLIO_DATA } from '@/lib/constants';
import Image from 'next/image';

export default function Hero() {
  return (
      <section
          id="inicio"
          className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 bg-linear-to-b from-slate-50 to-white"
      >
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Contenido izquierdo */}
          <div className="space-y-6 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 rounded-full w-fit">
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-blue-600">Disponible para proyectos</span>
            </div>

            {/* Título principal */}
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
              Hola, soy{' '}
              <span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {PORTFOLIO_DATA.name}
            </span>
            </h1>

            {/* Tagline */}
            <p className="text-xl md:text-2xl text-slate-600 font-medium">
              {PORTFOLIO_DATA.tagline}
            </p>

            {/* Descripción */}
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              {PORTFOLIO_DATA.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                  href="#proyectos"
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 hover:shadow-lg hover:scale-105 text-center"
              >
                Ver mis proyectos
              </a>
              <a
                  href="#contacto"
                  className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 text-center"
              >
                Contactar conmigo
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-sm font-medium text-slate-500">Sígueme:</span>
              <div className="flex gap-4">
                <a
                    href={PORTFOLIO_DATA.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-blue-600 hover:text-white transition-all duration-200"
                    aria-label="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                        fillRule="evenodd"
                        d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.544 2.914 1.19.092-.926.35-1.557.636-1.914-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.817a9.59 9.59 0 012.502.339c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.137 18.194 20 14.44 20 10.017 20 4.484 15.522 0 10 0z"
                        clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                    href={PORTFOLIO_DATA.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-blue-600 hover:text-white transition-all duration-200"
                    aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.292-1.194-2.292-1.195 0-1.38.932-1.38 1.892v4.578h-2.674V9.26h2.56v.994h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.471zM5.337 7.433c-.859 0-1.554-.694-1.554-1.554s.694-1.554 1.554-1.554 1.554.694 1.554 1.554-.695 1.554-1.554 1.554zm1.338 8.905H3.999V9.26h2.676v6.078zM17.988 0H.012C.005 0 0 .012 0 .027V19.973c0 .015.005.027.012.027h17.976c.007 0 .012-.012.012-.027V.027C18 .012 17.995 0 17.988 0z" />
                  </svg>
                </a>
                <a
                    href={`mailto:${PORTFOLIO_DATA.email}`}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-blue-600 hover:text-white transition-all duration-200"
                    aria-label="Email"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Lado derecho - Imagen/Elemento visual */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full h-96">
              {/* Fondo gradient circulante detrás */}
              <div className="absolute inset-0 bg-linear-to-br from-blue-400 via-purple-400 to-pink-400 rounded-3xl blur-3xl opacity-20 animate-gradient-shift" />

              {/* Contenedor de imagen */}
              <div className="absolute inset-0 bg-linear-to-br from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center overflow-hidden group shadow-xl">

                <div className="relative w-full h-full">
                  <Image
                      src="/my-photo.jpg"
                      alt={`Foto de ${PORTFOLIO_DATA.name}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      priority
                  />
                </div>

                {/* Borde animado decorativo encima de la foto */}
                <div className="absolute inset-0 border-2 border-white/20 rounded-3xl group-hover:border-white/40 transition-all duration-300 pointer-events-none z-10" />
              </div>

              {/* Decoración de esquinas */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-300 rounded-full opacity-20 blur-xl" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-purple-300 rounded-full opacity-20 blur-xl" />
            </div>
          </div>
        </div>

        {/* Elemento flotante de desplazamiento */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>
  );
}