"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Terminal, Sparkles, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/lib/i18n";
import { Testimonials } from "@/components/testimonials";
import { FeaturedProjectsSection } from "@/components/featured-projects-section";
import { techStackData } from "@/lib/data/loaders";

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
  const iconMap = { Code2, Terminal, Sparkles } as const;
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-tr from-primary/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24">
          <motion.div
            className="flex flex-col items-center text-center gap-8 max-w-5xl mx-auto"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            {/* Intro badge */}
            <motion.div variants={fadeInUp}>
              <Badge
                variant="outline"
                className="px-5 py-2.5 text-sm font-mono border-primary/50 bg-primary/5 hover:bg-primary/10 transition-colors"
              >
                <Sparkles className="h-3.5 w-3.5 mr-2 inline-block text-primary animate-pulse" />
                {t("home.availableBadge")}
              </Badge>
            </motion.div>

            {/* Main title */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance leading-tight">
                {t("home.greetingPrefix")} {""}
                <span className="bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-600 bg-clip-text text-transparent animate-gradient">
                  François-Philippe
                </span>
              </h1>
              <p className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-mono">
                {"<"}
                <span className="text-primary">{t("home.role")}</span>
                {"/>"}
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl text-pretty leading-relaxed"
            >
              {t("home.description")}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 mt-6"
            >
              <Button asChild size="lg" className="group text-base px-8 py-6 shadow-lg hover:shadow-xl transition-all">
                <Link href="/projects">
                  {t("common.actions.viewProjects")}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base px-8 py-6 hover:bg-primary/5">
                <Link href="/contact">
                  <Mail className="mr-2 h-5 w-5" />
                  {t("common.actions.contactMe")}
                </Link>
              </Button>
            </motion.div>

            {/* Code snippet */}
            <motion.div
              variants={fadeInUp}
              className="mt-16 w-full max-w-3xl bg-gradient-to-br from-card via-card to-card/80 border border-border/50 rounded-xl p-8 text-left font-mono text-sm overflow-x-auto shadow-2xl backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-6 text-muted-foreground">
                <Terminal className="h-5 w-5 text-primary" />
                <span className="text-base">~/portfolio</span>
                <div className="flex gap-2 ml-auto">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
              </div>
              <pre className="text-foreground/90 leading-relaxed">
                <code>{t("home.codeSnippet")}</code>
              </pre>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Featured Projects Section */}
      <FeaturedProjectsSection />

      {/* Tech Stack Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 mb-6 bg-gradient-to-r from-primary/10 to-cyan-500/10 border border-primary/20 rounded-full">
              <Code2 className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Tech Stack
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {t("home.techTitle")}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Modern technologies I work with daily
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            {techStackData.items.map((tech, index) => {
              const Icon =
                iconMap[tech.icon as keyof typeof iconMap] ?? Code2;
              return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group"
              >
                <div className="relative h-full p-6 md:p-8 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}
                  />
                  <div className="relative flex flex-col items-center gap-4">
                    <div
                      className={`p-3 bg-gradient-to-br ${tech.gradient} rounded-lg text-white`}
                    >
                      <Icon className="h-6 w-6 md:h-8 md:w-8" />
                    </div>
                    <span className="font-semibold text-sm md:text-base text-center">
                      {tech.name}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-cyan-500/10 to-teal-500/10 border border-primary/20 p-12 md:p-16 text-center">
              {/* Background decoration */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-teal-500/20 to-transparent rounded-full blur-3xl" />
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                {t("home.finalCtaTitle")}
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
                {t("home.finalCtaText")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-base px-8 py-6 shadow-lg hover:shadow-xl">
                  <Link href="/contact">
                    <Mail className="mr-2 h-5 w-5" />
                    {t("common.actions.startProject")}
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-base px-8 py-6 hover:bg-primary/5">
                  <Link href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-5 w-5" />
                    {t("about.ctaDownload")}
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
