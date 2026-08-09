import { createFileRoute } from "@tanstack/react-router";
import { NavBar } from "@/components/scalelist/NavBar";
import VsKasprBody from "@/components/scalelist/vs-kaspr/VsKasprBody";
import { Footer } from "@/components/scalelist/Footer";

export const Route = createFileRoute("/vs/kaspr")({
  head: () => ({ meta: [
    { title: "Scalelist vs Kaspr — honest comparison" },
    { name: "description", content: "How Scalelist compares to Kaspr on match rates, mobile numbers, coverage and price." },
  ] }),
  component: VsKasprBodyPage,
});

function VsKasprBodyPage() {
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col bg-background">
        <VsKasprBody />
      </main>
      <Footer />
    </>
  );
}
