import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Adiciona a base correta para produção
  build: {
    outDir: 'dist',
  },
  server: {
    historyApiFallback: true, // Garante suporte ao fallback
  },
});
