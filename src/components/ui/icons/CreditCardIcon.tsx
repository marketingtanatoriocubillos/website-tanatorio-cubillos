import type { SVGProps } from "react";

export function CreditCardIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect
        x="1"
        y="4"
        width="22"
        height="16"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <line
        x1="1"
        y1="10"
        x2="23"
        y2="10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
