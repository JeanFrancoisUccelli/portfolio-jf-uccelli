# Portfolio — Jean-François Uccelli

Portfolio personnel statique, construit avec **Vite + React 18 + TypeScript**.
Palette sobre : blanc cassé · noir · vert sapin. Typographie éditoriale Fraunces / Manrope.

---

## 🚀 Démarrer en local

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de dev (http://localhost:5173)
npm run dev

# 3. Build de production
npm run build

# 4. Prévisualiser le build
npm run preview
```

Node ≥ 18 recommandé (Node 20 conseillé).

---

## 📷 Ajouter votre photo

Le hero contient un **placeholder photo** balisé clairement dans `src/components/Hero.tsx`.

1. Déposez votre photo dans le dossier `public/` (par exemple `public/photo.jpg`).
2. Dans `src/components/Hero.tsx`, remplacez le bloc `<div className="hero__photo">…</div>` par :

   ```tsx
   <img
     src="/photo.jpg"
     alt="Jean-François Uccelli"
     className="hero__photo-img"
   />
   ```

3. Ajoutez ces quelques lignes en bas de `src/components/Hero.css` :

   ```css
   .hero__photo-img {
     width: clamp(220px, 28vw, 320px);
     aspect-ratio: 4 / 5;
     object-fit: cover;
     border-radius: 12px;
     border: 1px solid var(--color-border);
   }
   ```

C'est tout — le reste de la mise en page s'adapte.

---

## ✏️ Modifier le contenu

Tout le contenu du CV est **centralisé** dans :

```
src/data/content.ts
```

Vous pouvez y éditer : profil, expériences IT, expériences antérieures, compétences,
formations, certifications, langues, coordonnées. Aucun composant à toucher.

---

## 🎨 Personnaliser la palette / typo

Toutes les variables CSS sont au sommet de `src/styles/global.css` :

```css
--color-accent: #1e5037;   /* Vert sapin (calé sur le CV) */
--color-ink:    #0d0d0d;   /* Noir profond */
--color-bg:     #fafaf7;   /* Blanc cassé */
--font-display: 'Fraunces';
--font-body:    'Manrope';
```

---

## ☁️ Déploiement

Les deux configs sont déjà incluses : déployez selon votre préférence.

### Netlify

```bash
# Option A — Drag & drop : faites `npm run build` puis glissez le dossier dist/ sur app.netlify.com
# Option B — Git : connectez le repo, Netlify détecte automatiquement netlify.toml
```

Le fichier `netlify.toml` configure :
- la commande de build (`npm run build`)
- le dossier publié (`dist`)
- la redirection SPA (toutes les routes → index.html)
- des headers de sécurité de base

### Vercel

```bash
# Avec la CLI
npm i -g vercel
vercel

# Ou via l'UI : importez le repo, Vercel détecte vercel.json + Vite automatiquement
```

---

## 📁 Structure du projet

```
portfolio-jf-uccelli/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/      # Header, Hero, About, Experiences, Skills, Education, Contact, Footer
│   ├── data/
│   │   └── content.ts   # ← Toutes les données du CV
│   ├── styles/
│   │   └── global.css   # Variables CSS, reset, utilitaires
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── netlify.toml
├── vercel.json
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🧪 Stack

| Couche       | Choix                                         |
| ------------ | --------------------------------------------- |
| Bundler      | Vite 5                                        |
| UI           | React 18 + TypeScript                         |
| Styles       | CSS modules par composant + variables globales |
| Typographie  | Fraunces (display) + Manrope (body) + JetBrains Mono (accents) via Google Fonts |
| Déploiement  | Netlify ou Vercel (configs incluses)          |

Aucune dépendance UI lourde (pas de Tailwind, pas de Material UI) — bundle léger,
build rapide, code simple à maintenir.
