import type { ClaimStatus } from '../ClaimStatusStepper';
import styles from './StatusBadge.module.css';

const STATUS_LABEL: Record<ClaimStatus, string> = {
  'in-review': 'In review',
  'action-required': 'Action required',
  approved: 'Approved',
  paid: 'Paid',
};

/**
 * Shared claim-status badge (dot + label) — not a Figma component of its
 * own, just the identical "Status badge" piece ClaimHeader's Figma
 * description points back to on ClaimCard (see issue #51). Internal
 * building block: no barrel export, no stories/Code Connect template.
 */
export function StatusBadge({ status }: { status: ClaimStatus }) {
  return (
    <span className={`${styles.badge} ${styles[`badge--${status}`]}`}>
      <span className={`${styles.dot} ${styles[`dot--${status}`]}`} />
      {STATUS_LABEL[status]}
    </span>
  );
}
