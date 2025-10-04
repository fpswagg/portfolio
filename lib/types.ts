// Types pour le portfolio

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
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
  title: string;
  company: string;
  location?: string;
  startDate: string;
  endDate?: string;
  description: string;
  technologies?: string[];
  current?: boolean;
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
