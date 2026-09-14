import type { Metadata } from "next";
import { SitePage } from "@/components/site-page";
import "@/site/academics/page.css";

export const metadata: Metadata = {
  title: "Academics — Sharda Public School, Almora",
};

export default function AcademicsPage() {
  return <SitePage page="academics" route="/academics" />;
}
