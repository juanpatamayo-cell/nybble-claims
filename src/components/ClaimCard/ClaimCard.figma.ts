// url=https://www.figma.com/design/IEAuFSPBjRPwXbmMdmFfcK/nybblegroup-UX-challenge-Library?node-id=11669-96788
// source=src/components/ClaimCard/ClaimCard.tsx
// component=ClaimCard
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
const amount = instance.getString('Amount');

export default {
  example: figma.code`
    <ClaimCard
      status="${status}"
      title="${title}"
      subtitle="${subtitle}"
      amount="${amount}"
    />
  `,
  imports: ["import { ClaimCard } from './ClaimCard'"],
  id: 'claim-card',
  metadata: {
    nestable: true,
  },
};
