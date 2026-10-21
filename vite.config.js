import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/my_portfolio/' : '/',
  plugins: [react()],
  assetsInclude: ['**/*.JPG', '**/*.JPEG'],
}))
