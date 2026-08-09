import { createFileRoute } from "@tanstack/react-router";
import { NavBar } from "@/components/scalelist/NavBar";
import { LogoStrip } from "@/components/scalelist/icp-saas-reseller/site/Mockups";
import { ComparisonSection } from "@/components/scalelist/icp-saas-reseller/site/Comparison";
import { Pill } from "@/components/scalelist/icp-saas-reseller/site/ui";
import { CTARow } from "@/components/scalelist/icp-saas-reseller/site/ui";
import { CrmEnrichMockup } from "@/components/scalelist/icp-saas-reseller/site/Mockups";
import { RoiMockup } from "@/components/scalelist/icp-saas-reseller/site/Mockups";
import { PipelineMockup } from "@/components/scalelist/icp-saas-reseller/site/Mockups";
import { CrmIntegrationsDarkMockup } from "@/components/scalelist/icp-saas-reseller/site/Mockups";
import { ComplianceMockup } from "@/components/scalelist/icp-saas-reseller/site/Mockups";
import { FAQ } from "@/components/scalelist/icp-saas-reseller/site/FAQ";
import { Footer } from "@/components/scalelist/Footer";

export const Route = createFileRoute("/icp/saas-b2b-reseller")({
  head: () => ({
    meta: [
      { title: "Scalelist for SaaS & B2B Resellers" },
      { name: "description", content: "Build partner and reseller pipelines with verified contact data." },
      { property: "og:title", content: "Scalelist for SaaS & B2B Resellers" },
      { property: "og:description", content: "Build partner and reseller pipelines with verified contact data." },
    ],
  }),
  component: IcpSaasResellerPage,
});

function IcpSaasResellerPage() {
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
