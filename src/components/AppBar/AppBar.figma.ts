// url=https://www.figma.com/design/IEAuFSPBjRPwXbmMdmFfcK/nybblegroup-UX-challenge-Library?node-id=11630-127
// source=src/components/AppBar/AppBar.tsx
// component=AppBar
import figma from 'figma';

const instance = figma.selectedInstance;

const platform = instance.getEnum('Platform', {
  iOS: 'ios',
  Android: 'android',
});
const type = instance.getEnum('Type', {
  Standard: 'standard',
  Large: 'large',
});
const title = instance.getString('Title');
const showBack = instance.getBoolean('Show back');
const showAction = instance.getBoolean('Show action');

// `Action icon` is an instance-swap property, but its Figma default (the
// contextual-help icon) is also this component's own default when
// `actionIcon` is omitted, so there's nothing to pass through here.

export default {
  example: figma.code`
    <AppBar
      platform="${platform}"
      type="${type}"
      title="${title}"
      showBack={${showBack}}
      showAction={${showAction}}
    />
  `,
  imports: ["import { AppBar } from './AppBar'"],
  id: 'app-bar',
  metadata: {
    nestable: true,
  },
};
