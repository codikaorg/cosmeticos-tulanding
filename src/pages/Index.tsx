import Hero from "@/components/Hero";
import DeliCombos from "@/components/DeliCombos";
import Benefits from "@/components/Benefits";
import Location from "@/components/Location";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <DeliCombos />
      <Benefits />
      <Location />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;