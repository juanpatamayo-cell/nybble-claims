import type { ClaimStatus } from '../ClaimStatusStepper';
import styles from './ClaimHeader.module.css';

const STATUS_LABEL: Record<ClaimStatus, string> = {
  'in-review': 'In review',
  'action-required': 'Action required',
  approved: 'Approved',
  paid: 'Paid',
};

export type ClaimHeaderProps = {
  /** Figma variant `Status`. Same badge as `ClaimCard` — see that component's
   * module.css for the token-mismatch note on the `action-required` color. */
  status?: ClaimStatus;
  /** Figma text property `Title`, e.g. "Vet visit — Happy Paws Clinic". */
  title: string;
  /** Figma text property `Subtitle`, e.g. "Luna · Claim NB-20418 · Sep 12". */
  subtitle: string;
};

export function ClaimHeader({
  status = 'in-review',
  title,
  subtitle,
}: ClaimHeaderProps) {
  return (
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
  );
}
