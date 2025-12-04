"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Menu, X, Twitter } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const navItems = [
  { href: "/", key: "nav.home" },
  { href: "/about", key: "nav.about" },
  { href: "/projects", key: "nav.projects" },
  { href: "/contact", key: "nav.contact" },
];

const socials = [
  {
    href: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com",
    icon: Github,
    label: "common.github",
  },
  {
    href: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com",
    icon: Linkedin,
    label: "common.linkedin",
  },
  {
    href: process.env.NEXT_PUBLIC_TWITTER_URL || "https://twitter.com",
    icon: Twitter,
    label: "common.twitter",
  },
];

export function Navigation() {
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = React.useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { t } = useI18n();

  // Close mobile menu on route change
  React.useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent background scroll when mobile menu is open
  React.useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <nav className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-mono font-bold text-xl mx-4 group"
        >
          <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent group-hover:from-cyan-600 group-hover:to-teal-600 transition-all">
            {"<"}fpswagg{"/>"}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-5 py-2.5 text-sm font-medium transition-all rounded-lg",
                  isActive
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                )}
                aria-current={isActive ? "page" : undefined}
                data-active={isActive}
                onMouseEnter={() => setHoveredPath(item.href)}
                onMouseLeave={() => setHoveredPath(null)}
              >
                {t(item.key)}
                {(isActive || hoveredPath === item.href) && (
                  <motion.div
                    className="absolute bottom-1 left-2 right-2 h-0.5 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full"
                    layoutId="navbar-indicator"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          {socials.map((social) => (
            <Link
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all"
            >
              <social.icon className="h-4 w-4" />
              <span className="sr-only">{t(social.label)}</span>
            </Link>
          ))}
          <div className="h-6 w-px bg-border mx-1" />
          <LanguageToggle />
          <ThemeToggle />
        </div>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex items-center justify-center p-2.5 rounded-lg hover:bg-accent/50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label={
            mobileOpen ? t("common.close_menu") : t("common.open_menu")
          }
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-border/40 bg-background/95 backdrop-blur-xl"
          >
            <div className="container flex flex-col gap-2 py-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "block px-4 py-3 rounded-lg text-base font-medium transition-all",
                      pathname === item.href
                        ? "bg-gradient-to-r from-primary/20 to-cyan-500/20 text-primary border border-primary/20"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                    )}
                    onClick={() => setMobileOpen(false)}
                  >
                    {t(item.key)}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                className="flex items-center justify-between gap-4 mt-4 pt-4 border-t border-border/40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center gap-2">
                  {socials.map((social) => (
                    <Link
                      key={social.href}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all"
                    >
                      <social.icon className="h-5 w-5" />
                      <span className="sr-only">{t(social.label)}</span>
                    </Link>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <LanguageToggle />
                  <ThemeToggle />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
