// Types pour le portfolio

export interface Project {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  longDescription?: LocalizedString;
  image?: string;
  demoUrl?: string;
  githubUrl?: string;
  technologies: string[];
  category: "web" | "mobile" | "tools" | "other";
  featured?: boolean;
  codeSnippet?: string;
  year?: number;
}

export interface Experience {
  id: string;
  title: LocalizedString;
  company: LocalizedString;
  location?: LocalizedString;
  startDate: LocalizedString;
  endDate?: LocalizedString | null;
  description: LocalizedString;
  technologies?: string[];
  current?: boolean;
}

export interface LocalizedString {
  en: string;
  fr: string;
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "database" | "tools" | "other";
  level?: "beginner" | "intermediate" | "advanced" | "expert";
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  created_at: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
