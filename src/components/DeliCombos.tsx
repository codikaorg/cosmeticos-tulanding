import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const combos = [
  {
    id: 1,
    name: "Combo Familiar",
    description: "500g de Jamón + 500g de Queso + 250g de Mortadela",
    price: "$15.00",
    image: "images/combo-familiar.jpg",
  },
  {
    id: 2,
    name: "Combo Especial",
    description: "300g de Jamón Serrano + 300g de Queso Manchego + 200g de Salami",
    price: "$15.00",
    image: "/images/combo-embutidos.jpg",
  },
  {
    id: 3,
    name: "Jamòn de Espalda",
    description: "2kg de Jamón",
    price: "$60.00",
    image: "/images/jamon-de-espalda.jpg",
  },
   {
    id: 4,
    name: "Queso Guayanes",
    description: "1Kg de Queso Guayanes",
    price: "$8.00",
    image: "images/queso-guayanes.jpg",
  },
  {
    id: 5,
    name: "Harina Pan Integral",
    description: "Bulto de 1Kg de Harina Pan Integral 20 unidades",
    price: "$40.00",
    image: "/images/harina-pan-integral.jpg",
  },
  {
    id: 6,
    name: "Combo Hallaquitas",
    description: "20 Hallaquitas",
    price: "$10.00",
    image: "/images/3-hallaquitas.jpg",
  }
];

const DeliCombos = () => {
  return (
    <section id="combos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-market-dark mb-4">
            Nuestros Combos y Productos
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
                    onClick={() => window.open("https://wa.me/+584129805193", "_blank")}
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