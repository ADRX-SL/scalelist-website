import { createFileRoute } from "@tanstack/react-router";
import { NavBar } from "@/components/scalelist/NavBar";
import VsSnovBody from "@/components/scalelist/vs-snov/VsSnovBody";
import { Footer } from "@/components/scalelist/Footer";

export const Route = createFileRoute("/vs/snov")({
  head: () => ({ meta: [
    { title: "Scalelist vs Snov.io — honest comparison" },
    { name: "description", content: "How Scalelist compares to Snov.io on match rates, mobile numbers, coverage and price." },
  ] }),
  component: VsSnovBodyPage,
});

function VsSnovBodyPage() {
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col bg-background">
        <VsSnovBody />
      </main>
      <Footer />
    </>
  );
}
