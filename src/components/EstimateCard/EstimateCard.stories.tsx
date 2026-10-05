import type { Meta, StoryObj } from '@storybook/react-vite';
import { EstimateCard } from './EstimateCard';

const meta = {
  title: 'Components/EstimateCard',
  component: EstimateCard,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  decorators: [(Story) => <div style={{ maxWidth: 400 }}>{Story()}</div>],
} satisfies Meta<typeof EstimateCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Full: Story = {
  args: {
    size: 'full',
    amount: '$96.00',
    footnote: 'Final amount is confirmed after review. Paid to your bank account 3–5 days after approval.',
    breakdown: [
      { label: 'Vet bill total', value: '$185.00' },
      { label: 'Not covered (food, grooming)', value: '−$15.00', info: true },
      { label: 'Annual deductible', value: '−$50.00', info: true },
      { label: 'Your coverage', value: '80%', info: true },
    ],
  },
};

export const Compact: Story = {
  args: {
    size: 'compact',
    amount: '$96.00',
    subtext: 'After deductible and 80% coverage',
  },
};
