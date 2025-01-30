import WhatsAppCTA from "./WhatsAppCTA";

const Location = () => {
  return (
    <>
      <section id="location" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-market-dark mb-4">
              Visítanos en Guarenas
            </h2>
            <p className="text-gray-600">
              Estamos ubicados en una zona céntrica y accesible
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-market-light p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Información de Contacto</h3>
              <div className="space-y-4">
                <p>
                  <strong>Dirección:</strong>
                  <br />
                  Av. Principal de Guarenas #123
                  <br />
                  Guarenas, Miranda, Venezuela
                </p>
                <p>
                  <strong>Horario:</strong>
                  <br />
                  Lunes a Sábado: 8:00 AM - 8:00 PM
                  <br />
                  Domingo: 8:00 AM - 2:00 PM
                </p>
                <p>
                  <strong>Teléfono:</strong>
                  <br />
                  +58 412-9805193
                </p>
              </div>
            </div>
            <div className="h-[300px] md:h-full min-h-[300px] bg-gray-200 rounded-lg">
              {/* Replace with actual Google Maps embed */}
              <iframe title="Open Map"
                width="100%"
                height="100%"
                frameBorder="0"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-66.5958%2C10.469%2C-66.5937%2C10.471&layer=mapnik&marker=10.470004%2C-66.594733"
                ></iframe>
            </div>
          </div>
        </div>
      </section>
      <WhatsAppCTA />
    </>
  );
};

export default Location;