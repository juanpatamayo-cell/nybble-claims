import type { Meta, StoryObj } from '@storybook/react-vite';
import { PetSelector } from './PetSelector';

const meta = {
  title: 'Components/PetSelector',
  component: PetSelector,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  decorators: [(Story) => <div style={{ maxWidth: 400 }}>{Story()}</div>],
} satisfies Meta<typeof PetSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    state: 'default',
    name: 'Luna',
    detail: 'Beagle · 4 years · Policy ending 8821',
  },
};

export const Selected: Story = {
  args: {
    state: 'selected',
    name: 'Luna',
    detail: 'Beagle · 4 years · Policy ending 8821',
  },
};
