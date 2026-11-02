import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  build: { outDir: 'build' },
  test: {
    environment: 'jsdom',
    globals: true,
    // Tests assert on CSS module class names as written (e.g. "invisible"), like CRA's Jest setup
    css: { modules: { classNameStrategy: 'non-scoped' } }
  }
});
