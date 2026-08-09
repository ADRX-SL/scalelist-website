import { createFileRoute } from "@tanstack/react-router";
import { NavBar } from "@/components/scalelist/NavBar";
import VsZoominfoBody from "@/components/scalelist/vs-zoominfo/VsZoominfoBody";
import { Footer } from "@/components/scalelist/Footer";

export const Route = createFileRoute("/vs/zoominfo")({
  head: () => ({ meta: [
    { title: "Scalelist vs ZoomInfo — honest comparison" },
    { name: "description", content: "How Scalelist compares to ZoomInfo on match rates, mobile numbers, coverage and price." },
  ] }),
  component: VsZoominfoBodyPage,
});

function VsZoominfoBodyPage() {
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col bg-background">
        <VsZoominfoBody />
      </main>
      <Footer />
    </>
  );
}
