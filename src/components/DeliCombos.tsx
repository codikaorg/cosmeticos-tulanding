import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const combos = [
  {
    id: 1,
    name: "Combo Familiar",
    description: "500g de Jamón + 500g de Queso + 250g de Mortadela",
    price: "$XX.XX",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Combo Especial",
    description: "300g de Jamón Serrano + 300g de Queso Manchego + 200g de Salami",
    price: "$XX.XX",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Combo Básico",
    description: "250g de Jamón + 250g de Queso + 200g de Mortadela",
    price: "$XX.XX",
    image: "/placeholder.svg",
  },
];

const DeliCombos = () => {
  return (
    <section id="combos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-market-dark mb-4">
            Nuestros Combos de Charcutería
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre nuestras deliciosas combinaciones preparadas con los mejores
            productos, perfectas para toda ocasión.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {combos.map((combo) => (
            <Card key={combo.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader>
                <img
                  src={combo.image}
                  alt={combo.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2">{combo.name}</CardTitle>
                <CardDescription className="mb-4">{combo.description}</CardDescription>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-market-primary">
                    {combo.price}
                  </span>
                  <Button
                    className="bg-market-secondary hover:bg-market-primary text-white"
                    onClick={() => window.open("https://wa.me/+XXXXXXXXXXX", "_blank")}
                  >
                    Pedir por WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliCombos;