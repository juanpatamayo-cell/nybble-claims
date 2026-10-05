import type { Meta, StoryObj } from '@storybook/react-vite';
import { ClaimStatusStepper } from './ClaimStatusStepper';

const meta = {
  title: 'Components/ClaimStatusStepper',
  component: ClaimStatusStepper,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  decorators: [(Story) => <div style={{ maxWidth: 400 }}>{Story()}</div>],
} satisfies Meta<typeof ClaimStatusStepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InReview: Story = {
  args: {
    status: 'in-review',
    receivedAt: 'Sep 12 · 10:24 AM',
    decisionExpected: 'Expected by Sep 15',
  },
};

export const ActionRequired: Story = {
  args: {
    status: 'action-required',
    receivedAt: 'Sep 12 · 10:24 AM',
    actionMessage: 'The invoice photo is blurry. Upload a clearer one to keep your claim moving.',
  },
};

export const Approved: Story = {
  args: {
    status: 'approved',
    receivedAt: 'Sep 12 · 10:24 AM',
    reviewedAt: 'Sep 13',
    approvedAmount: '$96.00',
    approvedAt: 'Sep 14 · See breakdown',
    paymentEta: 'Arrives by Sep 18',
  },
};

export const Paid: Story = {
  args: {
    status: 'paid',
    receivedAt: 'Sep 12 · 10:24 AM',
    reviewedAt: 'Sep 13',
    approvedAmount: '$96.00',
    approvedAt: 'Sep 14',
    paymentDetail: '$96.00 to account ••••4521 · Sep 16',
  },
};
