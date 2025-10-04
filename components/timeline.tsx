"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"
import type { Experience } from "@/lib/types"
import { Badge } from "@/components/ui/badge"

interface TimelineProps {
  experiences: Experience[]
}

export function Timeline({ experiences }: TimelineProps) {
  return (
    <div className="relative">
      {/* Ligne verticale */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
          >
            {/* Point sur la timeline */}
            <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" />

            {/* Contenu */}
            <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} pl-8 md:pl-0`}>
              <div
                className={`bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors ${
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                }`}
              >
                {exp.current && (
                  <Badge className="mb-3" variant="default">
                    En cours
                  </Badge>
                )}
                <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                <div className="flex items-center gap-2 text-muted-foreground mb-3 flex-wrap">
                  <span className="font-medium text-foreground">{exp.company}</span>
                  {exp.location && (
                    <>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {exp.location}
                      </span>
                    </>
                  )}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {exp.startDate} - {exp.endDate || "Présent"}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">{exp.description}</p>
                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Espace pour l'autre côté */}
            <div className="hidden md:block flex-1" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
