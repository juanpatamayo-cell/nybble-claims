import type { ComponentType, SVGProps } from 'react';
import { Camera, Folder, Image, X } from 'lucide-react';
import {
  Camera1Icon,
  Landscape2Icon,
  UploadBox1Icon,
} from '../../assets/icons';
import styles from './BottomSheet.module.css';

export type BottomSheetPlatform = 'ios' | 'android';

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

type SheetOptionProps = {
  icon: IconComponent;
  label: string;
  description?: string;
  showDescription?: boolean;
  onSelect?: () => void;
};

/**
 * Figma `_Sheet option` — internal building block, not exported. A single
 * upload-source row: icon, label, optional description.
 */
function SheetOption({
  icon: Icon,
  label,
  description,
  showDescription = true,
  onSelect,
}: SheetOptionProps) {
  return (
    <button type="button" className={styles.option} onClick={onSelect}>
      <span className={styles.iconContainer}>
        <Icon aria-hidden className={styles.icon} />
      </span>
      <span className={styles.text}>
        <span className={styles.label}>{label}</span>
        {showDescription && description && (
          <span className={styles.description}>{description}</span>
        )}
      </span>
    </button>
  );
}

export type BottomSheetProps = {
  /** Figma variant `Platform`. iOS: grabber + rounded-20 top corners. Android (M3): drag handle + rounded-24 top corners. */
  platform?: BottomSheetPlatform;
  /** Figma text property `Title`. */
  title?: string;
  /** Figma boolean `Show close`. */
  showClose?: boolean;
  /** Not a Figma property (static prototype has no handlers). Close button tap. */
  onClose?: () => void;
  /** Not a Figma property. "Take a photo" row tap. */
  onTakePhoto?: () => void;
  /** Not a Figma property. "Choose from gallery" row tap. */
  onChooseFromGallery?: () => void;
  /** Not a Figma property. "Upload a file" row tap. */
  onUploadFile?: () => void;
};

// Content is the Figma component's one documented default (upload source
// picker). iOS icons are Streamline Flex, Android keeps the pre-refresh
// lucide set — confirmed per instance via each icon's main component name,
// same mixed sourcing as TabBar.
const IOS_ICONS = {
  takePhoto: Camera1Icon,
  chooseFromGallery: Landscape2Icon,
  uploadFile: UploadBox1Icon,
};

const ANDROID_ICONS = {
  takePhoto: Camera,
  chooseFromGallery: Image,
  uploadFile: Folder,
};

export function BottomSheet({
  platform = 'ios',
  title = 'Add your invoice',
  showClose = true,
  onClose,
  onTakePhoto,
  onChooseFromGallery,
  onUploadFile,
}: BottomSheetProps) {
  const icons = platform === 'android' ? ANDROID_ICONS : IOS_ICONS;

  return (
    <div className={`${styles.sheet} ${styles[`sheet--${platform}`]}`}>
      <span className={`${styles.handle} ${styles[`handle--${platform}`]}`} />
      <div className={styles.header}>
        <p className={`${styles.title} ${styles[`title--${platform}`]}`}>
          {title}
        </p>
        {showClose && (
          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close"
          >
            <X aria-hidden />
          </button>
        )}
      </div>
      <div className={styles.content}>
        <SheetOption
          icon={icons.takePhoto}
          label="Take a photo"
          description="Use the camera with framing guide"
          onSelect={onTakePhoto}
        />
        <SheetOption
          icon={icons.chooseFromGallery}
          label="Choose from gallery"
          description="Pick photos you already took"
          onSelect={onChooseFromGallery}
        />
        <SheetOption
          icon={icons.uploadFile}
          label="Upload a file"
          description="PDF or image from your files"
          onSelect={onUploadFile}
        />
      </div>
    </div>
  );
}
