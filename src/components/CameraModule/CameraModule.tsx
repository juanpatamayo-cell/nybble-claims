import styles from './CameraModule.module.css';

export type CameraModuleProps = {
  /** Figma text property `Instruction`. */
  instruction?: string;
  /**
   * Not a Figma property (static prototype has no handlers, and this line
   * is hardcoded copy in the design). Exposed anyway in case a different
   * capture step needs different wording.
   */
  hint?: string;
  /** Not a Figma property (static prototype has no handlers). Fires when the shutter is tapped. */
  onCapture?: () => void;
};

/**
 * Full-screen capture guide for photographing a document. Meant to fill its
 * container (a modal or route that itself sizes to the viewport) — this
 * component doesn't assume a device height itself.
 */
export function CameraModule({
  instruction = 'Fit the whole invoice inside the frame',
  hint = "Hold steady — we'll detect the edges",
  onCapture,
}: CameraModuleProps) {
  return (
    <div className={styles.overlay}>
      <p className={styles.instruction}>{instruction}</p>
      <div className={styles.framingGuide} aria-hidden />
      <div className={styles.controls}>
        <p className={styles.hint}>{hint}</p>
        <button type="button" className={styles.shutter} onClick={onCapture} aria-label="Take photo">
          <span className={styles.shutterCore} />
        </button>
      </div>
    </div>
  );
}
