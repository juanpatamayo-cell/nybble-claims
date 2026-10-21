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

export function Home2Icon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 21.9319 19.8155"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.99521 18.8155H15.937C16.9889 18.8155 17.8837 18.048 18.0438 17.0082C18.2983 15.3556 18.3573 13.6805 18.2205 12.017H20.1434C20.763 12.017 21.1388 11.3332 20.8066 10.8101L20.4739 10.2861C18.4727 7.13514 15.9263 4.36581 12.9538 2.10793L11.9166 1.32006C11.3548 0.893312 10.5774 0.893312 10.0156 1.32006L8.97821 2.10803C6.00577 4.36582 3.4593 7.1351 1.45815 10.2861L1.12535 10.8101C0.793131 11.3332 1.16893 12.017 1.7886 12.017H3.71166C3.57489 13.6805 3.63387 15.3556 3.88833 17.0082C4.04844 18.048 4.94317 18.8155 5.99521 18.8155Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.9662 11.4178C12.4134 11.4178 13.5867 12.591 13.5867 14.0383V18.8153H8.34564V14.0383C8.34564 12.591 9.51889 11.4178 10.9662 11.4178Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TextFileIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 19.2857 20.8571"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.0874 16.846C18.2174 14.7746 18.2857 12.6281 18.2857 10.4286C18.2857 9.53776 18.2746 8.65564 18.2526 7.78367C18.2372 7.17111 18.0384 6.57581 17.6758 6.08184C16.2938 4.19908 15.1928 3.02859 13.3783 1.62821C12.8797 1.24337 12.2678 1.03457 11.6381 1.02081C11.0066 1.00701 10.3472 1 9.64286 1C7.51051 1 5.79042 1.06422 4.01039 1.18661C2.49609 1.29073 1.29343 2.49622 1.19835 4.01111C1.06834 6.08252 1 8.22906 1 10.4286C1 12.6281 1.06834 14.7746 1.19835 16.846C1.29343 18.361 2.49609 19.5664 4.01039 19.6705C5.79042 19.7929 7.51051 19.8571 9.64286 19.8571C11.7752 19.8571 13.4953 19.7929 15.2753 19.6705C16.7896 19.5664 17.9923 18.361 18.0874 16.846Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.64732 10.4531H12.6384"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.64732 15.0201H12.6198M6.64732 5.71429H10.2626"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function InboxIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M20.5764 12.3929H15.5173C14.6523 12.3929 13.9727 13.13 13.5915 13.909C13.1774 14.7554 12.3482 15.5357 10.8189 15.5357C9.28968 15.5357 8.46039 14.7554 8.04629 13.909C7.6651 13.13 6.98551 12.3929 6.12056 12.3929H1.06138C1.11135 13.7119 1.21804 15.0191 1.34944 16.2862C1.56895 18.4029 3.23284 20.0877 5.34175 20.3149C7.11562 20.506 8.96326 20.6429 10.8189 20.6429C12.6746 20.6429 14.5222 20.506 16.2961 20.3149C18.405 20.0877 20.0688 18.4029 20.2883 16.2862C20.4199 15.0191 20.5264 13.7119 20.5764 12.3929Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Dog1Icon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 22.4096 21.4342"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.66285 6.29129C5.66285 6.29129 4.09142 11.1627 4.09142 14.9341C4.09142 19.6484 7.23428 20.4342 11.1629 20.4342C15.0914 20.4342 18.2342 19.6484 18.2342 14.9341C18.2342 11.1627 16.6628 6.29129 16.6628 6.29129"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.59142 14.9341L11.1629 15.7199L12.7343 14.9341"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.9129 9.43415V10.2199"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.41285 9.43415V10.2199"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.25679 12.5771H3.46631C-1.24788 11.7914 1.8481 5.02437 4.09098 3.14851C5.8538 1.6742 9.13026 1 11.2048 1C13.2794 1 16.5558 1.6742 18.3186 3.14851C20.5615 5.02437 23.6575 11.7914 18.9434 12.5771H18.0742"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
