import Image from "next/image";
import type { ReactNode } from "react";
import { site } from "@/lib/site";
import { Button } from "./Button";
import { Reveal } from "./Reveal";

type Props = {
  title: ReactNode;
  text?: string;
  buttonLabel?: string;
  href?: string;
};

export function CtaBlock({
  title,
  text,
  buttonLabel = "Boek een Kennismaking",
  href = site.collar.kennismaking,
}: Props) {
  return (
    <section className="theme-3 grain relative overflow-hidden">
      <Image
        src="/logo.png"
        alt=""
        width={560}
        height={512}
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/2 hidden w-[440px] -translate-y-1/2 opacity-[0.13] brightness-[3] lg:block"
      />
      <div className="relative z-[1] mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <h2 className="max-w-2xl text-[clamp(2.2rem,4.5vw,3.25rem)] text-white">
            {title}
          </h2>
          {text ? (
            <p className="mt-5 max-w-md text-[16px] text-white/85">{text}</p>
          ) : null}
          <div className="mt-9">
            <Button href={href} variant="on-green">
              {buttonLabel}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
