import type { Meta, StoryObj } from '@storybook/react-vite';
import { ValidationMessage } from './ValidationMessage';

const meta = {
  title: 'Components/ValidationMessage',
  component: ValidationMessage,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  decorators: [(Story) => <div style={{ maxWidth: 400 }}>{Story()}</div>],
} satisfies Meta<typeof ValidationMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    type: 'info',
    title: 'We read your invoice',
    description: 'Check the details below. You can edit anything we got wrong.',
    actionLabel: 'Review details',
  },
};

export const Success: Story = {
  args: {
    type: 'success',
    title: 'All documents verified',
    description: 'Invoice and proof of payment are ready. You can continue.',
    actionLabel: 'Continue',
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    title: 'Proof of payment missing',
    description: 'Add a receipt or bank statement showing you paid the vet.',
    actionLabel: 'Add proof of payment',
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    title: 'This looks like a quote',
    description: 'We need the final invoice from your vet, not an estimate.',
    actionLabel: 'Upload invoice',
  },
};

export const WithoutAction: Story = {
  args: {
    type: 'info',
    title: 'No action needed right now',
    description: 'showAction is false here — the component works without a link too.',
    showAction: false,
  },
};
