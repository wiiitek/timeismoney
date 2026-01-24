import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test-setup.ts',
    // TODO: Junit file somehow still not being generated
    reporters: ['default', 'junit'],
  },
});
