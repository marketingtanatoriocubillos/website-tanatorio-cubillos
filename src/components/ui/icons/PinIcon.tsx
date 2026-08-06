import type { SVGProps } from "react";

export function PinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 20.25C12 20.25 18 14.57 18 10.25C18 6.94 15.31 4.25 12 4.25C8.69 4.25 6 6.94 6 10.25C6 14.57 12 20.25 12 20.25Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10.25" r="2.25" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
