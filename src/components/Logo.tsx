import Image from "next/image";

type Props = {
  className?: string;
  /** Visual height in px (default / mobile) */
  size?: number;
  priority?: boolean;
};

export function Logo({ className = "", size = 40, priority = false }: Props) {
  const width = Math.round(size * (190 / 174));

  return (
    <Image
      src="/logo.png"
      alt="The Daily Pack"
      width={width}
      height={size}
      className={`w-auto ${className}`}
      style={{ height: size, width: "auto" }}
      priority={priority}
    />
  );
}
