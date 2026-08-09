import { createFileRoute } from "@tanstack/react-router";
import { NavBar } from "@/components/scalelist/NavBar";
import Hero from "@/components/scalelist/extension/Hero";
import Features from "@/components/scalelist/extension/Features";
import Accuracy from "@/components/scalelist/extension/Accuracy";
import BenchmarkVideo from "@/components/scalelist/extension/BenchmarkVideo";
import Testimonial from "@/components/scalelist/extension/Testimonial";
import WeeklyData from "@/components/scalelist/extension/WeeklyData";
import FAQ from "@/components/scalelist/extension/FAQ";
import FooterCTA from "@/components/scalelist/extension/FooterCTA";
import { Footer } from "@/components/scalelist/Footer";

export const Route = createFileRoute("/extension")({
  head: () => ({
    meta: [
      { title: "Scalelist Chrome Extension — Find emails & phones on LinkedIn" },
      {
        name: "description",
        content:
          "Find verified emails and mobile numbers straight from LinkedIn with the Scalelist Chrome extension. One click, no exports, no tab switching.",
      },
      {
        property: "og:title",
        content: "Scalelist Chrome Extension — Find emails & phones on LinkedIn",
      },
      {
        property: "og:description",
        content:
          "Find verified emails and mobile numbers straight from LinkedIn with the Scalelist Chrome extension.",
      },
    ],
  }),
  component: ExtensionPage,
});

function ExtensionPage() {
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col gap-16 bg-background">
        <Hero />
        <Features />
        <Accuracy />
        <BenchmarkVideo />
        <Testimonial />
        <WeeklyData />
        <FAQ />
        <FooterCTA />
      </main>
      <Footer />
    </>
  );
}
