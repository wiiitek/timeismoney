import { defineConfig } from 'vitest/config';
import angular from '@analogjs/vite-plugin-angular';

export default defineConfig({
  plugins: [angular()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test-setup.ts',
    // TODO: Junit file somehow still not being generated
    reporters: ['junit'],
    // as Copilot explained:
    // > The Angular builder’s outputFile (string) option overrides Vitest’s own outputFile.
    // > You cannot use multiple Vitest reporters or custom reporter config
    // > via vitest.config.ts when running tests through ng test.
    // maybe that would work with separate ng tasks for junit and HTML reporter?
    outputFile: {
      html: './vitest/html-report.html',
      junit: './vitest-junit-report.xml',
    },
    coverage: {
      provider: 'v8',
      reporter: ['lcov'],
      reportsDirectory: './coverage',
    },
  },
});
