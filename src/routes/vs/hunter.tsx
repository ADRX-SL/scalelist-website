import { createFileRoute } from "@tanstack/react-router";
import { NavBar } from "@/components/scalelist/NavBar";
import VsHunterBody from "@/components/scalelist/vs-hunter/VsHunterBody";
import { Footer } from "@/components/scalelist/Footer";

export const Route = createFileRoute("/vs/hunter")({
  head: () => ({ meta: [
    { title: "Scalelist vs Hunter.io — honest comparison" },
    { name: "description", content: "How Scalelist compares to Hunter.io on match rates, mobile numbers, coverage and price." },
  ] }),
  component: VsHunterBodyPage,
});

function VsHunterBodyPage() {
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col bg-background">
        <VsHunterBody />
      </main>
      <Footer />
    </>
  );
}
