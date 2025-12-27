import { defineConfig } from 'vitest/config';


export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',    
    include: ['**/*.{test,spec}.ts'],
    setupFiles: ['setup.ts'],
  },
});
