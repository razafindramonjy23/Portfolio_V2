# 🌟 Portfolio — Tahina Razafindramonjy

Portfolio moderne et professionnel pour développeur Full Stack, construit avec **Next.js 14**, **Tailwind CSS** et **Framer Motion**.

## 🎨 Design

- **Palette** : Bleu nuit profond (`#142947`) + Doré mat (`#AD912D`) + Gris roche (`#374041`)
- **Typographie** : Playfair Display (display) + DM Sans (body) + JetBrains Mono (code)
- **Style** : Luxury/Premium, Dark theme, Gold accents, Geometric brutalism
- **Animations** : Framer Motion (scroll-triggered, typewriter, parallax, hover states)

## 🚀 Installation

```bash
# Cloner / extraire le projet
cd portfolio

# Installer les dépendances
npm install

# Lancer en développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans le navigateur.

## 📦 Build production

```bash
npm run build
npm start
```

## 🗂️ Structure

```
portfolio/
├── app/
│   ├── layout.tsx        # Fonts, metadata
│   ├── page.tsx          # Page principale
│   └── globals.css       # Styles globaux + animations CSS
├── components/
│   ├── Navbar.tsx         # Navigation sticky + mobile menu
│   ├── Hero.tsx           # Section héro avec typewriter + parallax
│   ├── About.tsx          # Présentation + code card JSON
│   ├── Experience.tsx     # Timeline des expériences
│   ├── Skills.tsx         # Barres de compétences animées
│   ├── Projects.tsx       # Liste projets avec hover reveal
│   ├── Contact.tsx        # Section contact avec cards
│   └── Footer.tsx         # Pied de page
├── tailwind.config.js    # Couleurs personnalisées
└── package.json
```

## ✏️ Personnalisation

- **Infos** : Modifier directement dans chaque composant (`components/*.tsx`)
- **Couleurs** : `tailwind.config.js` + `app/globals.css`
- **Projets** : Tableau `projects` dans `components/Projects.tsx`
- **Skills** : Tableau `skillCategories` dans `components/Skills.tsx`

## 🛠️ Stack

- **Framework** : Next.js 14 (App Router)
- **Styles** : Tailwind CSS
- **Animations** : Framer Motion
- **Icônes** : Lucide React
- **Fonts** : Google Fonts (Playfair Display, DM Sans, JetBrains Mono)
- **Déploiement** : Vercel (recommandé)

## 🌐 Déploiement sur Vercel

```bash
npm install -g vercel
vercel --prod
```
