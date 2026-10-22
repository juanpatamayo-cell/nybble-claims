import { CoverageRow, type CoverageRowType } from '../CoverageRow';
import styles from './CoverageSummary.module.css';

export type CoverageSummaryItem = {
  /** Figma variant `Type` on the nested Coverage row instance. */
  type?: CoverageRowType;
  /** Figma text property `Label` on the nested Coverage row instance. */
  label: string;
  /** Figma text property `Amount` on the nested Coverage row instance. */
  amount: string;
};

export type CoverageSummaryProps = {
  /** Figma text property `Section title`, e.g. "Covered and not covered". */
  title?: string;
  /**
   * Not a Figma property — the Coverage row instances are a fixed
   * composition in the design, not component properties. Real usage needs
   * different line items per claim, so they're data here (see this
   * component's Figma description).
   */
  items: CoverageSummaryItem[];
  /** Figma text property `Note`. */
  footnote?: string;
};

export function CoverageSummary({
  title = 'Covered and not covered',
  items,
  footnote,
}: CoverageSummaryProps) {
  return (
    <div className={styles.summary}>
      <p className={styles.title}>{title}</p>
      {items.map((item) => (
        <CoverageRow
          key={item.label}
          type={item.type}
          label={item.label}
          amount={item.amount}
        />
      ))}
      {footnote && <p className={styles.footnote}>{footnote}</p>}
    </div>
  );
}
