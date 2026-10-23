import type { Meta, StoryObj } from '@storybook/react-vite';
import { SubmitClaimFlow } from './SubmitClaimFlow';

const meta = {
  title: 'Flows/Submit a claim',
  component: SubmitClaimFlow,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof SubmitClaimFlow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {};
