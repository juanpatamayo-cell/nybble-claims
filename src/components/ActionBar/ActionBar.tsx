import styles from './ActionBar.module.css';

export type ActionBarPlatform = 'ios' | 'android';
export type ActionBarLayout = 'single' | 'stacked';

export type ActionBarProps = {
  /** Figma variant `Platform`. iOS adds extra bottom padding for the home indicator. */
  platform?: ActionBarPlatform;
  /** Figma variant `Layout`. `stacked` shows a secondary button below the primary one. */
  layout?: ActionBarLayout;
  /** Figma boolean `Show helper`. */
  showHelper?: boolean;
  /** Figma text property `Helper text`. */
  helperText?: string;
  /**
   * Not a Figma property — the primary button is an exposed `Button xl`
   * instance edited per-usage from Figma's instance panel, so its label is
   * real app data here, same as ClaimStatusStepper's step descriptions.
   */
  primaryLabel?: string;
  /** Not a Figma property (static prototype has no handlers). Primary button tap. */
  onPrimaryAction?: () => void;
  /** Not a Figma property, see `primaryLabel`. Only used when `layout` is `stacked`. */
  secondaryLabel?: string;
  /** Not a Figma property. Secondary button tap. */
  onSecondaryAction?: () => void;
};

export function ActionBar({
  platform = 'ios',
  layout = 'single',
  showHelper = false,
  helperText = 'You can save and finish later',
  primaryLabel = 'Continue',
  onPrimaryAction,
  secondaryLabel = 'Save for later',
  onSecondaryAction,
}: ActionBarProps) {
  return (
    <div className={`${styles.bar} ${styles[`bar--${platform}`]}`}>
      {showHelper && <p className={styles.helper}>{helperText}</p>}
      <button
        type="button"
        className={`${styles.button} ${styles['button--primary']}`}
        onClick={onPrimaryAction}
      >
        {primaryLabel}
      </button>
      {layout === 'stacked' && (
        <button
          type="button"
          className={`${styles.button} ${styles['button--secondary']}`}
          onClick={onSecondaryAction}
        >
          {secondaryLabel}
        </button>
      )}
    </div>
  );
}
