'use client';

import { PORTFOLIO_DATA } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
      <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-8 px-4 text-sm">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">

          {/* Marca y Copyright */}
          <div className="space-y-2">
          <span className="font-bold text-lg text-slate-900 dark:text-white block">
            {PORTFOLIO_DATA.name}
          </span>
            <p className="text-slate-500 dark:text-slate-400">
              &copy; {currentYear}. Construido con Next.js & Tailwind.
            </p>
          </div>

          {/* Links Rápidos - Centrados en desktop */}
          <div className="flex flex-col md:items-center space-y-2">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Navegación</h4>
            <div className="flex gap-4 text-slate-600 dark:text-slate-400">
              <a href="#inicio" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Inicio</a>
              <a href="#proyectos" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Proyectos</a>
              <a href="#contacto" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contacto</a>
            </div>
          </div>

          {/* Social - Alineado derecha en desktop */}
          <div className="flex flex-col md:items-end space-y-2">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Social</h4>
            <div className="flex gap-4">
              <a href={PORTFOLIO_DATA.social.github} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">GitHub</a>
              <a href={PORTFOLIO_DATA.social.linkedin} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
  );
}