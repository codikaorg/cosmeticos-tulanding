
import Hero from "@/components/Hero";
import DeliCombos from "@/components/DeliCombos";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <DeliCombos />
      <Benefits />
      <Testimonials />
      <Location />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
