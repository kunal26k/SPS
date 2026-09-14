import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { loaders, screens } from "@/design/screens";

type Params = { screen: string[] };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return screens.map((s) => ({ screen: s.route.slice(1).split("/") }));
}

function idFor(params: Params) {
  return params.screen.join("--");
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const load = loaders[idFor(await params)];
  return load ? { title: (await load()).title } : {};
}

// Renders a design screen verbatim: its styles, markup and inline scripts are
// server-rendered, so the scripts run at parse time exactly as in the HTML file.
// Screens link to each other with plain <a> tags (full page loads), which keeps
// each screen's global CSS from leaking into the next one.
export default async function DesignScreen({ params }: { params: Promise<Params> }) {
  const load = loaders[idFor(await params)];
  if (!load) notFound();
  const { html } = await load();

  return (
    <div
      data-design-screen
      style={{ display: "contents" }}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
