import { useEffect, useState } from 'react';
import { ClaimStatusStepper, DocumentCard, EstimateCard, PetSelector, ValidationMessage } from '../components';

type Theme = 'light' | 'dark';
type TextSize = 'default' | 'large';

export function Playground() {
  const [theme, setTheme] = useState<Theme>('light');
  const [textSize, setTextSize] = useState<TextSize>('default');
  const [selectedPet, setSelectedPet] = useState<'luna' | 'max'>('luna');

  // Theme and text-size are attribute switches on <html>, per CLAUDE.md,
  // not scoped to a wrapper element - that's how real consumers apply them.
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;
    if (textSize === 'large') {
      root.setAttribute('data-text-size', 'large');
    } else {
      root.removeAttribute('data-text-size');
    }
  }, [textSize]);

  return (
    <div style={{ minHeight: '100vh', padding: 'var(--spacing-24)' }}>
      <h1>nybble-claims</h1>
      <p>Component playground. Components land here as they're built.</p>

      <div style={{ display: 'flex', gap: 'var(--spacing-8)' }}>
        <button
          type="button"
          onClick={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}
        >
          Toggle theme (currently {theme})
        </button>
        <button
          type="button"
          onClick={() =>
            setTextSize((s) => (s === 'default' ? 'large' : 'default'))
          }
        >
          Toggle text size (currently {textSize})
        </button>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-16)',
          maxWidth: '400px',
          marginTop: 'var(--spacing-24)',
        }}
      >
        <DocumentCard
          state="empty"
          title="Invoice"
          description="Photo or PDF of the vet invoice"
          onAdd={() => console.log('add')}
        />
        <DocumentCard
          state="uploading"
          title="Invoice"
          fileName="invoice_vet_clinic.jpg"
          progress={60}
          onCancel={() => console.log('cancel')}
        />
        <DocumentCard state="analyzing" title="Invoice" />
        <DocumentCard
          state="valid"
          title="Invoice"
          detail="Happy Paws Clinic · $185.00 · Sep 12"
          onRemove={() => console.log('remove')}
        />
        <DocumentCard
          state="error"
          title="Invoice"
          errorMessage="The photo is blurry, so we can't read the amount."
          onRetake={() => console.log('retake')}
        />
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-16)',
          maxWidth: '400px',
          marginTop: 'var(--spacing-24)',
        }}
      >
        <ValidationMessage
          type="info"
          title="We read your invoice"
          description="Check the details below. You can edit anything we got wrong."
          actionLabel="Review details"
          onAction={() => console.log('review details')}
        />
        <ValidationMessage
          type="success"
          title="All documents verified"
          description="Invoice and proof of payment are ready. You can continue."
          actionLabel="Continue"
          onAction={() => console.log('continue')}
        />
        <ValidationMessage
          type="warning"
          title="Proof of payment missing"
          description="Add a receipt or bank statement showing you paid the vet."
          actionLabel="Add proof of payment"
          onAction={() => console.log('add proof of payment')}
        />
        <ValidationMessage
          type="error"
          title="This looks like a quote"
          description="We need the final invoice from your vet, not an estimate."
          actionLabel="Upload invoice"
          onAction={() => console.log('upload invoice')}
        />
        <ValidationMessage
          type="info"
          title="No action needed right now"
          description="showAction is false here — the component works without a link too."
          showAction={false}
        />
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-16)',
          maxWidth: '400px',
          marginTop: 'var(--spacing-24)',
        }}
      >
        <EstimateCard
          size="full"
          amount="$96.00"
          footnote="Final amount is confirmed after review. Paid to your bank account 3–5 days after approval."
          breakdown={[
            { label: 'Vet bill total', value: '$185.00' },
            { label: 'Not covered (food, grooming)', value: '−$15.00', info: true },
            { label: 'Annual deductible', value: '−$50.00', info: true },
            { label: 'Your coverage', value: '80%', info: true },
          ]}
          onInfoClick={(label) => console.log('info', label)}
        />
        <EstimateCard size="compact" amount="$96.00" subtext="After deductible and 80% coverage" />
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-24)',
          maxWidth: '400px',
          marginTop: 'var(--spacing-24)',
        }}
      >
        <ClaimStatusStepper status="in-review" receivedAt="Sep 12 · 10:24 AM" decisionExpected="Expected by Sep 15" />
        <ClaimStatusStepper
          status="action-required"
          receivedAt="Sep 12 · 10:24 AM"
          actionMessage="The invoice photo is blurry. Upload a clearer one to keep your claim moving."
        />
        <ClaimStatusStepper
          status="approved"
          receivedAt="Sep 12 · 10:24 AM"
          reviewedAt="Sep 13"
          approvedAmount="$96.00"
          approvedAt="Sep 14 · See breakdown"
          paymentEta="Arrives by Sep 18"
        />
        <ClaimStatusStepper
          status="paid"
          receivedAt="Sep 12 · 10:24 AM"
          reviewedAt="Sep 13"
          approvedAmount="$96.00"
          approvedAt="Sep 14"
          paymentDetail="$96.00 to account ••••4521 · Sep 16"
        />
      </div>

      <div
        role="radiogroup"
        aria-label="Which pet is this claim for"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-12)',
          maxWidth: '400px',
          marginTop: 'var(--spacing-24)',
        }}
      >
        <PetSelector
          state={selectedPet === 'luna' ? 'selected' : 'default'}
          name="Luna"
          detail="Beagle · 4 years · Policy ending 8821"
          onSelect={() => setSelectedPet('luna')}
        />
        <PetSelector
          state={selectedPet === 'max' ? 'selected' : 'default'}
          name="Max"
          detail="Tabby cat · 2 years · Policy ending 8821"
          onSelect={() => setSelectedPet('max')}
        />
      </div>
    </div>
  );
}
