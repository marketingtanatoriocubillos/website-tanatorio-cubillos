import type { SVGProps } from "react";

export function VehicleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5.25 14.25L6.85 9.7C7.13 8.89 7.89 8.35 8.75 8.35H15.25C16.11 8.35 16.87 8.89 17.15 9.7L18.75 14.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.75 16C4.75 15.03 5.53 14.25 6.5 14.25H17.5C18.47 14.25 19.25 15.03 19.25 16V16.75C19.25 17.58 18.58 18.25 17.75 18.25H6.25C5.42 18.25 4.75 17.58 4.75 16.75V16Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="7.75" cy="17.25" r="1" fill="currentColor" />
      <circle cx="16.25" cy="17.25" r="1" fill="currentColor" />
      <path
        d="M8.25 11.25H15.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
