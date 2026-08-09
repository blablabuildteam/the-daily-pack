import Link from "next/link";
import { footerLegal, nav, site } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="theme-4 grain relative overflow-hidden border-t border-white/10">
      <div className="relative z-[1] mx-auto max-w-6xl px-5 pt-16 md:px-8 md:pt-24">
        <div className="grid gap-12 pb-16 md:grid-cols-[1.2fr_1fr_1fr] md:pb-20">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3"
              aria-label="The Daily Pack — home"
            >
              <Logo size={52} className="shrink-0" />
              <span className="font-[family-name:var(--font-cormorant)] text-[26px] font-light text-white">
                The Daily Pack
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/65">
              Premium mobiele hondenuitlaatservice in Amsterdam-Noord. Wandelen
              én loopband in één sessie.
            </p>
            <div className="mt-7 space-y-2.5 text-[14px]">
              <a
                href={site.emailHref}
                className="block text-white/80 transition-colors hover:text-green-light"
              >
                {site.email}
              </a>
              <a
                href={site.phoneHref}
                className="block text-white/80 transition-colors hover:text-green-light"
              >
                {site.phone}
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/80 transition-colors hover:text-green-light"
              >
                Instagram
              </a>
            </div>
          </div>

          {nav.map((group) => (
            <div key={group.label}>
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40">
                {group.label}
              </p>
              <ul className="space-y-3.5">
                {group.children.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[15px] text-white/80 transition-colors hover:text-green-light"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-8 md:flex-row md:items-center md:justify-between">
          <p className="text-[13px] text-white/40">
            © {new Date().getFullYear()} The Daily Pack · Amsterdam-Noord
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLegal.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[13px] text-white/50 transition-colors hover:text-green-light"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-[13px] text-white/40">
            Ontwikkeld door{" "}
            <a
              href="https://www.blablabuild.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/55 underline-offset-4 transition-colors hover:text-green-light hover:underline"
            >
              blablabuild
            </a>
          </p>
        </div>

        <p
          aria-hidden
          className="pointer-events-none select-none whitespace-nowrap pb-2 text-center font-[family-name:var(--font-cormorant)] text-[clamp(3.5rem,12.5vw,11rem)] font-light leading-none tracking-tight text-white/[0.06]"
        >
          The Daily Pack
        </p>
      </div>
    </footer>
  );
}
