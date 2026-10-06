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

export function ThreatPhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 21.6664 21.6421" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M10.6674 1.06757C8.4864 0.950912 6.29987 0.987669 4.124 1.17757C2.62486 1.30329 1.47457 2.53686 1.35514 4.03757C1.18229 6.22657 1 8.49571 1 10.8214C1 13.1471 1.18071 15.4163 1.35514 17.6053C1.47457 19.106 2.62486 20.3396 4.124 20.4653C6.90229 20.701 9.46686 20.701 12.2436 20.4653C13.7443 20.3396 14.8946 19.106 15.014 17.6053C15.0659 16.9374 15.1193 16.2633 15.1696 15.5813" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.6653 11.802H9.67271C10.5684 7.29357 11.7879 4.344 15.1696 1C18.4366 4.38957 19.6183 7.23071 20.6664 11.802H18.8687" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.1696 6.401V8.601" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.1696 11.4217V11.802" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.96871 17.8379H7.39729" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
