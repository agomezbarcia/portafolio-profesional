// src/components/footer/Footer.tsx

'use client';

import Link from 'next/link';
import { PORTFOLIO_DATA } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Contenido principal */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Sección 1: Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              {PORTFOLIO_DATA.name}
            </h3>
            <p className="text-sm text-slate-400 mb-4">
              Desarrollador web especializado en tecnologías modernas y mejores prácticas de desarrollo.
            </p>
            <p className="text-sm text-slate-400">
              📍 {PORTFOLIO_DATA.location}
            </p>
          </div>

          {/* Sección 2: Links rápidos */}
          <div>
            <h4 className="text-white font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#inicio" className="hover:text-blue-400 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#habilidades" className="hover:text-blue-400 transition-colors">
                  Habilidades
                </a>
              </li>
              <li>
                <a href="#proyectos" className="hover:text-blue-400 transition-colors">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-blue-400 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Sección 3: Redes sociales */}
          <div>
            <h4 className="text-white font-semibold mb-4">Social</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={PORTFOLIO_DATA.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={PORTFOLIO_DATA.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${PORTFOLIO_DATA.email}`}
                  className="hover:text-blue-400 transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>

          {/* Sección 4: CTA */}
          <div>
            <h4 className="text-white font-semibold mb-4">¿Quieres conectar?</h4>
            <p className="text-sm text-slate-400 mb-4">
              Estoy disponible para nuevos proyectos y colaboraciones.
            </p>
            <a
              href={`mailto:${PORTFOLIO_DATA.email}`}
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm"
            >
              Enviar email
            </a>
          </div>
        </div>

        {/* Separador */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">
            © {currentYear} {PORTFOLIO_DATA.name}. Todos los derechos reservados.
          </p>

          {/* Links legales */}
          <div className="flex gap-6 text-sm text-slate-400">
            <a href="#" className="hover:text-blue-400 transition-colors">
              Privacidad
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              Términos
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              Sitemap
            </a>
          </div>

          {/* Built with */}
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <span>Built with</span>
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors font-semibold"
            >
              Next.js
            </a>
            <span>&</span>
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors font-semibold"
            >
              Tailwind
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
