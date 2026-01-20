// src/components/projects/Projects.tsx

'use client';

import { PROJECTS } from '@/lib/constants';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section id="proyectos" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block text-sm font-semibold text-blue-600 bg-blue-100 px-4 py-2 rounded-full">
            PORTAFOLIO
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Proyectos Destacados
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Una selección de mis proyectos más recientes y significativos. Cada uno
            representa un desafío diferente y soluciones innovadoras.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {PROJECTS.slice(0, 3).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Grid de proyectos adicionales (más compacta) */}
        <div className="mt-20 pt-20 border-t border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">
            Más proyectos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROJECTS.slice(3).map((project) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="relative h-48 rounded-xl overflow-hidden shadow-md mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h4>
                <p className="text-sm text-slate-600 mb-3 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.technologies.slice(0, 2).map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 2 && (
                    <span className="text-xs font-medium text-slate-500">
                      +{project.technologies.length - 2}
                    </span>
                  )}
                </div>
                <div className="inline-flex items-center space-x-1 text-blue-600 font-semibold text-sm group-hover:space-x-2 transition-all">
                  <span>Ver proyecto</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-20">
          <a
            href="#contacto"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 hover:shadow-lg hover:scale-105"
          >
            ¿Tienes un proyecto en mente? Hablemos
          </a>
        </div>
      </div>
    </section>
  );
}
