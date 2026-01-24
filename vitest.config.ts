import { defineConfig } from 'vitest/config';
import angular from '@analogjs/vite-plugin-angular';

export default defineConfig({
  plugins: [angular()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test-setup.ts',
    // TODO: Junit file somehow still not being generated
    reporters: ['default', 'junit'],
  },
});
