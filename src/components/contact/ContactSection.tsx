// src/components/contact/ContactSection.tsx

'use client';

import ContactForm from '@/components/contact/ContactForm';
import {PORTFOLIO_DATA} from "@/lib/constants";

export default function ContactSection() {
    return (
        <section id="contacto" className="py-16 px-4 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">

                    {/* Left Column: Info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                                Hablemos
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                Estoy disponible para nuevos proyectos y colaboraciones. Si buscas un desarrollador comprometido con la calidad, contáctame.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <a href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`} className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all group">
                                <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email</p>
                                    <p className="text-slate-900 dark:text-white font-medium">{process.env.NEXT_PUBLIC_CONTACT_EMAIL}</p>
                                </div>
                            </a>

                            <a href={PORTFOLIO_DATA.social.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all group">
                                <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">LinkedIn</p>
                                    <p className="text-slate-900 dark:text-white font-medium">Conectar</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
}