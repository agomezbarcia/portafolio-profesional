'use client';

import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
      <article className="group flex flex-col md:flex-row gap-6 md:gap-8 bg-white dark:bg-slate-950 md:items-center">
        {/* Imagen */}
        <div className="w-full md:w-1/2 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 relative aspect-video">
          <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-black/10 dark:ring-white/10 rounded-xl" />
        </div>

        {/* Contenido */}
        <div className="w-full md:w-1/2 space-y-4">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>

          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
                <span
                    key={tech}
                    className="text-xs font-medium px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md"
                >
              {tech}
            </span>
            ))}
          </div>

          <div className="pt-2 flex items-center gap-4">
            {project.link && (
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Ver Proyecto
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
            )}
          </div>
        </div>
      </article>
  );
}