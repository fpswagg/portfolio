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
    image: "/sarena.png",
    demoUrl: "",
    githubUrl: "",
    technologies: [
      "ExpressJS",
      "Firebase",
      "Telegram API",
      "Puppeteer",
      "Tailwind CSS",
    ],
    category: "web",
    featured: false,
    year: 2025,
    codeSnippet: `// Exemple de bot Telegram minimal
bot.on('message', (ctx) => ctx.reply('Hello from Sarena!'));`,
  },
  {
    id: "desingora",
    title: "Desingora",
    description:
      "Clean, responsive Next.js site built with shadcn components — suited for construction / BTP showcase and services.",
    longDescription:
      "Corporate website template for construction/BTP companies. Highlights SSR/SSG pages for SEO, responsive shadcn/ui component-driven layout, and Vercel deployment.",
    image: "/desingora.png",
    demoUrl: "https://desingora-tau.vercel.app/",
    githubUrl: "https://github.com/Itzlandry/desingora",
    technologies: ["Next.js", "TypeScript", "shadcn/ui", "Tailwind CSS"],
    category: "web",
    featured: true,
    year: 2025,
  },
  {
    id: "benediction-barber",
    title: "Benediction Barber",
    description:
      "Promotional site for a barber shop: services, gallery, booking contact info and opening hours.",
    longDescription:
      "Showcase website for a barber shop featuring services list, image gallery, opening hours, and contact/booking form. Mobile-first design and Vercel deployment.",
    image: "/benediction-barber.png",
    demoUrl: "https://benediction-barber.vercel.app/",
    githubUrl: "https://github.com/fpswagg/benediction-barber",
    technologies: ["Next.js", "TypeScript", "shadcn/ui", "Tailwind CSS"],
    category: "web",
    featured: true,
    year: 2025,
  },
  {
    id: "les-saveurs-du-cameroun",
    title: "Les Saveurs Du Cameroun",
    description:
      "Restaurant presentation site — menu, about, reservations, gallery.",
    longDescription:
      "Marketing site for a restaurant with SEO-friendly structure, menu page with sample dishes, optimized images for food photography, and contact/reservations.",
    image: "/les-saveurs-du-cameroun.png",
    demoUrl: "https://les-saveurs-du-cameroun.vercel.app/",
    githubUrl: "https://github.com/fpswagg/les-saveurs-du-cameroun",
    technologies: ["Next.js", "TypeScript", "shadcn/ui", "Tailwind CSS"],
    category: "web",
    featured: true,
    year: 2025,
  },
  {
    id: "le-grec-man",
    title: "Le Grec Man",
    description:
      "Business landing page for a Greek food vendor — menu, hours, contact.",
    longDescription:
      "Fast, responsive landing page for a restaurant/take-away with clear call to action (order/reserve/call), simple menu presentation, and contact form integration.",
    image: "/le-grec-man.png",
    demoUrl: "https://le-grec-man.vercel.app/",
    githubUrl: "https://github.com/fpswagg/le-grec-man",
    technologies: ["Next.js", "TypeScript", "shadcn/ui", "Tailwind CSS"],
    category: "web",
    featured: true,
    year: 2025,
  },
  {
    id: "demo-site-avocat",
    title: "Demo site pour cabinet d'avocat",
    description:
      "Template/demo site for a law firm — practice areas, lawyer profiles, contact & appointment request.",
    longDescription:
      "Professional layout tailored for legal services with practice area pages, team bios, contact and appointment request forms. Emphasis on trust, structure, and conversion.",
    image: "/demo-site-avocat.png",
    demoUrl: "https://demo-site-avocat.vercel.app/",
    githubUrl: "https://github.com/fpswagg/demo-site-avocat",
    technologies: ["Next.js", "TypeScript", "shadcn/ui", "Tailwind CSS"],
    category: "web",
    featured: true,
    year: 2025,
  },
  {
    id: "agents-mod",
    title: "Agents Mod (Minecraft 1.7.10)",
    description:
      "Legacy Minecraft Forge mod adding weapons, items, masks, and lore (2018–2019).",
    longDescription:
      "Agents Mod is a legacy Minecraft Forge mod for 1.7.10 by agent7playz (~4.4k downloads on CurseForge). Created Dec 26, 2018; last updated Aug 7, 2019. License: All Rights Reserved. Adds new swords (e.g., Burning Golden Sword), items, costumes/dresses, masks, blood effects, and story elements (AgentKatana).",
    image: "/agents-mod.png",
    demoUrl: "https://www.curseforge.com/minecraft/mc-mods/agents-mod",
    technologies: ["Minecraft", "Forge 1.7.10", "Java"],
    category: "other",
    featured: false,
    year: 2019,
  },
  {
    id: "hospital-management-system",
    title: "Kerry’s Tool (Hospital Management System)",
    description:
      "Full-stack hospital management dashboard for appointments, patient records, and staff management.",
    longDescription:
      "Hospital Management System featuring role-based access control (admin/doctor/nurse/receptionist), patient CRUD, appointments, medical records, and reporting. Built with Next.js UI and API routes; integrates authentication and database.",
    image: "/kerrys-tool.png",
    demoUrl: "",
    githubUrl: "https://github.com/fpswagg/hospital-management-system-2",
    technologies: [
      "Next.js",
      "TypeScript",
      "shadcn/ui",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Auth",
    ],
    category: "tools",
    featured: false,
    year: 2025,
  },
  {
    id: "file-station",
    title: "File Station",
    description:
      "Projet académique Java Swing avec sockets réseau (gestion de fichiers)",
    longDescription:
      "Application desktop en Java Swing permettant la gestion et le transfert de fichiers via sockets sur un réseau local.",
    image: "/file-station.png",
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
