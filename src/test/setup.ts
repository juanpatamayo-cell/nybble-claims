// Loaded via vite.config.ts's "unit" project `setupFiles`. Extends Vitest's
// `expect` with jest-dom matchers (toBeInTheDocument, etc.) for every
// *.test.tsx file — see CLAUDE.md's Storybook section for why this is a
// separate project from the Storybook/a11y one.
import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

// RTL's automatic afterEach cleanup only self-registers when it detects
// `globals: true`; this project uses explicit vitest imports instead, so
// unmount manually or every test after the first in a file sees leftover
// DOM from the previous render.
afterEach(cleanup);
