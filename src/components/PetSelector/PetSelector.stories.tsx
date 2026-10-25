import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent, within } from 'storybook/test';
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

/**
 * Interaction test (play function), not just a visual state — clicks the
 * card and asserts `onSelect` fires. Visually identical to `Default`
 * (`onSelect` doesn't change anything on screen); the point is the
 * behavior check, visible step-by-step in Storybook's Interactions panel.
 */
export const ClickFiresOnSelect: Story = {
  args: {
    state: 'default',
    name: 'Luna',
    detail: 'Beagle · 4 years · Policy ending 8821',
    onSelect: fn(),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const card = canvas.getByRole('button', { name: /Luna/ });

    await userEvent.click(card);

    await expect(args.onSelect).toHaveBeenCalledOnce();
  },
};
