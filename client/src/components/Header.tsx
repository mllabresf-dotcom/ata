import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Smartphone, Laptop, Tablet, Monitor, ChevronDown, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();

  const services = [
    { name: "Móviles", icon: Smartphone, href: "/servicios/moviles" },
    { name: "Portátiles", icon: Laptop, href: "/servicios/portatiles" },
    { name: "Tablets", icon: Tablet, href: "/servicios/tablets" },
    { name: "Ordenadores", icon: Monitor, href: "/servicios/ordenadores" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" data-testid="link-home">
              <div className="flex items-center gap-2 hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-all cursor-pointer">
                <div className="h-8 w-8 rounded-md bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">ATA</span>
                </div>
                <span className="font-bold text-xl hidden sm:block">ATA</span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              <Link href="/" data-testid="link-nav-home">
                <Button
                  variant={location === "/" ? "secondary" : "ghost"}
                  className="font-medium"
                >
                  Inicio
                </Button>
              </Link>

              <div 
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Button
                  variant={location.startsWith("/servicios") ? "secondary" : "ghost"}
                  className="font-medium gap-1"
                  data-testid="button-services-dropdown"
                >
                  Servicios
                  <ChevronDown className="h-4 w-4" />
                </Button>
                
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-1 w-56 rounded-lg border bg-popover shadow-lg overflow-hidden">
                    {services.map((service) => {
                      const Icon = service.icon;
                      return (
                        <Link key={service.name} href={service.href} data-testid={`link-service-${service.name.toLowerCase()}`}>
                          <div className="flex items-center gap-3 px-4 py-3 hover-elevate active-elevate-2 cursor-pointer">
                            <Icon className="h-5 w-5 text-primary" />
                            <span className="font-medium">{service.name}</span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              <Link href="/nosotros" data-testid="link-nav-about">
                <Button
                  variant={location === "/nosotros" ? "secondary" : "ghost"}
                  className="font-medium"
                >
                  Nosotros
                </Button>
              </Link>

              <Link href="/contacto" data-testid="link-nav-contact">
                <Button
                  variant={location === "/contacto" ? "secondary" : "ghost"}
                  className="font-medium"
                >
                  Contacto
                </Button>
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              data-testid="button-theme-toggle"
            >
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>

            <Link href="/contacto#presupuesto" data-testid="link-quote">
              <Button className="hidden sm:flex font-semibold">
                Solicitar Presupuesto
              </Button>
            </Link>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t">
            <Link href="/" data-testid="link-mobile-home">
              <Button variant={location === "/" ? "secondary" : "ghost"} className="w-full justify-start">
                Inicio
              </Button>
            </Link>
            
            <div className="space-y-1">
              <div className="px-3 py-2 text-sm font-medium text-muted-foreground">Servicios</div>
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Link key={service.name} href={service.href} data-testid={`link-mobile-service-${service.name.toLowerCase()}`}>
                    <Button variant="ghost" className="w-full justify-start gap-2">
                      <Icon className="h-4 w-4" />
                      {service.name}
                    </Button>
                  </Link>
                );
              })}
            </div>

            <Link href="/nosotros" data-testid="link-mobile-about">
              <Button variant={location === "/nosotros" ? "secondary" : "ghost"} className="w-full justify-start">
                Nosotros
              </Button>
            </Link>

            <Link href="/contacto" data-testid="link-mobile-contact">
              <Button variant={location === "/contacto" ? "secondary" : "ghost"} className="w-full justify-start">
                Contacto
              </Button>
            </Link>

            <Link href="/contacto#presupuesto" data-testid="link-mobile-quote">
              <Button className="w-full font-semibold mt-4">
                Solicitar Presupuesto
              </Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
