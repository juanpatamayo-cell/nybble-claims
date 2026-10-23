import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { EstimateCard } from './EstimateCard';

const breakdown = [
  { label: 'Vet bill total', value: '$185.00' },
  { label: 'Annual deductible', value: '−$50.00', info: true },
  { label: 'Coverage', value: '80%', info: true },
];

describe('EstimateCard size branching', () => {
  it('full size renders the breakdown, total row and footnote', () => {
    render(
      <EstimateCard
        size="full"
        amount="$96.00"
        breakdown={breakdown}
        footnote="Estimate only — final amount may vary."
      />,
    );

    expect(screen.getByText('Vet bill total')).toBeInTheDocument();
    expect(screen.getByText('Coverage')).toBeInTheDocument();
    expect(screen.getByText("You'll receive about")).toBeInTheDocument();
    expect(
      screen.getByText('Estimate only — final amount may vary.'),
    ).toBeInTheDocument();
  });

  it('compact size hides the breakdown and footnote, shows the subtext', () => {
    render(
      <EstimateCard
        size="compact"
        amount="$96.00"
        subtext="Pending approval"
        breakdown={breakdown}
        footnote="Estimate only — final amount may vary."
      />,
    );

    expect(screen.getByText('Pending approval')).toBeInTheDocument();
    expect(screen.queryByText('Vet bill total')).not.toBeInTheDocument();
    expect(
      screen.queryByText('Estimate only — final amount may vary.'),
    ).not.toBeInTheDocument();
  });

  it('full size with no breakdown renders no rows and no total row', () => {
    render(<EstimateCard size="full" amount="$96.00" />);
    expect(screen.queryByText("You'll receive about")).not.toBeInTheDocument();
  });

  it('only renders an info button for rows with info: true', () => {
    render(<EstimateCard size="full" amount="$96.00" breakdown={breakdown} />);

    expect(
      screen.getByRole('button', {
        name: 'What does "Annual deductible" mean?',
      }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('button', {
        name: 'What does "Vet bill total" mean?',
      }),
    ).not.toBeInTheDocument();
  });

  it('fires onInfoClick with the row label when an info button is clicked', async () => {
    const onInfoClick = vi.fn();
    const user = userEvent.setup();
    render(
      <EstimateCard
        size="full"
        amount="$96.00"
        breakdown={breakdown}
        onInfoClick={onInfoClick}
      />,
    );

    await user.click(
      screen.getByRole('button', { name: 'What does "Coverage" mean?' }),
    );
    expect(onInfoClick).toHaveBeenCalledWith('Coverage');
  });
});
