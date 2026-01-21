// src/components/education/Education.tsx

'use client';

import { EDUCATION } from '@/lib/constants';

export default function Education() {
    const educationList = [...EDUCATION].reverse();

    return (
        <section id="educacion" className="py-16 px-4 relative overflow-hidden">

            <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDuration: '8s' }}/>
            <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDuration: '10s' }}/>

            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16 animate-fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                        Formación{' '}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Académica
            </span>
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
                        Cimientos sólidos y especialización continua que impulsan mi desarrollo como profesional Full Stack.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {educationList.map((edu, index) => (
                        <div
                            key={edu.id}
                            className={`group relative p-[1px] rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-purple-900/20 animate-fade-up`}
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative h-full p-8 bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl rounded-2xl overflow-hidden border border-slate-200/50 dark:border-slate-800/50 group-hover:border-transparent transition-colors">

                                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent opacity-70"></div>

                                <div className="flex flex-col h-full justify-between relative z-10">
                                    <div>
                                        <div className="flex justify-between items-center mb-6">
                                <span className="px-4 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-sm shadow-blue-500/20">
                                    {edu.period}
                                </span>
                                            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                                {edu.status}
                                </span>
                                        </div>

                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 leading-snug group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                                            {edu.title}
                                        </h3>

                                        <div className="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-400 mb-8">
                                            <div className="p-2 bg-blue-50 dark:bg-slate-800/80 rounded-lg text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-slate-700">
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
                                            </div>
                                            {edu.center}
                                        </div>
                                    </div>

                                    <div className="pt-6 border-t border-slate-100 dark:border-slate-800/50">
                                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                            {edu.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}