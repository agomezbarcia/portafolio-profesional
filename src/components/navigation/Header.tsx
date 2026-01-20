// src/components/navigation/Header.tsx

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
    { href: '#proyectos', label: 'Proyectos' },
    { href: '#contacto', label: 'Contacto' },
  ];

  return (
      <header className="fixed w-full top-0 z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-sm shadow-sm dark:shadow-slate-900/50 border-b border-transparent dark:border-slate-800 transition-colors duration-300">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-110">
                <Image src="/icon.svg" alt="Logo AG" width={40} height={40} className="rounded-xl shadow-sm object-cover" priority/>
              </div>
              <span className="text-xl font-bold text-slate-900 dark:text-white hidden sm:block group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {PORTFOLIO_DATA.name}
            </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                  <Link
                      key={link.href}
                      href={link.href}
                      className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200 relative group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-300" />
                  </Link>
              ))}

              {/* Theme Toggle en Desktop */}
              <div className="pl-4 border-l border-slate-200 dark:border-slate-700">
                <ThemeToggle />
              </div>

              {/* CTA Button */}
              <a
                  href="#contacto"
                  className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
              >
                Conectar
              </a>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-4 md:hidden">
              <ThemeToggle />

              {/* Mobile Menu Button */}
              <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  aria-label="Toggle menu"
              >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={
                        isMenuOpen
                            ? 'M6 18L18 6M6 6l12 12'
                            : 'M4 6h16M4 12h16M4 18h16'
                      }
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
              <div className="md:hidden mt-4 pb-4 border-t border-slate-200 dark:border-slate-800 pt-4 bg-white dark:bg-slate-950">
                <div className="flex flex-col space-y-3">
                  {navLinks.map((link) => (
                      <Link
                          key={link.href}
                          href={link.href}
                          className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-2 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                  ))}
                  <a
                      href="#contacto"
                      className="px-4 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors text-center"
                      onClick={() => setIsMenuOpen(false)}
                  >
                    Conectar
                  </a>
                </div>
              </div>
          )}
        </nav>
      </header>
  );
}