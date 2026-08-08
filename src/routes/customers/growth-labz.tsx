import { createFileRoute } from "@tanstack/react-router";
import { NavBar } from "@/components/scalelist/NavBar";
import GrowthLabzBody from "@/components/scalelist/growth-labz/GrowthLabzBody";
import { Footer } from "@/components/scalelist/Footer";

export const Route = createFileRoute("/customers/growth-labz")({
  head: () => ({ meta: [
    { title: "Growth Labz case study | Scalelist" },
    { name: "description", content: "How Growth Labz scaled outbound for their clients using Scalelist." },
  ] }),
  component: GrowthLabzBodyPage,
});

function GrowthLabzBodyPage() {
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col bg-background">
        <GrowthLabzBody />
      </main>
      <Footer />
    </>
  );
}
