"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Timeline } from "@/components/timeline";
import { SkillsSection } from "@/components/skills-section";
import { experiences } from "@/lib/data/experiences";
import { skills } from "@/lib/data/skills";
import { Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function AboutPage() {
  const { t } = useI18n();
  return (
    <div className="relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-tr from-primary/5 to-cyan-500/5 rounded-full blur-3xl" />
      </div>

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
          className="max-w-5xl mx-auto mb-32"
        >
          <motion.div
            variants={fadeInUp}
            className="flex flex-col md:flex-row gap-12 items-start"
          >
            {/* Photo de profil */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500" />
              <div className="relative w-56 h-56 rounded-2xl overflow-hidden ring-4 ring-background flex-shrink-0">
                <Image
                  src="/fp.jpg"
                  alt="Essoungou Ndemba François-Philippe"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

          {/* Bio */}
          <div className="flex-1">
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
            >
              {t("about.title")}
            </motion.h1>
            <motion.div
              variants={fadeInUp}
              className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed"
            >
              <p className="text-pretty">{t("about.bio1")}</p>
              <p className="text-pretty">{t("about.bio2")}</p>
              <p className="text-pretty">{t("about.bio3")}</p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-4 mt-8"
            >
              <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-all">
                <Link href="/contact">
                  <Mail className="mr-2 h-5 w-5" />
                  {t("about.ctaContact")}
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg" className="hover:bg-primary/5">
                <a href="/cv.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  {t("about.ctaDownload")}
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

        {/* Section Compétences */}
        <section className="max-w-6xl mx-auto mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-center"
          >
            {t("about.skillsTitle")}
          </motion.h2>
          <SkillsSection skills={skills} />
        </section>

        {/* Section Timeline */}
        <section className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-center"
          >
            {t("about.timelineTitle")}
          </motion.h2>
          <Timeline experiences={experiences} />
        </section>
      </div>
    </div>
  );
}
