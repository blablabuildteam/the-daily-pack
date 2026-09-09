import type { Metadata } from "next";
import { FaqContent } from "@/components/pages/FaqContent";

export const metadata: Metadata = {
  title: "Veelgestelde vragen",
  description:
    "Antwoorden op veelgestelde vragen over The Daily Pack in Amsterdam-Noord.",
};

export default function FaqPage() {
  return <FaqContent />;
}
