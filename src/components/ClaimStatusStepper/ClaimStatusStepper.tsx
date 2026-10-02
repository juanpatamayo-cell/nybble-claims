import { AlertTriangle, Check } from 'lucide-react';
import styles from './ClaimStatusStepper.module.css';

type StepState = 'complete' | 'current' | 'pending' | 'action-required';

type StepProps = {
  state: StepState;
  title: string;
  description?: string;
  showConnector?: boolean;
};

/**
 * Figma `_Step` — internal building block, not exported. States: Complete,
 * Current, Pending, Action required. Hide the connector on the last step.
 */
function Step({ state, title, description, showConnector = true }: StepProps) {
  return (
    <div className={styles.step}>
      <div className={styles.rail}>
        <div className={`${styles.indicator} ${styles[`indicator--${state}`]}`}>
          {state === 'complete' && <Check aria-hidden />}
          {state === 'action-required' && <AlertTriangle aria-hidden />}
          {state === 'current' && <span className={styles.dot} />}
        </div>
        {showConnector && (
          <div className={`${styles.connector} ${state === 'complete' ? styles['connector--complete'] : ''}`} />
        )}
      </div>
      <div className={`${styles.body} ${styles[`body--${state}`]}`}>
        <p className={styles.title}>{title}</p>
        {description && <p className={styles.description}>{description}</p>}
      </div>
    </div>
  );
}

export type ClaimStatus = 'in-review' | 'action-required' | 'approved' | 'paid';

export type ClaimStatusStepperProps = {
  /** Figma variant `Status`. Only these 4 are published in the Library — Partial/Denied are still Figma drafts (not merged into the component set yet). */
  status: ClaimStatus;
  /** Step 1 "Claim received" description. Always shown, e.g. "Sep 12 · 10:24 AM". */
  receivedAt: string;
  /** `action-required` step 2 description — the exact document or fix needed. */
  actionMessage?: string;
  /** `in-review` step 3 ("Decision") description, e.g. "Expected by Sep 15". */
  decisionExpected?: string;
  /** `approved` | `paid` step 2 ("Reviewed") description, e.g. "Sep 13". */
  reviewedAt?: string;
  /** `approved` | `paid` — the amount shown in step 3's title, "Approved · {approvedAmount}". */
  approvedAmount?: string;
  /**
   * `approved` | `paid` step 3 description. Pre-formatted — e.g. "Sep 14 · See
   * breakdown" for `approved`, just "Sep 14" for `paid`. This component
   * doesn't assemble that suffix itself.
   */
  approvedAt?: string;
  /** `approved` step 4 ("Payment on the way") description, e.g. "Arrives by Sep 18". */
  paymentEta?: string;
  /** `paid` step 4 ("Payment sent") description. Pre-formatted, e.g. "$96.00 to account ••••4521 · Sep 16". */
  paymentDetail?: string;
};

export function ClaimStatusStepper({
  status,
  receivedAt,
  actionMessage,
  decisionExpected,
  reviewedAt,
  approvedAmount,
  approvedAt,
  paymentEta,
  paymentDetail,
}: ClaimStatusStepperProps) {
  const isActionRequired = status === 'action-required';
  const isApprovedOrPaid = status === 'approved' || status === 'paid';

  return (
    <div className={styles.stepper}>
      <Step state="complete" title="Claim received" description={receivedAt} />

      {status === 'in-review' && <Step state="current" title="In review" description="Usually 1–2 business days" />}
      {isActionRequired && <Step state="action-required" title="We need something from you" description={actionMessage} />}
      {isApprovedOrPaid && <Step state="complete" title="Reviewed" description={reviewedAt} />}

      {(status === 'in-review' || isActionRequired) && (
        <Step
          state="pending"
          title="Decision"
          description={isActionRequired ? 'Paused until we get your document' : decisionExpected}
        />
      )}
      {isApprovedOrPaid && (
        <Step state="complete" title={`Approved · ${approvedAmount ?? ''}`} description={approvedAt} />
      )}

      {(status === 'in-review' || isActionRequired) && (
        <Step state="pending" title="Payment sent" description="3–5 days after approval" showConnector={false} />
      )}
      {status === 'approved' && (
        <Step state="current" title="Payment on the way" description={paymentEta} showConnector={false} />
      )}
      {status === 'paid' && (
        <Step state="complete" title="Payment sent" description={paymentDetail} showConnector={false} />
      )}
    </div>
  );
}
