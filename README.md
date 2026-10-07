# nybble-claims

Design tokens and React components for the **pet insurance reimbursement flow** designed for the nybblegroup UX challenge.

The source of truth is the Figma library **nybblegroup UX challenge – Library**. Its variables are exported to `tokens/figma/` and turned into CSS variables with [Style Dictionary](https://styledictionary.com); components are built in React to match it 1:1.

Full contributor conventions (prop mapping, icon rules, Figma MCP workflow) live in [CLAUDE.md](./CLAUDE.md) — this file is the overview.

## Stack

React 19 + Vite + TypeScript, CSS Modules for component styles, [Fraunces](https://fonts.google.com/specimen/Fraunces) for display type and [Inter Tight](https://fonts.google.com/specimen/Inter+Tight) for body/UI, a warm cream-toned palette (Fi/Expensify-inspired, not a default gray system). Icons are [lucide-react](https://lucide.dev) for components built before the icon refresh, and Streamline Flex (exported as SVG) for everything after it — see CLAUDE.md's "Icons" section for which is which.

## Structure

```text
tokens/figma/                    ← exported from Figma (DTCG format), do not edit by hand
  primitives.json                  color ramps, spacing, radius
  semantic.light.json              text / bg / border / fg — light mode
  semantic.dark.json               same tokens — dark mode
  typography-sizing.default.json   font sizes, line heights, touch target, icon sizes
  typography-sizing.large-text.json  accessibility mode for older users
scripts/build-tokens.mjs         ← Style Dictionary build
build/css/                       ← generated, committed
  tokens.css                       :root (light + default text size)
  theme-dark.css                   [data-theme="dark"]
  text-large.css                   [data-text-size="large"]
build/json/tokens.json           ← flat JSON (for JS / React Native)
src/
  components/<Name>/               One folder per component (.tsx, .module.css, index.ts, .stories.tsx)
  playground/                      Playground.tsx — every component/variant, for manual QA
  assets/                          Illustrations and exported icons
  main.tsx                         Loads token stylesheets + fonts, mounts the playground
.storybook/                      ← Storybook config (main.ts, preview.tsx)
```

## Usage

```bash
npm install
npm run tokens   # rebuild build/css + build/json from tokens/figma
npm run dev      # playground at localhost:5173
npm run build    # typecheck + production build
```

```html
<link rel="stylesheet" href="build/css/tokens.css">
<link rel="stylesheet" href="build/css/theme-dark.css">
<link rel="stylesheet" href="build/css/text-large.css">

<!-- Large text mode, same switch as the "Large text" mode in Figma -->
<body data-text-size="large">
  <button style="min-height: var(--size-touch-target); background: var(--bg-brand-solid); color: var(--text-on-brand);">
    Continue
  </button>
</body>
```

Token names match the code syntax set on every Figma variable (`text/primary` → `var(--text-primary)`), so Dev Mode and the code speak the same language.

## Updating tokens from Figma

1. Change variables in the Figma library.
2. Re-export them to `tokens/figma/` (done with Claude + the Figma MCP).
3. `npm run tokens`, then commit `tokens/` and `build/` in the same commit.

The **Tokens** GitHub Action rebuilds on every push/PR and fails if `build/` doesn't match the tokens.

## Components

One component per branch (`feat/<component-name>`), one PR each, same shape as `DocumentCard` — see CLAUDE.md for the prop-mapping and token rules every component follows.

| Component | Status |
| --- | --- |
| DocumentCard | ✅ shipped |
| ValidationMessage | ✅ shipped |
| EstimateCard | ✅ shipped |
| ClaimStatusStepper | ✅ shipped |
| PetSelector | ✅ shipped |
| CameraModule | ✅ shipped |

## Storybook

```bash
npm run storybook         # dev server at localhost:6006
npm run build-storybook   # static export to storybook-static/
```

Every component has a `.stories.tsx` colocated next to it, with `tags: ['autodocs']` so Storybook generates a props-table docs page from the same JSDoc comments used in the component source — no separate documentation to keep in sync. The toolbar has **Theme** (light/dark) and **Text size** (default/large) globals that set `data-theme`/`data-text-size` on `<html>`, mirroring the Playground's toggle buttons, so every story is checkable in all 4 combinations. [`@storybook/addon-a11y`](https://storybook.js.org/docs/writing-tests/accessibility-testing) runs real axe-core checks per story.

Published automatically to GitHub Pages on every push to `main` by the **Storybook** GitHub Action.

## Code Connect

Every component has a colocated `<Name>.figma.ts` — a [Code Connect](https://www.figma.com/code-connect-docs/) parserless template mapping its Figma component to the matching React component, so Figma Dev Mode can show the real code snippet (with the right props filled in) instead of generic markup.

These templates are written and ready, but **not yet published** — the nybblegroup UX challenge Library file is on a Figma plan below Organization/Enterprise, and Code Connect's publish/inspect APIs require a Dev or Full seat on one of those plans. Once the file is on a qualifying plan:

```bash
npm install --save-dev @figma/code-connect
npx figma connect publish --token <figma-personal-access-token>
```

`figma.config.json` at the repo root already points the CLI at `src/components/**/*.figma.ts`. `.figma.ts` files are excluded from `tsc`/`vite build` (see `tsconfig.app.json`) since they import the `figma` virtual module that only exists once `@figma/code-connect` is installed — install it before publishing, and editor type-checking on these files will start working too.

| Component | Figma component | Template |
| --- | --- | --- |
| DocumentCard | Document card | ✅ |
| ValidationMessage | Validation message | ✅ |
| EstimateCard | Estimate card | ✅ |
| ClaimStatusStepper | Claim status stepper | ✅ |
| PetSelector | Pet selector card | ✅ |
| CameraModule | Camera overlay | ✅ |

The Library file also has unpublished-to-code Figma components (ClaimCard, CoverageRow, ClaimHeader, CoverageSummary, AppBar, TabBar, BottomSheet, ActionBar) with no corresponding React component yet — no template exists for these until they're built.

## Roadmap

- [x] **M0** — docs cleanup (this file, CLAUDE.md, repo hygiene)
- [x] **M1** — tokens re-export / sync check
- [x] **M2** — remaining components (table above)
- [x] **M3** — Storybook published on GitHub Pages
- [x] **M4** — iterate on design-review feedback (ValidationMessage icon sync, #17 and #18)
- [x] **v0.1** — [tagged](https://github.com/juanpatamayo-cell/nybble-claims/releases/tag/v0.1): full component set, Storybook published
- [x] **v1.0** — [tagged](https://github.com/juanpatamayo-cell/nybble-claims/releases/tag/v1.0): design-review feedback addressed, Code Connect templates written
