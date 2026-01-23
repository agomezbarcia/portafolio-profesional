import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Política de Privacidad',
    description: 'Cómo gestiono y protejo tus datos personales.',
};

// --- DATOS ---
interface Provider {
    name: string;
    description: string;
    colSpanFull?: boolean;
}

const PROVIDERS: Provider[] = [
    {
        name: 'Vercel Inc.',
        description: 'Proveedor de Hosting y Analíticas. Sus servidores pueden estar ubicados en EE.UU., bajo el marco de privacidad Data Privacy Framework.',
        colSpanFull: false,
    },
    {
        name: 'Resend',
        description: 'Plataforma de envío de emails transaccionales. Garantiza que tu mensaje llegue a mi bandeja de entrada de forma segura.',
        colSpanFull: false,
    },
    {
        name: 'Cloudflare (Turnstile)',
        description: 'Sistema de seguridad anti-spam. Verifica que no eres un robot sin necesidad de ponerte a resolver puzzles molestos. No utiliza tus datos para publicidad.',
        colSpanFull: true,
    },
];

export default function PrivacidadPage() {
    return (
        <article className="prose prose-slate prose-lg prose-blue dark:prose-invert max-w-none">

            {/* Cabecera */}
            <span className="text-blue-600 font-bold tracking-wider text-xs uppercase mb-2 block not-prose">
                Protección de Datos
            </span>
            <h1 className="mb-8">Política de Privacidad</h1>
            <p className="lead text-xl text-slate-500 dark:text-slate-400">
                La privacidad es sagrada. Aquí explico de forma transparente qué ocurre cuando rellenas mi formulario de contacto y qué herramientas utilizo.
            </p>

            <hr className="my-12 border-slate-200 dark:border-slate-800" />

            {/* SECCIÓN 1 */}
            <h3>1. Responsable del Tratamiento</h3>
            <p>
                Tus datos serán tratados por <strong>Abraham Gómez Barcia</strong> (en adelante, &quot;el Responsable&quot;).
            </p>

            {/* Tarjeta de Datos - Usamos 'not-prose' para mantener el diseño custom */}
            <div className="not-prose bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 my-6">
                <ul className="space-y-2 text-sm m-0 list-none pl-0">
                    <li className="flex gap-2">
                        <span className="font-semibold text-slate-900 dark:text-white min-w-[80px]">Domicilio:</span>
                        <span className="text-slate-600 dark:text-slate-300">Sevilla, España</span>
                    </li>
                    <li className="flex gap-2">
                        <span className="font-semibold text-slate-900 dark:text-white min-w-[80px]">Email:</span>
                        <a href="mailto:agomezbarcia@gmail.com" className="text-blue-600 hover:underline">agomezbarcia@gmail.com</a>
                    </li>
                </ul>
            </div>

            {/* SECCIÓN 2 */}
            <h3>2. Finalidad y Legitimación</h3>
            <p>
                La finalidad principal para la que recojo tus datos (nombre y email) a través del formulario es <strong>responder a tu consulta o propuesta profesional</strong>.
            </p>
            <ul>
                <li>
                    <strong>Consentimiento:</strong> Para el envío del formulario, la base legal es tu consentimiento explícito (marcando la casilla).
                </li>
                <li>
                    <strong>Interés Legítimo:</strong> Para la seguridad de la web (Cloudflare Turnstile), la base legal es el interés legítimo del responsable en proteger el sitio contra ataques y spam automatizado.
                </li>
                <li>
                    <strong>Conservación:</strong> Los datos se conservarán durante el tiempo necesario para cumplir con la finalidad para la que se recabaron.
                </li>
            </ul>

            {/* SECCIÓN 3 */}
            <h3>3. Proveedores de Servicios (Terceros)</h3>
            <p>
                Para ofrecerte un servicio seguro y eficiente, utilizo las siguientes plataformas tecnológicas. Todas ellas cumplen con altos estándares de seguridad:
            </p>

            {/* Grid de Proveedores - 'not-prose' para evitar estilos raros en el grid */}
            <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                {PROVIDERS.map((provider, index) => (
                    <div
                        key={index}
                        className={`p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/40 transition-shadow hover:shadow-md ${
                            provider.colSpanFull ? 'md:col-span-2' : ''
                        }`}
                    >
                        <h4 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2 text-base">
                            {provider.name}
                        </h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                            {provider.description}
                        </p>
                    </div>
                ))}
            </div>

            {/* SECCIÓN 4 */}
            <h3>4. Tus Derechos</h3>
            <p>
                Como usuario, tienes derecho a solicitar el acceso, rectificación, supresión, limitación del tratamiento y portabilidad de tus datos, así como a retirar el consentimiento en cualquier momento.
            </p>

            <div className="not-prose bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-100 dark:border-blue-800 text-sm flex items-center gap-4">
                <div className="bg-blue-100 dark:bg-blue-800 p-2 rounded-full text-blue-600 dark:text-blue-200">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </div>
                <div>
                    <span className="block font-semibold text-blue-900 dark:text-blue-100 mb-0.5">¿Quieres ejercer tus derechos?</span>
                    <span className="text-blue-700 dark:text-blue-300">
                        Escríbeme a: <a href="mailto:agomezbarcia@gmail.com" className="underline hover:text-blue-600 font-medium">agomezbarcia@gmail.com</a>
                    </span>
                </div>
            </div>

        </article>
    );
}