// url=https://www.figma.com/design/IEAuFSPBjRPwXbmMdmFfcK/nybblegroup-UX-challenge-Library?node-id=11631-3571
// source=src/components/TabBar/TabBar.tsx
// component=TabBar
import figma from 'figma';

const instance = figma.selectedInstance;

const platform = instance.getEnum('Platform', {
  iOS: 'ios',
  Android: 'android',
});

// `activeTab` and `inboxBadge` aren't Figma component properties — TabBar
// has only one variant (Platform). Which tab is active and whether Inbox
// shows a badge are real navigation/app state, not design-time properties.

export default {
  example: figma.code`
    <TabBar platform="${platform}" activeTab="home" />
  `,
  imports: ["import { TabBar } from './TabBar'"],
  id: 'tab-bar',
  metadata: {
    nestable: true,
  },
};
