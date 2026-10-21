import type { Meta, StoryObj } from '@storybook/react-vite';
import { TabBar } from './TabBar';

const meta = {
  title: 'Components/TabBar',
  component: TabBar,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  decorators: [(Story) => <div style={{ maxWidth: 400 }}>{Story()}</div>],
} satisfies Meta<typeof TabBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Ios: Story = {
  args: {
    platform: 'ios',
    activeTab: 'claims',
  },
};

export const IosWithBadge: Story = {
  args: {
    platform: 'ios',
    activeTab: 'home',
    inboxBadge: true,
  },
};

export const Android: Story = {
  args: {
    platform: 'android',
    activeTab: 'home',
  },
};

export const AndroidWithBadge: Story = {
  args: {
    platform: 'android',
    activeTab: 'home',
    inboxBadge: true,
  },
};
