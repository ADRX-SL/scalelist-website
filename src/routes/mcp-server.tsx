import { createFileRoute } from "@tanstack/react-router";
import { NavBar } from "@/components/scalelist/NavBar";
import { Hero } from "@/components/scalelist/mcp-server/landing/Hero";
import { LogoBar } from "@/components/scalelist/mcp-server/landing/LogoBar";
import { DataQuality } from "@/components/scalelist/mcp-server/landing/DataQuality";
import { HowYouCanUseIt } from "@/components/scalelist/mcp-server/landing/HowYouCanUseIt";
import { InlineCTA } from "@/components/scalelist/mcp-server/landing/InlineCTA";
import { ClientsSection } from "@/components/scalelist/mcp-server/landing/ClientsSection";
import { UseCases } from "@/components/scalelist/mcp-server/landing/UseCases";
import { Testimonials } from "@/components/scalelist/mcp-server/landing/Testimonials";
import { HowItWorks } from "@/components/scalelist/mcp-server/landing/HowItWorks";
import { Pricing } from "@/components/scalelist/mcp-server/landing/Pricing";
import { FAQ } from "@/components/scalelist/mcp-server/landing/FAQ";
import { ClosingCTA } from "@/components/scalelist/mcp-server/landing/ClosingCTA";
import { Footer } from "@/components/scalelist/Footer";

export const Route = createFileRoute("/mcp-server")({
  head: () => ({
    meta: [
      { title: "Scalelist MCP Server — Prospecting inside Claude" },
      { name: "description", content: "Connect Scalelist to Claude and any MCP client. Find and enrich leads in plain English." },
      { property: "og:title", content: "Scalelist MCP Server — Prospecting inside Claude" },
      { property: "og:description", content: "Connect Scalelist to Claude and any MCP client. Find and enrich leads in plain English." },
    ],
  }),
  component: McpServerPage,
});

function McpServerPage() {
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col bg-background">
        <Hero />
        <LogoBar />
        <DataQuality />
        <HowYouCanUseIt />
        <InlineCTA />
        <ClientsSection />
        <UseCases />
        <Testimonials />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}
