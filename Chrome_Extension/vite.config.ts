import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',          // critical for Chrome extensions
  build: {
    outDir: 'dist',    // output folder for Chrome extension
    emptyOutDir: true
  }
})

