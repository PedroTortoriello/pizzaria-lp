import type { SVGProps } from "react";

type BrandIconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

function iconProps({ size = 22, ...props }: BrandIconProps) {
  return {
    "aria-hidden": true,
    fill: "none",
    height: size,
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 2,
    viewBox: "0 0 24 24",
    width: size,
    ...props
  };
}

export function WhatsAppIcon(props: BrandIconProps) {
  const { size = 22, ...rest } = props;

  return (
    <svg
      aria-hidden="true"
      fill="currentColor"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      {...rest}
    >
      <path d="M12.04 2a9.86 9.86 0 0 0-8.43 14.96L2.5 21.05l4.2-1.1A9.84 9.84 0 1 0 12.04 2Zm5.79 14.01c-.24.68-1.38 1.29-1.94 1.34-.5.04-1.14.06-1.84-.12-.42-.11-.97-.31-1.66-.61-2.92-1.26-4.82-4.2-4.97-4.4-.14-.2-1.18-1.57-1.18-2.99 0-1.43.74-2.13 1-2.42.27-.3.58-.37.78-.37h.56c.18 0 .42-.07.66.51.24.59.84 2.04.91 2.19.07.15.12.33.02.53-.1.2-.15.33-.3.5-.15.17-.32.38-.46.51-.15.15-.3.31-.13.6.17.3.75 1.24 1.62 2 .1.1.2.18.3.26.93.78 1.71 1.02 1.96 1.14.3.15.47.13.65-.08.17-.2.74-.86.94-1.15.2-.3.4-.25.67-.15.27.1 1.75.83 2.05.97.3.15.5.22.57.34.07.13.07.73-.17 1.4Z" />
    </svg>
  );
}

export function InstagramIcon(props: BrandIconProps) {
  return (
    <svg {...iconProps(props)}>
      <rect height="16" rx="5" width="16" x="4" y="4" />
      <circle cx="12" cy="12" r="3.3" />
      <path d="M17.2 6.8h.01" />
    </svg>
  );
}

export function YouTubeIcon(props: BrandIconProps) {
  return (
    <svg {...iconProps(props)}>
      <rect height="12" rx="3" width="18" x="3" y="6" />
      <path d="m10.5 9.5 4.5 2.5-4.5 2.5v-5Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TikTokIcon(props: BrandIconProps) {
  return (
    <svg {...iconProps(props)}>
      <path d="M14 4v10.2a3.4 3.4 0 1 1-3.4-3.4" />
      <path d="M14 4c.6 3 2.3 4.7 5 5" />
    </svg>
  );
}
