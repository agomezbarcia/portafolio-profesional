'use client';

import Header from '@/components/navigation/Header';
import Footer from '@/components/footer/Footer';
import Image from 'next/image';

export default function AboutPage() {
    return (
        <div className="bg-slate-50 dark:bg-slate-950 min-h-screen flex flex-col">
            <Header />

            <main className="flex-1 flex flex-col md:flex-row">

                {/* Contenido Scrollable */}
                <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-16 lg:p-24 order-2 md:order-1">
                    <div className="max-w-xl mx-auto space-y-10 animate-fade-up">

                        {/* Título */}
                        <div className="space-y-4">
                <span className="text-blue-600 dark:text-blue-400 font-bold tracking-widest uppercase text-sm">
                    Sobre Mí
                </span>
                            <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                                Más allá del <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">código</span>.
                            </h1>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                Soy Abraham, un desarrollador apasionado por la tecnología, pero mi vida no ocurre solo frente a una pantalla. Creo en el equilibrio, la adrenalina y la lealtad.
                            </p>
                        </div>

                        <hr className="border-slate-200 dark:border-slate-800" />

                        {/* Bloques de Info */}
                        <div className="grid gap-8">

                            {/* Motor */}
                            <div className="flex gap-4 group">
                                <div className="shrink-0 w-12 h-12 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Pasión por el Motor & Tuning</h3>
                                    <p className="text-slate-600 dark:text-slate-400">
                                        Coches y motos son mi escape. Me fascina el mundo del <strong>tuning</strong>: modificar, ajustar y mejorar el rendimiento. Es la misma mentalidad de "optimización" que aplico al software, pero con grasa y gasolina.
                                    </p>
                                </div>
                            </div>

                            {/* Animales */}
                            <div className="flex gap-4 group">
                                <div className="shrink-0 w-12 h-12 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9c.83 0 1.5-.67 1.5-1.5S7.83 8 7 8s-1.5.67-1.5 1.5S6.17 11 7 11zm3.5 3c.83 0 1.5-.67 1.5-1.5S11.33 11 10.5 11s-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm3.5-3c.83 0 1.5-.67 1.5-1.5S14.83 8 14 8s-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm3.5 3c.83 0 1.5-.67 1.5-1.5S18.33 11 17.5 11s-1.5.67-1.5 1.5.67 1.5 1.5 1.5z"/></svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Dog Lover & Acogida</h3>
                                    <p className="text-slate-600 dark:text-slate-400">
                                        Los perros son mi debilidad. Fui <strong>casa de acogida</strong>, aprendiendo que la paciencia y el cariño incondicional son las bases de cualquier relación fuerte.
                                    </p>
                                </div>
                            </div>

                            {/* Gym & Friends */}
                            <div className="flex gap-4 group">
                                <div className="shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Equilibrio & Amistad</h3>
                                    <p className="text-slate-600 dark:text-slate-400">
                                        Entrenar en el gimnasio me da disciplina mental; pasar tiempo de calidad con mis amigos me da energía.
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* Quote Yoda */}
                        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-8 rounded-2xl shadow-xl transform hover:-translate-y-1 transition-transform">
                            <blockquote className="text-xl md:text-2xl font-serif italic opacity-90 mb-4">
                                "Hazlo o no lo hagas, pero no lo intentes."
                            </blockquote>
                            <div className="flex items-center gap-3">
                                <div className="h-0.5 w-8 bg-blue-500"></div>
                                <span className="font-bold text-blue-200">Yoda</span>
                            </div>
                        </div>

                    </div>
                </div>

                {/* COLUMNA DERECHA: Imagen Fija */}
                <div className="w-full md:w-1/2 h-[50vh] md:h-auto md:min-h-screen relative order-1 md:order-2 sticky top-0">
                    <Image
                        src="/about.jpg"
                        alt="Abraham Gómez Barcia"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    {/* Gradiente sutil para integración */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent md:bg-gradient-to-r md:from-slate-50 dark:md:from-slate-950 md:via-transparent md:to-transparent" />
                </div>

            </main>

            <Footer />
        </div>
    );
}