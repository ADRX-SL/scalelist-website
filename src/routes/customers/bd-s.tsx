import { createFileRoute } from "@tanstack/react-router";
import { NavBar } from "@/components/scalelist/NavBar";
import BdSBody from "@/components/scalelist/bd-s/BdSBody";
import { Footer } from "@/components/scalelist/Footer";

export const Route = createFileRoute("/customers/bd-s")({
  head: () => ({ meta: [
    { title: "BD-S case study | Scalelist" },
    { name: "description", content: "How BD-S built a reliable outbound pipeline with Scalelist." },
  ] }),
  component: BdSBodyPage,
});

function BdSBodyPage() {
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col bg-background">
        <BdSBody />
      </main>
      <Footer />
    </>
  );
}
