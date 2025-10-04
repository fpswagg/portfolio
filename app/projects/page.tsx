"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Search } from "lucide-react"
import { ProjectCard } from "@/components/project-card"
import { GitHubRepos } from "@/components/github-repos"
import { seedProjects } from "@/lib/data/projects"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const categories = [
  { value: "all", label: "Tous" },
  { value: "web", label: "Web" },
  { value: "mobile", label: "Mobile" },
  { value: "tool", label: "Outils" },
  { value: "other", label: "Autres" },
]

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [selectedCategory, setSelectedCategory] = React.useState("all")

  // Filtrer les projets seedés
  const filteredProjects = seedProjects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Mes Projets</h1>
        <p className="text-lg text-muted-foreground text-pretty">
          Découvrez une sélection de mes projets récents et contributions open-source
        </p>
      </motion.div>

      {/* Barre de recherche et filtres */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-4xl mx-auto mb-12"
      >
        <div className="flex flex-col md:flex-row gap-4">
          {/* Recherche */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Rechercher par nom, description ou technologie..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Filtres de catégorie */}
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.value)}
                className="shrink-0"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Tabs pour projets featured et GitHub */}
      <Tabs defaultValue="featured" className="max-w-7xl mx-auto">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
          <TabsTrigger value="featured">Projets Featured</TabsTrigger>
          <TabsTrigger value="github">Dépôts GitHub</TabsTrigger>
        </TabsList>

        {/* Projets seedés */}
        <TabsContent value="featured">
          {filteredProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Aucun projet trouvé pour cette recherche.</p>
            </div>
          )}
        </TabsContent>

        {/* Dépôts GitHub */}
        <TabsContent value="github">
          <GitHubRepos />
        </TabsContent>
      </Tabs>
    </div>
  )
}
