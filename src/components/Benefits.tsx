
import { CheckCircle } from "lucide-react";

const benefits = [
  {
    title: "Productos Premium",
    description: "Marcas exclusivas de alta calidad",
  },
  {
    title: "Asesoría Experta",
    description: "Personal especializado en belleza",
  },
  {
    title: "Productos Originales",
    description: "Garantía de autenticidad",
  },
  {
    title: "Resultados Garantizados",
    description: "Satisfacción asegurada",
  },
];

const Benefits = () => {
  return (
    <section className="py-16 bg-market-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-market-dark text-center mb-12">
          ¿Por Qué Elegirnos?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <CheckCircle className="w-12 h-12 text-market-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
