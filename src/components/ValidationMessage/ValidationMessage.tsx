import { ArrowRight } from 'lucide-react';
import type { SVGProps } from 'react';
import { BrokenLinkIcon, CheckSquareIcon, InformationCircleIcon, WarningDiamondIcon } from '../../assets/icons';
import styles from './ValidationMessage.module.css';

export type ValidationMessageType = 'info' | 'success' | 'warning' | 'error';

// Streamline Flex icons (post icon-refresh), not lucide-react — see
// CLAUDE.md's "Icons" section. Error was "Threat-Phone" (a device/danger
// glyph, flagged as a weak semantic fit) until a second design pass swapped
// it for "Broken-Link" — reads as generic mismatch/invalid, closer fit.
const ICONS: Record<ValidationMessageType, (props: SVGProps<SVGSVGElement>) => React.JSX.Element> = {
  info: InformationCircleIcon,
  success: CheckSquareIcon,
  warning: WarningDiamondIcon,
  error: BrokenLinkIcon,
};

export type ValidationMessageProps = {
  /** Figma variant `Type`. Icon and color follow from this — never color alone. */
  type?: ValidationMessageType;
  /**
   * Not a Figma property (each `Type` variant freezes its own example copy
   * in the design, e.g. "We read your invoice" for Info). The headline.
   */
  title: string;
  /** Not a Figma property, same reason as `title`. Supporting line under the title. */
  description?: string;
  /** Figma boolean property `Show action`. */
  showAction?: boolean;
  /** Not a Figma property. Label for the optional action link, e.g. "Review details". */
  actionLabel?: string;
  /** Not a Figma property (static prototype has no handlers). */
  onAction?: () => void;
};

export function ValidationMessage({
  type = 'info',
  title,
  description,
  showAction = true,
  actionLabel,
  onAction,
}: ValidationMessageProps) {
  const Icon = ICONS[type];

  return (
    <div className={`${styles.message} ${styles[`message--${type}`]}`}>
      <Icon aria-hidden className={styles.icon} />
      <div className={styles.body}>
        <p className={styles.title}>{title}</p>
        {description && <p className={styles.description}>{description}</p>}
        {showAction && actionLabel && (
          <button type="button" className={styles.action} onClick={onAction}>
            {actionLabel}
            <ArrowRight aria-hidden />
          </button>
        )}
      </div>
    </div>
  );
}
