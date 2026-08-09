import { createFileRoute } from "@tanstack/react-router";
import { NavBar } from "@/components/scalelist/NavBar";
import MonitoringBody from "@/components/scalelist/monitoring/MonitoringBody";
import { Footer } from "@/components/scalelist/Footer";

export const Route = createFileRoute("/monitoring")({
  head: () => ({
    meta: [
      { title: "Lead Monitoring — Know when your prospects move | Scalelist" },
      { name: "description", content: "Track job changes and new hires across your accounts so you reach out at exactly the right moment." },
    ],
  }),
  component: MonitoringPage,
});

function MonitoringPage() {
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col bg-background">
        <MonitoringBody />
      </main>
      <Footer />
    </>
  );
}
