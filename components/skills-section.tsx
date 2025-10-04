"use client";

import { motion } from "framer-motion";
import type { Skill } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Layers, Wrench } from "lucide-react";
import { useI18n } from "@/lib/i18n";

interface SkillsSectionProps {
  skills: Skill[];
}

const categoryIcons = {
  frontend: Code2,
  backend: Layers,
  database: Database,
  tools: Wrench,
  other: Code2,
};

const categoryLabelsKey = {
  frontend: "skills.categories.frontend",
  backend: "skills.categories.backend",
  database: "skills.categories.database",
  tools: "skills.categories.tools",
  other: "skills.categories.other",
};

export function SkillsSection({ skills }: SkillsSectionProps) {
  const { t } = useI18n();
  // Grouper les compétences par catégorie
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {Object.entries(groupedSkills).map(
        ([category, categorySkills], categoryIndex) => {
          const Icon = categoryIcons[category as keyof typeof categoryIcons];
          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-card border border-border rounded-lg p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold">
                  {t(
                    categoryLabelsKey[
                      category as keyof typeof categoryLabelsKey
                    ]
                  )}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {categorySkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + index * 0.05,
                    }}
                  >
                    <Badge variant="secondary" className="text-sm py-1.5 px-3">
                      {skill.name}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        }
      )}
    </div>
  );
}
