// src/lib/constants.ts

import {
    PortfolioData,
    SkillCategory,
    Project,
    ExperienceItem,
    EducationItem
} from '@/types';

export const PORTFOLIO_DATA: PortfolioData = {
    name: 'Abraham Gómez Barcia',
    tagline: 'Full Stack Developer',
    bio: 'Apasionado por crear experiencias web modernas, rápidas y accesibles. Especializado en Full Stack.',
    location: 'Sevilla, España',
    email: 'agomezbarcia@gmail.com',
    social: {
        github: 'https://github.com/agomezbarcia',
        linkedin: 'https://linkedin.com/in/agomezbarcia'
    },
};

export const SKILLS: SkillCategory[] = [
    {
        category: 'Frontend',
        items: ['HTML5', 'CSS3 / Bootstrap', 'JavaScript', 'TypeScript', 'Vue', 'Angular / Ionic', 'React', 'Next.js', 'Tailwind CSS'],
    },
    {
        category: 'Backend',
        items: ['Python', 'Java / Spring', 'Node.js',  'Microservicios web', 'MySQL', 'OracleDB', 'MongoDB', 'PostgresSQL'],
    },
    {
        category: 'Tools & Others',
        items: ['Git', 'Docker', 'Postman', 'VS Code'],
    },
    {
        category: 'Mobile & Game Dev',
        items: ['Kotlin / Android Studio', 'Unity'],
    }
];

export const PROJECTS: Project[] = [
    {
        id: 1,
        title: 'Portfolio Profesional',
        description: 'Portafolio personal de alto rendimiento. Cuenta con modo oscuro animado mediante View Transitions, validación de seguridad con Cloudflare Turnstile y gestión de formularios vía Server Actions.',
        technologies: [
            'Next.js 16.1',
            'React 19',
            'TypeScript 5',
            'Tailwind CSS 4',
            'Server Actions',
            'Cloudflare Turnstile',
            'View Transitions API',
            'Vercel',
            'Git/GitHub'
        ],
        link: 'https://github.com/agomezbarcia/portafolio-profesional',
        image: "/website.png",
    }
];

export const EXPERIENCE: ExperienceItem[] = [
    {
        id: 1,
        company: 'Moodel SRL',
        position: 'Técnico en SMR (Prácticas FCT)',
        period: 'Marzo 2022 - Junio 2022',
        description: [
            'Instalación, configuración y mantenimiento de software específico en servidores.',
            'Diagnóstico y reparación de hardware en equipos informáticos.',
            'Montaje y configuración de estaciones de trabajo y periféricos.',
        ],
        technologies: ['Hardware', 'Windows Server', 'Redes', 'Soporte Técnico'],
    },
    {
        id: 2,
        company: 'Guadaltel, S.L.',
        position: 'Desarrollador Web (Prácticas FCT)',
        period: 'Marzo 2024 - Junio 2024',
        description: [
            'Desarrollo de aplicaciones web empresariales utilizando Java y JSF (JavaServer Faces).',
            'Mantenimiento correctivo y optimización de consultas en bases de datos MySQL.',
            'Análisis de calidad de código y deuda técnica mediante SonarQube.',
            'Soporte técnico y resolución de incidencias reportadas por los usuarios.',
        ],
        technologies: ['Java', 'JSF', 'MySQL', 'SonarQube', 'Git'],
    },
    {
        id: 3,
        company: 'AICIA',
        position: 'Desarrollador Web',
        period: 'Marzo 2025 - Actualidad',
        description: [
            'Desarrollo y mantenimiento de proyectos web full-stack utilizando Node.js y Vue.js.',
            'Diseño e integración de bases de datos no relacionales con MongoDB.',
            'Implementación de despliegues y entornos contenerizados mediante Docker y Kubernetes.',
            'Personalización avanzada de temas y desarrollo de plugins para WordPress.',
        ],
        technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Docker', 'Kubernetes', 'WordPress'],
    },
];

export const EDUCATION: EducationItem[] = [
    {
        id: 1,
        title: 'Sistemas Microinformáticos y Redes',
        center: 'I.E.S. San Jerónimo',
        period: '2019 - 2022',
        status: 'Titulado',
        description: 'Fundamentos sólidos en hardware, administración de sistemas y redes corporativas.'
    },
    {
        id: 2,
        title: 'Desarrollo de Aplicaciones Web',
        center: 'I.E.S. Julio Verne',
        period: '2022 - 2024',
        status: 'Titulado',
        description: 'Formación Full Stack especializada en arquitecturas web, bases de datos y despliegue.'
    },
    {
        id: 3,
        title: 'Desarrollo de Aplicaciones Multiplataforma',
        center: 'I.E.S. Julio Verne',
        period: '2024 - 2025',
        status: 'Titulado',
        description: 'Especialización en desarrollo móvil y soluciones multiplataforma modernas.'
    },
];