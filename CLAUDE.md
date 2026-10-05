# nybble-claims

Design tokens and React components for a pet insurance reimbursement flow (nybblegroup UX challenge).

## Source of truth
- Figma library: https://www.figma.com/design/IEAuFSPBjRPwXbmMdmFfcK/nybblegroup-UX-challenge-Library
- Tokens exported to tokens/figma/ (DTCG) → built with `npm run tokens` into build/css/

## Rules
- Use only CSS variables from build/css/tokens.css (e.g. var(--text-primary), var(--spacing-16)). No hardcoded colors or sizes.
- Touch targets use var(--size-touch-target). Components must work with data-text-size="large".
- Icons: Streamline Flex, exported as SVG to match the Figma source (see "Icons" below). `lucide-react` stays installed for components built before this change; don't retrofit them.
- Component props mirror Figma properties (State, Title, Show action → state, title, showAction).
- One component per branch (feat/<component-name>) and one PR per component.
- Small commits with conventional messages (feat:, fix:, docs:, chore:).

## Current state of the repo

The token pipeline plus a React + Vite app exist. Stack: React 19, Vite, CSS Modules (`*.module.css`), `lucide-react` for Feather-era icons, `@fontsource/inter-tight` + `@fontsource/fraunces` for type. All 6 planned components are shipped (see "Components" below); `DocumentCard` set the pattern the rest followed. Components are previewed both in `src/playground/Playground.tsx` and in Storybook (`npm run storybook`; see "Storybook" below). No `src/assets/` illustrations are committed yet; see "Assets" below.

```
tokens/figma/          DTCG JSON exported from Figma. Never edit by hand.
scripts/build-tokens.mjs  Style Dictionary v4 build (the only npm script: `npm run tokens`)
build/css/             Generated, committed. Never edit by hand.
  tokens.css             :root (primitives + light semantic + default sizing)
  theme-dark.css         [data-theme="dark"] (semantic colors only)
  text-large.css         [data-text-size="large"] (font-size, line-height, size only)
build/json/tokens.json Flat JSON of the default build (for JS / React Native)
src/
  components/<Name>/     One folder per component: <Name>.tsx, <Name>.module.css, index.ts, <Name>.stories.tsx
  components/index.ts    Re-exports every component
  playground/            Playground.tsx — renders every component/variant for manual QA
  styles/global.css      Resets + font-smoothing only; component styles live in their module.css
  main.tsx               Loads the three token stylesheets + fonts, mounts Playground
.storybook/             main.ts (addons), preview.tsx (token/font imports, theme+text-size toolbar globals)
.github/workflows/tokens.yml      CI: rebuilds tokens and fails if build/ is stale
.github/workflows/storybook.yml   CI: builds Storybook on every push/PR, deploys to Pages from main
```

## Tokens

### Figma collection → file → CSS mapping

| Figma collection | Mode | File | Output |
|---|---|---|---|
| Primitives | — | `primitives.json` | `--color-*`, `--spacing-*`, `--radius-*` in `:root` |
| Semantic | Light | `semantic.light.json` | `--text-*`, `--bg-*`, `--border-*`, `--fg-*` in `:root` |
| Semantic | Dark | `semantic.dark.json` | same names under `[data-theme="dark"]` |
| Typography & sizing | Default | `typography-sizing.default.json` | `--font-*`, `--line-height-*`, `--size-*` in `:root` |
| Typography & sizing | Large text | `typography-sizing.large-text.json` | size overrides under `[data-text-size="large"]` |

Naming: the Figma variable path maps 1:1 to the CSS variable (`text/primary` → `--text-primary`, `bg/brand-solid` → `--bg-brand-solid`). The code syntax on each Figma variable is already set to this, so Dev Mode and `get_design_context` output should show `var(--…)` names directly.

### Which tier to use

- **Colors: semantic tokens only** (`--text-*`, `--bg-*`, `--border-*`, `--fg-*`). Never use `--color-gray-700` etc. in components: primitives don't change in dark mode, so the component would break there.
  - `--fg-*` is for icons and non-text graphics; `--text-*` is for text.
  - `color/gray/*` is a warm neutral ramp (cream, not cold gray) — matches the Fi/Expensify look-and-feel direction. Don't reintroduce a pure achromatic gray; if a new neutral is needed, keep the same warm undertone.
- **Spacing / radius**: primitives are the intended API (`--spacing-16`, `--radius-md`). The number is the pixel value on the 4px scale (0, 2, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96).
  - Card-shaped surfaces (Document card, Estimate card, Claim card) use `--radius-2xl` (16px), not `--radius-xl` (12px) — a deliberate departure from whatever `radius-xl` is used for elsewhere, to match the rounder cards in the Fi/Expensify reference apps. New card-like components should follow `--radius-2xl` too.
- **Type**: `--font-size-{display-lg…display-xs | text-xl…text-xs}` paired with the matching `--line-height-*`, plus `--font-weight-{regular|medium|semibold|bold}` and two typeface tokens:
  - `--font-family-body` — `Inter Tight`. All UI and body text, every component.
  - `--font-family-display` — `Fraunces`. Headline moments only (greetings, success states, empty states), never body text or dense UI. Pairs with `--font-family-body` the same way the research report pairs Fraunces with Inter Tight.
- **Sizing**: `--size-touch-target` (48 → 56px in large text), `--size-icon-{sm|md|lg}`.

```css
.card {
  padding: var(--spacing-16);
  gap: var(--spacing-8);
  border: 1px solid var(--border-secondary);
  border-radius: var(--radius-xl);
  background: var(--bg-primary);
}
.card__title {
  font: var(--font-weight-semibold) var(--font-size-text-lg) / var(--line-height-text-lg) var(--font-family-body), sans-serif;
  color: var(--text-primary);
}
.outcome__headline {
  /* A headline moment (e.g. "Reimbursement sent") — font-family-display, not -body. */
  font: var(--font-weight-semibold) var(--font-size-display-xs) / var(--line-height-display-xs) var(--font-family-display), Georgia, serif;
  color: var(--text-primary);
}
```

Gotchas:
- `--font-family-body` is `'Inter Tight'` and `--font-family-display` is `Fraunces`, both quoted by the build since the family names have a space. Always add a fallback in the consuming declaration (`var(--font-family-body), system-ui, sans-serif` / `var(--font-family-display), Georgia, serif`). The page that uses the components has to load both fonts itself — the React app does this in `src/main.tsx` via `@fontsource/inter-tight` and `@fontsource/fraunces`.
- The Figma plugin bridge used to edit tokens in this repo can't load `Inter Tight` in its own sandbox (`figma.loadFontAsync` fails for every weight except Regular, which only worked once by an unexplained fluke). If `font-family/body` ever needs to change again, the edit has to be made by hand in Figma's own Variables panel, then re-exported into `tokens/figma/typography-sizing.default.json` and rebuilt — the automated `use_figma` path can't do it. `Fraunces` isn't affected; it went in through the normal automated path.
- There are no composite text styles in the build. Figma text styles have to be rebuilt from the size, line-height and weight variables.
- 1px borders and `0` aren't tokens; hardcoding `1px` border width is fine.
- `--bg-overlay` is pure black; apply opacity in the component (e.g. `opacity` or `color-mix`), don't add a new color.

### When a value from Figma has no token

If `get_design_context` returns a raw hex or px value:
1. Check whether the Figma layer is actually bound to a variable (it often is and the value just wasn't resolved). Use the matching token.
2. If it truly isn't bound, don't invent a token and don't hardcode it silently. Use the nearest token and flag the mismatch to the user so it can be fixed in the Figma library.

### Changing tokens

Tokens flow one way: **Figma → `tokens/figma/` → `npm run tokens` → `build/`**.
- Never edit `tokens/figma/*.json` or `build/**` by hand to "fix" a value. Change the variable in Figma, re-export it with the Figma MCP (`get_variable_defs` / `use_figma`) into the same DTCG shape (`$type`, `$value`, references as `{color.gray.900}`), then rebuild.
- Commit `tokens/` and `build/` together; CI fails if `build/` doesn't match.
- A new token in `typography-sizing.*` only reaches `text-large.css` if its top-level group is `font-size`, `line-height` or `size` (filter in `scripts/build-tokens.mjs`). A new group needs a filter change.

## Theming and accessibility modes

Both modes are attribute switches on an ancestor (normally `<html>` or `<body>`), and all three stylesheets must be loaded:

```html
<link rel="stylesheet" href="build/css/tokens.css">
<link rel="stylesheet" href="build/css/theme-dark.css">
<link rel="stylesheet" href="build/css/text-large.css">
<html data-theme="dark" data-text-size="large">
```

Component requirements:
- Never set fixed heights on text containers; let `--line-height-*` drive height so large text doesn't clip.
- Interactive elements: `min-height: var(--size-touch-target)` (and `min-width` for icon-only buttons).
- Icons sized with `--size-icon-*` so they scale in large text.
- Verify every component in 4 combinations: light/dark × default/large text.
- No responsive breakpoints are defined as tokens. The flow is mobile-first; use fluid layout (flex/grid, `max-width`) and only add media queries if a design actually changes layout.

## Components

Roadmap: ~~`DocumentCard`~~, ~~`ValidationMessage`~~, ~~`EstimateCard`~~, ~~`ClaimStatusStepper`~~, ~~`PetSelector`~~, ~~`CameraModule`~~ — all shipped. Next: Code Connect, then iterate on design-review feedback (M4).

Stack is decided: React + Vite, CSS Modules. Don't re-ask the user — follow `src/components/DocumentCard/` as the reference implementation (`DocumentCard.tsx`, `DocumentCard.module.css`, `index.ts`, `DocumentCard.stories.tsx`) for file layout, prop conventions and token usage; these rules hold for every component after it:

- Name the component exactly as the Figma component (PascalCase).
- Props mirror Figma component properties, camelCased; variant values become string unions in lowercase:
  - Variant `State = Default | Error` → `state: 'default' | 'error'`
  - Text property `Title` → `title: string`
  - Boolean `Show action` → `showAction?: boolean`
  - Instance swap `Icon` → `icon?: LucideIcon` for Feather-sourced icons, or `icon?: React.FC<React.SVGProps<SVGSVGElement>>` for an exported Streamline Flex SVG (see "Icons")
- Style only with token variables. No inline hex/px, no Tailwind-style utility values.
- Add every new component's states to `src/playground/Playground.tsx` so they're visible for manual QA (light/dark × default/large text), and to a colocated `<Name>.stories.tsx` with `tags: ['autodocs']` (see "Storybook" below) — same states in both, they're not substitutes for each other.

## Storybook

- `npm run storybook` (dev, localhost:6006) / `npm run build-storybook` (static export to `storybook-static/`, gitignored). Deployed to GitHub Pages from `main` by `.github/workflows/storybook.yml`.
- One `.stories.tsx` per component, colocated, `tags: ['autodocs']` so the props table is generated from the same JSDoc comments on the component's prop types — don't write separate prose docs that can drift from them.
- `.storybook/preview.tsx` imports the same token stylesheets + fonts as `src/main.tsx` and exposes **Theme** and **Text size** as toolbar globals (not Storybook's built-in `backgrounds` addon) that set `data-theme`/`data-text-size` on `<html>`, mirroring the Playground's toggle buttons — check all 4 combinations there, same as everywhere else.
- `@storybook/addon-a11y` runs real axe-core checks per story (panel tab, not CI-blocking — `test: 'todo'` in preview.tsx). Keep deliberately light: no `@storybook/addon-vitest`, Playwright, or Chromatic — `storybook init` installs those by default but this project doesn't use Storybook for test execution or visual-regression hosting, only as the component doc site.

## Icons

- As of the icon refresh (post-warm-palette), Figma's product icons are **Streamline Flex** (`*-Flex` suffix on the component name, e.g. `Home-2 Streamline Flex`, `Text-File Streamline Flex`), not Feather. This was a deliberate switch to match the Streamline illustration set already used for empty states — Lucide's default line weight didn't read as part of the same family.
- Streamline Flex has no lucide-react equivalent. Export each icon as SVG with `download_assets` into `src/assets/icons/`, the same workflow as illustrations (see "Assets" below) — don't try to map it to a Lucide name or search Lucide for a substitute.
- In Figma these icons are single-stroke and bound to `fg/*` variables (confirmed on the tab bar and info icon: `fg/primary`, brand). When exporting, strip the literal stroke color and set `stroke="currentColor"` in the SVG so it still themes through `color: var(--fg-*)` the same way a Lucide icon would — don't bake in the hex from the export.
- Components built before this change (e.g. `DocumentCard`'s action-button icons) can stay on `lucide-react`; it's still installed. Only use Streamline Flex where the Figma source itself now uses it — check the instance's main component name in `get_design_context` rather than assuming.
- Size with `--size-icon-*`. Decorative icons get `aria-hidden`.

## Assets

No image/illustration assets exist yet and there's no CDN. If a design needs one (pet illustration, empty state), export it with `download_assets` into `src/assets/` (SVG for vector, WebP/PNG @2x for raster) and reference it by relative import. Don't use the temporary Figma asset URLs in committed code.

## Figma MCP workflow

1. From a Figma link, take `fileKey` and `node-id` (convert `123-456` to `123:456`).
2. `get_design_context` for the node (load the figma-design-to-code skill first), plus `get_screenshot` for visual reference.
3. `get_variable_defs` to confirm which variables the node uses; they should all resolve to existing CSS variables.
4. Translate the generated code into this repo's conventions: replace any Tailwind/raw values with `var(--…)` tokens and property names with the prop mapping above. For icons, check the instance's main component name — Streamline Flex icons get exported as SVG (see "Icons"), Feather icons predating the refresh map to `lucide-react`.
5. Check the result against the screenshot in light/dark and default/large text.
6. Branch `feat/<component-name>`, conventional commits, one PR per component.
