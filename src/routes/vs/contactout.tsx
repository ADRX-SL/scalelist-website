import { createFileRoute } from "@tanstack/react-router";
import { NavBar } from "@/components/scalelist/NavBar";
import VsContactoutBody from "@/components/scalelist/vs-contactout/VsContactoutBody";
import { Footer } from "@/components/scalelist/Footer";

export const Route = createFileRoute("/vs/contactout")({
  head: () => ({ meta: [
    { title: "Scalelist vs ContactOut — honest comparison" },
    { name: "description", content: "How Scalelist compares to ContactOut on match rates, mobile numbers, coverage and price." },
  ] }),
  component: VsContactoutBodyPage,
});

function VsContactoutBodyPage() {
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col bg-background">
        <VsContactoutBody />
      </main>
      <Footer />
    </>
  );
}
