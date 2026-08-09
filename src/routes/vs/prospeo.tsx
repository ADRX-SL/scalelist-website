import { createFileRoute } from "@tanstack/react-router";
import { NavBar } from "@/components/scalelist/NavBar";
import VsProspeoBody from "@/components/scalelist/vs-prospeo/VsProspeoBody";
import { Footer } from "@/components/scalelist/Footer";

export const Route = createFileRoute("/vs/prospeo")({
  head: () => ({ meta: [
    { title: "Scalelist vs Prospeo — honest comparison" },
    { name: "description", content: "How Scalelist compares to Prospeo on match rates, mobile numbers, coverage and price." },
  ] }),
  component: VsProspeoBodyPage,
});

function VsProspeoBodyPage() {
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col bg-background">
        <VsProspeoBody />
      </main>
      <Footer />
    </>
  );
}
