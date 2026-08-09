import { createFileRoute } from "@tanstack/react-router";
import { NavBar } from "@/components/scalelist/NavBar";
import VsAeroleadsBody from "@/components/scalelist/vs-aeroleads/VsAeroleadsBody";
import { Footer } from "@/components/scalelist/Footer";

export const Route = createFileRoute("/vs/aeroleads")({
  head: () => ({ meta: [
    { title: "Scalelist vs AeroLeads — honest comparison" },
    { name: "description", content: "How Scalelist compares to AeroLeads on match rates, mobile numbers, coverage and price." },
  ] }),
  component: VsAeroleadsBodyPage,
});

function VsAeroleadsBodyPage() {
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col bg-background">
        <VsAeroleadsBody />
      </main>
      <Footer />
    </>
  );
}
