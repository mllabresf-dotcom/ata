import { Search, FileText, Wrench, Package } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ProcessSteps() {
  const steps = [
    {
      icon: Search,
      title: "Diagnóstico",
      description: "Analizamos tu dispositivo y detectamos el problema de forma gratuita."
    },
    {
      icon: FileText,
      title: "Presupuesto",
      description: "Te proporcionamos un presupuesto detallado sin compromiso."
    },
    {
      icon: Wrench,
      title: "Reparación",
      description: "Nuestros técnicos certificados reparan tu dispositivo con garantía."
    },
    {
      icon: Package,
      title: "Entrega",
      description: "Recibe tu dispositivo reparado y funcionando como nuevo."
    }
  ];

  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Proceso Simple y Transparente
          </h2>
          <p className="text-lg text-muted-foreground">
            Cuatro pasos para que tu dispositivo vuelva a funcionar perfectamente
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative" data-testid={`step-${index}`}>
                <Card className="overflow-visible">
                  <CardContent className="p-6 text-center">
                    <div className="relative inline-block mb-4">
                      <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto">
                        <Icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary to-accent" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
