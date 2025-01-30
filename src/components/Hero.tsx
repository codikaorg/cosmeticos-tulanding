import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-market-light">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/minimarket-guarenas.jpg')",
          opacity: 0.5,
        }}
      />
      <div className="container mx-auto px-4 z-10">
        <div className="text-center space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-market-dark">
            El Buen Sabor de Guarenas
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-gray-800 max-w-2xl mx-auto">
            Los mejores combos de charcutería y productos frescos para tu hogar,
            ¡con la calidad que mereces!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-market-primary hover:bg-market-dark text-white"
              onClick={() => document.getElementById("combos")?.scrollIntoView({ behavior: "smooth" })}
            >
              Ver Combos y Productos
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-market-primary text-market-primary hover:bg-market-primary hover:text-white"
              onClick={() => document.getElementById("location")?.scrollIntoView({ behavior: "smooth" })}
            >
              Visítanos
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;