"use client";

import Link from "next/link";
import { useLocale } from "@/lib/i18n/locale-context";
import { footerLegal, nav, site } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  const { t } = useLocale();

  const navLabels: Record<string, string> = {
    Diensten: t.nav.services,
    "Hoe het werkt": t.nav.howItWorks,
    "Over ons": t.nav.about,
    Blog: t.nav.blog,
    Contact: t.nav.contact,
  };

  const childLabels: Record<string, string> = {
    "Pack Ronde": t.nav.packRonde,
    "Eigen Ronde": t.nav.eigenRonde,
    Werkwijze: t.nav.werkwijze,
    "Tijden & Tarieven": t.nav.tijdenTarieven,
    "Pack Regels": t.nav.packRegels,
    "The Daily Pack": t.nav.aboutTdp,
    Loopband: t.nav.loopband,
  };

  return (
    <footer className="theme-4 grain relative overflow-hidden border-t border-white/10">
      <div className="relative z-[1] mx-auto max-w-6xl px-5 pt-16 md:px-8 md:pt-24">
        <div className="grid gap-12 pb-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] md:pb-20">
          <div className="lg:col-span-1 md:col-span-2 lg:col-span-1">
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
              Premium Dog Service · Amsterdam-Noord
            </p>
            <div className="mt-7 space-y-2.5 text-[14px]">
              <a
                href={site.emailHref}
                className="block text-white/80 transition-colors hover:text-green-light"
              >
                {site.email}
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/80 transition-colors hover:text-green-light"
              >
                Instagram
              </a>
              <Link
                href="/contact"
                className="block text-white/80 transition-colors hover:text-green-light"
              >
                {t.nav.contact}
              </Link>
            </div>
          </div>

          {nav
            .filter((group) => group.children.length > 0)
            .map((group) => (
              <div key={group.label}>
                <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40">
                  {navLabels[group.label] ?? group.label}
                </p>
                <ul className="space-y-3.5">
                  {group.children.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-[15px] text-white/80 transition-colors hover:text-green-light"
                      >
                        {childLabels[item.label] ?? item.label}
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
            <li>
              <Link
                href="/blog"
                className="text-[13px] text-white/50 transition-colors hover:text-green-light"
              >
                {t.nav.blog}
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-[13px] text-white/50 transition-colors hover:text-green-light"
              >
                {t.nav.contact}
              </Link>
            </li>
          </ul>
          <p className="text-[13px] text-white/40">
            {t.common.developedBy}{" "}
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
