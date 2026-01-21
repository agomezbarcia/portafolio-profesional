'use client';

import { EXPERIENCE } from '@/lib/constants';

export default function Experience() {
    const experienceList = [...EXPERIENCE].reverse();

    return (
        <section id="experiencia" className="py-16 px-4 bg-slate-50 dark:bg-slate-950">
            <div className="max-w-4xl mx-auto">
                {/* TÍTULO CON DEGRADADO RECUPERADO */}
                <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">
                    Trayectoria{' '}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
             Profesional
          </span>
                </h2>

                <div className="relative space-y-8 pl-8 md:pl-0">
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 transform -translate-x-1/2" />
                    <div className="md:hidden absolute left-0 top-2 bottom-2 w-px bg-slate-200 dark:bg-slate-800" />

                    {experienceList.map((job, index) => (
                        <div key={job.id} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                            <div className="absolute -left-[37px] md:left-1/2 top-6 w-5 h-5 rounded-full border-4 border-slate-50 dark:border-slate-950 bg-blue-600 transform md:-translate-x-1/2 z-10" />
                            <div className="hidden md:block w-1/2" />

                            <div className="w-full md:w-1/2">
                                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-3">
                                        <div>
                                            <h3 className="font-bold text-lg text-slate-900 dark:text-white leading-tight">
                                                {job.position}
                                            </h3>
                                            <p className="text-blue-600 dark:text-blue-400 font-medium text-sm">
                                                {job.company}
                                            </p>
                                        </div>
                                        <span className="text-xs font-mono py-1 px-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded">
                      {job.period}
                    </span>
                                    </div>

                                    <ul className="space-y-2 mb-4">
                                        {job.description.map((item, i) => (
                                            <li key={i} className="text-sm text-slate-600 dark:text-slate-400 flex items-start">
                                                <span className="mr-2 mt-1.5 w-1 h-1 bg-slate-400 rounded-full flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2">
                                        {job.technologies.slice(0, 5).map((tech) => (
                                            <span key={tech} className="text-xs px-2 py-1 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded border border-slate-100 dark:border-slate-700">
                        {tech}
                      </span>
                                        ))}
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