import { defineConfig, globalIgnores } from "eslint/config";

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import angular from "angular-eslint";

// https://medium.com/javascript-everyday/how-to-inspect-eslint-configuration-file-b7c23455b02e
export default defineConfig([
  // https://eslint.org/docs/latest/use/configure/ignore#ignore-files
  globalIgnores([".angular/", "dist/", "test-results/", "coverage/"]),
  {
    files: ["**/*.ts"],

    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],

    processor: angular.processInlineTemplates,

    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        { type: "attribute", prefix: "app", style: "camelCase" },
      ],
      "@angular-eslint/component-selector": [
        "error",
        { type: "element", prefix: "app", style: "kebab-case" },
      ],
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {},
  },
]);
