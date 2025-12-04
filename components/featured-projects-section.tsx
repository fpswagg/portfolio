"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { seedProjects } from "@/lib/data/projects";
import { useI18n } from "@/lib/i18n";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export function FeaturedProjectsSection() {
  const { t } = useI18n();
  
  // Get only featured projects (limit to 3 for homepage)
  const featuredProjects = seedProjects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="relative py-20 md:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          className="text-center mb-16 md:mb-20 max-w-3xl mx-auto"
          {...fadeInUp}
        >
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 mb-6 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 rounded-full">
            <Sparkles className="h-4 w-4 text-cyan-500" />
            <span className="text-sm font-medium bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
              {t("featuredProjects.badge")}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t("featuredProjects.title")}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty">
            {t("featuredProjects.subtitle")}
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View all projects CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Button asChild size="lg" variant="outline" className="group">
            <Link href="/projects">
              {t("featuredProjects.viewAll")}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
