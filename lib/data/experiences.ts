import type { Experience } from "@/lib/types"

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Développeur Full-Stack Senior",
    company: "Tech Company",
    location: "Remote",
    startDate: "Jan 2023",
    endDate: undefined,
    current: true,
    description:
      "Développement d'applications web modernes avec Next.js et React. Conception d'architectures scalables et maintenance de systèmes critiques. Collaboration avec des équipes internationales pour livrer des solutions de haute qualité.",
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Prisma"],
  },
  {
    id: "2",
    title: "Développeur Full-Stack",
    company: "Digital Agency",
    location: "Paris, France",
    startDate: "Jun 2021",
    endDate: "Dec 2022",
    description:
      "Création de sites web et d'applications pour divers clients. Implémentation de solutions e-commerce et de systèmes de gestion de contenu personnalisés. Optimisation des performances et de l'accessibilité.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
  },
  {
    id: "3",
    title: "Développeur Frontend",
    company: "Startup Tech",
    location: "Lyon, France",
    startDate: "Jan 2020",
    endDate: "May 2021",
    description:
      "Développement d'interfaces utilisateur réactives et accessibles. Intégration d'APIs REST et GraphQL. Participation active aux revues de code et à l'amélioration continue des processus de développement.",
    technologies: ["React", "JavaScript", "CSS", "Redux", "Jest"],
  },
]
