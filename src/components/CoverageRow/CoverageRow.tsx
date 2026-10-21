import { CheckCircle2, XCircle } from 'lucide-react';
import styles from './CoverageRow.module.css';

export type CoverageRowType = 'covered' | 'not-covered';

export type CoverageRowProps = {
  /** Figma variant `Type`. */
  type?: CoverageRowType;
  /** Figma text property `Label`, e.g. "Exam and consultation". */
  label: string;
  /** Figma text property `Amount`, e.g. "$60.00". */
  amount: string;
};

export function CoverageRow({
  type = 'covered',
  label,
  amount,
}: CoverageRowProps) {
  const isCovered = type === 'covered';

  return (
    <div className={`${styles.row} ${styles[`row--${type}`]}`}>
      {isCovered ? (
        <CheckCircle2 aria-hidden className={styles.icon} />
      ) : (
        <XCircle aria-hidden className={styles.icon} />
      )}
      <p className={styles.label}>{label}</p>
      <p className={styles.amount}>{amount}</p>
    </div>
  );
}
