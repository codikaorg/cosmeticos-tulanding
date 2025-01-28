const Location = () => {
  return (
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
                +58 XXX-XXXXXXX
              </p>
            </div>
          </div>
          <div className="h-[300px] md:h-full min-h-[300px] bg-gray-200 rounded-lg">
            {/* Replace with actual Google Maps embed */}
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              Mapa de Google
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;