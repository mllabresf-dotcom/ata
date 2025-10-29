import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    deviceType: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo pronto.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      deviceType: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Dirección",
      content: "Palma de Mallorca\nIslas Baleares, España"
    },
    {
      icon: Phone,
      title: "Teléfono",
      content: "+34 971 XXX XXX"
    },
    {
      icon: Mail,
      title: "Email",
      content: "contacto@ata-tech.es"
    },
    {
      icon: Clock,
      title: "Horario",
      content: "Lun-Vie: 9:00-20:00\nSáb: 10:00-14:00"
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-b from-muted/50 to-background py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Contáctanos
            </h1>
            <p className="text-xl text-muted-foreground">
              Estamos aquí para ayudarte. Envíanos tu consulta y te responderemos lo antes posible.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card key={index} className="overflow-visible" data-testid={`card-contact-${index}`}>
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold mb-2">{info.title}</h3>
                  <p className="text-sm text-muted-foreground whitespace-pre-line">
                    {info.content}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="overflow-visible">
            <CardHeader>
              <CardTitle className="text-2xl">Envíanos un Mensaje</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre completo</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Tu nombre"
                    required
                    data-testid="input-name"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="tu@email.com"
                      required
                      data-testid="input-email"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+34 600 000 000"
                      data-testid="input-phone"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="deviceType">Tipo de dispositivo</Label>
                  <Select value={formData.deviceType} onValueChange={(value) => setFormData({ ...formData, deviceType: value })}>
                    <SelectTrigger id="deviceType" data-testid="select-device">
                      <SelectValue placeholder="Selecciona el tipo de dispositivo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="movil">Móvil</SelectItem>
                      <SelectItem value="portatil">Portátil</SelectItem>
                      <SelectItem value="tablet">Tablet</SelectItem>
                      <SelectItem value="ordenador">Ordenador</SelectItem>
                      <SelectItem value="otro">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Cuéntanos qué necesitas..."
                    rows={5}
                    required
                    data-testid="input-message"
                  />
                </div>

                <Button type="submit" className="w-full font-semibold" data-testid="button-submit">
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="overflow-visible">
            <CardHeader>
              <CardTitle className="text-2xl">Ubicación</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video rounded-lg bg-muted flex items-center justify-center mb-4">
                <MapPin className="h-12 w-12 text-muted-foreground" />
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Cómo Llegar</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Estamos ubicados en Palma de Mallorca. Fácil acceso en transporte público 
                    y parking disponible en la zona.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Horario de Atención</h3>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <div className="flex justify-between">
                      <span>Lunes - Viernes:</span>
                      <span className="font-medium">9:00 - 20:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sábados:</span>
                      <span className="font-medium">10:00 - 14:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Domingos:</span>
                      <span className="font-medium">Cerrado</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
