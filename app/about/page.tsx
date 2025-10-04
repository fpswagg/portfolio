"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Timeline } from "@/components/timeline"
import { SkillsSection } from "@/components/skills-section"
import { experiences } from "@/lib/data/experiences"
import { skills } from "@/lib/data/skills"
import { Download, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      {/* Section Hero */}
      <motion.section
        initial="initial"
        animate="animate"
        variants={{
          animate: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="max-w-4xl mx-auto mb-24"
      >
        <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-8 items-start">
          {/* Photo de profil */}
          <div className="relative w-48 h-48 rounded-2xl overflow-hidden border-4 border-primary/20 flex-shrink-0">
            <Image
              src="/professional-developer-portrait.png"
              alt="François-Philippe Essoungou"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Bio */}
          <div className="flex-1">
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-4">
              À propos de moi
            </motion.h1>
            <motion.div variants={fadeInUp} className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Bonjour ! Je suis{" "}
                <span className="text-foreground font-medium">François-Philippe Essoungou Ndemba</span>, développeur
                full-stack passionné par la création d'expériences web modernes et performantes.
              </p>
              <p>
                Avec plusieurs années d'expérience dans le développement web, je me spécialise dans l'écosystème{" "}
                <span className="text-foreground font-medium">React/Next.js</span> et les technologies modernes. J'aime
                transformer des idées complexes en solutions élégantes et intuitives.
              </p>
              <p>
                Quand je ne code pas, vous me trouverez en train d'explorer de nouvelles technologies, de contribuer à
                des projets open-source, ou de partager mes connaissances avec la communauté des développeurs.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mt-6">
              <Button asChild>
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Me contacter
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="/cv.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Télécharger CV
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* Section Compétences */}
      <section className="max-w-6xl mx-auto mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Compétences techniques
        </motion.h2>
        <SkillsSection skills={skills} />
      </section>

      {/* Section Timeline */}
      <section className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Parcours professionnel
        </motion.h2>
        <Timeline experiences={experiences} />
      </section>
    </div>
  )
}
