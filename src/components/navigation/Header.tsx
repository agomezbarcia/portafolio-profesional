'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PORTFOLIO_DATA } from '@/lib/constants';
import ThemeToggle from '@/components/ui/ThemeToggle';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#habilidades', label: 'Habilidades' },
    { href: '#experiencia', label: 'Experiencia' },
    { href: '#proyectos', label: 'Proyectos' },
  ];

  return (
      // Usamos glass-nav definido en globals.css para consistencia y limpieza
      <header className="fixed w-full top-0 z-50 glass-nav transition-all duration-300">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group" onClick={() => setIsMenuOpen(false)}>
              <div className="relative w-8 h-8 overflow-hidden rounded-lg shadow-sm transition-transform group-hover:scale-105">
                <Image src="/icon.svg" alt="Logo" fill className="object-cover" priority />
              </div>
              <span className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {PORTFOLIO_DATA.name}
            </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <div className="flex gap-6">
                {navLinks.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {link.label}
                    </a>
                ))}
                <a
                    href="/CV_Abraham_Gomez_Barcia.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  CV
                </a>
              </div>

              <div className="flex items-center gap-4 pl-4 border-l border-slate-200 dark:border-slate-700">
                <ThemeToggle />
                <a
                    href="#contacto"
                    className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors shadow-sm hover:shadow-blue-500/25"
                >
                  Conectar
                </a>
              </div>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-3 md:hidden">
              <ThemeToggle />
              <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors"
                  aria-label="Menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
              <div className="md:hidden border-t border-slate-200 dark:border-slate-800 py-4 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl animate-fade-up">
                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                      <a
                          key={link.href}
                          href={link.href}
                          className="px-4 py-2 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900 font-medium transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </a>
                  ))}
                  <a
                      href="/CV_Abraham_Gomez_Barcia.pdf"
                      target="_blank"
                      className="px-4 py-2 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900 font-medium transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                  >
                    Currículum
                  </a>
                  <div className="px-4 pt-2">
                    <a
                        href="#contacto"
                        className="block w-full py-2.5 bg-blue-600 text-white text-center rounded-lg font-medium hover:bg-blue-700 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    >
                      Conectar conmigo
                    </a>
                  </div>
                </div>
              </div>
          )}
        </nav>
      </header>
  );
}