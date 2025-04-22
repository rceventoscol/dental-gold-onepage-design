
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 bg-dental-light"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('/placeholder.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-gray-900 mb-4">
            Transforma tu <span className="text-gold">sonrisa</span>,<br />
            transforma tu <span className="text-gold">vida</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 md:pr-10">
            Especialista en estética dental con más de una década creando
            sonrisas naturales, armónicas y saludables.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Agenda tu valoración
            </a>
            <button onClick={scrollToAbout} className="btn-secondary">
              Conoce más
            </button>
          </div>
          <div className="mt-8 inline-flex items-center text-gray-600 border border-gray-200 rounded-lg px-4 py-2">
            <span className="font-medium text-gold">Desde 2010</span>
            <span className="mx-3 h-4 w-px bg-gray-300"></span>
            <span className="font-medium">+1000 pacientes felices</span>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center animate-slide-in-right">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gold shadow-xl">
              <img
                src="/placeholder.svg"
                alt="Dr. Iván Abril"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gold text-white rounded-lg py-3 px-6 shadow-lg">
              <p className="font-playfair font-medium">Estética Dental</p>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gold hover:text-gold-dark transition-colors animate-pulse-slow"
        aria-label="Scroll down"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default HeroSection;
