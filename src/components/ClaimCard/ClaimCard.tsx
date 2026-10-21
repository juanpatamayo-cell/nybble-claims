import type { ClaimStatus } from '../ClaimStatusStepper';
import styles from './ClaimCard.module.css';

const STATUS_LABEL: Record<ClaimStatus, string> = {
  'in-review': 'In review',
  'action-required': 'Action required',
  approved: 'Approved',
  paid: 'Paid',
};

// Not Figma text properties — these are the fixed per-status messages baked
// into each Status variant in Figma (confirmed via componentPropertyDefinitions:
// only Title/Subtitle/Amount are real text overrides). Mirrors
// ClaimStatusStepper's status vocabulary per this component's own Figma
// description ("Status mirrors the Claim status stepper").
const STATUS_MESSAGE: Record<ClaimStatus, string> = {
  'in-review': "We'll let you know as soon as the review is done.",
  'action-required': 'One document needs a retake. Tap to fix it.',
  approved: 'Payment is on its way to your bank account.',
  paid: 'Sent to your bank account on Sep 18.',
};

export type ClaimCardProps = {
  /** Figma variant `Status`. */
  status?: ClaimStatus;
  /** Figma text property `Title`, e.g. "Vet visit — Happy Paws Clinic". */
  title: string;
  /** Figma text property `Subtitle`, e.g. "Luna · Sep 12". */
  subtitle: string;
  /** Figma text property `Amount`, e.g. "$96.00". */
  amount: string;
  /**
   * Not a Figma property (static prototype has no handler). Fires on tap —
   * the whole card is the target, same pattern as `PetSelector`, since the
   * action-required copy ("Tap to fix it") implies the card itself opens
   * the claim.
   */
  onPress?: () => void;
};

export function ClaimCard({
  status = 'in-review',
  title,
  subtitle,
  amount,
  onPress,
}: ClaimCardProps) {
  return (
    <button type="button" className={styles.card} onClick={onPress}>
      <div className={styles.header}>
        <div className={styles.identity}>
          <p className={styles.title}>{title}</p>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
        <span className={`${styles.badge} ${styles[`badge--${status}`]}`}>
          <span className={`${styles.dot} ${styles[`dot--${status}`]}`} />
          {STATUS_LABEL[status]}
        </span>
      </div>

      <div className={styles.amountRow}>
        <p className={styles.amountLabel}>Estimated reimbursement</p>
        <p className={styles.amount}>{amount}</p>
      </div>

      <p className={styles.message}>{STATUS_MESSAGE[status]}</p>
    </button>
  );
}
