import { createFileRoute } from "@tanstack/react-router";
import { NavBar } from "@/components/scalelist/NavBar";
import { Hero } from "@/components/scalelist/icp-sales-marketing/sections/Hero";
import { LogoStrip } from "@/components/scalelist/icp-sales-marketing/site/LogoStrip";
import { WhyScalelist } from "@/components/scalelist/icp-sales-marketing/sections/WhyScalelist";
import { WorkflowCards } from "@/components/scalelist/icp-sales-marketing/sections/WorkflowCards";
import { ContactsThatWork } from "@/components/scalelist/icp-sales-marketing/sections/ContactsThatWork";
import { HeadToHeadCompare } from "@/components/scalelist/icp-sales-marketing/sections/HeadToHeadCompare";
import { HlthCaseStudy } from "@/components/scalelist/icp-sales-marketing/sections/HlthCaseStudy";
import { GetStarted } from "@/components/scalelist/icp-sales-marketing/sections/GetStarted";
import { WorkflowDark } from "@/components/scalelist/icp-sales-marketing/sections/WorkflowDark";
import { GrowWithoutBreaking } from "@/components/scalelist/icp-sales-marketing/sections/GrowWithoutBreaking";
import { FinalCta } from "@/components/scalelist/icp-sales-marketing/sections/FinalCta";
import { Faq } from "@/components/scalelist/icp-sales-marketing/sections/Faq";
import { Footer } from "@/components/scalelist/Footer";

export const Route = createFileRoute("/sales-marketing")({
  head: () => ({
    meta: [
      { title: "Scalelist for Sales & Marketing Teams" },
      { name: "description", content: "Verified emails and mobile numbers so your campaigns reach real people." },
      { property: "og:title", content: "Scalelist for Sales & Marketing Teams" },
      { property: "og:description", content: "Verified emails and mobile numbers so your campaigns reach real people." },
    ],
  }),
  component: IcpSalesMarketingPage,
});

function IcpSalesMarketingPage() {
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col bg-background">
        <Hero />
        <LogoStrip />
        <WhyScalelist />
        <WorkflowCards />
        <ContactsThatWork />
        <HeadToHeadCompare />
        <HlthCaseStudy />
        <GetStarted />
        <WorkflowDark />
        <GrowWithoutBreaking />
        <FinalCta />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
