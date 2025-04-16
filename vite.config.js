import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // Utilisez './' pour des chemins relatifs
  plugins: [react()],
  css: {
    preprocessorOptions: {
      css: {
        additionalData: `@import "/designs/css/main.css";`,
      },
    },
  },
});
