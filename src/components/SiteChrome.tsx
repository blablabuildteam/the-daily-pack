"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LocaleProvider } from "@/lib/i18n/locale-context";

export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isComingSoon = pathname === "/coming-soon";

  if (isComingSoon) {
    return <>{children}</>;
  }

  return (
    <LocaleProvider>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </LocaleProvider>
  );
}
