import type { Metadata } from "next";
import { EventsGallery, type Album } from "@/components/events-gallery";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import data from "@/site/events/albums.json";
// Page tokens and styles; the shared nav and footer come from src/site/shell.css.
import "@/site/events-gallery/page.css";

export const metadata: Metadata = {
  title: "Events & Gallery — Sharda Public School",
};

const albums = data.albums as unknown as Album[];

export default function EventsGalleryPage() {
  return (
    <>
      <SiteNav active="/events-gallery" />
      <main className="eg-page">
        <EventsGallery albums={albums} />
      </main>
      <SiteFooter />
    </>
  );
}
