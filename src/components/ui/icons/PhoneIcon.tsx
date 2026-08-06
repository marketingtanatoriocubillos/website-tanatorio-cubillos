import type { SVGProps } from "react";

export function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.92 4.75H9.3C9.66 4.75 9.99 5 10.08 5.35L10.97 8.91C11.05 9.24 10.93 9.58 10.67 9.79L9.06 11.12C10 13.02 11.54 14.56 13.44 15.5L14.77 13.89C14.98 13.63 15.32 13.51 15.65 13.59L19.21 14.48C19.56 14.57 19.81 14.9 19.81 15.26V17.64C19.81 18.58 19.05 19.34 18.11 19.34H17.25C10.35 19.34 4.75 13.74 4.75 6.84V5.98C4.75 5.04 5.51 4.28 6.45 4.28H6.92V4.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
