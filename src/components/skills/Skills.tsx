// src/components/skills/Skills.tsx

'use client';

import { SKILLS } from '@/lib/constants';

export default function Skills() {
  return (
    <section id="habilidades" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Mis Habilidades
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Tecnologías y herramientas que domino para crear soluciones web modernas
            y escalables.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILLS.map((skillGroup, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 hover:border-blue-300 group"
            >
              {/* Icono de categoría */}
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">
                  {skillGroup.category[0]}
                </span>
              </div>

              {/* Título de categoría */}
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                {skillGroup.category}
              </h3>

              {/* Lista de skills */}
              <div className="space-y-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center space-x-3 group/item"
                  >
                    {/* Icono check */}
                    <div className="w-5 h-5 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-blue-600 group-hover/item:scale-125 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>

                    {/* Nombre del skill */}
                    <span className="text-slate-700 font-medium group-hover/item:text-blue-600 transition-colors duration-300">
                      {skill}
                    </span>

                    {/* Barra de progreso visual */}
                    <div className="flex-1 h-1 bg-slate-200 rounded-full overflow-hidden ml-2">
                      <div
                        className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transform origin-left scale-x-0 group-hover/item:scale-x-100 transition-transform duration-500"
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Borde inferior decorativo */}
              <div className="mt-6 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
