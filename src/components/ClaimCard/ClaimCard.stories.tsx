import type { Meta, StoryObj } from '@storybook/react-vite';
import { ClaimCard } from './ClaimCard';

const meta = {
  title: 'Components/ClaimCard',
  component: ClaimCard,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  decorators: [(Story) => <div style={{ maxWidth: 400 }}>{Story()}</div>],
} satisfies Meta<typeof ClaimCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InReview: Story = {
  args: {
    status: 'in-review',
    title: 'Vet visit — Happy Paws Clinic',
    subtitle: 'Luna · Sep 12',
    amount: '$96.00',
  },
};

export const ActionRequired: Story = {
  args: {
    status: 'action-required',
    title: 'Vet visit — Happy Paws Clinic',
    subtitle: 'Luna · Sep 12',
    amount: '$96.00',
  },
};

export const Approved: Story = {
  args: {
    status: 'approved',
    title: 'Vet visit — Happy Paws Clinic',
    subtitle: 'Luna · Sep 12',
    amount: '$96.00',
  },
};

export const Paid: Story = {
  args: {
    status: 'paid',
    title: 'Vet visit — Happy Paws Clinic',
    subtitle: 'Luna · Sep 12',
    amount: '$96.00',
  },
};
