import navigationJson from "@/lib/data/navigation.json";
import socialLinksJson from "@/lib/data/social-links.json";
import contactJson from "@/lib/data/contact.json";
import techStackJson from "@/lib/data/tech-stack.json";
import projectCategoriesJson from "@/lib/data/project-categories.json";
import testimonialsJson from "@/lib/data/testimonials.json";
import projectsJson from "@/lib/data/projects.json";
import skillsJson from "@/lib/data/skills.json";
import experiencesJson from "@/lib/data/experiences.json";
import {
  ContactSchema,
  ExperiencesSchema,
  NavigationSchema,
  ProjectCategoriesSchema,
  ProjectsSchema,
  SkillsSchema,
  SocialLinksSchema,
  TechStackSchema,
  TestimonialsSchema,
} from "@/lib/data/schemas";

export const navigationData = NavigationSchema.parse(navigationJson);
export const socialLinksData = SocialLinksSchema.parse(socialLinksJson);
export const contactData = ContactSchema.parse(contactJson);
export const techStackData = TechStackSchema.parse(techStackJson);
export const projectCategoriesData =
  ProjectCategoriesSchema.parse(projectCategoriesJson);
export const testimonialsData = TestimonialsSchema.parse(testimonialsJson);
export const projectsData = ProjectsSchema.parse(projectsJson);
export const skillsData = SkillsSchema.parse(skillsJson);
export const experiencesData = ExperiencesSchema.parse(experiencesJson);

