import { createFileRoute } from "@tanstack/react-router";
import { NavBar } from "@/components/scalelist/NavBar";
import VsLeadiqBody from "@/components/scalelist/vs-leadiq/VsLeadiqBody";
import { Footer } from "@/components/scalelist/Footer";

export const Route = createFileRoute("/vs/leadiq")({
  head: () => ({ meta: [
    { title: "Scalelist vs LeadIQ — honest comparison" },
    { name: "description", content: "How Scalelist compares to LeadIQ on match rates, mobile numbers, coverage and price." },
  ] }),
  component: VsLeadiqBodyPage,
});

function VsLeadiqBodyPage() {
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col bg-background">
        <VsLeadiqBody />
      </main>
      <Footer />
    </>
  );
}
