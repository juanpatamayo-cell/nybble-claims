import type { Meta, StoryObj } from '@storybook/react-vite';
import { BottomSheet } from './BottomSheet';

const meta = {
  title: 'Components/BottomSheet',
  component: BottomSheet,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 400, background: 'var(--bg-tertiary)' }}>
        {Story()}
      </div>
    ),
  ],
} satisfies Meta<typeof BottomSheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IOS: Story = {
  args: {
    platform: 'ios',
    title: 'Add your invoice',
  },
};

export const Android: Story = {
  args: {
    platform: 'android',
    title: 'Add your invoice',
  },
};

export const NoCloseButton: Story = {
  args: {
    platform: 'ios',
    title: 'Add your invoice',
    showClose: false,
  },
};
