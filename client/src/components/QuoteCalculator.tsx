import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Calculator } from "lucide-react";

export default function QuoteCalculator() {
  const [deviceType, setDeviceType] = useState("");
  const [issues, setIssues] = useState<string[]>([]);

  const deviceTypes = [
    { value: "movil", label: "Móvil" },
    { value: "portatil", label: "Portátil" },
    { value: "tablet", label: "Tablet" },
    { value: "ordenador", label: "Ordenador de sobremesa" }
  ];

  const allIssues = [
    { id: "pantalla", label: "Pantalla rota", price: 80 },
    { id: "bateria", label: "Batería", price: 50 },
    { id: "software", label: "Problema de software", price: 40 },
    { id: "camara", label: "Cámara", price: 60 },
    { id: "conectores", label: "Conectores de carga", price: 45 },
    { id: "agua", label: "Daño por líquidos", price: 100 }
  ];

  const toggleIssue = (issueId: string) => {
    setIssues(prev => 
      prev.includes(issueId) 
        ? prev.filter(id => id !== issueId)
        : [...prev, issueId]
    );
  };

  const calculateTotal = () => {
    return allIssues
      .filter(issue => issues.includes(issue.id))
      .reduce((total, issue) => total + issue.price, 0);
  };

  const total = calculateTotal();

  return (
    <section id="presupuesto" className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <Card className="overflow-visible">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Calculator className="h-5 w-5 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl sm:text-3xl">Calculadora de Presupuesto</CardTitle>
              </div>
              <p className="text-muted-foreground">
                Obtén una estimación rápida del costo de reparación
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="device-type">Tipo de dispositivo</Label>
                <Select value={deviceType} onValueChange={setDeviceType}>
                  <SelectTrigger id="device-type" data-testid="select-device-type">
                    <SelectValue placeholder="Selecciona tu dispositivo" />
                  </SelectTrigger>
                  <SelectContent>
                    {deviceTypes.map(device => (
                      <SelectItem key={device.value} value={device.value}>
                        {device.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {deviceType && (
                <div className="space-y-3">
                  <Label>¿Qué problema tiene tu dispositivo?</Label>
                  <div className="space-y-3">
                    {allIssues.map(issue => (
                      <div key={issue.id} className="flex items-center space-x-3 p-3 rounded-lg hover-elevate">
                        <Checkbox
                          id={issue.id}
                          checked={issues.includes(issue.id)}
                          onCheckedChange={() => toggleIssue(issue.id)}
                          data-testid={`checkbox-issue-${issue.id}`}
                        />
                        <label
                          htmlFor={issue.id}
                          className="flex-1 cursor-pointer font-medium"
                        >
                          {issue.label}
                        </label>
                        <span className="text-sm text-muted-foreground">
                          ~{issue.price}€
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {issues.length > 0 && (
                <div className="pt-6 border-t">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold">Estimación total:</span>
                    <span className="text-3xl font-bold text-primary" data-testid="text-total-estimate">
                      {total}€
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    * Precio aproximado. El presupuesto final se confirmará tras el diagnóstico.
                  </p>
                  <Button className="w-full font-semibold" data-testid="button-request-quote">
                    Solicitar Presupuesto Oficial
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
