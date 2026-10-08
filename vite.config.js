import { execSync } from 'child_process'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'import.meta.env.VITE_LAST_UPDATED': JSON.stringify(
      execSync('git log -1 --format=%cI').toString().trim()
    ),
  },
})