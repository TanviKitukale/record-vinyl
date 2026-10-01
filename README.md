# Crate

A small independent record shop, built as a capstone: browse by genre,
open a record to see its tracklist, and build a crate to check out.

## Stack

- **React 18** for the UI
- **React Router v6** for client-side routing (no full page reload between pages)
- **Context API** for crate (cart) state, shared across the app
- **Vite** as the build tool — dev server, bundling, and minification

## Project structure

```
src/
  data/records.js         all catalog data (records + genres)
  context/CrateContext.jsx  crate state: add/remove/qty, shared via Context
  components/              reusable pieces: Header, RecordCard, Footer, Loader
  pages/                   one file per route: Home, Genre, RecordDetail, Crate, NotFound
  App.jsx                  route table
  main.jsx                 entry point — wraps App in Router + CrateProvider
```

## Run it locally

You'll need [Node.js](https://nodejs.org) 18 or newer installed.

```bash
npm install
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`). Changes to any
file show up instantly without a manual refresh.

To build the production bundle (minified, code-split by route) and preview
it locally:

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this folder to a new GitHub repository (create the repo on GitHub
   first, then from inside this folder):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com), sign in with GitHub, and click
   **Add New → Project**.
3. Select this repository. Vercel auto-detects Vite — leave the build
   command (`npm run build`) and output directory (`dist`) as the
   defaults it suggests.
4. Click **Deploy**. After the build finishes you get a public URL
   (something like `crate-records.vercel.app`).
5. Every future `git push` to `main` redeploys automatically.

The included `vercel.json` makes sure routes like `/genre/jazz` still work
if someone refreshes the page or opens the link directly, instead of
Vercel trying (and failing) to find a real file at that path.

## What's static vs. dynamic

The catalog (`src/data/records.js`) is a plain JavaScript array — there's
no backend or database. That's a deliberate choice for a portfolio piece:
it keeps the project deployable with zero infrastructure, and every
component reads from it the same way a real API response would be read,
so swapping in a real backend later wouldn't require touching the
components at all.
