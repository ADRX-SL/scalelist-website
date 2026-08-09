import { createFileRoute } from "@tanstack/react-router";
import { NavBar } from "@/components/scalelist/NavBar";
import VsLushaBody from "@/components/scalelist/vs-lusha/VsLushaBody";
import { Footer } from "@/components/scalelist/Footer";

export const Route = createFileRoute("/vs/lusha")({
  head: () => ({ meta: [
    { title: "Scalelist vs Lusha — honest comparison" },
    { name: "description", content: "How Scalelist compares to Lusha on match rates, mobile numbers, coverage and price." },
  ] }),
  component: VsLushaBodyPage,
});

function VsLushaBodyPage() {
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col bg-background">
        <VsLushaBody />
      </main>
      <Footer />
    </>
  );
}
