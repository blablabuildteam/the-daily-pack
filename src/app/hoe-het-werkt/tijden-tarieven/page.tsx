import type { Metadata } from "next";
import { TijdenTarievenContent } from "@/components/pages/TijdenTarievenContent";

export const metadata: Metadata = {
  title: "Tijden & Tarieven",
  description:
    "Prijzen en beschikbare tijden van Pack Ronde, Eigen Ronde en Kennismaking bij The Daily Pack Amsterdam-Noord.",
};

export default function TijdenTarievenPage() {
  return <TijdenTarievenContent />;
}
