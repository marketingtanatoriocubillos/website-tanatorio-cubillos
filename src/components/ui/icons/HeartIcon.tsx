import type { SVGProps } from "react";

export function HeartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M20.84 4.61A5.5 5.5 0 0 0 13.06 4.61L12 5.67L10.94 4.61A5.5 5.5 0 0 0 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39A5.5 5.5 0 0 0 20.84 4.61Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
