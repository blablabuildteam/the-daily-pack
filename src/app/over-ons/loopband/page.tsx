import type { Metadata } from "next";
import { LoopbandContent } from "@/components/pages/LoopbandContent";

export const metadata: Metadata = {
  title: "De loopband",
  description:
    "Gecontroleerde beweging en stoom afblazen: de loopband als aanvulling op elke wandeling bij The Daily Pack.",
};

export default function LoopbandPage() {
  return <LoopbandContent />;
}
