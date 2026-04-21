import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// BASE_PATH=/dmm/ for GitHub Pages, unset (defaults to /) for Netlify
export default defineConfig({
  base: process.env.BASE_PATH ?? '/',
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
})