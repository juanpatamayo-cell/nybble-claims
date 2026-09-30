// Builds CSS variables (and a flat JSON) from the tokens exported from Figma.
// Figma collections → files in tokens/figma:
//   primitives                     → shared by every build
//   semantic.light / .dark         → color modes
//   typography-sizing.default / .large-text → text-size modes (accessibility)
import StyleDictionary from 'style-dictionary';

const T = 'tokens/figma';
const common = { transformGroup: 'css', buildPath: 'build/', options: { outputReferences: true } };
const fromFile = (name) => (token) => token.filePath.includes(name);

const builds = [
  {
    // Default theme: light colors + default text size, all on :root
    source: [`${T}/primitives.json`, `${T}/semantic.light.json`, `${T}/typography-sizing.default.json`],
    platforms: {
      css: { ...common, files: [{ destination: 'css/tokens.css', format: 'css/variables', options: { selector: ':root', outputReferences: true } }] },
      json: { transformGroup: 'js', buildPath: 'build/', files: [{ destination: 'json/tokens.json', format: 'json/flat' }] },
    },
  },
  {
    // Dark mode overrides only semantic colors
    include: [`${T}/primitives.json`],
    source: [`${T}/semantic.dark.json`],
    platforms: {
      css: { ...common, files: [{ destination: 'css/theme-dark.css', format: 'css/variables', filter: fromFile('semantic.dark'), options: { selector: '[data-theme="dark"]', outputReferences: true } }] },
    },
  },
  {
    // Large text mode overrides only sizes (font-size, line-height, touch target, icons)
    source: [`${T}/typography-sizing.large-text.json`],
    platforms: {
      css: { ...common, files: [{ destination: 'css/text-large.css', format: 'css/variables', filter: (t) => ['font-size', 'line-height', 'size'].includes(t.path[0]), options: { selector: '[data-text-size="large"]' } }] },
    },
  },
];

for (const config of builds) {
  // Dark theme intentionally references primitives defined in tokens.css, so its warning is silenced.
  const sd = new StyleDictionary({ ...config, log: { verbosity: 'default', warnings: config.include ? 'disabled' : 'warn' } });
  await sd.buildAllPlatforms();
}
console.log('✔ Tokens built into build/css and build/json');
