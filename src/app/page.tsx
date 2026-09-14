import { redirect } from "next/navigation";

// Only the About page is built so far; send the root there until Home lands.
export default function Index() {
  redirect("/about");
}
