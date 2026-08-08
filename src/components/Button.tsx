import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "on-dark" | "on-green";

const variants: Record<Variant, string> = {
  primary:
    "bg-green text-white hover:bg-green-dark focus-visible:ring-green",
  secondary:
    "bg-transparent text-ink border border-ink/25 hover:border-green hover:text-green focus-visible:ring-green",
  ghost:
    "bg-transparent text-green hover:text-green-dark underline-offset-4 hover:underline focus-visible:ring-green !px-2",
  "on-dark":
    "bg-beige-2 text-ink hover:bg-white focus-visible:ring-green-light",
  "on-green":
    "bg-beige-2 text-green hover:bg-white focus-visible:ring-green-light",
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: Props) {
  const classes = [
    "group/btn inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-[14px] font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    variants[variant],
    className,
  ].join(" ");

  const arrow =
    variant === "ghost" ? null : (
      <svg
        width="14"
        height="14"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden
        className="transition-transform duration-300 group-hover/btn:translate-x-1"
      >
        <path
          d="M2 8h11M9 3.5 13.5 8 9 12.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );

  if (
    external ||
    href.startsWith("http") ||
    href.startsWith("mailto") ||
    href.startsWith("tel")
  ) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
        {arrow}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      {arrow}
    </Link>
  );
}
