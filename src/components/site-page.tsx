import { readFileSync } from "node:fs";
import { join } from "node:path";
import { SiteAccordion } from "./site-accordion";
import { SiteFooter } from "./site-footer";
import { SiteNav } from "./site-nav";

type Props = {
  /** Folder under src/site holding content.html (the page body from the design, maintained here). */
  page: "home" | "academics" | "admissions";
  route: string;
  overHero?: boolean;
};

// Wraps a maintained page body in the shared nav and footer. The body is rendered as
// HTML so its own inline scripts (reveal animations, FAQ, calendar) run as designed;
// on tablets and phones its sections become the design's accordion.
export function SitePage({ page, route, overHero }: Props) {
  const html = readFileSync(join(process.cwd(), "src", "site", page, "content.html"), "utf8");
  return (
    <>
      <SiteNav active={route} overHero={overHero} />
      <div data-site-page={page} style={{ display: "contents" }} suppressHydrationWarning dangerouslySetInnerHTML={{ __html: html }} />
      <SiteAccordion page={page} skip={page === "home" ? "home" : ""} />
      <SiteFooter />
    </>
  );
}
