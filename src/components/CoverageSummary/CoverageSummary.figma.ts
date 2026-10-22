// url=https://www.figma.com/design/IEAuFSPBjRPwXbmMdmFfcK/nybblegroup-UX-challenge-Library?node-id=11695-681
// source=src/components/CoverageSummary/CoverageSummary.tsx
// component=CoverageSummary
// Not a variant set — a single component with no Type/Size property.
// "Section title" and "Note" are plain text layers, not exposed component
// properties, and the nested Coverage row instances aren't exposed either
// (see CoverageSummary.tsx prop docs) — the example below mirrors the
// default content shown on the component in Figma.
import figma from 'figma';

export default {
  example: figma.code`
    <CoverageSummary
      title="Covered and not covered"
      items={[
        { type: 'covered', label: 'Exam and consultation', amount: '$60.00' },
        { type: 'covered', label: 'Treatment and medication', amount: '$110.00' },
        { type: 'not-covered', label: 'Food', amount: '$10.00' },
        { type: 'not-covered', label: 'Grooming', amount: '$5.00' },
      ]}
      footnote="Food and grooming are excluded by your plan, so they are not counted toward your reimbursement."
    />
  `,
  imports: ["import { CoverageSummary } from './CoverageSummary'"],
  id: 'coverage-summary',
  metadata: {
    nestable: true,
  },
};
