import type { Meta, StoryObj } from '@storybook/react-vite';
import { AppBar } from './AppBar';

const meta = {
  title: 'Components/AppBar',
  component: AppBar,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  decorators: [(Story) => <div style={{ maxWidth: 400 }}>{Story()}</div>],
} satisfies Meta<typeof AppBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IosStandard: Story = {
  args: {
    platform: 'ios',
    type: 'standard',
    title: 'New claim',
  },
};

export const IosLarge: Story = {
  args: {
    platform: 'ios',
    type: 'large',
    title: 'New claim',
  },
};

export const AndroidStandard: Story = {
  args: {
    platform: 'android',
    type: 'standard',
    title: 'New claim',
  },
};

export const AndroidLarge: Story = {
  args: {
    platform: 'android',
    type: 'large',
    title: 'New claim',
  },
};
