// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Add this 'base' property:
  base: '/portfolio/', // <-- IMPORTANT: Use your exact GitHub repository name here, with leading and trailing slashes.
});