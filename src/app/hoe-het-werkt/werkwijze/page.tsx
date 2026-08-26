import type { Metadata } from "next";
import { WerkwijzeContent } from "@/components/pages/WerkwijzeContent";

export const metadata: Metadata = {
  title: "Werkwijze",
  description:
    "Van kennismaking tot Wandelverslag: zo verloopt een sessie bij The Daily Pack in Amsterdam-Noord.",
};

export default function WerkwijzePage() {
  return <WerkwijzeContent />;
}
