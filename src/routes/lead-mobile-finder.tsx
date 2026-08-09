import { createFileRoute } from "@tanstack/react-router";
import { NavBar } from "@/components/scalelist/NavBar";
import Hero from "@/components/scalelist/mobile-finder/Hero";
import HowItWorks from "@/components/scalelist/mobile-finder/HowItWorks";
import Testimonial from "@/components/scalelist/mobile-finder/Testimonial";
import Accuracy from "@/components/scalelist/mobile-finder/Accuracy";
import WeeklyData from "@/components/scalelist/mobile-finder/WeeklyData";
import FAQ from "@/components/scalelist/mobile-finder/FAQ";
import FooterCTA from "@/components/scalelist/mobile-finder/FooterCTA";
import { Footer } from "@/components/scalelist/Footer";

export const Route = createFileRoute("/lead-mobile-finder")({
  head: () => ({
    meta: [
      { title: "Mobile Number Finder — Get direct dials | Scalelist" },
      { name: "description", content: "Find verified mobile numbers for your prospects so your cold calls actually connect." },
      { property: "og:title", content: "Mobile Number Finder — Get direct dials | Scalelist" },
      { property: "og:description", content: "Find verified mobile numbers for your prospects so your cold calls actually connect." },
    ],
  }),
  component: MobileFinderPage,
});

function MobileFinderPage() {
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col bg-background">
        <Hero />
        <HowItWorks />
        <Testimonial />
        <Accuracy />
        <WeeklyData />
        <FAQ />
        <FooterCTA />
      </main>
      <Footer />
    </>
  );
}
