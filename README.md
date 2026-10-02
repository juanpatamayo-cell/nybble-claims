# nybble-claims

Design tokens and React components for the **pet insurance reimbursement flow** designed for the nybblegroup UX challenge.

The source of truth is the Figma library **nybblegroup UX challenge – Library**. Its variables are exported to `tokens/figma/` and turned into CSS variables with [Style Dictionary](https://styledictionary.com); components are built in React to match it 1:1.

Full contributor conventions (prop mapping, icon rules, Figma MCP workflow) live in [CLAUDE.md](./CLAUDE.md) — this file is the overview.

## Stack

React 19 + Vite + TypeScript, CSS Modules for component styles, [Fraunces](https://fonts.google.com/specimen/Fraunces) for display type and [Inter Tight](https://fonts.google.com/specimen/Inter+Tight) for body/UI, a warm cream-toned palette (Fi/Expensify-inspired, not a default gray system). Icons are [lucide-react](https://lucide.dev) for components built before the icon refresh, and Streamline Flex (exported as SVG) for everything after it — see CLAUDE.md's "Icons" section for which is which.

## Structure

```
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
  components/<Name>/               One folder per component (.tsx, .module.css, index.ts)
  playground/                      Playground.tsx — every component/variant, for manual QA
  assets/                          Illustrations and exported icons
  main.tsx                         Loads token stylesheets + fonts, mounts the playground
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
|---|---|
| DocumentCard | ✅ shipped |
| ValidationMessage | planned |
| EstimateCard | planned |
| ClaimStatusStepper | planned |
| PetSelector | planned |
| CameraModule | planned |

## Roadmap

- [x] **M0** — docs cleanup (this file, CLAUDE.md, repo hygiene)
- [ ] **M1** — tokens re-export / sync check
- [ ] **M2** — remaining components (table above)
- [ ] **M3** — Storybook published on GitHub Pages
- [ ] **M4** — iterate on design-review feedback
- [ ] **v0.1** — tag once M2 lands (full component set)
- [ ] **v1.0** — tag once M3 + M4 land (published, documented, reviewed)
