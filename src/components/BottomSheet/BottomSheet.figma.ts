// url=https://www.figma.com/design/IEAuFSPBjRPwXbmMdmFfcK/nybblegroup-UX-challenge-Library?node-id=11632-148
// source=src/components/BottomSheet/BottomSheet.tsx
// component=BottomSheet
import figma from 'figma';

const instance = figma.selectedInstance;

const platform = instance.getEnum('Platform', {
  iOS: 'ios',
  Android: 'android',
});
const title = instance.getString('Title');
const showClose = instance.getBoolean('Show close');

// Content (the 3 upload-source rows) is the Figma component's one
// documented default, not exposed as its own property — see
// BottomSheet.tsx's SheetOption/IOS_ICONS/ANDROID_ICONS comments.

export default {
  example: figma.code`
    <BottomSheet
      platform="${platform}"
      title="${title}"
      showClose={${showClose}}
    />
  `,
  imports: ["import { BottomSheet } from './BottomSheet'"],
  id: 'bottom-sheet',
  metadata: {
    nestable: true,
  },
};
