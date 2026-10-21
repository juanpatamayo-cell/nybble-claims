// url=https://www.figma.com/design/IEAuFSPBjRPwXbmMdmFfcK/nybblegroup-UX-challenge-Library?node-id=11691-73
// source=src/components/CoverageRow/CoverageRow.tsx
// component=CoverageRow
import figma from 'figma';

const instance = figma.selectedInstance;

const type = instance.getEnum('Type', {
  Covered: 'covered',
  'Not covered': 'not-covered',
});

const label = instance.getString('Label');
const amount = instance.getString('Amount');

export default {
  example: figma.code`
    <CoverageRow
      type="${type}"
      label="${label}"
      amount="${amount}"
    />
  `,
  imports: ["import { CoverageRow } from './CoverageRow'"],
  id: 'coverage-row',
  metadata: {
    nestable: true,
  },
};
