import type { Metadata } from "next";
import { OverOnsContent } from "@/components/pages/OverOnsContent";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "Het verhaal achter The Daily Pack: premium hondenuitlaatservice in Amsterdam-Noord, opgericht door Tim.",
};

export default function OverOnsPage() {
  return <OverOnsContent />;
}
