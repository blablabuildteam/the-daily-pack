import type { Metadata } from "next";
import { ContactPageContent } from "@/components/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Neem contact op met The Daily Pack — premium hondenuitlaatservice in Amsterdam.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
