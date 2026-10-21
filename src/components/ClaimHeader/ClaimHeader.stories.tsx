import type { Meta, StoryObj } from '@storybook/react-vite';
import { ClaimHeader } from './ClaimHeader';

const meta = {
  title: 'Components/ClaimHeader',
  component: ClaimHeader,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  decorators: [(Story) => <div style={{ maxWidth: 400 }}>{Story()}</div>],
} satisfies Meta<typeof ClaimHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InReview: Story = {
  args: {
    status: 'in-review',
    title: 'Vet visit — Happy Paws Clinic',
    subtitle: 'Luna · Claim NB-20418 · Sep 12',
  },
};

export const ActionRequired: Story = {
  args: {
    status: 'action-required',
    title: 'Vet visit — Happy Paws Clinic',
    subtitle: 'Luna · Claim NB-20418 · Sep 12',
  },
};

export const Approved: Story = {
  args: {
    status: 'approved',
    title: 'Vet visit — Happy Paws Clinic',
    subtitle: 'Luna · Claim NB-20418 · Sep 12',
  },
};

export const Paid: Story = {
  args: {
    status: 'paid',
    title: 'Vet visit — Happy Paws Clinic',
    subtitle: 'Luna · Claim NB-20418 · Sep 12',
  },
};
