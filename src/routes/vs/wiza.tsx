import { createFileRoute } from "@tanstack/react-router";
import { NavBar } from "@/components/scalelist/NavBar";
import VsWizaBody from "@/components/scalelist/vs-wiza/VsWizaBody";
import { Footer } from "@/components/scalelist/Footer";

export const Route = createFileRoute("/vs/wiza")({
  head: () => ({ meta: [
    { title: "Scalelist vs Wiza — honest comparison" },
    { name: "description", content: "How Scalelist compares to Wiza on match rates, mobile numbers, coverage and price." },
  ] }),
  component: VsWizaBodyPage,
});

function VsWizaBodyPage() {
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col bg-background">
        <VsWizaBody />
      </main>
      <Footer />
    </>
  );
}
