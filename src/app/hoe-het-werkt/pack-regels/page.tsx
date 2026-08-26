import type { Metadata } from "next";
import { PackRegelsContent } from "@/components/pages/PackRegelsContent";

export const metadata: Metadata = {
  title: "Pack Regels",
  description:
    "Regels rond gezondheid, gedrag, transport en annulering bij The Daily Pack Amsterdam-Noord.",
};

export default function PackRegelsPage() {
  return <PackRegelsContent />;
}
