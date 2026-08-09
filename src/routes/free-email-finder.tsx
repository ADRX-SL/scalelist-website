import { createFileRoute } from "@tanstack/react-router";
import { NavBar } from "@/components/scalelist/NavBar";
import Hero from "@/components/scalelist/email-finder/Hero";
import Features from "@/components/scalelist/email-finder/Features";
import HowItWorks from "@/components/scalelist/email-finder/HowItWorks";
import Testimonial from "@/components/scalelist/email-finder/Testimonial";
import Accuracy from "@/components/scalelist/email-finder/Accuracy";
import WeeklyData from "@/components/scalelist/email-finder/WeeklyData";
import FAQ from "@/components/scalelist/email-finder/FAQ";
import FooterCTA from "@/components/scalelist/email-finder/FooterCTA";
import { Footer } from "@/components/scalelist/Footer";

export const Route = createFileRoute("/free-email-finder")({
  head: () => ({
    meta: [
      { title: "Free Email Finder — Find anyone's work email | Scalelist" },
      { name: "description", content: "Find verified work emails for any prospect in seconds. Free email finder with 80%+ hit rate across US and global contacts." },
      { property: "og:title", content: "Free Email Finder — Find anyone's work email | Scalelist" },
      { property: "og:description", content: "Find verified work emails for any prospect in seconds. Free email finder with 80%+ hit rate across US and global contacts." },
    ],
  }),
  component: EmailFinderPage,
});

function EmailFinderPage() {
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col bg-background">
        <Hero />
        <Features />
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
