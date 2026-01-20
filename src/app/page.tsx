// src/app/page.tsx

import Header from '@/components/navigation/Header';
import Hero from '@/components/hero/Hero';
import Skills from '@/components/skills/Skills';
import Experience from '@/components/experience/Experience';
import Projects from '@/components/projects/Projects';
import Footer from '@/components/footer/Footer';
import {PORTFOLIO_DATA} from '@/lib/constants';

export const metadata = {
  title: PORTFOLIO_DATA.name+' | Desarrollador Full Stack',
  description:
      'Portafolio profesional de un desarrollador Full Stack especializado en React, Next.js y diseño moderno.',
  keywords: [
    'Desarrollador',
    'Full Stack',
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
  ],
  authors: [{ name: PORTFOLIO_DATA.name }],
  openGraph: {
    title: PORTFOLIO_DATA.name+' | Desarrollador Full Stack',
    description: 'Mi portafolio profesional con proyectos destacados',
    url: 'https://agomezbarcia.vercel.app',
    siteName: 'Portafolio',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
};

export default function Home() {
  return (
      <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
        {/* Header/Navbar */}
        <Header />

        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <Hero />

          {/* Skills Section */}
          <Skills />

          {/* Experience Section */}
          <Experience />

          {/* Projects Section */}
          <Projects />

          {/* CTA Section - Contacto */}
          <section id="contacto" className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 transition-colors duration-300">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
                  ¿Listo para trabajar juntos?
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                  Si tienes un proyecto en mente o simplemente quieres chatear sobre desarrollo
                  web, no dudes en contactarme. Siempre estoy abierto a nuevas oportunidades.
                </p>
              </div>

              {/* Métodos de contacto */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
                <a
                    href={`mailto:${PORTFOLIO_DATA.email}`}
                    className="p-6 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-xl hover:border-blue-600 dark:hover:border-blue-500 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Email</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm break-all">{PORTFOLIO_DATA.email}</p>
                  <span className="inline-block text-blue-600 dark:text-blue-400 font-semibold group-hover:translate-x-1 transition-transform">
                  Enviar mensaje →
                </span>
                </a>

                <a
                    href={PORTFOLIO_DATA.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-6 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-xl hover:border-blue-600 dark:hover:border-blue-500 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.292-1.194-2.292-1.195 0-1.38.932-1.38 1.892v4.578h-2.674V9.26h2.56v.994h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.471zM5.337 7.433c-.859 0-1.554-.694-1.554-1.554s.694-1.554 1.554-1.554 1.554.694 1.554 1.554-.695 1.554-1.554 1.554zm1.338 8.905H3.999V9.26h2.676v6.078zM17.988 0H.012C.005 0 0 .012 0 .027V19.973c0 .015.005.027.012.027h17.976c.007 0 .012-.012.012-.027V.027C18 .012 17.995 0 17.988 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">LinkedIn</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">Conecta conmigo</p>
                  <span className="inline-block text-blue-600 dark:text-blue-400 font-semibold group-hover:translate-x-1 transition-transform">
                  Visitar →
                </span>
                </a>

                <a
                    href={PORTFOLIO_DATA.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-6 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-xl hover:border-blue-600 dark:hover:border-blue-500 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.544 2.914 1.19.092-.926.35-1.557.636-1.914-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.817a9.59 9.59 0 012.502.339c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.137 18.194 20 14.44 20 10.017 20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">GitHub</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">Mira mis proyectos</p>
                  <span className="inline-block text-blue-600 dark:text-blue-400 font-semibold group-hover:translate-x-1 transition-transform">
                  Visitar →
                </span>
                </a>
              </div>

              {/* Botón principal */}
              <div className="pt-4">
                <a
                    href={`mailto:${PORTFOLIO_DATA.email}`}
                    className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-500 transition-all duration-200 hover:shadow-lg hover:scale-105"
                >
                  Comencemos a trabajar
                </a>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
  );
}