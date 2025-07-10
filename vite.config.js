import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    proxy: {
      '/submit-idea': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
    },
  },
});
