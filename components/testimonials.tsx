"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useI18n } from "@/lib/i18n";
import { testimonialsData } from "@/lib/data/loaders";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: {
    staggerChildren: 0.15,
  },
};

export function Testimonials() {
  const { t, locale } = useI18n();

  const testimonials: Testimonial[] = testimonialsData.items.map((item) => ({
    id: item.id,
    name: item.name[locale],
    role: item.role[locale],
    company: item.company[locale],
    content: item.content[locale],
    avatar: item.avatar,
    rating: item.rating,
  }));

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          className="text-center mb-16 md:mb-20 max-w-3xl mx-auto"
          {...fadeInUp}
        >
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 mb-6 bg-primary/10 border border-primary/20 rounded-full">
            <Quote className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              {t("testimonials.badge")}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            {t("testimonials.title")}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty">
            {t("testimonials.subtitle")}
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 group">
                <CardContent className="p-6 md:p-8">
                  {/* Quote icon */}
                  <div className="mb-4">
                    <div className="inline-flex p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Quote className="h-6 w-6 text-primary" />
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-500 text-yellow-500"
                      />
                    ))}
                  </div>

                  {/* Testimonial content */}
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm md:text-base">
                    "{testimonial.content}"
                  </p>

                  {/* Author info */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                    <Avatar className="h-12 w-12 border-2 border-primary/20">
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={testimonial.name}
                      />
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                      <p className="text-xs text-muted-foreground/70">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
