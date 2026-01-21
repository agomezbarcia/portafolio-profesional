'use client';

import { PORTFOLIO_DATA } from '@/lib/constants';
import Image from 'next/image';

export default function Hero() {
  return (
      <section
          id="inicio"
          className="relative flex items-center justify-center pt-28 md:pt-32 pb-16 px-4 min-h-[90vh] overflow-hidden"
      >
        {/* Fondo decorativo sutil */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-950/20 dark:to-transparent -z-10" />

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* Texto */}
          <div className="space-y-6 md:space-y-8 text-center md:text-left animate-fade-up">

            {/* Se ha eliminado el badge de "Disponible para trabajar" aquí */}

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900 dark:text-white">
              Hola, soy{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {PORTFOLIO_DATA.name}
            </span>
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg mx-auto md:mx-0 leading-relaxed">
              {PORTFOLIO_DATA.tagline}. {PORTFOLIO_DATA.bio}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <a
                  href="#proyectos"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 hover:-translate-y-0.5 transition-all shadow-lg shadow-blue-500/25"
              >
                Ver Proyectos
              </a>
              <a
                  href="#contacto"
                  className="px-6 py-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-lg font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all hover:-translate-y-0.5"
              >
                Contactar
              </a>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-4 pt-2">
              {[
                { href: PORTFOLIO_DATA.social.github, icon: 'M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.544 2.914 1.19.092-.926.35-1.557.636-1.914-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.817a9.59 9.59 0 012.502.339c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.137 18.194 20 14.44 20 10.017 20 4.484 15.522 0 10 0z' },
                { href: PORTFOLIO_DATA.social.linkedin, icon: 'M16.338 16.338H13.67V12.16c0-.995-.017-2.292-1.194-2.292-1.195 0-1.38.932-1.38 1.892v4.578h-2.674V9.26h2.56v.994h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.471zM5.337 7.433c-.859 0-1.554-.694-1.554-1.554s.694-1.554 1.554-1.554 1.554.694 1.554 1.554-.695 1.554-1.554 1.554zm1.338 8.905H3.999V9.26h2.676v6.078zM17.988 0H.012C.005 0 0 .012 0 .027V19.973c0 .015.005.027.012.027h17.976c.007 0 .012-.012.012-.027V.027C18 .012 17.995 0 17.988 0z' }
              ].map((social, i) => (
                  <a key={i} href={social.href} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d={social.icon} clipRule="evenodd" fillRule="evenodd"/></svg>
                  </a>
              ))}
            </div>
          </div>

          {/* Imagen */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Círculo decorativo desenfocado detrás */}
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-20 dark:opacity-40 animate-pulse" />
              <Image
                  src="/my-photo.jpg"
                  alt="Profile"
                  fill
                  className="rounded-full object-cover border-4 border-white dark:border-slate-800 shadow-xl relative z-10"
                  priority
              />
            </div>
          </div>
        </div>
      </section>
  );
}