/// <reference types="vitest/config" />
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import { defineConfig } from 'vite';

const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

// Two separate Vitest projects, deliberately not merged (see CLAUDE.md's
// Storybook section):
// - "storybook": every .stories.tsx run as a browser test via
//   @storybook/addon-vitest, which also runs @storybook/addon-a11y's axe
//   checks per story (.storybook/preview.tsx's `a11y.test` parameter).
//   `npm run test:a11y`. Docs/a11y only, not component logic.
// - "unit": plain *.test.tsx files under src/, jsdom + React Testing
//   Library, for the branching/logic coverage addon-vitest was never meant
//   to provide. `npm run test`.
// https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [react()],
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          storybookTest({ configDir: path.join(dirname, '.storybook') }),
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [{ browser: 'chromium' }],
          },
        },
      },
      {
        extends: true,
        test: {
          name: 'unit',
          environment: 'jsdom',
          setupFiles: [path.join(dirname, 'src/test/setup.ts')],
          include: ['src/**/*.test.{ts,tsx}'],
        },
      },
    ],
  },
});
