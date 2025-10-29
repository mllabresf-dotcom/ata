import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Target, TrendingUp } from "lucide-react";
import repairImage from "@assets/generated_images/Smartphone_repair_close-up_shot_5458b2f6.png";

export default function Nosotros() {
  const values = [
    {
      icon: Award,
      title: "Calidad Garantizada",
      description: "Utilizamos repuestos de primera calidad y ofrecemos garantía en todas nuestras reparaciones."
    },
    {
      icon: Users,
      title: "Equipo Experto",
      description: "Técnicos certificados con años de experiencia en reparación de dispositivos electrónicos."
    },
    {
      icon: Target,
      title: "Precisión",
      description: "Diagnósticos precisos y reparaciones efectivas que solucionan el problema definitivamente."
    },
    {
      icon: TrendingUp,
      title: "Innovación",
      description: "Nos mantenemos actualizados con las últimas tecnologías y técnicas de reparación."
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-b from-muted/50 to-background py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">ATA</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Asistencia Técnica Avanzada - Tu centro tecnológico de confianza en Mallorca
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Nuestra Historia</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                ATA es tu centro tecnológico en Mallorca, especializado en reparación profesional de dispositivos 
                electrónicos. Nuestro objetivo es proporcionar servicios de la más alta calidad, combinando 
                experiencia técnica con un servicio al cliente excepcional.
              </p>
              <p>
                Ofrecemos servicios de reparación para smartphones, tablets, portátiles y ordenadores de sobremesa. 
                Además, próximamente dispondremos de venta de equipos informáticos completos: portátiles, cajas de 
                ordenador, ratones, teclados y periféricos de calidad.
              </p>
              <p>
                Ubicados en Palma de Mallorca, trabajamos con las últimas tecnologías y técnicas de reparación 
                para garantizar que tu dispositivo vuelva a funcionar como nuevo.
              </p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              src={repairImage}
              alt="Técnico reparando dispositivo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Nuestros Valores</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="overflow-visible" data-testid={`card-value-${index}`}>
                  <CardContent className="p-6 text-center">
                    <div className="h-14 w-14 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">¿Por Qué Elegirnos?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Técnicos especializados, garantía en todas las reparaciones y un compromiso 
            inquebrantable con la satisfacción del cliente en Mallorca.
          </p>
          <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div>
              <div className="text-5xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Profesionalidad</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">24-48h</div>
              <div className="text-muted-foreground">Tiempo Reparación</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">Mallorca</div>
              <div className="text-muted-foreground">Ubicación</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
