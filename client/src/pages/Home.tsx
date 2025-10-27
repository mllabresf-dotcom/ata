import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import ProcessSteps from "@/components/ProcessSteps";
import QuoteCalculator from "@/components/QuoteCalculator";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <ServicesGrid />
      <ProcessSteps />
      <QuoteCalculator />
      <Testimonials />
    </div>
  );
}
