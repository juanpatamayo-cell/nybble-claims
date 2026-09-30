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
