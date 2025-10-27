import { useRoute } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

export default function ServiciosDetail() {
  const [, params] = useRoute("/servicios/:tipo");
  const tipo = params?.tipo || "";

  const serviceDetails: Record<string, any> = {
    moviles: {
      title: "Reparación de Móviles",
      description: "Servicios especializados para smartphones de todas las marcas",
      services: [
        { name: "Cambio de pantalla", price: "Desde 60€" },
        { name: "Sustitución de batería", price: "Desde 40€" },
        { name: "Reparación de cámara", price: "Desde 50€" },
        { name: "Conector de carga", price: "Desde 35€" },
        { name: "Daños por agua", price: "Desde 80€" },
        { name: "Problemas de software", price: "Desde 30€" }
      ],
      features: [
        "Compatible con iPhone, Samsung, Huawei, Xiaomi y más",
        "Repuestos originales o de alta calidad",
        "Reparación en 24-48 horas",
        "Garantía de 6 meses"
      ]
    },
    portatiles: {
      title: "Reparación de Portátiles",
      description: "Soluciones completas para tu ordenador portátil",
      services: [
        { name: "Cambio de pantalla", price: "Desde 120€" },
        { name: "Sustitución de teclado", price: "Desde 60€" },
        { name: "Actualización de RAM", price: "Desde 40€" },
        { name: "Instalación de SSD", price: "Desde 80€" },
        { name: "Limpieza y refrigeración", price: "Desde 50€" },
        { name: "Reparación placa base", price: "Desde 150€" }
      ],
      features: [
        "Compatible con todas las marcas",
        "Diagnóstico gratuito",
        "Recuperación de datos",
        "Garantía en reparaciones"
      ]
    },
    tablets: {
      title: "Reparación de Tablets",
      description: "Expertos en reparación de tablets de todas las marcas",
      services: [
        { name: "Cambio de pantalla táctil", price: "Desde 80€" },
        { name: "Sustitución de batería", price: "Desde 60€" },
        { name: "Conector de carga", price: "Desde 45€" },
        { name: "Problemas de software", price: "Desde 35€" },
        { name: "Reparación de botones", price: "Desde 40€" },
        { name: "Actualización sistema", price: "Desde 30€" }
      ],
      features: [
        "iPad, Samsung Galaxy Tab, Huawei y más",
        "Reparación rápida",
        "Repuestos de calidad",
        "Garantía incluida"
      ]
    },
    ordenadores: {
      title: "Reparación de Ordenadores",
      description: "Servicio técnico para ordenadores de sobremesa",
      services: [
        { name: "Montaje PC personalizado", price: "Desde 100€" },
        { name: "Actualización componentes", price: "Desde 50€" },
        { name: "Instalación SO", price: "Desde 40€" },
        { name: "Limpieza interna", price: "Desde 35€" },
        { name: "Reparación fuente", price: "Desde 60€" },
        { name: "Optimización sistema", price: "Desde 45€" }
      ],
      features: [
        "Montaje de PC gaming y profesional",
        "Asesoramiento personalizado",
        "Componentes de calidad",
        "Soporte post-venta"
      ]
    }
  };

  const service = serviceDetails[tipo];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Servicio no encontrado</h1>
          <Button onClick={() => window.history.back()}>Volver</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-b from-muted/50 to-background py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {service.description}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Servicios Disponibles</h2>
            <div className="space-y-3">
              {service.services.map((item: any, index: number) => (
                <Card key={index} className="overflow-visible" data-testid={`card-service-${index}`}>
                  <CardContent className="p-4 flex items-center justify-between">
                    <span className="font-medium">{item.name}</span>
                    <span className="text-primary font-semibold">{item.price}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Características</h2>
            <Card className="overflow-visible mb-6">
              <CardContent className="p-6 space-y-4">
                {service.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-accent" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Button className="w-full font-semibold gap-2" size="lg" data-testid="button-request-quote">
              Solicitar Presupuesto
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Tienes Dudas?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Nuestro equipo está disponible para asesorarte y resolver todas tus preguntas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => window.location.href = '/contacto'} data-testid="button-call">
              Contactar
            </Button>
            <Button size="lg" variant="outline" onClick={() => window.location.href = '/contacto'} data-testid="button-contact">
              Formulario de Contacto
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
