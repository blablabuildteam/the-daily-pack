"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { Button } from "./Button";
import { Logo } from "./Logo";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const solid = !isHome || scrolled || open;

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-ink/8 bg-beige-1/95 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5 md:h-20 md:px-8">
        <Link
          href="/"
          className="relative z-50 flex items-center gap-3"
          onClick={() => setOpen(false)}
          aria-label="The Daily Pack — home"
        >
          <Logo size={44} priority className="shrink-0" />
          <span
            className={`font-[family-name:var(--font-cormorant)] text-[22px] font-light tracking-tight transition-colors ${
              solid ? "text-ink" : "text-white"
            }`}
          >
            The Daily Pack
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setActiveMenu(item.label)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link
                href={item.href}
                className={`text-[14px] transition-colors ${
                  solid
                    ? "text-ink/80 hover:text-green"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
              {activeMenu === item.label && (
                <div className="absolute left-1/2 top-full z-50 min-w-[210px] -translate-x-1/2 pt-3">
                  <div className="overflow-hidden rounded-2xl border border-ink/8 bg-white py-2 shadow-[0_12px_40px_rgba(28,28,26,0.08)]">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="mx-2 block rounded-xl px-4 py-2.5 text-[14px] text-ink/80 transition-colors hover:bg-beige-1 hover:text-green"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <Button
            href={site.collar.kennismaking}
            variant={solid ? "primary" : "on-dark"}
          >
            Boek een Kennismaking
          </Button>
        </nav>

        <button
          type="button"
          className={`relative z-50 flex h-10 w-10 items-center justify-center lg:hidden ${
            solid ? "text-ink" : "text-white"
          }`}
          aria-label={open ? "Menu sluiten" : "Menu openen"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`block h-px w-full bg-current transition-transform ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-full bg-current transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-full bg-current transition-transform ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 top-[72px] z-40 overflow-y-auto bg-beige-1 lg:hidden">
          <nav className="flex flex-col px-5 py-8">
            {nav.map((item) => (
              <div key={item.label} className="border-b border-ink/8 py-5">
                <p className="mb-3 font-[family-name:var(--font-cormorant)] text-2xl font-light text-ink">
                  {item.label}
                </p>
                <div className="flex flex-col gap-3">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="text-[15px] text-muted transition-colors hover:text-green"
                      onClick={() => setOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="mt-8">
              <Button
                href={site.collar.kennismaking}
                variant="primary"
                className="w-full"
              >
                Boek een Kennismaking
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
