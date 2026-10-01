# nybble-claims

Design tokens and React components for a pet insurance reimbursement flow (nybblegroup UX challenge).

## Source of truth
- Figma library: https://www.figma.com/design/IEAuFSPBjRPwXbmMdmFfcK/nybblegroup-UX-challenge-Library
- Tokens exported to tokens/figma/ (DTCG) → built with `npm run tokens` into build/css/

## Rules
- Use only CSS variables from build/css/tokens.css (e.g. var(--text-primary), var(--spacing-16)). No hardcoded colors or sizes.
- Touch targets use var(--size-touch-target). Components must work with data-text-size="large".
- Icons: lucide-react (same names as the Feather icons in Figma).
- Component props mirror Figma properties (State, Title, Show action → state, title, showAction).
- One component per branch (feat/<component-name>) and one PR per component.
- Small commits with conventional messages (feat:, fix:, docs:, chore:).

## Current state of the repo

Only the token pipeline exists today. There is **no React app, bundler, component folder, Storybook, asset folder or icon package installed yet**, so don't assume any of them. When the first component lands, it sets the pattern (see "Components" below) and this file should be updated.

```
tokens/figma/          DTCG JSON exported from Figma. Never edit by hand.
scripts/build-tokens.mjs  Style Dictionary v4 build (the only npm script: `npm run tokens`)
build/css/             Generated, committed. Never edit by hand.
  tokens.css             :root (primitives + light semantic + default sizing)
  theme-dark.css         [data-theme="dark"] (semantic colors only)
  text-large.css         [data-text-size="large"] (font-size, line-height, size only)
build/json/tokens.json Flat JSON of the default build (for JS / React Native)
.github/workflows/tokens.yml  CI: rebuilds tokens and fails if build/ is stale
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
- **Type**: `--font-size-{display-lg…display-xs | text-xl…text-xs}` paired with the matching `--line-height-*`, plus `--font-weight-{regular|medium|semibold|bold}` and `--font-family-body`.
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
```

Gotchas:
- `--font-family-body` is emitted unquoted with no fallback (`Inter`). Always add a fallback in the consuming declaration (`var(--font-family-body), system-ui, sans-serif`). Inter isn't loaded anywhere yet, so the page that uses the components has to load it.
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

## Components (planned — first one sets the pattern)

Roadmap: `DocumentCard`, `ValidationMessage`, `EstimateCard`, `ClaimStatusStepper`, then Storybook on GitHub Pages, then Code Connect.

No framework or styling setup exists yet. Before writing the first component, ask the user to confirm the stack (React + Vite, and CSS Modules vs. plain CSS) instead of picking one silently. Whatever is chosen, these rules hold:

- Name the component exactly as the Figma component (PascalCase).
- Props mirror Figma component properties, camelCased; variant values become string unions in lowercase:
  - Variant `State = Default | Error` → `state: 'default' | 'error'`
  - Text property `Title` → `title: string`
  - Boolean `Show action` → `showAction?: boolean`
  - Instance swap `Icon` → `icon?: LucideIcon` (or a ReactNode)
- Style only with token variables. No inline hex/px, no Tailwind-style utility values.

```tsx
// Shape to follow (illustrative, not in the repo yet)
import { FileText } from 'lucide-react';

type DocumentCardProps = {
  state?: 'default' | 'uploading' | 'error';
  title: string;
  showAction?: boolean;
};

export function DocumentCard({ state = 'default', title, showAction = true }: DocumentCardProps) {
  return (
    <div className={`document-card document-card--${state}`}>
      <FileText aria-hidden style={{ width: 'var(--size-icon-md)', height: 'var(--size-icon-md)', color: 'var(--fg-secondary)' }} />
      <span className="document-card__title">{title}</span>
      {showAction && <button className="document-card__action">Replace</button>}
    </div>
  );
}
```

## Icons

- Figma uses Feather icons; code uses `lucide-react` (not installed yet: `npm i lucide-react` in the component PR).
- Map by name: Feather `file-text` → `FileText`, `alert-circle` → `AlertCircle`, `check-circle` → `CheckCircle`. Lucide renamed a few (e.g. some `*-circle` icons became `Circle*`); if an import doesn't exist, search Lucide for the Feather name rather than exporting an SVG.
- Don't download icon SVGs from Figma for icons that exist in Lucide.
- Size with `--size-icon-*`, color with `--fg-*` (`currentColor` flows from `color`). Decorative icons get `aria-hidden`.

## Assets

No image/illustration assets exist yet and there's no CDN. If a design needs one (pet illustration, empty state), export it with `download_assets` into `src/assets/` (SVG for vector, WebP/PNG @2x for raster) and reference it by relative import. Don't use the temporary Figma asset URLs in committed code.

## Figma MCP workflow

1. From a Figma link, take `fileKey` and `node-id` (convert `123-456` to `123:456`).
2. `get_design_context` for the node (load the figma-design-to-code skill first), plus `get_screenshot` for visual reference.
3. `get_variable_defs` to confirm which variables the node uses; they should all resolve to existing CSS variables.
4. Translate the generated code into this repo's conventions: replace any Tailwind/raw values with `var(--…)` tokens, Feather/SVG icons with `lucide-react`, and property names with the prop mapping above.
5. Check the result against the screenshot in light/dark and default/large text.
6. Branch `feat/<component-name>`, conventional commits, one PR per component.
