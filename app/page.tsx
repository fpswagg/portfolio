"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Code2, Terminal, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      {/* Hero Section */}
      <motion.section
        className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        {/* Badge d'introduction */}
        <motion.div variants={fadeInUp}>
          <Badge variant="outline" className="px-4 py-2 text-sm font-mono border-primary/50">
            <Sparkles className="h-3 w-3 mr-2 inline-block text-primary" />
            Disponible pour de nouveaux projets
          </Badge>
        </motion.div>

        {/* Titre principal */}
        <motion.div variants={fadeInUp} className="space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
            Bonjour, je suis{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
              François-Philippe
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-mono">
            {"<"}Développeur Full-Stack{" />"}
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={fadeInUp}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl text-pretty leading-relaxed"
        >
          Je crée des expériences web modernes et performantes avec{" "}
          <span className="text-foreground font-medium">Next.js</span>,{" "}
          <span className="text-foreground font-medium">React</span> et{" "}
          <span className="text-foreground font-medium">TypeScript</span>. Passionné par le code propre et les
          interfaces utilisateur élégantes.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mt-4">
          <Button asChild size="lg" className="group">
            <Link href="/projects">
              Voir mes projets
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">Me contacter</Link>
          </Button>
        </motion.div>

        {/* Code snippet décoratif */}
        <motion.div
          variants={fadeInUp}
          className="mt-12 w-full max-w-2xl bg-card border border-border rounded-lg p-6 text-left font-mono text-sm overflow-x-auto"
        >
          <div className="flex items-center gap-2 mb-4 text-muted-foreground">
            <Terminal className="h-4 w-4" />
            <span>~/portfolio</span>
          </div>
          <pre className="text-foreground">
            <code>
              {`const developer = {
  name: "François-Philippe Essoungou",
  role: "Full-Stack Developer",
  skills: ["Next.js", "React", "TypeScript", "Node.js"],
  passion: "Building elegant solutions",
  status: "Available for hire"
};`}
            </code>
          </pre>
        </motion.div>
      </motion.section>

      {/* Section compétences rapides */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-24 max-w-5xl mx-auto"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Technologies principales</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "Next.js", icon: Code2 },
            { name: "React", icon: Code2 },
            { name: "TypeScript", icon: Terminal },
            { name: "Node.js", icon: Terminal },
            { name: "Tailwind CSS", icon: Sparkles },
            { name: "Prisma", icon: Code2 },
            { name: "Supabase", icon: Code2 },
            { name: "PostgreSQL", icon: Terminal },
          ].map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.05 }}
              className="flex flex-col items-center gap-3 p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
            >
              <tech.icon className="h-8 w-8 text-primary" />
              <span className="font-medium text-sm">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Section CTA finale */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="mt-24 text-center"
      >
        <div className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Travaillons ensemble</h2>
          <p className="text-muted-foreground mb-6 text-pretty">
            Vous avez un projet en tête ? Je serais ravi d'en discuter et de voir comment je peux vous aider à le
            concrétiser.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Démarrer un projet</Link>
          </Button>
        </div>
      </motion.section>
    </div>
  )
}
