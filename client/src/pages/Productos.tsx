import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";
import laptopImage from "@assets/generated_images/Gaming_laptop_product_photo_210e7a53.png";
import pcCaseImage from "@assets/generated_images/PC_case_tower_product_189ac118.png";
import mouseImage from "@assets/generated_images/Gaming_mouse_product_photo_7841f6cb.png";
import keyboardImage from "@assets/generated_images/Gaming_keyboard_product_photo_cb753828.png";

export default function Productos() {
  const products = [
    {
      id: 1,
      name: "Portátil Gaming Pro",
      description: "Intel i7, 16GB RAM, RTX 3060, 512GB SSD",
      price: 1299,
      image: laptopImage,
      category: "Portátiles"
    },
    {
      id: 2,
      name: "Portátil Ultrabook",
      description: "Intel i5, 8GB RAM, Intel Iris Xe, 256GB SSD",
      price: 799,
      image: laptopImage,
      category: "Portátiles"
    },
    {
      id: 3,
      name: "Portátil Profesional",
      description: "AMD Ryzen 7, 32GB RAM, 1TB SSD",
      price: 1499,
      image: laptopImage,
      category: "Portátiles"
    },
    {
      id: 4,
      name: "Caja Gaming RGB",
      description: "ATX, Panel cristal templado, 4 ventiladores RGB",
      price: 89,
      image: pcCaseImage,
      category: "Cajas"
    },
    {
      id: 5,
      name: "Caja Mini-ITX",
      description: "Compacta, Panel lateral, 2 ventiladores",
      price: 59,
      image: pcCaseImage,
      category: "Cajas"
    },
    {
      id: 6,
      name: "Caja Silenciosa Pro",
      description: "ATX, Insonorizada, 3 ventiladores silenciosos",
      price: 119,
      image: pcCaseImage,
      category: "Cajas"
    },
    {
      id: 7,
      name: "Ratón Gaming Pro",
      description: "16000 DPI, RGB, 8 botones programables",
      price: 45,
      image: mouseImage,
      category: "Ratones"
    },
    {
      id: 8,
      name: "Ratón Inalámbrico",
      description: "2400 DPI, Ergonómico, Batería 6 meses",
      price: 29,
      image: mouseImage,
      category: "Ratones"
    },
    {
      id: 9,
      name: "Ratón Vertical",
      description: "Ergonómico, 1600 DPI, USB",
      price: 35,
      image: mouseImage,
      category: "Ratones"
    },
    {
      id: 10,
      name: "Teclado Mecánico RGB",
      description: "Switches mecánicos, RGB por tecla, Anti-ghosting",
      price: 79,
      image: keyboardImage,
      category: "Teclados"
    },
    {
      id: 11,
      name: "Teclado Inalámbrico",
      description: "Bluetooth, Compacto, Batería recargable",
      price: 49,
      image: keyboardImage,
      category: "Teclados"
    },
    {
      id: 12,
      name: "Teclado Gaming Pro",
      description: "Mecánico, RGB, Switches rojos, Reposamuñecas",
      price: 129,
      image: keyboardImage,
      category: "Teclados"
    }
  ];

  const categories = ["Todos", "Portátiles", "Cajas", "Ratones", "Teclados"];

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-b from-muted/50 to-background py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Productos <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Informáticos</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Equipos y periféricos de calidad para tu setup tecnológico
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent/10 border border-accent/20">
              <ShoppingCart className="h-5 w-5 text-accent" />
              <p className="text-accent font-medium">
                Próxima apertura - Todos los productos actualmente sin stock
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "Todos" ? "default" : "outline"}
              data-testid={`button-category-${category.toLowerCase()}`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-visible flex flex-col" data-testid={`card-product-${product.id}`}>
              <CardHeader className="p-0">
                <div className="relative aspect-square overflow-hidden rounded-t-lg bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <Badge 
                    variant="secondary" 
                    className="absolute top-3 right-3 bg-muted text-muted-foreground"
                  >
                    {product.category}
                  </Badge>
                  <Badge 
                    variant="destructive" 
                    className="absolute top-3 left-3"
                  >
                    Sin Stock
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-4 flex-1">
                <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {product.description}
                </p>
                <div className="text-2xl font-bold text-primary">
                  {product.price}€
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button 
                  className="w-full" 
                  disabled
                  data-testid={`button-buy-${product.id}`}
                >
                  No Disponible
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto overflow-visible">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">¿Cuándo Abrimos?</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Estamos preparando nuestra tienda online para ofrecerte los mejores productos 
                informáticos al mejor precio. Mientras tanto, nuestros servicios de reparación 
                están completamente operativos.
              </p>
              <Button onClick={() => window.location.href = '/contacto'} data-testid="button-notify">
                Contáctanos para Más Información
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
