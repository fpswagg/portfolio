"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { GitHubRepos } from "@/components/github-repos";
import { seedProjects } from "@/lib/data/projects";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useI18n } from "@/lib/i18n";

const categories = [
  { value: "all", label: "Tous" },
  { value: "web", label: "Web" },
  { value: "mobile", label: "Mobile" },
  { value: "tools", label: "Outils" },
  { value: "other", label: "Autres" },
];

export default function ProjectsPage() {
  const { t } = useI18n();
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("all");

  // Filtrer les projets seedés
  const filteredProjects = seedProjects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesCategory =
      selectedCategory === "all" || project.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-tr from-primary/5 to-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            {t("projects.title")}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty">
            {t("projects.subtitle")}
          </p>
        </motion.div>

        {/* Barre de recherche et filtres */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <div className="flex flex-col md:flex-row gap-4">
            {/* Recherche */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder={t("projects.searchPlaceholder")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 text-base border-border/50 bg-card/50 backdrop-blur-sm focus:border-primary/50"
              />
            </div>

            {/* Filtres de catégorie */}
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={
                    selectedCategory === category.value ? "default" : "outline"
                  }
                  size="default"
                  onClick={() => setSelectedCategory(category.value)}
                  className="shrink-0 h-12 px-6"
                >
                  {t(`projects.categories.${category.value}`)}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tabs pour projets featured et GitHub */}
        <Tabs defaultValue="featured" className="max-w-7xl mx-auto">
          <TabsList className="grid w-full max-w-lg mx-auto grid-cols-2 mb-16 h-12 p-1">
            <TabsTrigger value="featured" className="text-base">
              {t("projects.tabs.featured")}
            </TabsTrigger>
            <TabsTrigger value="github" className="text-base">
              {t("projects.tabs.github")}
            </TabsTrigger>
          </TabsList>

          {/* Projets seedés */}
          <TabsContent value="featured">
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-lg text-muted-foreground">{t("projects.empty")}</p>
              </div>
            )}
          </TabsContent>

          {/* Dépôts GitHub */}
          <TabsContent value="github">
            <GitHubRepos />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
