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
        <motion.div
          variants={fadeInUp}
          className="flex flex-col md:flex-row gap-8 items-start"
        >
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
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              {t("about.title")}
            </motion.h1>
            <motion.div
              variants={fadeInUp}
              className="space-y-4 text-lg text-muted-foreground leading-relaxed"
            >
              <p>{t("about.bio1")}</p>
              <p>{t("about.bio2")}</p>
              <p>{t("about.bio3")}</p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-4 mt-6"
            >
              <Button asChild>
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" />
                  {t("about.ctaContact")}
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="/cv.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  {t("about.ctaDownload")}
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
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          {t("about.timelineTitle")}
        </motion.h2>
        <Timeline experiences={experiences} />
      </section>
    </div>
  );
}
