export { ClaimCard } from './ClaimCard';
export type { ClaimCardProps } from './ClaimCard';
// `ClaimStatus` is canonically exported from ClaimStatusStepper (see its
// index.ts) — re-exporting it here too would collide in the `export *`
// barrel at src/components/index.ts.
