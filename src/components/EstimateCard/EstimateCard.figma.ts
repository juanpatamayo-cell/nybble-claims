// url=https://www.figma.com/design/IEAuFSPBjRPwXbmMdmFfcK/nybblegroup-UX-challenge-Library?node-id=11635-95512
// source=src/components/EstimateCard/EstimateCard.tsx
// component=EstimateCard
import figma from 'figma';

const instance = figma.selectedInstance;

const size = instance.getEnum('Size', {
  Full: 'full',
  Compact: 'compact',
});
const amount = instance.getString('Amount');

// `breakdown` and `totalLabel` have no Figma equivalent — the breakdown
// rows are plain editable text layers in the design, not component
// properties, and real usage needs different numbers per claim (see
// EstimateCard.tsx prop docs). The rows below match the Playground's
// `full`-size example data.
let sizeProps;
if (size === 'full') {
  const footnote = instance.getString('Footnote');
  sizeProps = figma.code`
      footnote="${footnote}"
      breakdown={[
        { label: 'Vet bill total', value: '$185.00' },
        { label: 'Not covered (food, grooming)', value: '−$15.00', info: true },
        { label: 'Annual deductible', value: '−$50.00', info: true },
        { label: 'Your coverage', value: '80%', info: true },
      ]}
  `;
} else {
  const subtext = instance.getString('Subtext');
  sizeProps = figma.code`subtext="${subtext}"`;
}

export default {
  example: figma.code`
    <EstimateCard
      size="${size}"
      amount="${amount}"
      ${sizeProps}
    />
  `,
  imports: ["import { EstimateCard } from './EstimateCard'"],
  id: 'estimate-card',
  metadata: {
    nestable: true,
  },
};
