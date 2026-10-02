import { useEffect, useState } from 'react';
import { DocumentCard } from '../components';

type Theme = 'light' | 'dark';
type TextSize = 'default' | 'large';

export function Playground() {
  const [theme, setTheme] = useState<Theme>('light');
  const [textSize, setTextSize] = useState<TextSize>('default');

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
    </div>
  );
}
