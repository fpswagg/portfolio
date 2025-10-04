# Portfolio Next.js – Guide de personnalisation et architecture

> Tutoriel pas-à-pas pour adapter ce portfolio (contenu, i18n, styles) et comprendre l’architecture.

## Sommaire

- Installation rapide
- Configuration (.env)
- Personnalisation du contenu (projets, expériences, compétences, accueil, contact)
- Internationalisation (i18n JSON + hook)
- Navigation et UX
- Styles et thème
- Architecture du code (cartographie des fichiers)
- Déploiement (Vercel)
- FAQ rapide

---

## Installation rapide

```bash
pnpm install # ou npm install / yarn install
pnpm dev
# Ouvrir http://localhost:3000
```

## Configuration (.env)

Créer `.env.local` à la racine avec vos valeurs:

```env
# GitHub
GITHUB_USERNAME=votre_username_github
GITHUB_TOKEN=votre_token_github

# Infos publiques
NEXT_PUBLIC_CONTACT_EMAIL=contact@exemple.com
NEXT_PUBLIC_CONTACT_PHONE=+33XXXXXXXXX
NEXT_PUBLIC_LOCATION=Votre localisation
NEXT_PUBLIC_GITHUB_URL=https://github.com/vous
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/vous
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/vous
```

---

## Personnalisation du contenu

### 1) Projets

- Données seed: `lib/data/projects.tsx`
- Traductions par projet: `lib/i18n/<locale>.json` → `projects.items.<id>.title` et `.description`
- Rendu carte: `components/project-card.tsx` (fallback automatique vers seed si clé manquante)
- Page & UI: `app/projects/page.tsx` (recherche, catégories, onglets), `components/github-repos.tsx` (dépôts GitHub; fallback local + "Charger plus")

### 2) Expériences (timeline)

- Données: `lib/data/experiences.ts`
- Traductions par entrée: `lib/i18n/<locale>.json` → `timeline.items.<id>.(title|company|location|startDate|endDate|description)`
- Clés génériques: `timeline.current` (badge « En cours »), `timeline.present` (date « Présent »)
- Rendu: `components/timeline.tsx` (utilise i18n avec fallback sur les données seed)

### 3) Compétences

- Données: `lib/data/skills.ts`
- Rendu: `components/skills-section.tsx`
- Libellés des catégories (i18n): `skills.categories.frontend|backend|database|tools|other`

### 4) Accueil (Home)

- Composant: `app/page.tsx`
- Tout le texte est piloté par i18n, y compris le snippet décoratif via `home.codeSnippet` (dans chaque JSON)
- CTA: `common.actions.viewProjects`, `common.actions.contactMe`, `common.actions.startProject`

### 5) Contact

- Page: `app/contact/page.tsx`
- Formulaire: `components/contact-form.tsx`
- Labels et placeholders (i18n): `contact.form.labels.*`, `contact.form.placeholders.*`
- Informations: `contact.infoLabels.email|phone|location`

---

## Internationalisation (i18n)

- Provider/hook: `lib/i18n/index.tsx` (conserve la langue en `localStorage`, met à jour `html.lang`)
- Dictionnaires JSON: `lib/i18n/en.json`, `lib/i18n/fr.json`
- Utilisation:

```tsx
import { useI18n } from "@/lib/i18n";
const { t } = useI18n();
return <h2>{t("home.techTitle")}</h2>;
```

- Ajouter une langue: créer `lib/i18n/<code>.json`, l’importer dans `app/layout.tsx` et l’ajouter à `I18nProvider`

---

## Navigation et UX

- Composant: `components/navigation.tsx`
- Accessibilité: `aria-current="page"` + `data-active` sur le lien actif
- Actions: `components/theme-toggle.tsx` (clair/sombre), `components/language-toggle.tsx` (fr/en)

---

## Styles et thème

- Fichier global: `app/globals.css` (variables CSS, thèmes clair/sombre, couleurs, radius)
- Tailwind v4: import via `@import "tailwindcss";`
- Composants UI: `components/ui/*` (adaptés de shadcn/ui)

---

## Architecture du code

```
app/
  about/ contact/ projects/ api/
  layout.tsx         # Layout racine, ThemeProvider + I18nProvider + Nav
  page.tsx           # Accueil (Hero, CTA, snippet de code traduit)
components/
  navigation.tsx     # Navbar (aria-current, indicator) + toggles
  language-toggle.tsx theme-toggle.tsx
  project-card.tsx   # Carte projet (i18n par id + fallback)
  github-repos.tsx   # Dépôts GitHub (fallback local, pagination)
  timeline.tsx       # Timeline (i18n items + current/present)
  skills-section.tsx # Compétences (labels i18n)
  ui/*               # Compos shadcn adaptés (radix, cva, etc.)
lib/
  data/              # projects.tsx, experiences.ts, skills.ts, github-fallback.json
  i18n/              # en.json, fr.json, index.tsx (provider + hook)
  types.ts utils.ts
public/
  # Images / assets
```

---

## Déploiement (Vercel)

1. Pousser le repo sur GitHub
2. Connecter le repo à Vercel
3. Renseigner les variables d’environnement
4. Déployer

---

## FAQ rapide

- Changer la langue par défaut ? `defaultLocale` dans `app/layout.tsx` (I18nProvider)
- Traduire le code snippet du hero ? `home.codeSnippet` dans chaque JSON
- Modifier les labels du menu ? `nav.*` dans les JSON
- Ajouter une langue ? Ajouter un JSON + import dans `layout.tsx`

---

## Licence

MIT

## Auteur

Essoungou Ndemba François-Philippe (fpswagg)

- Email : essoungo@gmail.com
- GitHub : https://github.com/fpswagg
- LinkedIn : https://linkedin.com/in/fpswagg

---

## Guides pratiques – Ajouter des projets, expériences et traductions

### Ajouter un projet

1. Ouvrez `lib/data/projects.tsx` et ajoutez un nouvel objet au tableau `seedProjects` (assurez-vous que `id` est unique):

```ts
// lib/data/projects.tsx
export const seedProjects: Project[] = [
  // ... projets existants
  {
    id: "my-tool",
    title: "My Tool",
    description: "Outil de productivité moderne",
    longDescription: "Description plus détaillée (optionnelle)",
    image: "/my-tool.jpg",
    demoUrl: "https://my-tool.vercel.app",
    githubUrl: "https://github.com/you/my-tool",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "web", // web | mobile | tool | other
    featured: true,
    year: 2025,
    codeSnippet: `// Exemple
console.log('Hello');`,
  },
];
```

2. (Optionnel mais recommandé) Ajoutez les traductions du titre et de la description:

```json
// lib/i18n/en.json
{
  "projects": {
    "items": {
      "my-tool": {
        "title": "My Tool",
        "description": "Modern productivity tool"
      }
    }
  }
}
```

```json
// lib/i18n/fr.json
{
  "projects": {
    "items": {
      "my-tool": {
        "title": "My Tool",
        "description": "Outil de productivité moderne"
      }
    }
  }
}
```

Le composant `components/project-card.tsx` tentera d’abord `projects.items.<id>.*` puis retombera sur les valeurs du seed si la clé est absente.

### Ajouter une expérience (timeline)

1. Ouvrez `lib/data/experiences.ts` et ajoutez une expérience avec un `id` unique:

```ts
// lib/data/experiences.ts
export const experiences: Experience[] = [
  // ... existantes
  {
    id: "4",
    title: "Ingénieur Frontend",
    company: "My Company",
    location: "Montréal, Canada",
    startDate: "Feb 2025",
    endDate: undefined, // ou "Dec 2025"
    current: true, // badge "En cours" si true
    description: "Développement d'interfaces performantes et accessibles.",
    technologies: ["React", "Next.js", "Tailwind CSS"],
  },
];
```

2. (Optionnel) Ajoutez les traductions détaillées pour chaque champ de l’item:

```json
// lib/i18n/fr.json
{
  "timeline": {
    "items": {
      "4": {
        "title": "Ingénieur Frontend",
        "company": "My Company",
        "location": "Montréal, Canada",
        "startDate": "Fév 2025",
        "endDate": "",
        "description": "Développement d'interfaces performantes et accessibles."
      }
    }
  }
}
```

```json
// lib/i18n/en.json
{
  "timeline": {
    "items": {
      "4": {
        "title": "Frontend Engineer",
        "company": "My Company",
        "location": "Montreal, Canada",
        "startDate": "Feb 2025",
        "endDate": "",
        "description": "Building performant, accessible interfaces."
      }
    }
  }
}
```

Remarques:

- Les clés génériques `timeline.current` et `timeline.present` sont déjà gérées par `components/timeline.tsx`.
- Chaque champ (`title`, `company`, `location`, `startDate`, `endDate`, `description`) utilise d’abord la traduction, sinon retombe sur la donnée seed.

### Ajouter des traductions (général)

- Les dictionnaires vivent dans `lib/i18n/en.json` et `lib/i18n/fr.json`.
- Utilisez des chemins hiérarchiques clairs, par ex. `home.*`, `projects.*`, `timeline.*`, `contact.*`, `skills.*`, `nav.*`, `common.actions.*`.
- Exemple d’ajout d’une clé multi-lignes (attention aux \n):

```json
{
  "home": {
    "codeSnippet": "const developer = {\n  name: \"Jane Doe\",\n  role: \"Full-Stack Developer\"\n};"
  }
}
```

- Consommez la traduction dans React:

```tsx
import { useI18n } from "@/lib/i18n";
const { t } = useI18n();
return <span>{t("common.actions.viewProjects")}</span>;
```

Astuce: si vous ajoutez une nouvelle langue, créez `lib/i18n/<code>.json`, importez-la dans `app/layout.tsx` et passez-la à `I18nProvider`.
