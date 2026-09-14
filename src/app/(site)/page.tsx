import type { Metadata } from "next";
import { SitePage } from "@/components/site-page";
import "@/site/home/page.css";

export const metadata: Metadata = {
  title: "Sharda Public School — Learn • Excel • Perform",
};

export default function HomePage() {
  return <SitePage page="home" route="/" overHero />;
}
