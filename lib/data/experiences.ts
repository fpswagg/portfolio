import type { Experience } from "@/lib/types";

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Étudiant en Génie Logiciel – HND",
    company: "Institut Universitaire Siantou",
    location: "Yaoundé, Cameroun",
    startDate: "2022",
    endDate: "2024",
    current: false,
    description:
      "Formation en Higher National Diploma (HND) en Software Engineering, comprenant des projets académiques, travaux pratiques, algorithmie, architectures logicielles et développement web.",
    technologies: ["Java", "JavaScript", "HTML/CSS", "MySQL", "Git"],
  },
  {
    id: "2",
    title: "Stagiaire Développeur",
    company: "Getexpertdev",
    location: "Yaoundé, Cameroun",
    startDate: "Jan 2024",
    endDate: "Feb 2024",
    current: false,
    description:
      "Réalisation d'un CMS sur mesure basé sur WordPress pour des besoins clients. Adaptation à l'écosystème CMS et collaboration sur des livrables concrets.",
    technologies: ["WordPress", "PHP", "CSS", "Git"],
  },
  {
    id: "3",
    title: "Projet Web – ESSACA",
    company: "ESSACA – École Supérieure Spéciale d'Architecture du Cameroun",
    location: "Yaoundé, Cameroun",
    startDate: "Dec 2024",
    endDate: "2025",
    current: false,
    description:
      "Réalisé un site pour ESSACA en fin d’année 2024, suivi de travaux web simples en 2025.",
    technologies: ["Next.js", "React", "CSS", "Shadcn", "Git", "Express"],
  },
];
