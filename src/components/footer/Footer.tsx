'use client';

import Link from 'next/link';
import { PORTFOLIO_DATA } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
      <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-12 pb-6 px-4 text-sm">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* Columna 1: Marca y Datos */}
          <div className="space-y-4">
            <span className="font-bold text-lg text-slate-900 dark:text-white block">
                {PORTFOLIO_DATA.name}
            </span>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs">
              Desarrollador web enfocado en crear experiencias digitales únicas y funcionales.
            </p>
          </div>

          {/* Columna 2: Navegación Principal */}
          <div className="flex flex-col md:items-center space-y-4">
            <h4 className="font-semibold text-slate-900 dark:text-white">Explorar</h4>
            <div className="flex flex-col gap-2 text-slate-600 dark:text-slate-400 md:text-center">
              <Link href="/#inicio" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Inicio</Link>
              <Link href="/about-me" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Sobre Mí</Link>
              <Link href="/#proyectos" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Proyectos</Link>
            </div>
          </div>

          {/* Columna 3: Social */}
          <div className="flex flex-col md:items-end space-y-4">
            <h4 className="font-semibold text-slate-900 dark:text-white">Social</h4>
            <div className="flex flex-col gap-2 md:text-end">
              <Link href={PORTFOLIO_DATA.social.github} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">GitHub</Link>
              <Link href={PORTFOLIO_DATA.social.linkedin} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">LinkedIn</Link>
            </div>
          </div>
        </div>

        {/* --- BARRA INFERIOR LEGAL --- */}
        <div className="max-w-6xl mx-auto pt-8 border-t border-slate-100 dark:border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 dark:text-slate-500">
          <p>&copy; {currentYear} {PORTFOLIO_DATA.name}. Todos los derechos reservados.</p>

          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/legal/aviso-legal" className="hover:text-slate-900 dark:hover:text-slate-300 transition-colors">Aviso Legal</Link>
            <Link href="/legal/privacidad" className="hover:text-slate-900 dark:hover:text-slate-300 transition-colors">Política de Privacidad</Link>
            <Link href="/legal/cookies" className="hover:text-slate-900 dark:hover:text-slate-300 transition-colors">Política de Cookies</Link>
          </div>
        </div>
      </footer>
  );
}