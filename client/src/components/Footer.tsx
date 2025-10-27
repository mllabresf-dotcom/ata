import { Link } from "wouter";
import { Smartphone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">ATA</span>
              </div>
              <span className="font-bold text-xl">ATA</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Asistencia Técnica Avanzada - Tu solución profesional para reparación de dispositivos electrónicos.
            </p>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" data-testid="link-facebook">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" data-testid="link-instagram">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" data-testid="link-twitter">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/servicios/moviles" data-testid="link-footer-moviles">
                  <span className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                    Reparación de Móviles
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/servicios/portatiles" data-testid="link-footer-portatiles">
                  <span className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                    Reparación de Portátiles
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/servicios/tablets" data-testid="link-footer-tablets">
                  <span className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                    Reparación de Tablets
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/servicios/ordenadores" data-testid="link-footer-ordenadores">
                  <span className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                    Reparación de Ordenadores
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/nosotros" data-testid="link-footer-about">
                  <span className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                    Sobre Nosotros
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contacto" data-testid="link-footer-contact">
                  <span className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                    Contacto
                  </span>
                </Link>
              </li>
              <li>
                <span className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                  Garantías
                </span>
              </li>
              <li>
                <span className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                  Política de Privacidad
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  Palma de Mallorca<br />Islas Baleares, España
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Smartphone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">+34 971 XXX XXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">contacto@ata-tech.es</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  Lun - Vie: 9:00 - 20:00<br />Sáb: 10:00 - 14:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} ATA - Asistencia Técnica Avanzada. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
