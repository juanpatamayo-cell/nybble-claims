// url=https://www.figma.com/design/IEAuFSPBjRPwXbmMdmFfcK/nybblegroup-UX-challenge-Library?node-id=11680-70
// source=src/components/CameraModule/CameraModule.tsx
// component=CameraModule
// Figma component is "Camera overlay"; the code name is CameraModule
// (see CLAUDE.md's Figma MCP workflow note on this component). Not a
// variant set — a single component with no State/Type property.
import figma from 'figma';

const instance = figma.selectedInstance;

const instruction = instance.getString('Instruction');

// `hint` has no Figma equivalent — hardcoded copy in the design, exposed
// as a prop anyway in case a different capture step needs different
// wording (see CameraModule.tsx prop docs). `onCapture` has no Figma
// equivalent either (static prototype has no handlers).

export default {
  example: figma.code`
    <CameraModule
      instruction="${instruction}"
    />
  `,
  imports: ["import { CameraModule } from './CameraModule'"],
  id: 'camera-module',
  metadata: {
    nestable: true,
  },
};
