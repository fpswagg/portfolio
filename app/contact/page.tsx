"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";

const contactInfo = [
  {
    icon: Mail,
    labelKey: "email",
    value: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@fpswagg.dev",
    href: `mailto:${
      process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@fpswagg.dev"
    }`,
  },
  {
    icon: Phone,
    labelKey: "phone",
    value: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+33 X XX XX XX XX",
    href: `tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE || ""}`,
  },
  {
    icon: MapPin,
    labelKey: "location",
    value: process.env.NEXT_PUBLIC_LOCATION || "France",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/fpswagg",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href:
      process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com/in/fpswagg",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: process.env.NEXT_PUBLIC_TWITTER_URL || "https://x.com/fpswagg",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function ContactPage() {
  const { t } = useI18n();
  return (
    <div className="relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-gradient-to-tr from-primary/5 to-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            {t("contact.title")}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Coordonnées */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">{t("contact.infoTitle")}</CardTitle>
                <CardDescription>{t("contact.infoDescription")}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.labelKey} className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-xl shrink-0">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-muted-foreground mb-1">
                        {t(`contact.infoLabels.${info.labelKey}`)}
                      </p>
                      {info.href ? (
                        <Link
                          href={info.href}
                          className="text-sm text-foreground hover:text-primary transition-colors break-all font-medium"
                        >
                          {info.value}
                        </Link>
                      ) : (
                        <p className="text-sm text-foreground font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Réseaux sociaux */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">{t("contact.socialTitle")}</CardTitle>
                <CardDescription>
                  {t("contact.socialDescription")}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-accent/50 transition-all group border border-transparent hover:border-primary/20"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <social.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium">{social.label}</span>
                  </Link>
                ))}
              </CardContent>
            </Card>

            {/* Disponibilité */}
            <Card className="bg-gradient-to-br from-primary/10 via-cyan-500/10 to-teal-500/10 border-primary/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">{t("contact.availabilityTitle")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t("contact.availabilityText")}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Formulaire de contact */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">{t("contact.form.sendMessageTitle")}</CardTitle>
                <CardDescription className="text-base">
                  {t("contact.form.sendMessageDescription")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
