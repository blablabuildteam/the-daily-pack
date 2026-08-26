import type { Metadata } from "next";
import { PrivacyContent } from "@/components/pages/PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacyverklaring van The Daily Pack.",
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
