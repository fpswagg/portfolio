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
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-mono font-bold text-lg mx-4"
        >
          <span className="text-foreground">fpswagg</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
                aria-current={isActive ? "page" : undefined}
                data-active={isActive}
                onMouseEnter={() => setHoveredPath(item.href)}
                onMouseLeave={() => setHoveredPath(null)}
              >
                {t(item.key)}
                {(isActive || hoveredPath === item.href) && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
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
        <div className="hidden md:flex items-center gap-2">
          {socials.map((social) => (
            <Link
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <social.icon className="h-5 w-5" />
              <span className="sr-only">{t(social.label)}</span>
            </Link>
          ))}
          <LanguageToggle />
          <ThemeToggle />
        </div>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label={
            mobileOpen ? t("common.close_menu") : t("common.open_menu")
          }
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="md:hidden absolute top-full left-0 right-0 bg-background shadow-lg z-50"
        >
          <div className="flex flex-col gap-2 p-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded text-base font-medium transition-colors ${
                  pathname === item.href
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {t(item.key)}
              </Link>
            ))}
            <div className="flex items-center gap-3 mt-2">
              {socials.map((social) => (
                <Link
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{t(social.label)}</span>
                </Link>
              ))}
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
