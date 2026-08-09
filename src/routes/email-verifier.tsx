import { createFileRoute } from "@tanstack/react-router";
import { NavBar } from "@/components/scalelist/NavBar";
import Hero from "@/components/scalelist/email-verifier/Hero";
import Features from "@/components/scalelist/email-verifier/Features";
import HowItWorks from "@/components/scalelist/email-verifier/HowItWorks";
import Testimonial from "@/components/scalelist/email-verifier/Testimonial";
import Accuracy from "@/components/scalelist/email-verifier/Accuracy";
import WeeklyData from "@/components/scalelist/email-verifier/WeeklyData";
import FAQ from "@/components/scalelist/email-verifier/FAQ";
import FooterCTA from "@/components/scalelist/email-verifier/FooterCTA";
import { Footer } from "@/components/scalelist/Footer";

export const Route = createFileRoute("/email-verifier")({
  head: () => ({
    meta: [
      { title: "Email Verifier — Clean your list before you send | Scalelist" },
      { name: "description", content: "Verify email addresses in bulk and protect your sender reputation. Catch invalids, catch-alls and traps before you send." },
      { property: "og:title", content: "Email Verifier — Clean your list before you send | Scalelist" },
      { property: "og:description", content: "Verify email addresses in bulk and protect your sender reputation. Catch invalids, catch-alls and traps before you send." },
    ],
  }),
  component: EmailVerifierPage,
});

function EmailVerifierPage() {
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
