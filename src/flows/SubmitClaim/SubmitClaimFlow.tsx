import { useState, type ReactNode } from 'react';
import {
  ActionBar,
  AppBar,
  CameraModule,
  ClaimHeader,
  ClaimStatusStepper,
  DocumentCard,
  EstimateCard,
  PetSelector,
  TabBar,
  ValidationMessage,
} from '../../components';
import styles from './SubmitClaimFlow.module.css';

type ScreenProps = {
  step: string;
  title: string;
  appBar?: ReactNode;
  footer?: ReactNode;
  fullBleed?: boolean;
  children: ReactNode;
};

/**
 * One mock phone screen in the flow — AppBar/ActionBar/TabBar are the real
 * components, this is just the device-sized frame + caption around them so
 * the sequence reads like an actual walk-through instead of a loose list.
 */
function Screen({
  step,
  title,
  appBar,
  footer,
  fullBleed,
  children,
}: ScreenProps) {
  return (
    <figure className={styles.screenWrap}>
      <figcaption className={styles.caption}>
        {step} · {title}
      </figcaption>
      <div className={styles.screen}>
        {appBar}
        <div
          className={fullBleed ? styles.screenBodyFullBleed : styles.screenBody}
        >
          {children}
        </div>
        {footer}
      </div>
    </figure>
  );
}

const breakdown = [
  { label: 'Vet bill total', value: '$185.00' },
  { label: 'Annual deductible', value: '−$50.00', info: true },
  { label: 'Coverage', value: '80%', info: true },
];

/**
 * A composed "Submit a claim" walk-through — PetSelector → DocumentCard →
 * CameraModule → ValidationMessage → EstimateCard → ClaimStatusStepper —
 * assembled from already-shipped components to demonstrate real screen
 * layout and state progression (#44). Static props only, same spirit as
 * Playground: this isn't a new component, just a composition demo, so it
 * lives in src/flows/ instead of src/components/.
 */
type PetId = 'luna' | 'max';

export function SubmitClaimFlow() {
  // The only screen with real interactivity — the rest stay static props
  // (CLAUDE.md's Flows section: "not required to be interactive/stateful
  // beyond what's needed to demonstrate the composition"). This one is a
  // small, self-contained useState example: picking a pet is a real choice
  // a user makes, not just a display variant.
  const [selectedPet, setSelectedPet] = useState<PetId>('luna');

  return (
    <div className={styles.page}>
      <h1 className={styles.pageTitle}>Submit a claim</h1>
      <p className={styles.intro}>
        Six screens composed from the shipped component set, showing how they
        fit together end to end — spacing between components on the same screen,
        and how state changes (a document going from empty to uploaded, an
        estimate appearing, a claim moving to &quot;in review&quot;) as the flow
        progresses.
      </p>

      <div className={styles.gallery}>
        <Screen
          step="1"
          title="Choose your pet"
          appBar={<AppBar title="New claim" showAction={false} />}
          footer={<ActionBar primaryLabel="Continue" />}
        >
          {/* PetSelector's own doc comment suggests role="radiogroup", but it
              renders a plain aria-pressed button (not role="radio"), which
              axe's aria-required-children rule would flag as invalid —
              role="group" groups them without that requirement. */}
          <div role="group" aria-label="Choose a pet" className={styles.stack}>
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
        </Screen>

        <Screen
          step="2"
          title="Upload the invoice"
          appBar={<AppBar title="Upload documents" />}
          footer={<ActionBar primaryLabel="Continue" />}
        >
          <div className={styles.stack}>
            <DocumentCard
              state="uploading"
              title="Invoice"
              fileName="invoice.pdf"
              progress={64}
            />
            <DocumentCard
              state="empty"
              title="Receipt"
              description="Optional — speeds up review"
              required={false}
            />
          </div>
        </Screen>

        <Screen step="3" title="Capture the photo" fullBleed>
          <CameraModule />
        </Screen>

        <Screen
          step="4"
          title="We read your document"
          appBar={<AppBar title="Invoice uploaded" />}
          footer={<ActionBar primaryLabel="See estimate" />}
        >
          <div className={styles.stack}>
            <DocumentCard
              state="valid"
              title="Invoice"
              detail="$185.00 · Sep 12"
            />
            <ValidationMessage
              type="success"
              title="We read your invoice"
              description="Totals and date matched automatically"
              showAction={false}
            />
          </div>
        </Screen>

        <Screen
          step="5"
          title="Review your estimate"
          appBar={<AppBar title="Estimated reimbursement" />}
          footer={<ActionBar primaryLabel="Submit claim" />}
        >
          <EstimateCard
            amount="$108.00"
            breakdown={breakdown}
            footnote="Estimate only — final amount may vary once reviewed."
          />
        </Screen>

        <Screen
          step="6"
          title="Track your claim"
          appBar={
            <AppBar title="Claim status" showBack={false} showAction={false} />
          }
          footer={<TabBar activeTab="claims" />}
        >
          <ClaimHeader
            status="in-review"
            title="Vet visit — Happy Paws Clinic"
            subtitle={`${selectedPet === 'luna' ? 'Luna' : 'Max'} · Claim NB-20418 · Sep 12`}
          />
          <ClaimStatusStepper
            status="in-review"
            receivedAt="Sep 12 · 10:24 AM"
            decisionExpected="Expected by Sep 15"
          />
        </Screen>
      </div>
    </div>
  );
}
