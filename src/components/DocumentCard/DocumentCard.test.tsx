import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { DocumentCard } from './DocumentCard';

describe('DocumentCard progress clamping', () => {
  it.each([
    [-20, 0],
    [0, 0],
    [42, 42],
    [100, 100],
    [150, 100],
  ])('clamps progress %i to %i', (progress, expected) => {
    render(
      <DocumentCard state="uploading" title="Invoice" progress={progress} />,
    );

    const bar = screen.getByRole('progressbar');
    expect(bar).toHaveAttribute('aria-valuenow', String(expected));
    expect(screen.getByText(`${expected}%`)).toBeInTheDocument();
  });

  it('defaults to 0% when no progress is given', () => {
    render(<DocumentCard state="uploading" title="Invoice" />);
    expect(screen.getByRole('progressbar')).toHaveAttribute(
      'aria-valuenow',
      '0',
    );
  });
});

describe('DocumentCard state branching', () => {
  it('shows the add button and Required badge in the empty state', () => {
    render(<DocumentCard state="empty" title="Invoice" required />);
    expect(
      screen.getByRole('button', { name: 'Add document' }),
    ).toBeInTheDocument();
    expect(screen.getByText('Required')).toBeInTheDocument();
    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
  });

  it('hides the Required badge when required is false', () => {
    render(<DocumentCard state="empty" title="Invoice" required={false} />);
    expect(screen.queryByText('Required')).not.toBeInTheDocument();
  });

  it('shows the Verified badge and remove button only in the valid state', () => {
    render(<DocumentCard state="valid" title="Invoice" detail="2 pages" />);
    expect(screen.getByText('Verified')).toBeInTheDocument();
    expect(screen.getByText('2 pages')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Remove Invoice' }),
    ).toBeInTheDocument();
  });

  it('shows the status text only in the analyzing state', () => {
    render(
      <DocumentCard
        state="analyzing"
        title="Invoice"
        statusText="Checking totals…"
      />,
    );
    expect(screen.getByText('Checking totals…')).toBeInTheDocument();
    expect(screen.queryByText('Verified')).not.toBeInTheDocument();
  });

  it('shows the error message and retake button only in the error state', () => {
    render(
      <DocumentCard
        state="error"
        title="Invoice"
        errorMessage="Blurry photo"
      />,
    );
    expect(screen.getByText('Blurry photo')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Retake photo' }),
    ).toBeInTheDocument();
  });
});

describe('DocumentCard callbacks', () => {
  it('fires onAdd when the add button is clicked', async () => {
    const onAdd = vi.fn();
    const user = userEvent.setup();
    render(<DocumentCard state="empty" title="Invoice" onAdd={onAdd} />);

    await user.click(screen.getByRole('button', { name: 'Add document' }));
    expect(onAdd).toHaveBeenCalledTimes(1);
  });

  it('fires onCancel when the cancel button is clicked in the uploading state', async () => {
    const onCancel = vi.fn();
    const user = userEvent.setup();
    render(
      <DocumentCard state="uploading" title="Invoice" onCancel={onCancel} />,
    );

    await user.click(
      screen.getByRole('button', { name: 'Cancel upload of Invoice' }),
    );
    expect(onCancel).toHaveBeenCalledTimes(1);
  });

  it('fires onRemove when the remove button is clicked in the valid state', async () => {
    const onRemove = vi.fn();
    const user = userEvent.setup();
    render(<DocumentCard state="valid" title="Invoice" onRemove={onRemove} />);

    await user.click(screen.getByRole('button', { name: 'Remove Invoice' }));
    expect(onRemove).toHaveBeenCalledTimes(1);
  });

  it('fires onRetake when the retake button is clicked in the error state', async () => {
    const onRetake = vi.fn();
    const user = userEvent.setup();
    render(<DocumentCard state="error" title="Invoice" onRetake={onRetake} />);

    await user.click(screen.getByRole('button', { name: 'Retake photo' }));
    expect(onRetake).toHaveBeenCalledTimes(1);
  });
});
