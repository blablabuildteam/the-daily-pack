import type { Metadata } from "next";
import { PackRondeContent } from "@/components/pages/PackRondeContent";

export const metadata: Metadata = {
  title: "Pack Ronde",
  description:
    "De dagelijkse uitlaatservice van The Daily Pack in Amsterdam-Noord. Vaste dag, vast tijdslot, kleine groepen.",
};

export default function PackRondePage() {
  return <PackRondeContent />;
}
