// src/types/project.ts

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  demoLink?: string;
  image: string;
}

export interface Skill {
  category: string;
  items: string[];
}

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
