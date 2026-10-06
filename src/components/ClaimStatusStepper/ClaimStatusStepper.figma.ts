// url=https://www.figma.com/design/IEAuFSPBjRPwXbmMdmFfcK/nybblegroup-UX-challenge-Library?node-id=11635-95685
// source=src/components/ClaimStatusStepper/ClaimStatusStepper.tsx
// component=ClaimStatusStepper
import figma from 'figma';

const instance = figma.selectedInstance;

const status = instance.getEnum('Status', {
  'In review': 'in-review',
  'Action required': 'action-required',
  Approved: 'approved',
  Paid: 'paid',
});

// None of the step description props are exposed as Figma component
// properties — they're real app data (claim timestamps, amounts, messages)
// composited onto the stepper's fixed step titles (see
// ClaimStatusStepper.tsx prop docs). The values below match the
// Playground's example for each Status.
let statusProps;
if (status === 'in-review') {
  statusProps = figma.code`
      receivedAt="Sep 12 · 10:24 AM"
      decisionExpected="Expected by Sep 15"
  `;
} else if (status === 'action-required') {
  statusProps = figma.code`
      receivedAt="Sep 12 · 10:24 AM"
      actionMessage="The invoice photo is blurry. Upload a clearer one to keep your claim moving."
  `;
} else if (status === 'approved') {
  statusProps = figma.code`
      receivedAt="Sep 12 · 10:24 AM"
      reviewedAt="Sep 13"
      approvedAmount="$96.00"
      approvedAt="Sep 14 · See breakdown"
      paymentEta="Arrives by Sep 18"
  `;
} else {
  statusProps = figma.code`
      receivedAt="Sep 12 · 10:24 AM"
      reviewedAt="Sep 13"
      approvedAmount="$96.00"
      approvedAt="Sep 14"
      paymentDetail="$96.00 to account ••••4521 · Sep 16"
  `;
}

export default {
  example: figma.code`
    <ClaimStatusStepper
      status="${status}"
      ${statusProps}
    />
  `,
  imports: ["import { ClaimStatusStepper } from './ClaimStatusStepper'"],
  id: 'claim-status-stepper',
  metadata: {
    nestable: true,
  },
};
