import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Aviso Legal',
    description: 'Información legal del titular del sitio web.',
};

export default function AvisoLegalPage() {
    return (
        <article className="prose prose-slate prose-blue max-w-none dark:prose-invert">
            <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase">Información Corporativa</span>
            <h1 className="mt-2 mb-8">Aviso Legal</h1>

            <p className="lead">
                En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI), a continuación se reflejan los siguientes datos:
            </p>

            <h3>1. Datos Identificativos</h3>
            <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 not-prose grid gap-4 text-sm my-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <span className="font-semibold text-slate-900 dark:text-white">Titular:</span>
                    <span className="sm:col-span-2 text-slate-600 dark:text-slate-300">Abraham Gómez Barcia</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <span className="font-semibold text-slate-900 dark:text-white">Domicilio:</span>
                    <span className="sm:col-span-2 text-slate-600 dark:text-slate-300">Sevilla, España</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <span className="font-semibold text-slate-900 dark:text-white">Contacto:</span>
                    <a href="mailto:agomezbarcia@gmail.com" className="sm:col-span-2 text-blue-600 hover:underline">agomezbarcia@gmail.com</a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <span className="font-semibold text-slate-900 dark:text-white">Actividad:</span>
                    <span className="sm:col-span-2 text-slate-600 dark:text-slate-300">Desarrollo Web y Servicios Profesionales</span>
                </div>
            </div>

            <h3>2. Usuarios</h3>
            <p>
                El acceso y/o uso de este portal atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas. Las citadas Condiciones serán de aplicación independientemente de las Condiciones Generales de Contratación que en su caso resulten de obligado cumplimiento.
            </p>

            <h3>3. Uso del portal</h3>
            <p>
                Este sitio web proporciona el acceso a multitud de informaciones, servicios, programas o datos (en adelante, &quot;los contenidos&quot;) en Internet pertenecientes a Abraham Gómez Barcia. El USUARIO asume la responsabilidad del uso del portal. Dicha responsabilidad se extiende al registro que fuese necesario para acceder a determinados servicios o contenidos.
            </p>

            <h3>4. Propiedad Intelectual e Industrial</h3>
            <p>
                Abraham Gómez Barcia por sí o como cesionario, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo, imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, selección de materiales usados, programas de ordenador necesarios para su funcionamiento, acceso y uso, etc.).
            </p>
            <p>
                <strong>Todos los derechos reservados.</strong> Quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización de Abraham Gómez Barcia.
            </p>
        </article>
    );
}