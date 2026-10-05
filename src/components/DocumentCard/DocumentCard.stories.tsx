import type { Meta, StoryObj } from '@storybook/react-vite';
import { DocumentCard } from './DocumentCard';

const meta = {
  title: 'Components/DocumentCard',
  component: DocumentCard,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  decorators: [(Story) => <div style={{ maxWidth: 400 }}>{Story()}</div>],
} satisfies Meta<typeof DocumentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    state: 'empty',
    title: 'Invoice',
    description: 'Photo or PDF of the vet invoice',
  },
};

export const Uploading: Story = {
  args: {
    state: 'uploading',
    title: 'Invoice',
    fileName: 'invoice_vet_clinic.jpg',
    progress: 60,
  },
};

export const Analyzing: Story = {
  args: {
    state: 'analyzing',
    title: 'Invoice',
  },
};

export const Valid: Story = {
  args: {
    state: 'valid',
    title: 'Invoice',
    detail: 'Happy Paws Clinic · $185.00 · Sep 12',
  },
};

export const Error: Story = {
  args: {
    state: 'error',
    title: 'Invoice',
    errorMessage: "The photo is blurry, so we can't read the amount.",
  },
};
