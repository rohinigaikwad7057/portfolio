// ============================================================
// Portfolio Data Models — strict TypeScript interfaces
// ============================================================

export interface NavLink {
  label: string;
  href: string;
  sectionId: string;
}

export interface TechSkill {
  name: string;
  icon: string;       // devicon class e.g. "devicon-angular-plain"
  category: SkillCategory;
}

export type SkillCategory = 'frontend' | 'backend' | 'tools' | 'concepts';

export interface Experience {
  id: string;
  period: string;
  location: string;
  title: string;
  company: string;
  type: 'full-time' | 'contract' | 'freelance';
  highlights: string[];
}

export interface Education {
  id: string;
  year: string;
  degree: string;
  institute: string;
  grade: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  tech: string[];
  githubUrl: string;
  liveUrl: string;
  featured?: boolean;
  status: 'live' | 'in-progress' | 'archived';
}

export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  href?: string;
}

export interface ChatMessage {
  role: 'user' | 'bot';
  text: string;
  timestamp: Date;
}
