import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Testimonials() {
  const testimonials = [
    {
      name: "María García",
      device: "iPhone 13 Pro",
      rating: 5,
      comment: "Excelente servicio. Repararon la pantalla de mi iPhone en menos de 24 horas. Profesionales y muy atentos.",
      initials: "MG"
    },
    {
      name: "Carlos Rodríguez",
      device: "MacBook Pro",
      rating: 5,
      comment: "Mi portátil no encendía y pensé que lo había perdido. Lo repararon perfectamente y recuperaron todos mis datos.",
      initials: "CR"
    },
    {
      name: "Ana Martínez",
      device: "Samsung Galaxy Tab",
      rating: 5,
      comment: "Muy contentos con el servicio. Transparentes con los precios y súper rápidos. Totalmente recomendable.",
      initials: "AM"
    }
  ];

  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-lg text-muted-foreground">
            Miles de dispositivos reparados y clientes satisfechos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-visible" data-testid={`card-testimonial-${index}`}>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar>
                    <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.device}</div>
                  </div>
                </div>

                <div className="flex gap-1 mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.comment}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-8 p-6 rounded-lg bg-muted/50">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">5000+</div>
              <div className="text-sm text-muted-foreground">Dispositivos reparados</div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Satisfacción</div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Años experiencia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
