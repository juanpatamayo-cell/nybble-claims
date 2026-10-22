import type { Meta, StoryObj } from '@storybook/react-vite';
import { TokensPage } from './TokensPage';

const meta = {
  title: 'Tokens',
  component: TokensPage,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof TokensPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {};
