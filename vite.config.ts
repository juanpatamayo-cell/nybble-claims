import path from 'node:path';
import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import { defineConfig } from 'vite';
import { defaultExclude } from 'vitest/config';

const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

// Three separate Vitest projects, deliberately not merged (see CLAUDE.md's
// Storybook and Visual regression sections):
// - "storybook": every .stories.tsx run as a browser test via
//   @storybook/addon-vitest, which also runs @storybook/addon-a11y's axe
//   checks per story (.storybook/preview.tsx's `a11y.test` parameter).
//   `npm run test:a11y`. Docs/a11y only, not component logic.
// - "unit": plain *.test.tsx files under src/, jsdom + React Testing
//   Library, for the branching/logic coverage addon-vitest was never meant
//   to provide. `npm run test`.
// - "visual": *.visual.test.tsx files, a real Chromium browser (screenshot
//   diffing needs real rendering, not jsdom) + Vitest's built-in
//   `toMatchScreenshot` matcher, one per story per light/dark. `npm run
//   test:visual`.
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
          // *.visual.test.tsx needs a real browser (see the "visual"
          // project below) — jsdom can't run it, so it's excluded here
          // the same way the default exclude list keeps out node_modules.
          exclude: [...defaultExclude, '**/*.visual.test.tsx'],
        },
      },
      {
        extends: true,
        test: {
          name: 'visual',
          include: ['src/**/*.visual.test.tsx'],
          setupFiles: [path.join(dirname, 'src/test/visual-setup.ts')],
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [{ browser: 'chromium' }],
          },
        },
      },
    ],
  },
});
