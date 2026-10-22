import type { Meta, StoryObj } from '@storybook/react-vite';
import { CoverageSummary } from './CoverageSummary';

const meta = {
  title: 'Components/CoverageSummary',
  component: CoverageSummary,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  decorators: [(Story) => <div style={{ maxWidth: 400 }}>{Story()}</div>],
} satisfies Meta<typeof CoverageSummary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { type: 'covered', label: 'Exam and consultation', amount: '$60.00' },
      { type: 'covered', label: 'Treatment and medication', amount: '$110.00' },
      { type: 'not-covered', label: 'Food', amount: '$10.00' },
      { type: 'not-covered', label: 'Grooming', amount: '$5.00' },
    ],
    footnote:
      'Food and grooming are excluded by your plan, so they are not counted toward your reimbursement.',
  },
};

export const AllCovered: Story = {
  args: {
    items: [
      { type: 'covered', label: 'Exam and consultation', amount: '$60.00' },
      { type: 'covered', label: 'Treatment and medication', amount: '$110.00' },
    ],
  },
};
