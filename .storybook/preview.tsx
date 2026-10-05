import type { Decorator, Preview } from '@storybook/react-vite';
import { useEffect } from 'react';

// Same three stylesheets + fonts src/main.tsx loads, per CLAUDE.md -
// Storybook renders real components, so it needs the real tokens.
import '../build/css/tokens.css';
import '../build/css/theme-dark.css';
import '../build/css/text-large.css';
import '../src/styles/global.css';
import '@fontsource/inter-tight/400.css';
import '@fontsource/inter-tight/500.css';
import '@fontsource/inter-tight/600.css';
import '@fontsource/inter-tight/700.css';
import '@fontsource/fraunces/400.css';
import '@fontsource/fraunces/600.css';
import '@fontsource/fraunces/700.css';

// Theme/text-size are attribute switches on <html>, per CLAUDE.md - this
// mirrors Playground.tsx's toggle buttons as Storybook toolbar globals.
const withThemeAttrs: Decorator = (Story, context) => {
  const { theme, textSize } = context.globals;

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.setAttribute('data-theme', 'dark');
    else root.removeAttribute('data-theme');
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;
    if (textSize === 'large') root.setAttribute('data-text-size', 'large');
    else root.removeAttribute('data-text-size');
  }, [textSize]);

  return Story();
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the panel without failing CI
      test: 'todo',
    },
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Light / dark theme',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
      },
    },
    textSize: {
      name: 'Text size',
      description: 'Default / large text accessibility mode',
      defaultValue: 'default',
      toolbar: {
        icon: 'accessibility',
        items: [
          { value: 'default', title: 'Default' },
          { value: 'large', title: 'Large' },
        ],
      },
    },
  },
  decorators: [withThemeAttrs],
};

export default preview;
