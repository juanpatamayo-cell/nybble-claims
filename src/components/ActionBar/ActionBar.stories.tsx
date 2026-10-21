import type { Meta, StoryObj } from '@storybook/react-vite';
import { ActionBar } from './ActionBar';

const meta = {
  title: 'Components/ActionBar',
  component: ActionBar,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  decorators: [(Story) => <div style={{ maxWidth: 400 }}>{Story()}</div>],
} satisfies Meta<typeof ActionBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IOSSingle: Story = {
  args: {
    platform: 'ios',
    layout: 'single',
  },
};

export const IOSStacked: Story = {
  args: {
    platform: 'ios',
    layout: 'stacked',
  },
};

export const AndroidSingle: Story = {
  args: {
    platform: 'android',
    layout: 'single',
  },
};

export const AndroidStackedWithHelper: Story = {
  args: {
    platform: 'android',
    layout: 'stacked',
    showHelper: true,
    helperText: 'You can save and finish later',
  },
};
