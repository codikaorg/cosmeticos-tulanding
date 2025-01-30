const Footer = () => {
  return (
    <footer className="bg-market-dark text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="font-semibold text-xl mb-4">Contáctanos</h3>
          <p className="mb-2">Ruiz Pineda, Local c-6, Guarenas</p>
          <p className="mb-6">Teléfono: +584241722907</p>
        </div>
      </div>
      <div className="bg-market-primary py-3 mt-8">
        <div className="container mx-auto px-4 text-center text-sm">
          Desarrollo Web por{" "}
          <a
            href="https://webyaagencia.digital"
            target="_blank"
            rel="noopener noreferrer"
            className="text-market-secondary hover:text-market-light transition-colors"
          >
            WebYa Agencia Digital
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;