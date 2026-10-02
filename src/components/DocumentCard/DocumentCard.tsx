import {
  AlertCircle,
  CheckCircle2,
  FileText,
  Loader2,
  Plus,
  Trash2,
  Upload,
  X,
} from 'lucide-react';
import styles from './DocumentCard.module.css';

export type DocumentCardState = 'empty' | 'uploading' | 'analyzing' | 'valid' | 'error';

export type DocumentCardProps = {
  /** Figma variant `State`. */
  state?: DocumentCardState;
  /** Figma text property `Title`, e.g. "Invoice". Always shown. */
  title: string;
  /** Figma text property `Description`. Empty-state helper text under the title. */
  description?: string;
  /**
   * Not a Figma property (the "Required" pill is static text in the design).
   * Added so the card can support optional documents without a Figma change.
   */
  required?: boolean;
  /** Figma text property `File name`. Uploading-state filename. */
  fileName?: string;
  /**
   * Not a Figma property (the design freezes the progress bar and its label
   * at one static value). Upload percentage, 0-100, for the uploading state.
   */
  progress?: number;
  /** Figma text property `Status text`. Analyzing-state line. */
  statusText?: string;
  /** Figma text property `Detail`. Valid-state extracted summary line. */
  detail?: string;
  /** Figma text property `Error message`. Error-state reason. */
  errorMessage?: string;
  /** Not a Figma property (static prototype has no handlers). Empty-state tap target (+ icon). */
  onAdd?: () => void;
  /** Not a Figma property. Uploading-state cancel (X icon). */
  onCancel?: () => void;
  /** Not a Figma property. Valid-state remove (trash icon). */
  onRemove?: () => void;
  /** Not a Figma property. Error-state "Retake photo" button. */
  onRetake?: () => void;
};

export function DocumentCard({
  state = 'empty',
  title,
  description,
  required = true,
  fileName,
  progress = 0,
  statusText = 'Reading your document…',
  detail,
  errorMessage,
  onAdd,
  onCancel,
  onRemove,
  onRetake,
}: DocumentCardProps) {
  const clampedProgress = Math.min(100, Math.max(0, progress));

  return (
    <div className={`${styles.card} ${styles[`card--${state}`]}`}>
      {state === 'empty' && (
        <>
          <div className={styles.iconCircle}>
            <Upload aria-hidden />
          </div>
          <div className={styles.body}>
            <div className={styles.heading}>
              <p className={styles.title}>{title}</p>
              {required && <span className={`${styles.badge} ${styles['badge--required']}`}>Required</span>}
            </div>
            {description && <p className={styles.bodyText}>{description}</p>}
          </div>
          <button
            type="button"
            className={`${styles.iconButton} ${styles['iconButton--add']}`}
            onClick={onAdd}
            aria-label="Add document"
          >
            <Plus aria-hidden />
          </button>
        </>
      )}

      {state !== 'empty' && (
        <>
          <div className={styles.thumbnail} aria-hidden>
            <FileText />
          </div>
          <div className={styles.body}>
            <div className={styles.heading}>
              <p className={styles.title}>{title}</p>
              {state === 'valid' && (
                <span className={`${styles.badge} ${styles['badge--verified']}`}>
                  <CheckCircle2 aria-hidden />
                  Verified
                </span>
              )}
            </div>

            {state === 'uploading' && (
              <>
                {fileName && <p className={styles.bodyText}>{fileName}</p>}
                <div className={styles.progressRow}>
                  <div
                    className={styles.progressTrack}
                    role="progressbar"
                    aria-valuenow={clampedProgress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`Uploading ${title}`}
                  >
                    <div className={styles.progressBar} style={{ width: `${clampedProgress}%` }} />
                  </div>
                  <p className={styles.progressLabel}>{clampedProgress}%</p>
                </div>
              </>
            )}

            {state === 'analyzing' && (
              <div className={styles.statusRow}>
                <Loader2 aria-hidden />
                <p className={styles.statusText}>{statusText}</p>
              </div>
            )}

            {state === 'valid' && detail && <p className={styles.bodyText}>{detail}</p>}

            {state === 'error' && (
              <>
                {errorMessage && (
                  <div className={styles.messageRow}>
                    <AlertCircle aria-hidden />
                    <p className={styles.messageText}>{errorMessage}</p>
                  </div>
                )}
                <button type="button" className={styles.retakeButton} onClick={onRetake}>
                  Retake photo
                </button>
              </>
            )}
          </div>

          {state === 'uploading' && (
            <button
              type="button"
              className={styles.iconButton}
              onClick={onCancel}
              aria-label={`Cancel upload of ${title}`}
            >
              <X aria-hidden />
            </button>
          )}

          {state === 'valid' && (
            <button
              type="button"
              className={styles.iconButton}
              onClick={onRemove}
              aria-label={`Remove ${title}`}
            >
              <Trash2 aria-hidden />
            </button>
          )}
        </>
      )}
    </div>
  );
}
