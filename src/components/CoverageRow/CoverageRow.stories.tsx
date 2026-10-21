import type { Meta, StoryObj } from '@storybook/react-vite';
import { CoverageRow } from './CoverageRow';

const meta = {
  title: 'Components/CoverageRow',
  component: CoverageRow,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  decorators: [(Story) => <div style={{ maxWidth: 400 }}>{Story()}</div>],
} satisfies Meta<typeof CoverageRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Covered: Story = {
  args: {
    type: 'covered',
    label: 'Exam and consultation',
    amount: '$60.00',
  },
};

export const NotCovered: Story = {
  args: {
    type: 'not-covered',
    label: 'Grooming',
    amount: '$40.00',
  },
};
