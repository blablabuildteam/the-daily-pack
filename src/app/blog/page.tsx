import type { Metadata } from "next";
import { BlogIndexContent } from "@/components/pages/BlogIndexContent";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Inzichten over beweging, rust en een voldane hond — The Daily Pack Amsterdam-Noord.",
};

export default function BlogPage() {
  return <BlogIndexContent />;
}
