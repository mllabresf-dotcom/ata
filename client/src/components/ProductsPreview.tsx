import { Card, CardContent } from "@/components/ui/card";
import { Package, Info } from "lucide-react";

export default function ProductsPreview() {
  const products = [
    "Portátiles",
    "Cajas de ordenador",
    "Ratones",
    "Teclados",
    "Periféricos"
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-visible">
            <CardContent className="p-8 sm:p-12 text-center">
              <div className="h-16 w-16 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6">
                <Package className="h-8 w-8 text-primary-foreground" />
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Venta de Equipos Informáticos
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Próximamente dispondremos de venta de equipos y periféricos informáticos de calidad.
              </p>

              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {products.map((product) => (
                  <span
                    key={product}
                    className="px-4 py-2 rounded-lg bg-muted text-foreground font-medium"
                  >
                    {product}
                  </span>
                ))}
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-accent/10 text-accent-foreground">
                <Info className="h-5 w-5 flex-shrink-0" />
                <p className="text-sm">
                  Equipos completos y periféricos. No vendemos componentes internos.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
