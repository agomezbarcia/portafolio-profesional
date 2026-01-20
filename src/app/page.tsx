// src/app/page.tsx

import Header from '@/components/navigation/Header';
import Hero from '@/components/hero/Hero';
import Skills from '@/components/skills/Skills';
import Experience from '@/components/experience/Experience';
import Projects from '@/components/projects/Projects';
import Footer from '@/components/footer/Footer';
import ContactForm from '@/components/contact/ContactForm';
import { PORTFOLIO_DATA } from '@/lib/constants';

export const metadata = {
  title: PORTFOLIO_DATA.name + ' | Desarrollador Full Stack',
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
    title: PORTFOLIO_DATA.name + ' | Desarrollador Full Stack',
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
          <section
              id="contacto"
              className="py-20 px-4 bg-linear-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 transition-colors duration-300"
          >
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                {/* Columna Izquierda: Información y Redes */}
                <div className="space-y-8 animate-fade-in-up">
                  <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
                      ¿Hablamos?
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                      Si tienes un proyecto en mente o simplemente quieres conectar, rellena el formulario y te responderé en menos de 24 horas.
                    </p>
                  </div>

                  {/* Tarjetas de contacto directo */}
                  <div className="space-y-4">
                    {/* Email Card */}
                    <a
                        href={`mailto:${PORTFOLIO_DATA.email}`}
                        className="flex items-center p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 hover:shadow-md transition-all group"
                    >
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-600 transition-colors">
                        <svg
                            className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                          Email directo
                        </p>
                        <p className="text-slate-900 dark:text-white font-semibold">
                          {PORTFOLIO_DATA.email}
                        </p>
                      </div>
                    </a>

                    {/* LinkedIn Card */}
                    <a
                        href={PORTFOLIO_DATA.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 hover:shadow-md transition-all group"
                    >
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-600 transition-colors">
                        <svg
                            className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                          LinkedIn
                        </p>
                        <p className="text-slate-900 dark:text-white font-semibold">
                          Conectar profesionalmente
                        </p>
                      </div>
                    </a>

                    {/* GitHub Card */}
                    <a
                        href={PORTFOLIO_DATA.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 hover:shadow-md transition-all group"
                    >
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-600 transition-colors">
                        <svg
                            className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                          <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.544 2.914 1.19.092-.926.35-1.557.636-1.914-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.817a9.59 9.59 0 012.502.339c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.137 18.194 20 14.44 20 10.017 20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                          GitHub
                        </p>
                        <p className="text-slate-900 dark:text-white font-semibold">
                          Ver repositorios
                        </p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Columna Derecha: Formulario Funcional */}
                <div className="animate-fade-in-up delay-100">
                  <ContactForm />
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
  );
}