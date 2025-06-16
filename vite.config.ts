import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // 👇 добавь эту строку
  base: '/final_myapp/',

  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
