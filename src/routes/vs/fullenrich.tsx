import { createFileRoute } from "@tanstack/react-router";
import { NavBar } from "@/components/scalelist/NavBar";
import VsFullenrichBody from "@/components/scalelist/vs-fullenrich/VsFullenrichBody";
import { Footer } from "@/components/scalelist/Footer";

export const Route = createFileRoute("/vs/fullenrich")({
  head: () => ({ meta: [
    { title: "Scalelist vs FullEnrich — honest comparison" },
    { name: "description", content: "How Scalelist compares to FullEnrich on match rates, mobile numbers, coverage and price." },
  ] }),
  component: VsFullenrichBodyPage,
});

function VsFullenrichBodyPage() {
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col bg-background">
        <VsFullenrichBody />
      </main>
      <Footer />
    </>
  );
}
