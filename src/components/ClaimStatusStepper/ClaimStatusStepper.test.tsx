import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ClaimStatusStepper } from './ClaimStatusStepper';

describe('ClaimStatusStepper status branching', () => {
  it('in-review: shows In review + pending Decision/Payment, hides the other branches', () => {
    render(
      <ClaimStatusStepper
        status="in-review"
        receivedAt="Sep 12 · 10:24 AM"
        decisionExpected="Expected by Sep 15"
      />,
    );

    expect(screen.getByText('Claim received')).toBeInTheDocument();
    expect(screen.getByText('In review')).toBeInTheDocument();
    expect(screen.getByText('Expected by Sep 15')).toBeInTheDocument();
    expect(screen.getByText('Payment sent')).toBeInTheDocument();

    expect(
      screen.queryByText('We need something from you'),
    ).not.toBeInTheDocument();
    expect(screen.queryByText('Reviewed')).not.toBeInTheDocument();
    expect(screen.queryByText(/^Approved/)).not.toBeInTheDocument();
    expect(screen.queryByText('Payment on the way')).not.toBeInTheDocument();
  });

  it('action-required: shows the fix-needed step and a paused Decision step', () => {
    render(
      <ClaimStatusStepper
        status="action-required"
        receivedAt="Sep 12 · 10:24 AM"
        actionMessage="Upload a clearer photo of the invoice"
      />,
    );

    expect(screen.getByText('We need something from you')).toBeInTheDocument();
    expect(
      screen.getByText('Upload a clearer photo of the invoice'),
    ).toBeInTheDocument();
    expect(
      screen.getByText('Paused until we get your document'),
    ).toBeInTheDocument();

    expect(screen.queryByText('In review')).not.toBeInTheDocument();
    expect(screen.queryByText('Reviewed')).not.toBeInTheDocument();
  });

  it('approved: shows Reviewed, the approved amount, and payment-on-the-way', () => {
    render(
      <ClaimStatusStepper
        status="approved"
        receivedAt="Sep 12"
        reviewedAt="Sep 13"
        approvedAmount="$96.00"
        approvedAt="Sep 14 · See breakdown"
        paymentEta="Arrives by Sep 18"
      />,
    );

    expect(screen.getByText('Reviewed')).toBeInTheDocument();
    expect(screen.getByText('Approved · $96.00')).toBeInTheDocument();
    expect(screen.getByText('Payment on the way')).toBeInTheDocument();
    expect(screen.getByText('Arrives by Sep 18')).toBeInTheDocument();

    expect(screen.queryByText('In review')).not.toBeInTheDocument();
    expect(
      screen.queryByText('We need something from you'),
    ).not.toBeInTheDocument();
    expect(screen.queryByText('Payment sent')).not.toBeInTheDocument();
  });

  it('paid: shows Reviewed, the approved amount, and a completed Payment sent step', () => {
    render(
      <ClaimStatusStepper
        status="paid"
        receivedAt="Sep 12"
        reviewedAt="Sep 13"
        approvedAmount="$96.00"
        approvedAt="Sep 14"
        paymentDetail="$96.00 to account ••••4521 · Sep 16"
      />,
    );

    expect(screen.getByText('Reviewed')).toBeInTheDocument();
    expect(screen.getByText('Approved · $96.00')).toBeInTheDocument();
    expect(screen.getByText('Payment sent')).toBeInTheDocument();
    expect(
      screen.getByText('$96.00 to account ••••4521 · Sep 16'),
    ).toBeInTheDocument();

    expect(screen.queryByText('Payment on the way')).not.toBeInTheDocument();
  });
});
