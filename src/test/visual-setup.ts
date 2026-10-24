// Loaded via vite.config.ts's "visual" project setupFiles. Same token
// stylesheets + fonts src/main.tsx and .storybook/preview.tsx each load
// independently — see CLAUDE.md's Theming section: every consumer of the
// components has to load these itself, a screenshot test is no exception.
import '../../build/css/tokens.css';
import '../../build/css/theme-dark.css';
import '../../build/css/text-large.css';
import '../styles/global.css';
import '@fontsource/inter-tight/400.css';
import '@fontsource/inter-tight/500.css';
import '@fontsource/inter-tight/600.css';
import '@fontsource/inter-tight/700.css';
import '@fontsource/fraunces/400.css';
import '@fontsource/fraunces/600.css';
import '@fontsource/fraunces/700.css';
