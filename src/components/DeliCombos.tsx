
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Set Facial Completo",
    description: "Limpiador + Tónico + Crema Hidratante + Serum",
    price: "$60.00",
    image: "/images/combo-cosmeticos-1.jpg",
  },
  {
    id: 2,
    name: "Kit Anti-Edad Premium",
    description: "Crema Anti-arrugas + Contorno de Ojos + Serum Vitamina C",
    price: "$85.00",
    image: "/images/combo-cosmeticos-2.jpg",
  },
  {
    id: 3,
    name: "Rutina Básica",
    description: "Limpiador + Hidratante + Protector Solar",
    price: "$45.00",
    image: "/images/combo-cosmeticos-3.jpg",
  },
  ,
  {
    id: 4,
    name: "Rutina Básica",
    description: "Limpiador + Hidratante + Protector Solar",
    price: "$45.00",
    image: "/images/set-cosmeticos-1.avif",
  },
  ,
  {
    id: 5,
    name: "Rutina Básica",
    description: "Limpiador + Hidratante + Protector Solar",
    price: "$45.00",
    image: "/images/set-cosmeticos-1.avif",
  },
  ,
  {
    id: 6,
    name: "Rutina Básica",
    description: "Limpiador + Hidratante + Protector Solar",
    price: "$45.00",
    image: "/images/set-cosmeticos-1.avif",
  },
  {
    id: 7,
    name: "Set Facial Completo",
    description: "Limpiador + Tónico + Crema Hidratante + Serum",
    price: "$60.00",
    image: "/images/combo-familiar.jpg",
  },
  {
    id: 8,
    name: "Kit Anti-Edad Premium",
    description: "Crema Anti-arrugas + Contorno de Ojos + Serum Vitamina C",
    price: "$85.00",
    image: "/images/combo-embutidos.jpg",
  },
  {
    id: 9,
    name: "Rutina Básica",
    description: "Limpiador + Hidratante + Protector Solar",
    price: "$45.00",
    image: "/images/set-cosmeticos-1.avif",
  },
  ,
  {
    id: 10,
    name: "Rutina Básica",
    description: "Limpiador + Hidratante + Protector Solar",
    price: "$45.00",
    image: "/images/set-cosmeticos-1.avif",
  },
  ,
  {
    id: 11,
    name: "Rutina Básica",
    description: "Limpiador + Hidratante + Protector Solar",
    price: "$45.00",
    image: "/images/set-cosmeticos-1.avif",
  },
  ,
  {
    id: 12,
    name: "Rutina Básica",
    description: "Limpiador + Hidratante + Protector Solar",
    price: "$45.00",
    image: "/images/set-cosmeticos-1.avif",
  },
];

const DeliCombos = () => {
  return (
    <section id="products" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-market-dark mb-4">
            Nuestros Productos Destacados
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra selección de productos premium para el cuidado de tu piel,
            cuidadosamente seleccionados para resultados excepcionales.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-54 object-cover rounded-t-lgb bg-gray-100"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2">{product.name}</CardTitle>
                <CardDescription className="mb-4">{product.description}</CardDescription>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-market-primary">
                    {product.price}
                  </span>
                  <Button
                    className="bg-market-secondary hover:bg-market-primary text-white"
                    onClick={() => window.open("https://wa.me/584241722907", "_blank")}
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
