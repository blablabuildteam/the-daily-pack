import type { Metadata } from "next";
import { HomePageContent } from "@/components/HomePageContent";

export const metadata: Metadata = {
  title: "Premium Honden Service Amsterdam | The Daily Pack",
  description:
    "Upgrade de dag van jouw hond. Wandelen, socialiseren en — bij kou, regen of veel energie — de loopband. In kleine groepen. Amsterdam.",
};

export default function HomePage() {
  return <HomePageContent />;
}
