export default function Loading() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 space-y-4">
            {/* Círculo animado */}
            <div className="relative w-16 h-16">
                <div className="absolute top-0 left-0 w-full h-full border-4 border-slate-200 rounded-full"></div>
                <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-600 rounded-full animate-spin border-t-transparent"></div>
            </div>

            {/* Texto con animación de pulso */}
            <p className="text-slate-500 font-medium animate-pulse">
                Cargando portfolio...
            </p>
        </div>
    );
}