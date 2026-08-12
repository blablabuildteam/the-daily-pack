import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { SiteChrome } from "@/components/SiteChrome";
import { site } from "@/lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thedailypack.nl"),
  title: {
    default: `${site.name} | Hondenuitlaatservice Amsterdam-Noord`,
    template: `%s | ${site.name}`,
  },
  description:
    "Premium mobiele hondenuitlaatservice in Amsterdam-Noord. Wandelen én loopband in één sessie, ophalen en thuisbrengen in kleine groepen.",
  openGraph: {
    locale: "nl_NL",
    type: "website",
    siteName: site.name,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="nl"
      className={`${cormorant.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
