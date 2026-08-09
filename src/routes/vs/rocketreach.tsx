import { createFileRoute } from "@tanstack/react-router";
import { NavBar } from "@/components/scalelist/NavBar";
import VsRocketreachBody from "@/components/scalelist/vs-rocketreach/VsRocketreachBody";
import { Footer } from "@/components/scalelist/Footer";

export const Route = createFileRoute("/vs/rocketreach")({
  head: () => ({ meta: [
    { title: "Scalelist vs RocketReach — honest comparison" },
    { name: "description", content: "How Scalelist compares to RocketReach on match rates, mobile numbers, coverage and price." },
  ] }),
  component: VsRocketreachBodyPage,
});

function VsRocketreachBodyPage() {
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col bg-background">
        <VsRocketreachBody />
      </main>
      <Footer />
    </>
  );
}
