// src/lib/constants.ts

export const PORTFOLIO_DATA = {
    name: 'Abraham Gómez Barcia',
    tagline: 'Full Stack Developer',
    bio: 'Apasionado por crear experiencias web modernas, rápidas y accesibles. Especializado en React, Next.js y diseño responsivo.',
    location: 'Sevilla, España',
    email: 'agomezbarcia@gmail.com',
    social: {
        github: 'https://github.com/agomezbarcia',
        linkedin: 'https://linkedin.com/in/agomezbarcia'
    },
};

// src/lib/constants.ts (o donde tengas tus datos)

export const SKILLS = [
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

export const PROJECTS = [
    {
        id: 1,
        title: 'Portfolio Website',
        description: 'Mi portafolio personal - sitio rápido, moderno y accesible.',
        technologies: ['Next.js 16.1', 'React 19', 'TypeScript 5', 'Tailwind CSS 4', 'Vercel', 'Git/GitHub'],
        link: 'https://github.com/agomezbarcia/portafolio-profesional',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    }
];