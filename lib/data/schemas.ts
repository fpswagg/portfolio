import { z } from "zod";

export const LocaleSchema = z.enum(["en", "fr"]);
export type Locale = z.infer<typeof LocaleSchema>;

export const LocalizedStringSchema = z.object({
  en: z.string(),
  fr: z.string(),
});
export type LocalizedString = z.infer<typeof LocalizedStringSchema>;

export const NavigationItemSchema = z.object({
  href: z.string(),
  i18nKey: z.string(),
});
export const NavigationSchema = z.object({
  items: z.array(NavigationItemSchema),
});

export const SocialLinkSchema = z.object({
  id: z.string(),
  i18nKey: z.string(),
  icon: z.string(),
  defaultUrl: z.string(),
  envVar: z.string().optional(),
});
export const SocialLinksSchema = z.object({
  items: z.array(SocialLinkSchema),
});

export const ContactItemSchema = z.object({
  id: z.string(),
  labelI18nKey: z.string(),
  icon: z.string(),
  defaultValue: z.string(),
  envVar: z.string().optional(),
  hrefPrefix: z.string().nullable(),
});
export const ContactSchema = z.object({
  items: z.array(ContactItemSchema),
});

export const TechStackItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  icon: z.string(),
  gradient: z.string(),
});
export const TechStackSchema = z.object({
  items: z.array(TechStackItemSchema),
});

export const ProjectCategorySchema = z.object({
  value: z.enum(["all", "web", "mobile", "tools", "other"]),
  i18nKey: z.string(),
});
export const ProjectCategoriesSchema = z.object({
  items: z.array(ProjectCategorySchema),
});

export const TestimonialSchema = z.object({
  id: z.string(),
  avatar: z.string(),
  rating: z.number().int().min(1).max(5),
  name: LocalizedStringSchema,
  role: LocalizedStringSchema,
  company: LocalizedStringSchema,
  content: LocalizedStringSchema,
});
export const TestimonialsSchema = z.object({
  items: z.array(TestimonialSchema),
});

export const ProjectSchema = z.object({
  id: z.string(),
  title: LocalizedStringSchema,
  description: LocalizedStringSchema,
  longDescription: LocalizedStringSchema.optional(),
  image: z.string().optional(),
  demoUrl: z.string().optional(),
  githubUrl: z.string().optional(),
  technologies: z.array(z.string()),
  category: z.enum(["web", "mobile", "tools", "other"]),
  featured: z.boolean().optional(),
  codeSnippet: z.string().optional(),
  year: z.number().int().optional(),
});
export const ProjectsSchema = z.object({
  items: z.array(ProjectSchema),
});

export const SkillSchema = z.object({
  name: z.string(),
  category: z.enum(["frontend", "backend", "database", "tools", "other"]),
  level: z.enum(["beginner", "intermediate", "advanced", "expert"]).optional(),
});
export const SkillsSchema = z.object({
  items: z.array(SkillSchema),
});

export const ExperienceSchema = z.object({
  id: z.string(),
  title: LocalizedStringSchema,
  company: LocalizedStringSchema,
  location: LocalizedStringSchema.optional(),
  startDate: LocalizedStringSchema,
  endDate: LocalizedStringSchema.nullable().optional(),
  current: z.boolean().optional(),
  description: LocalizedStringSchema,
  technologies: z.array(z.string()).optional(),
});
export const ExperiencesSchema = z.object({
  items: z.array(ExperienceSchema),
});

