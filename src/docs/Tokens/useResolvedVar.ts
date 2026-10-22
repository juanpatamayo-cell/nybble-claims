import { useEffect, useState } from 'react';

/**
 * Reads a CSS custom property's current computed value from <html> and
 * keeps it in sync with the Theme/Text size toolbar globals (which toggle
 * `data-theme`/`data-text-size` on <html>, see .storybook/preview.tsx).
 * Lets the Tokens page show real resolved values without hardcoding any
 * hex/px — if build/css/tokens.css changes, this reflects it automatically.
 */
export function useResolvedVar(name: string): string {
  const [value, setValue] = useState('');

  useEffect(() => {
    const root = document.documentElement;

    function read() {
      setValue(getComputedStyle(root).getPropertyValue(name).trim());
    }

    read();

    const observer = new MutationObserver(read);
    observer.observe(root, {
      attributes: true,
      attributeFilter: ['data-theme', 'data-text-size'],
    });
    return () => observer.disconnect();
  }, [name]);

  return value;
}
