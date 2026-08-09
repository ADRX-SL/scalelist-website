import { createFileRoute } from "@tanstack/react-router";
import { NavBar } from "@/components/scalelist/NavBar";
import CustomersBody from "@/components/scalelist/customers/CustomersBody";
import { Footer } from "@/components/scalelist/Footer";

export const Route = createFileRoute("/customers")({
  head: () => ({ meta: [
    { title: "Customers — Teams growing with Scalelist" },
    { name: "description", content: "See how sales teams and agencies use Scalelist to reach more prospects with verified contact data." },
  ] }),
  component: CustomersBodyPage,
});

function CustomersBodyPage() {
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col bg-background">
        <CustomersBody />
      </main>
      <Footer />
    </>
  );
}
