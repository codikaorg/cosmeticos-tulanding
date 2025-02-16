
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    role: "Cliente Frecuente",
    content: "Los productos de Beauty Cloud han transformado completamente mi rutina de cuidado facial. La calidad es excepcional y los resultados son increíbles.",
    rating: 5,
  },
  {
    name: "Ana Pérez",
    role: "Profesional de Belleza",
    content: "Como maquilladora profesional, aprecio la autenticidad y calidad de sus productos. El servicio y asesoramiento son excelentes.",
    rating: 5,
  },
  {
    name: "Carolina Martínez",
    role: "Cliente Verificada",
    content: "Encontré mi rutina perfecta gracias a la asesoría personalizada. Los productos son suaves con mi piel sensible y dan resultados visibles.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-market-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-market-dark mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre por qué nuestros clientes confían en Beauty Cloud para su cuidado personal
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-market-primary text-market-primary"
                    />
                  ))}
                </div>
                <p className="text-gray-700 italic">{testimonial.content}</p>
                <div className="pt-4">
                  <h4 className="font-semibold text-market-dark">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
