// src/components/experience/Experience.tsx
import {EXPERIENCE} from '@/lib/constants';

export default function Experience() {
    // Invertimos el array para mostrar primero lo más reciente
    const experienceList = [...EXPERIENCE].reverse();

    return (
        <section id="experiencia" className="py-24 px-4 bg-slate-50 overflow-hidden">
            <div className="max-w-5xl mx-auto">
                {/* Título con degradado */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                        Trayectoria{' '}
                        <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Profesional
                        </span>
                    </h2>
                    <div className="h-1 w-20 bg-linear-to-r from-blue-600 to-purple-600 mx-auto rounded-full"/>
                </div>

                <div className="relative">
                    {/* Línea central con degradado continuo */}
                    <div
                        className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-500 via-purple-500 to-pink-500 transform md:-translate-x-1/2 opacity-30"/>

                    <div className="space-y-12">
                        {experienceList.map((job, index) => (
                            <div key={job.id} className={`relative flex items-center md:justify-between group ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                                {/* PUNTO CENTRAL (Timeline Dot) */}
                                <div
                                    className="absolute left-6 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                                    {/* Halo brillante animado */}
                                    <div className="w-8 h-8 rounded-full bg-blue-100/50 backdrop-blur-sm border border-blue-200 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(37,99,235,0.3)] group-hover:scale-110 transition-transform duration-300">
                                        <div className="w-3 h-3 rounded-full bg-linear-to-r from-blue-600 to-purple-600 group-hover:animate-pulse"/>
                                    </div>
                                </div>

                                {/* ESPACIO VACÍO (Para equilibrar el grid en desktop) */}
                                <div className="hidden md:block w-5/12"/>

                                {/* TARJETA DE CONTENIDO */}
                                <div className="ml-16 md:ml-0 w-full md:w-5/12">
                                    <div className="relative p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 group-hover:-translate-y-1 overflow-hidden">

                                        {/* Borde superior decorativo */}
                                        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-blue-500 to-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"/>

                                        {/* Cabecera: Puesto y Fecha */}
                                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                                            <div>
                                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                                    {job.position}
                                                </h3>
                                                <p className="text-sm font-semibold text-slate-500">
                                                    {job.company}
                                                </p>
                                            </div>
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100 whitespace-nowrap">
                                                {job.period}
                                            </span>
                                        </div>

                                        {/* Descripción */}
                                        <ul className="space-y-2 mb-6">
                                            {job.description.map((item, i) => (
                                                <li key={i} className="flex items-start text-slate-600 text-sm leading-relaxed">
                                                    <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-purple-400 rounded-full shrink-0"/>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Tags de Tecnologías */}
                                        <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-50">
                                            {job.technologies.map((tech) => (
                                                <span key={tech} className="px-2.5 py-1 text-xs font-medium text-slate-600 bg-slate-50 border border-slate-200 rounded-md hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 transition-colors cursor-default">
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