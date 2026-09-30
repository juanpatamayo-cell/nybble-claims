# nybble-claims

Design tokens (and, soon, components) for the **pet insurance reimbursement flow** designed for the nybblegroup UX challenge.

The source of truth is the Figma library **nybblegroup UX challenge – Library**. Its variables are exported to `tokens/figma/` and turned into CSS variables with [Style Dictionary](https://styledictionary.com).

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
```

## Usage

```bash
npm install
npm run tokens
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

## Roadmap

- [x] Tokens exported from Figma → CSS variables
- [ ] Components in React: DocumentCard, ValidationMessage, EstimateCard, ClaimStatusStepper
- [ ] Storybook published on GitHub Pages
- [ ] Code Connect between Figma components and code
