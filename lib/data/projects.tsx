import type { Project } from "@/lib/types";

// Projets seedés localement
export const seedProjects: Project[] = [
  {
    id: "sarena",
    title: "Sarena",
    description:
      "E-commerce avec intégrations ExpressJS, Firebase, Telegram API et Puppeteer",
    longDescription:
      "Plateforme e-commerce intégrant un backend ExpressJS, Firebase (auth/DB/storage), automatisations via Puppeteer et notifications/interaction via Telegram API.",
    image: "/modern-business-website-homepage.jpg",
    demoUrl: "",
    githubUrl: "https://github.com/fpswagg/sarena",
    technologies: [
      "ExpressJS",
      "Firebase",
      "Telegram API",
      "Puppeteer",
      "Tailwind CSS",
    ],
    category: "web",
    featured: true,
    year: 2025,
    codeSnippet: `// Exemple de bot Telegram minimal
bot.on('message', (ctx) => ctx.reply('Hello from Sarena!'));`,
  },
  {
    id: "file-station",
    title: "File Station",
    description:
      "Projet académique Java Swing avec sockets réseau (gestion de fichiers)",
    longDescription:
      "Application desktop en Java Swing permettant la gestion et le transfert de fichiers via sockets sur un réseau local.",
    image: "/placeholder.jpg",
    demoUrl: "",
    githubUrl: "",
    technologies: ["Java", "Swing", "Sockets"],
    category: "tools",
    featured: false,
    year: 2023,
    codeSnippet: `// Exemple de serveur socket en Java
ServerSocket server = new ServerSocket(8080);
Socket client = server.accept();`,
  },
];
