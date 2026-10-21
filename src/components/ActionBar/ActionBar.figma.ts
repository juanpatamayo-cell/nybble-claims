// url=https://www.figma.com/design/IEAuFSPBjRPwXbmMdmFfcK/nybblegroup-UX-challenge-Library?node-id=11632-95467
// source=src/components/ActionBar/ActionBar.tsx
// component=ActionBar
import figma from 'figma';

const instance = figma.selectedInstance;

const platform = instance.getEnum('Platform', {
  iOS: 'ios',
  Android: 'android',
});
const layout = instance.getEnum('Layout', {
  Single: 'single',
  Stacked: 'stacked',
});
const showHelper = instance.getBoolean('Show helper');
const helperText = instance.getString('Helper text');

// Primary/secondary labels aren't exposed as ActionBar properties — they
// come from the nested Button instances' own panel, so they're real app
// data here (see ActionBar.tsx's primaryLabel/secondaryLabel comments).
// The values below match the Playground's example.

export default {
  example: figma.code`
    <ActionBar
      platform="${platform}"
      layout="${layout}"
      showHelper={${showHelper}}
      helperText="${helperText}"
    />
  `,
  imports: ["import { ActionBar } from './ActionBar'"],
  id: 'action-bar',
  metadata: {
    nestable: true,
  },
};
