import {
  BG_TOKENS,
  BORDER_TOKENS,
  DISPLAY_SIZE_TOKENS,
  FG_TOKENS,
  RADIUS_TOKENS,
  SPACING_TOKENS,
  TEXT_COLOR_TOKENS,
  TEXT_SIZE_TOKENS,
} from './tokenLists';
import { useResolvedVar } from './useResolvedVar';
import styles from './TokensPage.module.css';

function ColorSwatch({ name }: { name: string }) {
  const resolved = useResolvedVar(name);
  return (
    <figure className={styles.swatch}>
      <div
        className={styles.swatchFill}
        style={{ background: `var(${name})` }}
        aria-hidden="true"
      />
      <figcaption className={styles.swatchCaption}>
        <code className={styles.tokenName}>{name}</code>
        <span className={styles.resolvedValue}>{resolved}</span>
      </figcaption>
    </figure>
  );
}

function ColorSection({ title, tokens }: { title: string; tokens: string[] }) {
  return (
    <section className={styles.section}>
      <h3 className={styles.sectionTitle}>{title}</h3>
      <div className={styles.swatchGrid}>
        {tokens.map((name) => (
          <ColorSwatch key={name} name={name} />
        ))}
      </div>
    </section>
  );
}

function TypeSpecimen({
  sizeToken,
  lineHeightToken,
  family,
  fallback,
}: {
  sizeToken: string;
  lineHeightToken: string;
  family: '--font-family-body' | '--font-family-display';
  fallback: string;
}) {
  const sizeValue = useResolvedVar(sizeToken);
  const lineHeightValue = useResolvedVar(lineHeightToken);

  return (
    <div className={styles.specimen}>
      <p
        className={styles.specimenSample}
        style={{
          font: `var(--font-weight-regular) var(${sizeToken}) / var(${lineHeightToken}) var(${family}), ${fallback}`,
        }}
      >
        Reimbursement sent
      </p>
      <p className={styles.specimenMeta}>
        <code className={styles.tokenName}>{sizeToken}</code>
        <span className={styles.resolvedValue}>{sizeValue}</span>
        <code className={styles.tokenName}>{lineHeightToken}</code>
        <span className={styles.resolvedValue}>{lineHeightValue}</span>
      </p>
    </div>
  );
}

function TypeScaleSection({
  title,
  sizes,
}: {
  title: string;
  sizes: { size: string; lineHeight: string }[];
}) {
  return (
    <section className={styles.section}>
      <h3 className={styles.sectionTitle}>{title}</h3>
      <div className={styles.typeColumns}>
        <div className={styles.typeColumn}>
          <h4 className={styles.typeColumnTitle}>--font-family-body</h4>
          {sizes.map(({ size, lineHeight }) => (
            <TypeSpecimen
              key={size}
              sizeToken={size}
              lineHeightToken={lineHeight}
              family="--font-family-body"
              fallback="system-ui, sans-serif"
            />
          ))}
        </div>
        <div className={styles.typeColumn}>
          <h4 className={styles.typeColumnTitle}>--font-family-display</h4>
          {sizes.map(({ size, lineHeight }) => (
            <TypeSpecimen
              key={size}
              sizeToken={size}
              lineHeightToken={lineHeight}
              family="--font-family-display"
              fallback="Georgia, serif"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SpacingSwatch({ name }: { name: string }) {
  const resolved = useResolvedVar(name);
  return (
    <div className={styles.spacingRow}>
      <code className={styles.tokenName}>{name}</code>
      <div className={styles.spacingTrack}>
        <div
          className={styles.spacingBar}
          style={{ width: `var(${name})` }}
          aria-hidden="true"
        />
      </div>
      <span className={styles.resolvedValue}>{resolved}</span>
    </div>
  );
}

function RadiusSwatch({ name }: { name: string }) {
  const resolved = useResolvedVar(name);
  return (
    <figure className={styles.swatch}>
      <div
        className={styles.radiusBox}
        style={{ borderRadius: `var(${name})` }}
        aria-hidden="true"
      />
      <figcaption className={styles.swatchCaption}>
        <code className={styles.tokenName}>{name}</code>
        <span className={styles.resolvedValue}>{resolved}</span>
      </figcaption>
    </figure>
  );
}

export function TokensPage() {
  return (
    <div className={styles.page}>
      <p className={styles.intro}>
        Visual reference for every token in{' '}
        <code className={styles.tokenName}>build/css/tokens.css</code>. Swatches
        and specimens below read the real CSS variables, so this page can&apos;t
        drift from the build — use the toolbar&apos;s <strong>Theme</strong> and{' '}
        <strong>Text size</strong> globals to see how each token responds.
      </p>

      <h2 className={styles.pageTitle}>Color</h2>
      <ColorSection title="Background — --bg-*" tokens={BG_TOKENS} />
      <ColorSection title="Text — --text-*" tokens={TEXT_COLOR_TOKENS} />
      <ColorSection title="Border — --border-*" tokens={BORDER_TOKENS} />
      <ColorSection title="Icon / foreground — --fg-*" tokens={FG_TOKENS} />

      <h2 className={styles.pageTitle}>Typography</h2>
      <TypeScaleSection title="Display scale" sizes={DISPLAY_SIZE_TOKENS} />
      <TypeScaleSection title="Text scale" sizes={TEXT_SIZE_TOKENS} />

      <h2 className={styles.pageTitle}>Spacing</h2>
      <section className={styles.section}>
        <div className={styles.spacingList}>
          {SPACING_TOKENS.map((name) => (
            <SpacingSwatch key={name} name={name} />
          ))}
        </div>
      </section>

      <h2 className={styles.pageTitle}>Radius</h2>
      <section className={styles.section}>
        <div className={styles.swatchGrid}>
          {RADIUS_TOKENS.map((name) => (
            <RadiusSwatch key={name} name={name} />
          ))}
        </div>
      </section>
    </div>
  );
}
