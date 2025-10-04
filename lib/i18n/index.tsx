"use client";

import * as React from "react";

type Locale = "en" | "fr";

type Dictionary = Record<string, string | Dictionary>;

type I18nContextValue = {
  locale: Locale;
  t: (path: string) => string;
  setLocale: (locale: Locale) => void;
};

const I18nContext = React.createContext<I18nContextValue | null>(null);

function getFromPath(dict: Dictionary, path: string): string | undefined {
  const parts = path.split(".");
  let current: any = dict;
  for (const part of parts) {
    if (current && typeof current === "object" && part in current) {
      current = current[part];
    } else {
      return undefined;
    }
  }
  return typeof current === "string" ? current : undefined;
}

export function I18nProvider({
  children,
  dictionaries,
  defaultLocale = "fr",
}: {
  children: React.ReactNode;
  dictionaries: Record<Locale, Dictionary>;
  defaultLocale?: Locale;
}) {
  const [locale, setLocale] = React.useState<Locale>(() => {
    if (typeof window === "undefined") return defaultLocale;
    const stored = window.localStorage.getItem("locale") as Locale | null;
    return stored || defaultLocale;
  });

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("locale", locale);
      const html = document.documentElement;
      html.lang = locale;
    }
  }, [locale]);

  const t = React.useCallback(
    (path: string) => {
      const dict = dictionaries[locale] || {};
      return getFromPath(dict, path) ?? path;
    },
    [locale, dictionaries]
  );

  const value = React.useMemo<I18nContextValue>(
    () => ({ locale, setLocale, t }),
    [locale, t]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = React.useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

export type { Locale, Dictionary };
