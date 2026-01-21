// src/types/index.ts

export interface SocialLinks {
    github: string;
    linkedin: string;
}

export interface PortfolioData {
    name: string;
    tagline: string;
    bio: string;
    location: string;
    email: string;
    social: SocialLinks;
}

export interface SkillCategory {
    category: string;
    items: string[];
}

export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    link: string;
    image: string;
}

export interface ExperienceItem {
    id: number;
    company: string;
    position: string;
    period: string;
    description: string[];
    technologies: string[];
}

export interface EducationItem {
    id: number;
    title: string;
    center: string;
    period: string;
    status: string;
    description: string;
}