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
    <svg
      viewBox="0 0 21.8502 21.8486"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.24794 17.7421C6.77501 21.8841 15.0752 21.8841 18.6023 17.7421C21.8509 13.9273 21.6044 6.46018 17.6944 3.1941C14.192 0.268632 7.65828 0.268632 4.15594 3.1941C0.245842 6.46018 -0.000722289 13.9273 3.24794 17.7421Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.95452 9.34629H9.73464C10.6025 9.34629 11.3061 10.0499 11.3061 10.9178L11.3059 15.2156"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.97754 15.2158H13.6577"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.3293 5.7632V6.27043"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CheckSquareIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 21.6429 21.6429"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.32979 15.9576C1.572 18.2216 3.39281 20.0424 5.65561 20.2946C7.33633 20.4819 9.06201 20.6429 10.8214 20.6429C12.5808 20.6429 14.3065 20.4819 15.9872 20.2946C18.25 20.0424 20.0709 18.2216 20.313 15.9576C20.4918 14.2865 20.6429 12.5707 20.6429 10.8214C20.6429 9.07218 20.4918 7.3564 20.313 5.68517C20.0709 3.42129 18.25 1.60046 15.9872 1.34824C14.3065 1.1609 12.5808 1 10.8214 1C9.06201 1 7.33633 1.1609 5.65561 1.34824C3.39281 1.60046 1.572 3.42129 1.32979 5.68517C1.15099 7.3564 1 9.07218 1 10.8214C1 12.5707 1.15099 14.2865 1.32979 15.9576Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.89286 11.8036L9.75 14.75C11.0945 10.8879 12.2142 9.19321 14.75 6.89286"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WarningDiamondIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 20.602 20.5903"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.79906 8.10887C3.67942 5.78054 5.71343 3.74085 8.03432 1.8565C9.44552 0.710737 11.1375 0.71827 12.55 1.8565C14.8828 3.73623 16.9122 5.77017 18.7889 8.10887C19.8695 9.4553 19.8767 11.1424 18.7889 12.4876C16.8889 14.8373 14.8318 16.8929 12.4803 18.792C11.1576 19.8601 9.47112 19.8528 8.14721 18.792C5.76862 16.8858 3.70521 14.8225 1.79906 12.444C0.737255 11.119 0.730044 9.43258 1.79906 8.10887Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.4002 5.81447V11.2195"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.4002 13.9797V14.9549"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Camera1Icon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 18.369 16.678"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.2035 1H6.16555L4.66701 3.71449C4.3706 3.73947 4.07589 3.76502 3.78299 3.79032C2.53052 3.89847 1.4995 4.86346 1.31601 6.10713C1.14977 7.23379 1 8.39415 1 9.57923C1 10.7643 1.14977 11.9247 1.31601 13.0513C1.4995 14.2949 2.53052 15.2599 3.78299 15.3681C5.57998 15.5234 7.37938 15.678 9.18452 15.678C10.9897 15.678 12.7891 15.5234 14.586 15.3681C15.8385 15.2599 16.8696 14.2949 17.0531 13.0513C17.2192 11.9247 17.369 10.7643 17.369 9.57923C17.369 8.39415 17.2192 7.23379 17.0531 6.10713C16.8696 4.86346 15.8385 3.89847 14.586 3.79032C14.2914 3.76486 13.9968 3.73933 13.702 3.71449L12.2035 1Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.18452 12.1393C11.0702 12.1393 12.131 11.0786 12.131 9.19284C12.131 7.30712 11.0702 6.24641 9.18452 6.24641C7.29881 6.24641 6.2381 7.30712 6.2381 9.19284C6.2381 11.0786 7.29881 12.1393 9.18452 12.1393Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Landscape2Icon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 18.369 18.369"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.33393 14.0065C1.5082 15.5785 2.76686 16.8367 4.33822 17.0174C5.90882 17.198 7.52872 17.369 9.1845 17.369C10.8403 17.369 12.4602 17.198 14.0308 17.0174C15.6021 16.8367 16.8608 15.5785 17.0351 14.0065C17.2084 12.4436 17.369 10.8319 17.369 9.18452C17.369 7.53717 17.2084 5.92542 17.0351 4.36263C16.8608 2.79054 15.6021 1.53233 14.0308 1.35163C12.4602 1.171 10.8403 1 9.1845 1C7.52872 1 5.90882 1.171 4.33822 1.35163C2.76686 1.53233 1.5082 2.79054 1.33393 4.36263C1.16069 5.92542 1 7.53717 1 9.18452C1 10.8319 1.16069 12.4436 1.33393 14.0065Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.33816 17.0174C2.7668 16.8367 1.50813 15.5785 1.33386 14.0065C1.25368 13.2831 1.17617 12.5491 1.11605 11.8061C2.41245 10.1593 3.93213 8.89475 5.48572 8.89475C8.63628 8.89475 11.6474 14.095 12.9398 17.1386C11.7134 17.2677 10.4595 17.369 9.18443 17.369C7.52866 17.369 5.90875 17.198 4.33816 17.0174Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.1997 8.46397C13.4403 8.46397 14.1382 7.76614 14.1382 6.52554C14.1382 5.28494 13.4403 4.5871 12.1997 4.5871C10.9591 4.5871 10.2613 5.28494 10.2613 6.52554C10.2613 7.76614 10.9591 8.46397 12.1997 8.46397Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function UploadBox1Icon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 18.2228 17.9958"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.54591 16.0595H3.11507C2.21412 16.0595 1.43365 15.4467 1.29746 14.5562C1.00543 12.6246 0.701622 9.10464 1.58162 5.58333C1.58162 5.58333 2.89115 2.30952 5.51019 1H12.7126C15.3316 2.30952 16.6411 5.58333 16.6411 5.58333C17.5211 9.10464 17.2173 12.626 16.9253 14.5549C16.7891 15.4467 16.0086 16.0608 15.1077 16.0608H14.6769"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.58162 5.58333H16.6411"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.11138 1V5.58333"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.7985 12.7242C11.2511 11.6294 10.1538 10.532 9.059 9.98333C7.96293 10.532 6.86686 11.6281 6.31817 12.7242"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.05638 16.9958V10.0135"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BrokenLinkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 21.6273 21.6429"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.98877 11.0085L2.16589 13.8314C1.41922 14.5811 1 15.5961 1 16.6542C1 17.7124 1.41922 18.7274 2.16589 19.4771C2.91563 20.2238 3.93065 20.6429 4.98877 20.6429C6.04689 20.6429 7.06191 20.2238 7.81164 19.4771L9.48723 17.8015"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.8343 14.5862H16.642C17.699 14.5862 18.7127 14.1663 19.4601 13.4189C20.2074 12.6716 20.6273 11.6579 20.6273 10.6009C20.6273 9.544 20.2074 8.53033 19.4601 7.78296C18.7127 7.03559 17.699 6.61572 16.642 6.61572H12.6568"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.8158 1.00024L10.061 4.01934"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.00307 5.52884L4.02218 7.03839"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.77741 1.00024L6.28697 4.01934"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
