import { createFileRoute } from "@tanstack/react-router";
import { NavBar } from "@/components/scalelist/NavBar";
import { LogoStrip } from "@/components/scalelist/icp-revops/site/Mockups";
import { ComparisonSection } from "@/components/scalelist/icp-revops/site/Comparison";
import { Pill } from "@/components/scalelist/icp-revops/site/ui";
import { CTARow } from "@/components/scalelist/icp-revops/site/ui";
import { CrmEnrichMockup } from "@/components/scalelist/icp-revops/site/Mockups";
import { RoiMockup } from "@/components/scalelist/icp-revops/site/Mockups";
import { PipelineMockup } from "@/components/scalelist/icp-revops/site/Mockups";
import { CrmIntegrationsDarkMockup } from "@/components/scalelist/icp-revops/site/Mockups";
import { ComplianceMockup } from "@/components/scalelist/icp-revops/site/Mockups";
import { FAQ } from "@/components/scalelist/icp-revops/site/FAQ";
import { Footer } from "@/components/scalelist/Footer";

export const Route = createFileRoute("/revops")({
  head: () => ({
    meta: [
      { title: "Scalelist for RevOps — Clean data into your CRM" },
      { name: "description", content: "Keep your CRM enriched and accurate with verified contact data, by API or bulk." },
      { property: "og:title", content: "Scalelist for RevOps — Clean data into your CRM" },
      { property: "og:description", content: "Keep your CRM enriched and accurate with verified contact data, by API or bulk." },
    ],
  }),
  component: IcpRevopsPage,
});

function IcpRevopsPage() {
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col bg-background">
        <LogoStrip />
        <ComparisonSection />
        <Pill />
        <CTARow />
        <CrmEnrichMockup />
        <RoiMockup />
        <PipelineMockup />
        <CrmIntegrationsDarkMockup />
        <ComplianceMockup />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
