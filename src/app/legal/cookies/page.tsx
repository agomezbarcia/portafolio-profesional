import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Política de Cookies',
    description: 'Información sobre las cookies utilizadas en este sitio web.',
};

type CookieType = 'Necesaria' | 'Analítica' | 'Funcional';

interface CookieData {
    name: string;
    provider: string;
    duration: string;
    type: CookieType;
    description: string;
}

// Extraemos los datos a una constante
const COOKIES: CookieData[] = [
    {
        name: 'cf_clearance / cf_turnstile',
        provider: 'Cloudflare',
        duration: 'Sesión / 1 año',
        type: 'Necesaria',
        description: 'Seguridad y validación anti-bot.',
    },
    {
        name: 'cookie-consent',
        provider: 'Propia',
        duration: 'Indefinida',
        type: 'Funcional',
        description: 'Recuerda que has aceptado las cookies.',
    },
    {
        name: 'va_id',
        provider: 'Vercel Analytics',
        duration: 'Persistente',
        type: 'Analítica',
        description: 'Medición anónima de rendimiento web.',
    },
    {
        name: '_vercel_speed_insights',
        provider: 'Vercel',
        duration: 'Persistente',
        type: 'Analítica',
        description: 'Medición de rendimiento de carga (Speed Insights).',
    },
    {
        name: '_ga / _gid',
        provider: 'Google',
        duration: '2 años / 24h',
        type: 'Analítica',
        description: 'Medición de visitas a través de Google Tag Manager.',
    },
];

// Helper para los colores de las etiquetas
const getTypeStyles = (type: CookieType) => {
    switch (type) {
        case 'Necesaria':
            return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
        case 'Analítica':
            return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
        case 'Funcional':
            return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
        default:
            return 'bg-slate-100 text-slate-800';
    }
};

export default function CookiesPage() {
    return (
        <article className="prose prose-slate prose-blue max-w-none dark:prose-invert">
      <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase">
        Tecnología
      </span>
            <h1 className="mt-2 mb-8">Política de Cookies</h1>

            <p>
                Este sitio web utiliza cookies propias y de terceros para asegurar su correcto funcionamiento,
                mejorar la seguridad y obtener estadísticas de uso anónimas.
            </p>

            {/* Nota Informativa */}
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 rounded-lg text-sm not-prose mb-8 border border-blue-100 dark:border-blue-800">
                <strong>Nota:</strong> No utilizo cookies publicitarias ni de rastreo invasivo. Tu navegación es privada.
            </div>

            <h3>¿Qué cookies utilizamos?</h3>

            {/* Tabla Dinámica */}
            <div className="not-prose my-8 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white">
                    <tr>
                        <th className="p-4 font-semibold">Nombre</th>
                        <th className="p-4 font-semibold">Proveedor</th>
                        <th className="p-4 font-semibold">Duración</th>
                        <th className="p-4 font-semibold">Finalidad</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-900">
                    {COOKIES.map((cookie, index) => (
                        <tr key={index} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                            <td className="p-4 font-mono text-xs font-medium text-slate-700 dark:text-slate-300">
                                {cookie.name}
                            </td>
                            <td className="p-4 text-slate-600 dark:text-slate-400">
                                {cookie.provider}
                            </td>
                            <td className="p-4 text-slate-600 dark:text-slate-400">
                                {cookie.duration}
                            </td>
                            <td className="p-4 text-slate-600 dark:text-slate-400">
                  <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mb-1 ${getTypeStyles(
                          cookie.type
                      )}`}
                  >
                    {cookie.type}
                  </span>
                                <div className="text-xs leading-relaxed opacity-90">
                                    {cookie.description}
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            <h3>¿Cómo desactivarlas?</h3>
            <p>
                Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración
                de las opciones del navegador instalado en tu ordenador (Chrome, Safari, Firefox, Edge).
                Ten en cuenta que desactivar las cookies técnicas podría afectar al funcionamiento del
                formulario de contacto.
            </p>
        </article>
    );
}