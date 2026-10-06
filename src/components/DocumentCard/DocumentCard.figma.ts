// url=https://www.figma.com/design/IEAuFSPBjRPwXbmMdmFfcK/nybblegroup-UX-challenge-Library?node-id=11793-95979
// source=src/components/DocumentCard/DocumentCard.tsx
// component=DocumentCard
import figma from 'figma';

const instance = figma.selectedInstance;

const state = instance.getEnum('State', {
  Empty: 'empty',
  Uploading: 'uploading',
  Analyzing: 'analyzing',
  Valid: 'valid',
  Error: 'error',
});
const title = instance.getString('Title');

// `required`, `progress` and the on* handlers have no Figma equivalent (see
// DocumentCard.tsx prop docs) — omitted here rather than invented.
let stateProps;
if (state === 'empty') {
  const description = instance.getString('Description');
  stateProps = figma.code`description="${description}"`;
} else if (state === 'uploading') {
  const fileName = instance.getString('File name');
  stateProps = figma.code`fileName="${fileName}" progress={60}`;
} else if (state === 'analyzing') {
  const statusText = instance.getString('Status text');
  stateProps = figma.code`statusText="${statusText}"`;
} else if (state === 'valid') {
  const detail = instance.getString('Detail');
  stateProps = figma.code`detail="${detail}"`;
} else {
  const errorMessage = instance.getString('Error message');
  stateProps = figma.code`errorMessage="${errorMessage}"`;
}

export default {
  example: figma.code`
    <DocumentCard
      state="${state}"
      title="${title}"
      ${stateProps}
    />
  `,
  imports: ["import { DocumentCard } from './DocumentCard'"],
  id: 'document-card',
  metadata: {
    nestable: true,
  },
};
