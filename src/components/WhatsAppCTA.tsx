import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WhatsAppCTA = () => {
  return (
    <div className="md:hidden bg-market-primary py-8 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          ¿Necesitas ayuda con tu pedido?
        </h2>
        <p className="text-white mb-6">
          Contáctanos directamente por WhatsApp y te atenderemos con gusto
        </p>
        <Button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg flex items-center gap-2 mx-auto"
          onClick={() =>
            window.open("https://wa.me/+584241722907", "_blank")
          }
        >
          <MessageCircle className="w-6 h-6" />
          Chatear por WhatsApp
        </Button>
      </div>
    </div>
  );
};

export default WhatsAppCTA;