import { createFileRoute } from "@tanstack/react-router";
import { NavBar } from "@/components/scalelist/NavBar";
import VsAnymailFinderBody from "@/components/scalelist/vs-anymail-finder/VsAnymailFinderBody";
import { Footer } from "@/components/scalelist/Footer";

export const Route = createFileRoute("/vs/anymail-finder")({
  head: () => ({ meta: [
    { title: "Scalelist vs Anymail Finder — honest comparison" },
    { name: "description", content: "How Scalelist compares to Anymail Finder on match rates, mobile numbers, coverage and price." },
  ] }),
  component: VsAnymailFinderBodyPage,
});

function VsAnymailFinderBodyPage() {
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col bg-background">
        <VsAnymailFinderBody />
      </main>
      <Footer />
    </>
  );
}
