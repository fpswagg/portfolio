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
    >
      <Card className="h-full flex flex-col overflow-hidden hover:border-primary/50 transition-colors group">
        {/* Image du projet */}
        {project.image && (
          <div className="relative h-48 w-full overflow-hidden bg-muted">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
        )}

        <CardHeader>
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="text-xl">{resolvedTitle}</CardTitle>
            {project.featured && (
              <Badge variant="default" className="shrink-0">
                {t("common.actions.featured")}
              </Badge>
            )}
          </div>
          <CardDescription className="line-clamp-2">
            {resolvedDesc}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex-1">
          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="secondary" className="text-xs">
                +{project.technologies.length - 4}
              </Badge>
            )}
          </div>

          {/* Code snippet si disponible */}
          {project.codeSnippet && (
            <div className="bg-muted rounded-md p-3 font-mono text-xs overflow-x-auto">
              <pre className="text-muted-foreground">
                <code>{project.codeSnippet}</code>
              </pre>
            </div>
          )}
        </CardContent>

        <CardFooter className="flex gap-2">
          {project.demoUrl && (
            <Button asChild size="sm" className="flex-1">
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
              className="flex-1 bg-transparent"
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
