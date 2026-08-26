import type { Metadata } from "next";
import { BedrijfsinformatieContent } from "@/components/pages/BedrijfsinformatieContent";

export const metadata: Metadata = {
  title: "Bedrijfsinformatie",
  description: "Contact- en bedrijfsgegevens van The Daily Pack Amsterdam-Noord.",
};

export default function BedrijfsinformatiePage() {
  return <BedrijfsinformatieContent />;
}
