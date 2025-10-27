import { Card, CardContent } from "@/components/ui/card";
import { Lock } from "lucide-react";

export default function Privacidad() {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-b from-muted/50 to-background py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6">
              <Lock className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Política de Privacidad
            </h1>
            <p className="text-xl text-muted-foreground">
              Tu privacidad y seguridad son importantes para nosotros
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="overflow-visible">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Protección de Datos</h2>
              <p className="text-muted-foreground mb-4">
                En ATA - Asistencia Técnica Avanzada, nos comprometemos a proteger tu privacidad y la seguridad de tus datos personales.
              </p>
              <p className="text-muted-foreground">
                Esta política describe cómo recopilamos, usamos y protegemos tu información cuando utilizas nuestros servicios.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-visible">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Información que Recopilamos</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span><strong className="text-foreground">Datos de contacto:</strong> Nombre, teléfono, email y dirección cuando solicitas nuestros servicios.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span><strong className="text-foreground">Información del dispositivo:</strong> Modelo, problema reportado y datos técnicos necesarios para la reparación.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span><strong className="text-foreground">Historial de servicio:</strong> Registro de reparaciones anteriores para mejor atención.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="overflow-visible">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Uso de la Información</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Proporcionar y mejorar nuestros servicios de reparación</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Comunicarnos contigo sobre el estado de tu reparación</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Enviar información sobre promociones (solo con tu consentimiento)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Cumplir con obligaciones legales y fiscales</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="overflow-visible">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Seguridad de Datos</h2>
              <p className="text-muted-foreground mb-4">
                Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos personales contra acceso no autorizado, pérdida o destrucción.
              </p>
              <p className="text-muted-foreground">
                Los datos de tu dispositivo son tratados con confidencialidad absoluta y se borran de manera segura tras completar el servicio.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-visible">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Tus Derechos</h2>
              <p className="text-muted-foreground mb-3">
                Conforme al Reglamento General de Protección de Datos (RGPD), tienes derecho a:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Acceder a tus datos personales</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Rectificar información incorrecta</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Solicitar la eliminación de tus datos</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Oponerte al procesamiento de tus datos</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Solicitar la portabilidad de tus datos</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="overflow-visible">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Contacto</h2>
              <p className="text-muted-foreground">
                Para ejercer tus derechos o si tienes preguntas sobre esta política de privacidad, puedes contactarnos en:
              </p>
              <div className="mt-4 space-y-2">
                <p className="font-medium">Email: <span className="text-primary">contacto@ata-tech.es</span></p>
                <p className="font-medium">Teléfono: <span className="text-primary">+34 971 XXX XXX</span></p>
                <p className="font-medium">Dirección: <span className="text-primary">Palma de Mallorca, Islas Baleares</span></p>
              </div>
            </CardContent>
          </Card>

          <div className="text-sm text-muted-foreground text-center">
            <p>Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
