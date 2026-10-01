import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Playground } from './playground/Playground';

// Design tokens (source of truth: tokens/figma/ → build/css/, see CLAUDE.md).
// All three must load for theming (data-theme) and accessibility (data-text-size) to work.
import '../build/css/tokens.css';
import '../build/css/theme-dark.css';
import '../build/css/text-large.css';

// Inter, with the weights the type tokens use (--font-weight-regular|medium|semibold|bold).
// --font-family-body ships with no fallback, so every consumer must load Inter itself.
// TODO(typography): --font-family-body is becoming Inter Tight (matches the onboarding
// research report's own pairing). Swap these for @fontsource/inter-tight once the Figma
// token value is updated — the Figma plugin sandbox used to generate this file can't load
// Inter Tight itself, so that one variable still needs a manual edit in Figma's UI.
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';

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
