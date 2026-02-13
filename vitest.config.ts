import { defineConfig } from 'vitest/config';
import angular from '@analogjs/vite-plugin-angular';

export default defineConfig({
  plugins: [angular()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test-setup.ts',
    // as Copilot explained:
    // > The Angular builder’s outputFile (string) option overrides Vitest’s own outputFile.
    // > You cannot use multiple Vitest reporters or custom reporter config
    // > via vitest.config.ts when running tests through ng test.
    //
    // for now I have separate ng test runs for JUnit and HTML reports (see package.json).
    coverage: {
      provider: 'v8',
      reporter: ['lcov'],
      reportsDirectory: './coverage',
    },
  },
});
