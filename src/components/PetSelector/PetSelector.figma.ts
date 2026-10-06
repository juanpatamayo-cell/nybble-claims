// url=https://www.figma.com/design/IEAuFSPBjRPwXbmMdmFfcK/nybblegroup-UX-challenge-Library?node-id=11679-95606
// source=src/components/PetSelector/PetSelector.tsx
// component=PetSelector
// Figma component is "Pet selector card"; the code name is PetSelector
// (see CLAUDE.md's Figma MCP workflow note on this component).
import figma from 'figma';

const instance = figma.selectedInstance;

const state = instance.getEnum('State', {
  Default: 'default',
  Selected: 'selected',
});
const name = instance.getString('Name');
const detail = instance.getString('Detail');

export default {
  example: figma.code`
    <PetSelector
      state="${state}"
      name="${name}"
      detail="${detail}"
    />
  `,
  imports: ["import { PetSelector } from './PetSelector'"],
  id: 'pet-selector',
  metadata: {
    nestable: true,
  },
};
