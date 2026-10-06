// url=https://www.figma.com/design/IEAuFSPBjRPwXbmMdmFfcK/nybblegroup-UX-challenge-Library?node-id=11635-464
// source=src/components/ValidationMessage/ValidationMessage.tsx
// component=ValidationMessage
import figma from 'figma';

const instance = figma.selectedInstance;

const type = instance.getEnum('Type', {
  Info: 'info',
  Success: 'success',
  Warning: 'warning',
  Error: 'error',
});
const showAction = instance.getBoolean('Show action');

// `title`, `description` and `actionLabel` are not Figma component
// properties — each Type variant freezes its own example copy in the
// design (see ValidationMessage.tsx prop docs). The strings below are that
// frozen copy, one per Type, not dynamic app data.
let title = '';
let description = '';
let actionLabel = '';
if (type === 'info') {
  title = 'We read your invoice';
  description = 'Check the details below. You can edit anything we got wrong.';
  actionLabel = 'Review details';
} else if (type === 'success') {
  title = 'All documents verified';
  description = 'Invoice and proof of payment are ready. You can continue.';
  actionLabel = 'Continue';
} else if (type === 'warning') {
  title = 'Proof of payment missing';
  description = 'Add a receipt or bank statement showing you paid the vet.';
  actionLabel = 'Add proof of payment';
} else if (type === 'error') {
  title = 'This looks like a quote';
  description = 'We need the final invoice from your vet, not an estimate.';
  actionLabel = 'Upload invoice';
}

const actionProps = showAction
  ? figma.code`actionLabel="${actionLabel}"`
  : figma.code`showAction={false}`;

export default {
  example: figma.code`
    <ValidationMessage
      type="${type}"
      title="${title}"
      description="${description}"
      ${actionProps}
    />
  `,
  imports: ["import { ValidationMessage } from './ValidationMessage'"],
  id: 'validation-message',
  metadata: {
    nestable: true,
  },
};
