// src/components/projects/ProjectCard.tsx

'use client';

import Image from 'next/image';
import { type Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0;

  return (
    <div className="group">
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
          isEven ? 'md:grid-cols-2' : 'md:grid-cols-2 md:auto-cols-reverse'
        }`}
      >
        {/* Imagen del proyecto */}
        <div
          className={`relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg ${
            !isEven && 'md:order-2'
          }`}
        >
          {/* Fondo gradient mientras carga */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 opacity-10" />

          {/* Imagen */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />

          {/* Overlay con links */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center gap-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-white text-slate-900 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300"
            >
              Código
            </a>
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300"
              >
                Demo
              </a>
            )}
          </div>
        </div>

        {/* Contenido del proyecto */}
        <div className={`space-y-4 ${!isEven && 'md:order-1'}`}>
          {/* Badge */}
          <div className="inline-block">
            <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
              Proyecto #{project.id}
            </span>
          </div>

          {/* Título */}
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
            {project.title}
          </h3>

          {/* Descripción */}
          <p className="text-lg text-slate-600 leading-relaxed">
            {project.description}
          </p>

          {/* Tecnologías */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1 text-sm font-medium bg-slate-100 text-slate-700 rounded-lg border border-slate-200 group-hover:bg-blue-100 group-hover:border-blue-300 group-hover:text-blue-700 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4 pt-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold group/link"
            >
              <span>Ver código</span>
              <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-semibold group/link"
              >
                <span>Ver demo</span>
                <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Separador */}
      {index < 2 && (
        <div className="my-16 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
      )}
    </div>
  );
}
