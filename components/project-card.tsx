"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useI18n } from "@/lib/i18n";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { t } = useI18n();
  const titleKey = `projects.items.${project.id}.title`;
  const descKey = `projects.items.${project.id}.description`;
  const tTitle = t(titleKey);
  const tDesc = t(descKey);
  const resolvedTitle = tTitle === titleKey ? project.title : tTitle;
  const resolvedDesc = tDesc === descKey ? project.description : tDesc;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-xl transition-all duration-300 group">
        {/* Image du projet */}
        {project.image && (
          <div className="relative h-48 md:h-56 w-full overflow-hidden bg-muted">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover transition-all duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        )}

        <CardHeader className="space-y-3">
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="text-xl group-hover:text-primary transition-colors">
              {resolvedTitle}
            </CardTitle>
            {project.featured && (
              <Badge variant="default" className="shrink-0 bg-gradient-to-r from-cyan-500 to-teal-500">
                {t("common.actions.featured")}
              </Badge>
            )}
          </div>
          <CardDescription className="line-clamp-2 text-sm md:text-base leading-relaxed">
            {resolvedDesc}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex-1 space-y-4">
          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs px-3 py-1 bg-secondary/50 hover:bg-secondary transition-colors">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="secondary" className="text-xs px-3 py-1 bg-primary/10 text-primary">
                +{project.technologies.length - 4}
              </Badge>
            )}
          </div>

          {/* Code snippet si disponible */}
          {project.codeSnippet && (
            <div className="bg-muted/50 border border-border/50 rounded-lg p-4 font-mono text-xs overflow-x-auto">
              <pre className="text-muted-foreground leading-relaxed">
                <code>{project.codeSnippet}</code>
              </pre>
            </div>
          )}
        </CardContent>

        <CardFooter className="flex gap-3 pt-6">
          {project.demoUrl && (
            <Button asChild size="sm" className="flex-1 shadow-sm hover:shadow-md transition-shadow">
              <Link
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                {t("common.actions.demo")}
              </Link>
            </Button>
          )}
          {project.githubUrl && (
            <Button
              asChild
              size="sm"
              variant="outline"
              className="flex-1 hover:bg-accent/50"
            >
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                {t("common.actions.code")}
              </Link>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
