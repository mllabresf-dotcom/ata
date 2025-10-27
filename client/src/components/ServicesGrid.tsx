import { Smartphone, Laptop, Tablet, Monitor, Wrench, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ServicesGrid() {
  const services = [
    {
      icon: Smartphone,
      title: "Reparación de Móviles",
      description: "Cambio de pantallas, baterías, cámaras y reparaciones de software. Compatible con todas las marcas.",
      features: ["Pantallas", "Baterías", "Cámaras", "Software"]
    },
    {
      icon: Laptop,
      title: "Reparación de Portátiles",
      description: "Soluciones completas para portátiles: hardware, software, limpieza y optimización.",
      features: ["Hardware", "Software", "Limpieza", "Optimización"]
    },
    {
      icon: Tablet,
      title: "Reparación de Tablets",
      description: "Especialistas en tablets de todas las marcas. Pantallas táctiles, baterías y más.",
      features: ["Pantallas táctiles", "Baterías", "Conectores", "Sistema"]
    },
    {
      icon: Monitor,
      title: "Reparación de Ordenadores",
      description: "Servicio técnico para ordenadores de sobremesa. Actualizaciones y reparaciones.",
      features: ["Actualizaciones", "Reparaciones", "Limpieza", "Montaje"]
    },
    {
      icon: Wrench,
      title: "Mantenimiento Preventivo",
      description: "Mantén tus dispositivos en óptimas condiciones con nuestro servicio de mantenimiento.",
      features: ["Limpieza profunda", "Diagnóstico", "Optimización", "Backup"]
    },
    {
      icon: Zap,
      title: "Reparación Express",
      description: "Servicio rápido para reparaciones urgentes. Muchas reparaciones en menos de 24 horas.",
      features: ["24 horas", "Sin cita previa", "Diagnóstico rápido", "Prioridad"]
    }
  ];

  return (
    <section id="servicios" className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-muted-foreground">
            Soluciones profesionales para todos tus dispositivos electrónicos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="hover-elevate active-elevate-2 transition-all cursor-pointer overflow-visible"
                data-testid={`card-service-${index}`}
              >
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Button variant="ghost" className="w-full" data-testid={`button-service-${index}`}>
                    Más información
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
