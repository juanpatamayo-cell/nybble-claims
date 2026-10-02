import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Playground } from './playground/Playground';

// Design tokens (source of truth: tokens/figma/ → build/css/, see CLAUDE.md).
// All three must load for theming (data-theme) and accessibility (data-text-size) to work.
import '../build/css/tokens.css';
import '../build/css/theme-dark.css';
import '../build/css/text-large.css';

// Inter Tight, with the weights the type tokens use (--font-weight-regular|medium|semibold|bold).
// --font-family-body ships with no fallback, so every consumer must load the font itself.
import '@fontsource/inter-tight/400.css';
import '@fontsource/inter-tight/500.css';
import '@fontsource/inter-tight/600.css';
import '@fontsource/inter-tight/700.css';

// Fraunces, for --font-family-display (headline moments only: greetings, success, empty
// states — never body text or dense UI). Weights match the research report's own pairing.
import '@fontsource/fraunces/400.css';
import '@fontsource/fraunces/600.css';
import '@fontsource/fraunces/700.css';

import './styles/global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Playground />
  </StrictMode>,
);
