import { Card, CardContent } from "@/components/ui/card";
import { Shield, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Garantias() {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-b from-muted/50 to-background py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6">
              <Shield className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Garantías
            </h1>
            <p className="text-xl text-muted-foreground">
              Tu tranquilidad es nuestra prioridad
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="overflow-visible">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Garantía en Reparaciones</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">6 Meses de Garantía</h3>
                    <p className="text-muted-foreground">
                      Todas nuestras reparaciones incluyen 6 meses de garantía contra defectos en el servicio realizado.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Repuestos de Calidad</h3>
                    <p className="text-muted-foreground">
                      Utilizamos repuestos originales o de primera calidad, todos con garantía del fabricante.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Servicio Post-Reparación</h3>
                    <p className="text-muted-foreground">
                      Si tienes algún problema después de la reparación, te atendemos sin costo adicional durante el período de garantía.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Diagnóstico Gratuito</h3>
                    <p className="text-muted-foreground">
                      El diagnóstico inicial de tu dispositivo es completamente gratuito y sin compromiso.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-visible">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Condiciones de Garantía</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Cobertura:</strong> La garantía cubre únicamente el trabajo realizado y los repuestos instalados por ATA.
                </p>
                <p>
                  <strong className="text-foreground">Exclusiones:</strong> La garantía no cubre daños causados por mal uso, accidentes, contacto con líquidos posteriores a la reparación, o manipulación por terceros.
                </p>
                <p>
                  <strong className="text-foreground">Validez:</strong> Para hacer válida la garantía, es necesario presentar el ticket de reparación original.
                </p>
                <p>
                  <strong className="text-foreground">Servicio:</strong> En caso de fallo cubierto por garantía, repararemos el dispositivo sin costo adicional en un plazo de 24-48 horas.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button size="lg" onClick={() => window.location.href = '/contacto'} data-testid="button-contact">
              ¿Tienes Dudas? Contáctanos
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
