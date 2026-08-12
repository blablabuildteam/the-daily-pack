import type { Metadata } from "next";
import { ComingSoonForm } from "@/components/ComingSoonForm";

export const metadata: Metadata = {
  title: "Coming soon",
  description: "De nieuwe website van The Daily Pack is bijna klaar.",
  robots: { index: false, follow: false },
};

export default function ComingSoonPage() {
  return <ComingSoonForm />;
}
