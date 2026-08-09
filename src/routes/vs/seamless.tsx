import { createFileRoute } from "@tanstack/react-router";
import { NavBar } from "@/components/scalelist/NavBar";
import VsSeamlessBody from "@/components/scalelist/vs-seamless/VsSeamlessBody";
import { Footer } from "@/components/scalelist/Footer";

export const Route = createFileRoute("/vs/seamless")({
  head: () => ({ meta: [
    { title: "Scalelist vs Seamless.ai — honest comparison" },
    { name: "description", content: "How Scalelist compares to Seamless.ai on match rates, mobile numbers, coverage and price." },
  ] }),
  component: VsSeamlessBodyPage,
});

function VsSeamlessBodyPage() {
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col bg-background">
        <VsSeamlessBody />
      </main>
      <Footer />
    </>
  );
}
