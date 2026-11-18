import "@/site/shell.css";
import "@/site/accordion.css";

// The public website: Home, Academics, Admissions and About share these fonts, nav and footer.
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        rel="stylesheet"
        precedence="default"
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap"
      />
      {children}
    </>
  );
}
