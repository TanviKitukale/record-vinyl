import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite is the build tool: `npm run dev` gives instant reload while you work,
// and `npm run build` bundles + minifies everything into /dist for deployment.
// That "optimize assets / minify code" requirement from the brief is handled
// here, by the build tool, rather than by hand — that's what a bundler is for.
export default defineConfig({
  plugins: [react()],
})
