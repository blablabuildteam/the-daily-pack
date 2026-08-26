import type { Metadata } from "next";
import { EigenRondeContent } from "@/components/pages/EigenRondeContent";

export const metadata: Metadata = {
  title: "Eigen Ronde",
  description:
    "Privésessie voor één adres in Amsterdam-Noord. Wandelen met loopband als aanvulling, op afspraak. Maximaal twee honden.",
};

export default function EigenRondePage() {
  return <EigenRondeContent />;
}
