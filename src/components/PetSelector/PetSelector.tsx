import { User } from 'lucide-react';
import styles from './PetSelector.module.css';

export type PetSelectorState = 'default' | 'selected';

export type PetSelectorProps = {
  /** Figma variant `State`. */
  state?: PetSelectorState;
  /** Figma text property `Name`, e.g. "Luna". */
  name: string;
  /** Figma text property `Detail`, e.g. "Beagle · 4 years · Policy ending 8821". */
  detail: string;
  /**
   * Not a Figma property (static prototype has no handlers). Fires on click —
   * wrap a list of these in a `role="radiogroup"` container when used as an
   * actual pet picker, per Figma's own usage note ("only shown when the
   * member has more than one pet on the policy").
   */
  onSelect?: () => void;
};

export function PetSelector({ state = 'default', name, detail, onSelect }: PetSelectorProps) {
  const isSelected = state === 'selected';

  return (
    <button
      type="button"
      className={`${styles.card} ${styles[`card--${state}`]}`}
      onClick={onSelect}
      aria-pressed={isSelected}
    >
      <div className={styles.avatar}>
        <User aria-hidden />
      </div>
      <div className={styles.info}>
        <p className={styles.name}>{name}</p>
        <p className={styles.detail}>{detail}</p>
      </div>
      <div className={styles.selector}>
        <span className={styles.ring} />
        {isSelected && <span className={styles.dot} />}
      </div>
    </button>
  );
}
