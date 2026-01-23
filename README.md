# Portafolio Profesional - Abraham Gómez Barcia

![Next.js 16](https://img.shields.io/badge/Next.js-16.1-black?style=for-the-badge&logo=next.js)
![React 19](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![Tailwind CSS 4](https://img.shields.io/badge/Tailwind_4-38B2AC?style=for-the-badge&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)

> **Desarrollo Web Full Stack de Alto Rendimiento.**
> Este repositorio contiene el código fuente de mi portafolio personal, diseñado con las últimas tecnologías del ecosistema React para garantizar velocidad, accesibilidad y cumplimiento legal estricto.

---

## 🚀 Características Principales

Este no es solo un sitio estático; es una aplicación web moderna que implementa prácticas avanzadas de desarrollo:

* **⚡ Next.js 16 & React 19:** Uso de *Server Components*, *Server Actions* y las últimas optimizaciones del compilador.
* **🎨 Tailwind CSS v4:** Estilizado con la nueva generación del motor de Tailwind (Oxide engine), sin configuración compleja.
* **🔄 View Transitions API:** Navegación suave y animada entre páginas utilizando APIs nativas del navegador.
* **🔒 Seguridad y Anti-Spam:** Integración de **Cloudflare Turnstile** para validar formularios sin CAPTCHAs intrusivos, respetando la privacidad.
* **📧 Server Actions + Resend:** Envío de correos electrónicos directamente desde el servidor sin exponer APIs públicas.
* **🛡️ GDPR & Privacidad:** Sistema de gestión de consentimiento (*PrivacyProvider*) que bloquea cookies analíticas (GTM) hasta obtener aprobación explícita.
* **🌙 Modo Oscuro:** Tema dinámico con persistencia y detección de preferencias del sistema.

---

## 🛠️ Stack Tecnológico

| Categoría | Tecnología | Uso |
| :--- | :--- | :--- |
| **Framework** | [Next.js 16.1](https://nextjs.org/) | App Router, Server Actions |
| **UI Library** | [React 19](https://react.dev/) | Componentes, Hooks |
| **Estilos** | [Tailwind CSS 4](https://tailwindcss.com/) | Diseño responsivo y animaciones |
| **Lenguaje** | [TypeScript 5](https://www.typescriptlang.org/) | Tipado estático estricto |
| **Validación** | [Zod](https://zod.dev/) | Validación de esquemas en servidor/cliente |
| **Email** | [Resend](https://resend.com/) | Infraestructura de emails transaccionales |
| **Seguridad** | [Cloudflare Turnstile](https://www.cloudflare.com/) | Protección anti-bot privada |
| **Analítica** | [Vercel Analytics](https://vercel.com/analytics) | Métricas de rendimiento y audiencia |

---

## 🏁 Instalación y Uso

Si deseas ejecutar este proyecto en local para fines educativos o de evaluación técnica:

### 1. Clonar el repositorio

```bash
git clone [https://github.com/agomezbarcia/portafolio-profesional.git](https://github.com/agomezbarcia/portafolio-profesional.git)
cd portafolio-profesional
```

### 2. Instalar dependencias

```bash
npm install
# o
pnpm install
# o
yarn install
```

### 3. Configurar Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto y añade las siguientes claves (necesitarás tus propias credenciales):

```env
# Email (Resend)
RESEND_API_KEY=re_123456789...

# Seguridad (Cloudflare Turnstile)
NEXT_PUBLIC_TURNSTILE_SITE_KEY=0x4AAAAAA...
TURNSTILE_SECRET_KEY=0x4AAAAAA...

# Analítica (Google Tag Manager - Opcional)
NEXT_PUBLIC_GTM_ID=GTM-XXXXXX
```

### 4. Ejecutar el servidor de desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

---

## 📂 Estructura del Proyecto

```text
src/
├── actions/        # Server Actions (Lógica de servidor segura)
├── app/            # Next.js App Router (Rutas y Páginas)
│   ├── legal/      # Páginas de cumplimiento (Privacidad, Cookies)
│   └── ...
├── components/     # Componentes React reutilizables
│   ├── analytics/  # Wrappers para GTM y Vercel Insights
│   └── ...
├── lib/            # Constantes y utilidades
├── providers/      # Contextos (Theme, Privacy)
└── types/          # Definiciones de TypeScript
```

---

## ⚖️ Licencia y Derechos de Autor

**© 2026 Abraham Gómez Barcia. Todos los derechos reservados.**

Este proyecto es propiedad intelectual de Abraham Gómez Barcia.

* ✅ **Permitido:** Puedes ver, bifurcar (fork) y descargar el código con fines educativos o para evaluar mis habilidades técnicas.
* ❌ **Prohibido:** No está permitido copiar, distribuir, modificar o utilizar este código (o partes sustanciales del mismo) para fines comerciales o en tus propios proyectos públicos sin autorización expresa.

Para más detalles, consulta el archivo `LICENSE` incluido en este repositorio.

---

<div style="text-align: center;">
  Hecho con ❤️ en Sevilla, España.
</div>