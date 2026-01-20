export default function Loading() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 transition-colors duration-300">

            {/* Contenedor del Spinner */}
            <div className="relative w-20 h-20 mb-8">
                {/* Anillo exterior estático */}
                <div className="absolute inset-0 border-4 border-slate-200 dark:border-slate-800 rounded-full opacity-50"></div>

                {/* Anillo interior giratorio con gradiente */}
                <div className="absolute inset-0 border-4 border-transparent border-t-blue-600 border-r-purple-600 dark:border-t-blue-500 dark:border-r-purple-500 rounded-full animate-spin"></div>

                {/* Logo o punto central pulsante */}
                <div className="absolute inset-0 m-auto w-3 h-3 bg-slate-900 dark:bg-white rounded-full animate-pulse"></div>
            </div>

            {/* Texto con animación suave */}
            <div className="space-y-2 text-center">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white animate-pulse">
                    Cargando...
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                    Preparando tu experiencia
                </p>
            </div>
        </div>
    );
}