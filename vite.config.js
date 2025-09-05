import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Path to helpHub folder
 */
const emma927Path = '.';

/**
 * Don't change those lines below
 */
export default defineConfig({
    root: emma927Path,
    server: {
        port: 3000,
        open: true,
    },
  plugins: [react()],
})
