// src/components/experience/Experience.tsx
import {EXPERIENCE} from '@/lib/constants';

export default function Experience() {
    // Invertimos el array para mostrar primero lo más reciente
    const experienceList = [...EXPERIENCE].reverse();

    return (
        <section id="experiencia" className="py-24 px-4 bg-slate-50 dark:bg-slate-950 overflow-hidden transition-colors duration-300">
            <div className="max-w-5xl mx-auto">
                {/* Título con degradado */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
                        Trayectoria{' '}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Profesional
                        </span>
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"/>
                </div>

                <div className="relative">
                    {/* Línea central con degradado continuo */}
                    <div
                        className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform md:-translate-x-1/2 opacity-30"/>

                    <div className="space-y-12">
                        {experienceList.map((job, index) => (
                            <div key={job.id} className={`relative flex items-center md:justify-between group ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                                {/* PUNTO CENTRAL (Timeline Dot) */}
                                <div
                                    className="absolute left-6 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                                    {/* Halo brillante animado */}
                                    <div className="w-8 h-8 rounded-full bg-blue-100/50 dark:bg-blue-900/50 backdrop-blur-sm border border-blue-200 dark:border-blue-700 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(37,99,235,0.3)] group-hover:scale-110 transition-transform duration-300">
                                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 group-hover:animate-pulse"/>
                                    </div>
                                </div>

                                {/* ESPACIO VACÍO (Para equilibrar el grid en desktop) */}
                                <div className="hidden md:block w-5/12"/>

                                {/* TARJETA DE CONTENIDO */}
                                <div className="ml-16 md:ml-0 w-full md:w-5/12">
                                    <div className="relative p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-900/20 transition-all duration-300 group-hover:-translate-y-1 overflow-hidden">

                                        {/* Borde superior decorativo */}
                                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"/>

                                        {/* Cabecera: Puesto y Fecha */}
                                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                                            <div>
                                                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                    {job.position}
                                                </h3>
                                                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                                                    {job.company}
                                                </p>
                                            </div>
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800 whitespace-nowrap">
                                                {job.period}
                                            </span>
                                        </div>

                                        {/* Descripción */}
                                        <ul className="space-y-2 mb-6">
                                            {job.description.map((item, i) => (
                                                <li key={i} className="flex items-start text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                                    <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-purple-400 rounded-full shrink-0"/>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Tags de Tecnologías */}
                                        <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-50 dark:border-slate-800">
                                            {job.technologies.map((tech) => (
                                                <span key={tech} className="px-2.5 py-1 text-xs font-medium text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md hover:border-blue-300 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors cursor-default">
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
            </div>
        </section>
    );
}