/**
 * React wrappers for the raw SVG files in this folder — same pattern
 * lucide-react itself uses internally. Source SVGs are exported from
 * Figma via download_assets with the literal stroke color stripped to
 * `currentColor` so they theme through CSS `color` like a lucide icon
 * would. See CLAUDE.md's "Icons" section.
 */
import type { SVGProps } from 'react';

export function InformationCircleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 21.8502 21.8486" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M3.24794 17.7421C6.77501 21.8841 15.0752 21.8841 18.6023 17.7421C21.8509 13.9273 21.6044 6.46018 17.6944 3.1941C14.192 0.268632 7.65828 0.268632 4.15594 3.1941C0.245842 6.46018 -0.000722289 13.9273 3.24794 17.7421Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.95452 9.34629H9.73464C10.6025 9.34629 11.3061 10.0499 11.3061 10.9178L11.3059 15.2156" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.97754 15.2158H13.6577" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.3293 5.7632V6.27043" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CheckSquareIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 21.6429 21.6429" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M1.32979 15.9576C1.572 18.2216 3.39281 20.0424 5.65561 20.2946C7.33633 20.4819 9.06201 20.6429 10.8214 20.6429C12.5808 20.6429 14.3065 20.4819 15.9872 20.2946C18.25 20.0424 20.0709 18.2216 20.313 15.9576C20.4918 14.2865 20.6429 12.5707 20.6429 10.8214C20.6429 9.07218 20.4918 7.3564 20.313 5.68517C20.0709 3.42129 18.25 1.60046 15.9872 1.34824C14.3065 1.1609 12.5808 1 10.8214 1C9.06201 1 7.33633 1.1609 5.65561 1.34824C3.39281 1.60046 1.572 3.42129 1.32979 5.68517C1.15099 7.3564 1 9.07218 1 10.8214C1 12.5707 1.15099 14.2865 1.32979 15.9576Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.89286 11.8036L9.75 14.75C11.0945 10.8879 12.2142 9.19321 14.75 6.89286" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function WarningDiamondIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20.602 20.5903" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M1.79906 8.10887C3.67942 5.78054 5.71343 3.74085 8.03432 1.8565C9.44552 0.710737 11.1375 0.71827 12.55 1.8565C14.8828 3.73623 16.9122 5.77017 18.7889 8.10887C19.8695 9.4553 19.8767 11.1424 18.7889 12.4876C16.8889 14.8373 14.8318 16.8929 12.4803 18.792C11.1576 19.8601 9.47112 19.8528 8.14721 18.792C5.76862 16.8858 3.70521 14.8225 1.79906 12.444C0.737255 11.119 0.730044 9.43258 1.79906 8.10887Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.4002 5.81447V11.2195" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.4002 13.9797V14.9549" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function BrokenLinkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 21.6273 21.6429" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M4.98877 11.0085L2.16589 13.8314C1.41922 14.5811 1 15.5961 1 16.6542C1 17.7124 1.41922 18.7274 2.16589 19.4771C2.91563 20.2238 3.93065 20.6429 4.98877 20.6429C6.04689 20.6429 7.06191 20.2238 7.81164 19.4771L9.48723 17.8015" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13.8343 14.5862H16.642C17.699 14.5862 18.7127 14.1663 19.4601 13.4189C20.2074 12.6716 20.6273 11.6579 20.6273 10.6009C20.6273 9.544 20.2074 8.53033 19.4601 7.78296C18.7127 7.03559 17.699 6.61572 16.642 6.61572H12.6568" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.8158 1.00024L10.061 4.01934" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M1.00307 5.52884L4.02218 7.03839" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.77741 1.00024L6.28697 4.01934" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
