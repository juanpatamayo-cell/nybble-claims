import { useState } from 'react';

type Theme = 'light' | 'dark';
type TextSize = 'default' | 'large';

export function Playground() {
  const [theme, setTheme] = useState<Theme>('light');
  const [textSize, setTextSize] = useState<TextSize>('default');

  return (
    <div
      data-theme={theme === 'dark' ? 'dark' : undefined}
      data-text-size={textSize === 'large' ? 'large' : undefined}
      style={{ minHeight: '100vh', padding: 'var(--spacing-24)' }}
    >
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
    </div>
  );
}
