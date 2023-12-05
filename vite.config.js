import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/reactapp/', // Add this row and use your own repository name
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
})