// url=https://www.figma.com/design/IEAuFSPBjRPwXbmMdmFfcK/nybblegroup-UX-challenge-Library?node-id=11695-680
// source=src/components/ClaimHeader/ClaimHeader.tsx
// component=ClaimHeader
import figma from 'figma';

const instance = figma.selectedInstance;

const status = instance.getEnum('Status', {
  'In review': 'in-review',
  'Action required': 'action-required',
  Approved: 'approved',
  Paid: 'paid',
});

const title = instance.getString('Title');
const subtitle = instance.getString('Subtitle');

export default {
  example: figma.code`
    <ClaimHeader
      status="${status}"
      title="${title}"
      subtitle="${subtitle}"
    />
  `,
  imports: ["import { ClaimHeader } from './ClaimHeader'"],
  id: 'claim-header',
  metadata: {
    nestable: true,
  },
};
