import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/theme-provider";
import { I18nProvider } from "@/lib/i18n";
import en from "@/lib/i18n/en.json";
import fr from "@/lib/i18n/fr.json";
import { Navigation } from "@/components/navigation";
import { Toaster } from "@/components/ui/toaster";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "François-Philippe Essoungou | Développeur Full-Stack",
  description:
    "Portfolio professionnel de fpswagg - Développeur Full-Stack spécialisé en Next.js, React, TypeScript et solutions web modernes.",
  keywords: [
    "développeur",
    "full-stack",
    "Next.js",
    "React",
    "TypeScript",
    "portfolio",
  ],
  authors: [{ name: "François-Philippe Essoungou Ndemba" }],
  openGraph: {
    title: "François-Philippe Essoungou | Développeur Full-Stack",
    description: "Portfolio professionnel de fpswagg",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <I18nProvider dictionaries={{ en, fr }} defaultLocale="fr">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Suspense fallback={<div>Loading...</div>}>
              <Navigation />
              <main className="min-h-screen">{children}</main>
              <Toaster />
            </Suspense>
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
