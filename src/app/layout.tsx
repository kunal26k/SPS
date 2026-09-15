import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sharda Public School",
  description: "Sharda Public School, Almora — a school of excellence in the Deodar forests of Uttarakhand.",
  icons: { icon: "/uploads/SPS-crest.png" },
};

// Fonts, nav and footer for the website are loaded in (site)/layout.tsx.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
