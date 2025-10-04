"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Terminal, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/lib/i18n";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function HomePage() {
  const { t } = useI18n();
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      {/* Hero Section */}
      <motion.section
        className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        {/* Intro badge */}
        <motion.div variants={fadeInUp}>
          <Badge
            variant="outline"
            className="px-4 py-2 text-sm font-mono border-primary/50"
          >
            <Sparkles className="h-3 w-3 mr-2 inline-block text-primary" />
            {t("home.availableBadge")}
          </Badge>
        </motion.div>

        {/* Titre principal */}
        <motion.div variants={fadeInUp} className="space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
            {t("home.greetingPrefix")} {""}
            <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
              François-Philippe
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-mono">
            {"<"}
            {t("home.role")} {"/>"}
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={fadeInUp}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl text-pretty leading-relaxed"
        >
          {t("home.description")}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 mt-4"
        >
          <Button asChild size="lg" className="group">
            <Link href="/projects">
              {t("common.actions.viewProjects")}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">{t("common.actions.contactMe")}</Link>
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
            <code>{t("home.codeSnippet")}</code>
          </pre>
        </motion.div>
      </motion.section>

      {/* Quick skills section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-24 max-w-5xl mx-auto"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          {t("home.techTitle")}
        </h2>
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

      {/* Final CTA section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="mt-24 text-center"
      >
        <div className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {t("home.finalCtaTitle")}
          </h2>
          <p className="text-muted-foreground mb-6 text-pretty">
            {t("home.finalCtaText")}
          </p>
          <Button asChild size="lg">
            <Link href="/contact">{t("common.actions.startProject")}</Link>
          </Button>
        </div>
      </motion.section>
    </div>
  );
}
