/* ---------------------------------------------------------
   DESIGN TOKENS
   One place for every color/type/spacing value in the app.
   Change a value here and it updates everywhere it's used —
   that's the whole point of putting them in :root variables
   instead of typing hex codes inside each component's CSS.
--------------------------------------------------------- */
:root {
  /* Warm near-black, like the inside of an album sleeve — not pure black */
  --bg: #17140f;
  --surface: #221d16;
  --surface-raised: #2b2419;

  /* Aged-label off-white for text, with a muted secondary tone */
  --ink: #ece3d0;
  --ink-muted: #9c917a;

  /* Vintage record-label gold as the single accent color */
  --accent: #d9a441;
  --accent-deep: #8b5e2e;

  /* Reserved for the "new arrival" tag only — muted forest, not neon */
  --tag-new: #5c7a5c;

  --border: #3a3324;

  --font-display: 'Fraunces', Georgia, serif;
  --font-body: 'Work Sans', system-ui, sans-serif;

  --radius: 3px;
  --content-width: 1120px;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--ink);
  font-family: var(--font-body);
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font-family: inherit;
  cursor: pointer;
}

/* Visible focus ring for keyboard users — easy to lose when you start
   customizing button/link styles, so it's set once here, globally. */
:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

h1, h2, h3 {
  font-family: var(--font-display);
  font-weight: 600;
  line-height: 1.15;
  margin: 0;
}

.wrap {
  max-width: var(--content-width);
  margin: 0 auto;
  padding: 0 24px;
}

.muted {
  color: var(--ink-muted);
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
