import { HelpCircle, Info } from 'lucide-react';
import styles from './EstimateCard.module.css';

export type EstimateCardSize = 'full' | 'compact';

export type EstimateBreakdownRow = {
  /** Row label, e.g. "Vet bill total". */
  label: string;
  /** Row value, e.g. "$185.00" or "−$15.00" or "80%". Pre-formatted — this component doesn't do currency math. */
  value: string;
  /** Shows the "help-circle" icon that explains the term (deductible, coverage, etc.). */
  info?: boolean;
};

export type EstimateCardProps = {
  /** Figma variant `Size`. Compact drops the breakdown and footnote for use in a confirmation/tracker summary. */
  size?: EstimateCardSize;
  /** Figma text property `Amount`, e.g. "$96.00". Also the value shown on the total row in `full` size. */
  amount: string;
  /** Figma text property `Label`. */
  label?: string;
  /** Figma text property `Subtext`. `compact` size only. */
  subtext?: string;
  /** Figma text property `Footnote`. `full` size only. */
  footnote?: string;
  /**
   * Not a Figma property — the breakdown rows are plain editable text layers
   * in the design ("Vet bill total $185.00", "Annual deductible −$50.00", …),
   * not component properties. Real usage needs different numbers per claim,
   * so they're data here. `full` size only.
   */
  breakdown?: EstimateBreakdownRow[];
  /** Not a Figma property. Label for the bold total row under the breakdown. */
  totalLabel?: string;
  /** Not a Figma property (static prototype has no handlers). Fires with the row's label when its help icon is tapped. */
  onInfoClick?: (label: string) => void;
};

export function EstimateCard({
  size = 'full',
  amount,
  label = 'Estimated reimbursement',
  subtext,
  footnote,
  breakdown,
  totalLabel = "You'll receive about",
  onInfoClick,
}: EstimateCardProps) {
  const isCompact = size === 'compact';

  return (
    <div className={`${styles.card} ${styles[`card--${size}`]}`}>
      <div className={styles.header}>
        <p className={styles.label}>{label}</p>
        <p className={isCompact ? styles['amount--compact'] : styles['amount--full']}>{amount}</p>
        {isCompact && subtext && <p className={styles.subtext}>{subtext}</p>}
      </div>

      {!isCompact && (
        <>
          {breakdown && breakdown.length > 0 && (
            <div className={styles.breakdown}>
              {breakdown.map((row) => (
                <div className={styles.row} key={row.label}>
                  <div className={styles.rowLabel}>
                    <p className={styles.rowLabelText}>{row.label}</p>
                    {row.info && (
                      <button
                        type="button"
                        className={styles.infoButton}
                        onClick={() => onInfoClick?.(row.label)}
                        aria-label={`What does "${row.label}" mean?`}
                      >
                        <HelpCircle aria-hidden />
                      </button>
                    )}
                  </div>
                  <p className={styles.rowValue}>{row.value}</p>
                </div>
              ))}
              <div className={styles.divider} />
              <div className={styles.totalRow}>
                <p className={styles.totalLabel}>{totalLabel}</p>
                <p className={styles.totalValue}>{amount}</p>
              </div>
            </div>
          )}

          {footnote && (
            <div className={styles.footnote}>
              <Info aria-hidden className={styles.footnoteIcon} />
              <p className={styles.footnoteText}>{footnote}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
