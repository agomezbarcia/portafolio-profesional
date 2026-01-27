'use client';

import { SKILLS } from '@/lib/constants';

export default function Skills() {
  return (
      <section id="habilidades" className="py-16 px-4 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">
                  Stack{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
             Tecnológico
          </span>
              </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
              Herramientas que utilizo para construir productos digitales.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS.map((skillGroup, index) => (
                <div
                    key={index}
                    className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-800 transition-colors duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-white dark:bg-slate-800 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm font-bold text-lg border border-slate-100 dark:border-slate-700">
                      {skillGroup.category.charAt(0)}
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                      {skillGroup.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, i) => (
                        <span
                            key={i}
                            className="px-3 py-1.5 text-sm bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md border border-slate-200 dark:border-slate-700 font-medium"
                        >
                    {skill}
                  </span>
                    ))}
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
}