import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import ProcessSteps from "@/components/ProcessSteps";
import ProductsPreview from "@/components/ProductsPreview";
import QuoteCalculator from "@/components/QuoteCalculator";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <ServicesGrid />
      <ProcessSteps />
      <ProductsPreview />
      <QuoteCalculator />
      <Testimonials />
    </div>
  );
}
