import type { ReactNode } from 'react';
import { ArrowLeft, ChevronLeft } from 'lucide-react';
import { InformationCircleIcon } from '../../assets/icons';
import styles from './AppBar.module.css';

export type AppBarPlatform = 'ios' | 'android';
export type AppBarType = 'standard' | 'large';

export type AppBarProps = {
  /** Figma variant `Platform`. iOS: centered title, text "Back" button. Android (M3): leading arrow, left-aligned title. */
  platform?: AppBarPlatform;
  /** Figma variant `Type`. Large moves the title to a second row in the display typeface. */
  type?: AppBarType;
  /** Figma text property `Title`, e.g. "New claim". */
  title: string;
  /** Figma boolean property `Show back`. */
  showBack?: boolean;
  /** Figma boolean property `Show action`. */
  showAction?: boolean;
  /** Figma instance-swap property `Action icon`. Defaults to the contextual-help icon, per Figma's own usage note. */
  actionIcon?: ReactNode;
  /**
   * Not a Figma property. Accessible label for the action button — override
   * when `actionIcon` is swapped for something other than contextual help.
   */
  actionLabel?: string;
  /** Not a Figma property (static prototype has no handlers). Fires when the back button is tapped. */
  onBack?: () => void;
  /** Not a Figma property. Fires when the action button is tapped. */
  onAction?: () => void;
};

export function AppBar({
  platform = 'ios',
  type = 'standard',
  title,
  showBack = true,
  showAction = true,
  actionIcon,
  actionLabel = 'More info',
  onBack,
  onAction,
}: AppBarProps) {
  const isAndroid = platform === 'android';
  const isLarge = type === 'large';

  return (
    <div
      className={`${styles.bar} ${styles[`bar--${platform}`]} ${styles[`bar--${type}`]}`}
    >
      <div className={styles.row}>
        <div className={styles.leading}>
          {showBack && (
            <button
              type="button"
              className={styles.back}
              onClick={onBack}
              aria-label="Back"
            >
              {isAndroid ? (
                <ArrowLeft aria-hidden className={styles.backIcon} />
              ) : (
                <>
                  <ChevronLeft aria-hidden className={styles.backIcon} />
                  <span className={styles.backLabel}>Back</span>
                </>
              )}
            </button>
          )}
        </div>

        {!isLarge && (
          <p className={`${styles.title} ${styles[`title--${platform}`]}`}>
            {title}
          </p>
        )}

        <div className={styles.trailing}>
          {showAction && (
            <button
              type="button"
              className={styles.action}
              onClick={onAction}
              aria-label={actionLabel}
            >
              {actionIcon ?? (
                <InformationCircleIcon
                  aria-hidden
                  className={styles.actionIcon}
                />
              )}
            </button>
          )}
        </div>
      </div>

      {isLarge && (
        <div className={styles.largeTitleRow}>
          <p
            className={`${styles.largeTitle} ${styles[`largeTitle--${platform}`]}`}
          >
            {title}
          </p>
        </div>
      )}
    </div>
  );
}
