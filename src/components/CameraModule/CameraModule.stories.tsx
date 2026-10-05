import type { Meta, StoryObj } from '@storybook/react-vite';
import { CameraModule } from './CameraModule';

const meta = {
  title: 'Components/CameraModule',
  component: CameraModule,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  // CameraModule fills its container's height — give it one to fill, same
  // as the playground does, since a real route would size to the viewport.
  decorators: [(Story) => <div style={{ maxWidth: 400, height: 700 }}>{Story()}</div>],
} satisfies Meta<typeof CameraModule>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
