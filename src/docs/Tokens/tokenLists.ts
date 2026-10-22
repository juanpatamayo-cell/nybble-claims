// Token NAMES only (identifiers, not values) — grouped to match
// CLAUDE.md's "Figma collection → file → CSS mapping" table and the
// "Which tier to use" section. Every actual color/size shown on the page
// is read live from build/css/tokens.css via CSS var() and
// useResolvedVar, never copied in as a literal — this list only decides
// what to display, it can't cause the page to drift on its own.

export const BG_TOKENS = [
  '--bg-primary',
  '--bg-secondary',
  '--bg-tertiary',
  '--bg-disabled',
  '--bg-overlay',
  '--bg-brand-solid',
  '--bg-brand-solid-hover',
  '--bg-brand-subtle',
  '--bg-error-solid',
  '--bg-error-subtle',
  '--bg-warning-subtle',
  '--bg-success-subtle',
  '--bg-info-subtle',
];

export const TEXT_COLOR_TOKENS = [
  '--text-primary',
  '--text-secondary',
  '--text-tertiary',
  '--text-placeholder',
  '--text-disabled',
  '--text-brand',
  '--text-error',
  '--text-warning',
  '--text-success',
  '--text-info',
  '--text-on-brand',
  '--text-inverse',
];

export const BORDER_TOKENS = [
  '--border-primary',
  '--border-secondary',
  '--border-disabled',
  '--border-brand',
  '--border-focus',
  '--border-error',
  '--border-warning',
  '--border-success',
];

export const FG_TOKENS = [
  '--fg-primary',
  '--fg-secondary',
  '--fg-disabled',
  '--fg-brand',
  '--fg-error',
  '--fg-warning',
  '--fg-success',
  '--fg-info',
  '--fg-on-brand',
];

export const DISPLAY_SIZE_TOKENS = [
  { size: '--font-size-display-lg', lineHeight: '--line-height-display-lg' },
  { size: '--font-size-display-md', lineHeight: '--line-height-display-md' },
  { size: '--font-size-display-sm', lineHeight: '--line-height-display-sm' },
  { size: '--font-size-display-xs', lineHeight: '--line-height-display-xs' },
];

export const TEXT_SIZE_TOKENS = [
  { size: '--font-size-text-xl', lineHeight: '--line-height-text-xl' },
  { size: '--font-size-text-lg', lineHeight: '--line-height-text-lg' },
  { size: '--font-size-text-md', lineHeight: '--line-height-text-md' },
  { size: '--font-size-text-sm', lineHeight: '--line-height-text-sm' },
  { size: '--font-size-text-xs', lineHeight: '--line-height-text-xs' },
];

export const SPACING_TOKENS = [
  '--spacing-0',
  '--spacing-2',
  '--spacing-4',
  '--spacing-6',
  '--spacing-8',
  '--spacing-12',
  '--spacing-16',
  '--spacing-20',
  '--spacing-24',
  '--spacing-32',
  '--spacing-40',
  '--spacing-48',
  '--spacing-64',
  '--spacing-80',
  '--spacing-96',
];

export const RADIUS_TOKENS = [
  '--radius-none',
  '--radius-xxs',
  '--radius-xs',
  '--radius-sm',
  '--radius-md',
  '--radius-lg',
  '--radius-xl',
  '--radius-2xl',
  '--radius-3xl',
  '--radius-4xl',
  '--radius-full',
];
