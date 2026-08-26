import type { Metadata } from "next";
import { TermsContent } from "@/components/pages/TermsContent";

export const metadata: Metadata = {
  title: "Algemene Voorwaarden",
  description: "Algemene voorwaarden van The Daily Pack.",
};

export default function AlgemeneVoorwaardenPage() {
  return <TermsContent />;
}
