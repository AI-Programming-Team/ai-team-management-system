import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    hmr: process.env.CODESPACE_NAME
      ? {
          host: `${process.env.CODESPACE_NAME}-5173.app.github.dev`,
          protocol: 'wss',
          port: 443,
        }
      : undefined,
    proxy: {
      '/submit-idea': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
    },
  },
});
