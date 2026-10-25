import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';
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

/**
 * Interaction test — picking a pet on screen 1 is the flow's one real piece
 * of state (see SubmitClaimFlow.tsx), and this checks it actually flows
 * through to screen 6's claim header, not just screen 1's own selection ring.
 */
export const SelectingAPetUpdatesTheFlow: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const luna = canvas.getByRole('button', { name: /Luna/ });
    const max = canvas.getByRole('button', { name: /Max/ });
    await expect(luna).toHaveAttribute('aria-pressed', 'true');
    await expect(max).toHaveAttribute('aria-pressed', 'false');
    await expect(
      canvas.getByText('Luna · Claim NB-20418 · Sep 12'),
    ).toBeInTheDocument();

    await userEvent.click(max);

    await expect(luna).toHaveAttribute('aria-pressed', 'false');
    await expect(max).toHaveAttribute('aria-pressed', 'true');
    await expect(
      canvas.getByText('Max · Claim NB-20418 · Sep 12'),
    ).toBeInTheDocument();
  },
};
