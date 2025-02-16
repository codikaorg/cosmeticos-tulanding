
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center bg-market-light px-4 py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content - Left Column */}
          <div className="space-y-6 animate-fade-in text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-market-dark">
              Beauty Cloud Cosmetics
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-xl">
              Descubre tu belleza natural con nuestra exclusiva colección de productos
              premium para el cuidado de la piel
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                size="lg"
                className="bg-market-primary hover:bg-market-dark text-white"
                onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
              >
                Ver Productos
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

          {/* Image - Right Column */}
          <div className="order-first md:order-last">
            <div className="relative h-[300px] md:h-[500px] rounded-lg overflow-hidden">
              <img
                src="/images/portada-landing-cosmeticos.jpg"
                alt="Beauty Cloud Cosmetics"
                className="w-full h-full object-cover rounded-lg"
                style={{
                  filter: "brightness(0.9)",
                }}
              />
              <div className="absolute inset-0 bg-market-primary/10 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
