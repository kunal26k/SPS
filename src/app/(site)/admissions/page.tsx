import type { Metadata } from "next";
import { SitePage } from "@/components/site-page";
import "@/site/admissions/page.css";

export const metadata: Metadata = {
  title: "Admissions 2025–26 · Sharda Public School Almora",
  description:
    "Admissions open at Sharda Public School Almora — CBSE, Nursery to Class XII. Visit campus, see fees, age criteria, FAQ. Call +91 73005 02640.",
};

export default function AdmissionsPage() {
  return <SitePage page="admissions" route="/admissions" />;
}
