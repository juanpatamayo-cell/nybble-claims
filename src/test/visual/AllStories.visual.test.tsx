import type { ComponentType } from 'react';
import { composeStories } from '@storybook/react-vite';
import { cleanup, render } from '@testing-library/react';
import { page } from 'vitest/browser';
import { afterEach, describe, expect, test } from 'vitest';

afterEach(cleanup);

const THEMES = ['light', 'dark'] as const;

function setTheme(theme: (typeof THEMES)[number]) {
  const root = document.documentElement;
  if (theme === 'dark') root.setAttribute('data-theme', 'dark');
  else root.removeAttribute('data-theme');
}

// Every component story, screenshotted in light and dark — per #42's
// acceptance criteria, text-size isn't part of this axis. Deliberately
// scoped to src/components/, not src/flows/: SubmitClaimFlow's page is
// ~5000px tall at this viewport (6 stacked mock phone screens) and its
// elementLocator screenshot comes back with a large blank region past the
// first screen — looks like a real-content render in an actual browser
// (verified manually for #44), so this reads as a boundary case in this
// still-@experimental toMatchScreenshot matcher with very tall subtrees,
// not a bug in the component. Flagged, not silently worked around — see
// CLAUDE.md's "Visual regression" section.
const storyModules = import.meta.glob('../../components/**/*.stories.tsx', {
  eager: true,
}) as Record<string, unknown>;

for (const [path, mod] of Object.entries(storyModules)) {
  // composeStories' generic can't be inferred from a dynamically globbed
  // module record — every *.stories.tsx module shape is different, and
  // TypeScript has no way to know which one `mod` is at this point. Cast
  // at the boundary, then recover a concrete type for what we actually do
  // with the result (render each story as a plain component).
  const stories = composeStories(
    mod as Parameters<typeof composeStories>[0],
  ) as Record<string, ComponentType>;
  const describePath = path.replace('../../', 'src/');
  // Several components reuse the same story names (e.g. "ActionRequired"
  // exists on both ClaimHeader and ClaimStatusStepper) — toMatchScreenshot
  // only scopes files by the *test file's* name, not by describe block, so
  // without this prefix two components' screenshots silently overwrite
  // each other on disk and compare against the wrong component entirely.
  const componentName = path.replace(/^.*\//, '').replace('.stories.tsx', '');

  describe(describePath, () => {
    for (const [storyName, Story] of Object.entries(stories)) {
      for (const theme of THEMES) {
        test(`${storyName} — ${theme}`, async () => {
          setTheme(theme);
          const { container } = render(<Story />);

          // Inter Tight/Fraunces load asynchronously; screenshotting before
          // they're ready captures the fallback font's metrics, which
          // reflows (and changes the captured dimensions) once the real
          // font swaps in — a real flake this caught on the first run.
          await document.fonts.ready;
          // A second, separate flake: some stories (icon-heavy ones
          // especially) were still mid-layout the instant fonts resolved.
          // Two rAFs guarantee at least one full render+paint cycle has
          // completed before the screenshot fires.
          await new Promise<void>((resolve) =>
            requestAnimationFrame(() => requestAnimationFrame(() => resolve())),
          );

          await expect
            .element(page.elementLocator(container))
            .toMatchScreenshot(`${componentName}-${storyName}-${theme}`);
        });
      }
    }
  });
}
