import { createFileRoute } from "@tanstack/react-router";
import { NavBar } from "@/components/scalelist/NavBar";
import Hero from "@/components/scalelist/integrations/Hero";
import Integrations from "@/components/scalelist/integrations/Integrations";
import FooterCTA from "@/components/scalelist/integrations/FooterCTA";
import { Footer } from "@/components/scalelist/Footer";

export const Route = createFileRoute("/integrations")({
  head: () => ({
    meta: [
      { title: "Integrations — Push leads anywhere | Scalelist" },
      { name: "description", content: "Send enriched leads straight into HubSpot, Clay, Instantly, n8n and more. Native integrations and a full API." },
      { property: "og:title", content: "Integrations — Push leads anywhere | Scalelist" },
      { property: "og:description", content: "Send enriched leads straight into HubSpot, Clay, Instantly, n8n and more. Native integrations and a full API." },
    ],
  }),
  component: IntegrationsPage,
});

function IntegrationsPage() {
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col bg-background">
        <Hero />
        <Integrations />
        <FooterCTA />
      </main>
      <Footer />
    </>
  );
}
