# Portfolio François-Philippe Essoungou (fpswagg)

Portfolio professionnel moderne construit avec Next.js, TypeScript, Tailwind CSS et shadcn/ui.

## Fonctionnalités

- Design élégant avec palette turquoise et mode clair/sombre
- Animations subtiles avec Framer Motion
- Page d'accueil avec hero et CTA
- Page À propos avec timeline de carrière et compétences
- Système de projets avec :
  - Projets seedés localement (Kerry's Tool, Sarena, v0.dev prompt generator)
  - Intégration GitHub API avec cache et fallback
  - Filtrage et recherche
- Page de contact avec formulaire
- Responsive et accessible

## Installation

1. Cloner le dépôt
2. Installer les dépendances :

\`\`\`bash
npm install
# ou
pnpm install
# ou
yarn install
\`\`\`

3. Copier `.env.example` vers `.env.local` et remplir les variables :

\`\`\`bash
cp .env.example .env.local
\`\`\`

4. Lancer le serveur de développement :

\`\`\`bash
npm run dev
# ou
pnpm dev
# ou
yarn dev
\`\`\`

5. Ouvrir [http://localhost:3000](http://localhost:3000)

## Configuration

### Variables d'environnement

Créez un fichier `.env.local` à la racine du projet avec les variables suivantes :

\`\`\`env
# GitHub Configuration
GITHUB_USERNAME=votre_username_github
GITHUB_TOKEN=votre_token_github

# Contact Information
NEXT_PUBLIC_CONTACT_EMAIL=votre@email.com
NEXT_PUBLIC_CONTACT_PHONE=+33XXXXXXXXX
NEXT_PUBLIC_LOCATION=Votre localisation

# Social Links
NEXT_PUBLIC_GITHUB_URL=https://github.com/votre-username
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/votre-profil
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/votre-username
\`\`\`

### Personnalisation des projets

Modifiez le fichier `lib/data/projects.ts` pour ajouter ou modifier vos projets seedés.

### Personnalisation de l'expérience

Modifiez le fichier `lib/data/experiences.ts` pour ajouter ou modifier votre parcours professionnel.

### Personnalisation des compétences

Modifiez le fichier `lib/data/skills.ts` pour ajouter ou modifier vos compétences.

## Structure du projet

\`\`\`
├── app/                    # Pages Next.js App Router
│   ├── about/             # Page À propos
│   ├── contact/           # Page Contact
│   ├── projects/          # Page Projets
│   ├── api/               # API Routes
│   │   ├── contact/       # API formulaire de contact
│   │   └── github/        # API GitHub
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Page d'accueil
│   └── globals.css        # Styles globaux
├── components/            # Composants React
│   ├── ui/               # Composants shadcn/ui
│   ├── navigation.tsx    # Navigation principale
│   ├── theme-toggle.tsx  # Toggle thème clair/sombre
│   ├── timeline.tsx      # Timeline de carrière
│   ├── skills-section.tsx # Section compétences
│   ├── project-card.tsx  # Carte de projet
│   ├── github-repos.tsx  # Liste des dépôts GitHub
│   └── contact-form.tsx  # Formulaire de contact
├── lib/                   # Utilitaires et données
│   ├── data/             # Données statiques
│   │   ├── projects.ts   # Projets seedés
│   │   ├── experiences.ts # Expériences professionnelles
│   │   ├── skills.ts     # Compétences
│   │   └── github-fallback.json # Fallback GitHub
│   ├── types.ts          # Types TypeScript
│   └── utils.ts          # Fonctions utilitaires
└── public/               # Assets statiques
\`\`\`

## Technologies utilisées

- **Framework** : Next.js 15 (App Router)
- **Langage** : TypeScript
- **Styling** : Tailwind CSS v4
- **UI Components** : shadcn/ui
- **Animations** : Framer Motion
- **Fonts** : Geist Sans & Geist Mono
- **Analytics** : Vercel Analytics

## Ajouts futurs possibles

- Blog avec MDX
- Case studies détaillées
- CMS headless (Sanity, Contentful)
- Newsletter
- Système de commentaires
- Tests (Jest, Playwright)

## Déploiement

Le portfolio est optimisé pour être déployé sur Vercel :

1. Pusher le code sur GitHub
2. Connecter le dépôt à Vercel
3. Configurer les variables d'environnement dans Vercel
4. Déployer

## Licence

MIT

## Contact

François-Philippe Essoungou Ndemba (fpswagg)
- Email : contact@fpswagg.dev
- GitHub : https://github.com/fpswagg
- LinkedIn : https://linkedin.com/in/fpswagg
