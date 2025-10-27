import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Modern_tech_repair_workshop_hero_85151ecd.png";

export default function Hero() {
  const scrollToQuote = () => {
    const element = document.getElementById("presupuesto");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    const element = document.getElementById("servicios");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Taller de reparación tecnológico"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Reparación Profesional de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Dispositivos Electrónicos
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
            Especialistas en reparación de móviles, portátiles, tablets y ordenadores en Mallorca. 
            También venta de equipos informáticos. Diagnóstico gratuito y garantía en reparaciones.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              size="lg" 
              className="font-semibold text-base gap-2"
              onClick={scrollToQuote}
              data-testid="button-hero-quote"
            >
              Solicitar Presupuesto
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="font-semibold text-base bg-background/50 backdrop-blur-sm"
              onClick={scrollToServices}
              data-testid="button-hero-services"
            >
              Ver Servicios
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Diagnóstico gratuito",
              "Reparación en 24-48h",
              "Garantía incluida",
              "Técnicos certificados"
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
