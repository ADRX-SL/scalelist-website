import { createFileRoute } from "@tanstack/react-router";
import { NavBar } from "@/components/scalelist/NavBar";
import OutreachAceBody from "@/components/scalelist/outreach-ace/OutreachAceBody";
import { Footer } from "@/components/scalelist/Footer";

export const Route = createFileRoute("/customers/outreach-ace")({
  head: () => ({ meta: [
    { title: "Outreach Ace case study | Scalelist" },
    { name: "description", content: "How Outreach Ace increased connect rates with verified mobile numbers." },
  ] }),
  component: OutreachAceBodyPage,
});

function OutreachAceBodyPage() {
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col bg-background">
        <OutreachAceBody />
      </main>
      <Footer />
    </>
  );
}
