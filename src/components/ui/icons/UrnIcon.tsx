import type { SVGProps } from "react";

export function UrnIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M9 3h6" />
      <path d="M10 3v2.5c0 .5-.2 1-.6 1.4C8 8.3 7 10.5 7 13v5a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3v-5c0-2.5-1-4.7-2.4-6.1a2 2 0 0 1-.6-1.4V3" />
      <path d="M8 15h8" />
    </svg>
  );
}
