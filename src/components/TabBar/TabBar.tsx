import type { ComponentType, SVGProps } from 'react';
import {
  FileText,
  Home as HomeLucide,
  Inbox as InboxLucide,
  User,
} from 'lucide-react';
import {
  Dog1Icon,
  Home2Icon,
  InboxIcon,
  TextFileIcon,
} from '../../assets/icons';
import styles from './TabBar.module.css';

export type TabBarPlatform = 'ios' | 'android';
export type TabBarTabId = 'home' | 'claims' | 'inbox' | 'profile';

export type TabBarProps = {
  /** Figma variant `Platform`. iOS: floating pill surface. Android (M3): active pill indicator on the bar surface. */
  platform?: TabBarPlatform;
  /**
   * Not a Figma property — the Figma component freezes one example `_Tab
   * item` as active per Platform. Real navigation needs the current route,
   * so which of the 4 fixed tabs (Home/Claims/Inbox/Profile) is selected is
   * app data here.
   */
  activeTab?: TabBarTabId;
  /**
   * Not a Figma property — maps to `_Tab item`'s `Show badge`, which per
   * Figma's own usage note only ever applies to Inbox ("shows a badge when
   * a claim needs action").
   */
  inboxBadge?: boolean;
  /** Not a Figma property (static prototype has no handlers). Fires with the tapped tab's id. */
  onTabChange?: (tab: TabBarTabId) => void;
};

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

const TABS: { id: TabBarTabId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'claims', label: 'Claims' },
  { id: 'inbox', label: 'Inbox' },
  { id: 'profile', label: 'Profile' },
];

// iOS icons are Streamline Flex (checked each instance's main component
// name in Figma rather than assuming); Android keeps the pre-refresh
// Feather/lucide set, confirmed the same way.
const IOS_ICONS: Record<TabBarTabId, IconComponent> = {
  home: Home2Icon,
  claims: TextFileIcon,
  inbox: InboxIcon,
  profile: Dog1Icon,
};

const ANDROID_ICONS: Record<TabBarTabId, IconComponent> = {
  home: HomeLucide,
  claims: FileText,
  inbox: InboxLucide,
  profile: User,
};

function TabItem({
  platform,
  id,
  label,
  active,
  showBadge,
  onSelect,
}: {
  platform: TabBarPlatform;
  id: TabBarTabId;
  label: string;
  active: boolean;
  showBadge: boolean;
  onSelect: () => void;
}) {
  const Icon = platform === 'android' ? ANDROID_ICONS[id] : IOS_ICONS[id];

  return (
    <button
      type="button"
      className={`${styles.tab} ${styles[`tab--${platform}`]} ${active && platform === 'ios' ? styles['tab--active'] : ''}`}
      onClick={onSelect}
      aria-current={active ? 'page' : undefined}
    >
      <span
        className={`${styles.iconWrap} ${styles[`iconWrap--${platform}`]} ${active && platform === 'android' ? styles['iconWrap--active'] : ''}`}
      >
        <span className={styles.iconBox}>
          <Icon
            aria-hidden
            className={`${styles.icon} ${active ? styles['icon--active'] : styles['icon--inactive']}`}
          />
          {showBadge && <span className={styles.badge} aria-hidden />}
        </span>
      </span>
      <span
        className={`${styles.label} ${active ? styles['label--active'] : styles['label--inactive']}`}
      >
        {label}
      </span>
    </button>
  );
}

export function TabBar({
  platform = 'ios',
  activeTab = 'home',
  inboxBadge = false,
  onTabChange,
}: TabBarProps) {
  const items = TABS.map((tab) => (
    <TabItem
      key={tab.id}
      platform={platform}
      id={tab.id}
      label={tab.label}
      active={tab.id === activeTab}
      showBadge={tab.id === 'inbox' && inboxBadge}
      onSelect={() => onTabChange?.(tab.id)}
    />
  ));

  return (
    <nav
      aria-label="Primary"
      className={`${styles.bar} ${styles[`bar--${platform}`]}`}
    >
      {platform === 'ios' ? (
        <div className={styles.surface}>{items}</div>
      ) : (
        items
      )}
    </nav>
  );
}
