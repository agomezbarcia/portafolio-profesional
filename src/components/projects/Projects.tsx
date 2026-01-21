'use client';

import { PROJECTS } from '@/lib/constants';
import { PORTFOLIO_DATA } from '@/lib/constants';
import ProjectCard from './ProjectCard';

export default function Projects() {
    return (
        <section id="proyectos" className="py-16 px-4 bg-white dark:bg-slate-950">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12 text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-4">
                    <div>
            <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm tracking-wider uppercase mb-2 block">
              Portafolio
            </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                            Proyectos{' '}
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Destacados
              </span>
                        </h2>
                    </div>
                    <a href={PORTFOLIO_DATA.social.github} target="_blank" className="text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors">
                        Ver todo en GitHub &rarr;
                    </a>
                </div>

                <div className="grid grid-cols-1 gap-12">
                    {PROJECTS.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

                <div className="mt-16 p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-center">
                    <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">¿Tienes una idea en mente?</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm">Estoy disponible para colaborar en nuevos desarrollos.</p>
                    <a href="#contacto" className="inline-block px-6 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium rounded-lg hover:opacity-90 transition-opacity">
                        Hablemos
                    </a>
                </div>
            </div>
        </section>
    );
}