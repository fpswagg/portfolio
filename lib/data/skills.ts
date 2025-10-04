import type { Skill } from "@/lib/types";

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "frontend", level: "expert" },
  { name: "Next.js", category: "frontend", level: "expert" },
  { name: "TypeScript", category: "frontend", level: "advanced" },
  { name: "JavaScript", category: "frontend", level: "expert" },
  { name: "Tailwind CSS", category: "frontend", level: "advanced" },
  { name: "HTML5", category: "frontend", level: "expert" },
  { name: "CSS3", category: "frontend", level: "advanced" },
  { name: "Framer Motion", category: "frontend", level: "intermediate" },
  { name: "JavaFX", category: "frontend", level: "intermediate" },
  { name: "Swing", category: "frontend", level: "intermediate" },

  // Backend
  { name: "Node.js", category: "backend", level: "advanced" },
  { name: "Express", category: "backend", level: "advanced" },
  { name: "NestJS", category: "backend", level: "intermediate" },
  { name: "API REST", category: "backend", level: "advanced" },
  { name: "GraphQL", category: "backend", level: "intermediate" },
  { name: "Prisma", category: "backend", level: "advanced" },
  { name: "Java", category: "backend", level: "advanced" },
  { name: "Spring Boot", category: "backend", level: "intermediate" },

  // Database
  { name: "PostgreSQL", category: "database", level: "advanced" },
  { name: "MongoDB", category: "database", level: "intermediate" },
  { name: "Supabase", category: "database", level: "advanced" },
  { name: "Firebase", category: "database", level: "intermediate" },
  { name: "Redis", category: "database", level: "intermediate" },
  { name: "MySQL", category: "database", level: "intermediate" },

  // Tools
  { name: "Git", category: "tools", level: "advanced" },
  { name: "Docker", category: "tools", level: "intermediate" },
  { name: "Vercel", category: "tools", level: "advanced" },
  { name: "GitHub Actions", category: "tools", level: "intermediate" },
  { name: "VS Code", category: "tools", level: "expert" },
  { name: "Figma", category: "tools", level: "intermediate" },
  { name: "Photoshop", category: "tools", level: "intermediate" },
  { name: "GIMP", category: "tools", level: "intermediate" },
  { name: "Telegram API", category: "tools", level: "intermediate" },
  { name: "Puppeteer", category: "tools", level: "intermediate" },
  // Other
  {
    name: "Forge (Minecraft Modding)",
    category: "other",
    level: "intermediate",
  },
  { name: "Blender", category: "other", level: "beginner" },
];
