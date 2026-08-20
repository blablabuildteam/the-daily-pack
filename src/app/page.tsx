import type { Metadata } from "next";
import { HomePageContent } from "@/components/HomePageContent";

export const metadata: Metadata = {
  title: "Hondenuitlaatservice Amsterdam-Noord | The Daily Pack",
  description:
    "Upgrade de dag van jouw hond. Wandelen, socialiseren en — bij kou, regen of veel energie — de loopband. In kleine groepen. Amsterdam-Noord.",
};

export default function HomePage() {
  return <HomePageContent />;
}
