import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3">
          <img
            src="/lovable-uploads/36384e56-8f20-4fc1-b1d7-bfc755ce67d7.png"
            alt="DentalGold Logo"
            className="h-12 w-auto object-contain"
            style={{ minWidth: "48px" }}
            loading="eager"
          />
          <span className="hidden md:inline text-2xl font-playfair font-bold text-gold">
            DR. IVÁN <span className="text-gray-800">ABRIL</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-gray-700 hover:text-gold transition-colors"
          >
            Inicio
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-700 hover:text-gold transition-colors"
          >
            Sobre mí
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-gray-700 hover:text-gold transition-colors"
          >
            Servicios
          </button>
          <button
            onClick={() => scrollToSection("cases")}
            className="text-gray-700 hover:text-gold transition-colors"
          >
            Casos
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="text-gray-700 hover:text-gold transition-colors"
          >
            Testimonios
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-gray-700 hover:text-gold transition-colors"
          >
            Contacto
          </button>
        </nav>

        {/* CTA Button (Desktop) */}
        <div className="hidden md:block">
          <a
            href="tel:+1234567890"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            <Phone size={16} />
            Agenda tu cita
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-gold"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-gray-700 hover:text-gold py-2 transition-colors text-left"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-gold py-2 transition-colors text-left"
            >
              Sobre mí
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-gold py-2 transition-colors text-left"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("cases")}
              className="text-gray-700 hover:text-gold py-2 transition-colors text-left"
            >
              Casos
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-gray-700 hover:text-gold py-2 transition-colors text-left"
            >
              Testimonios
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-gold py-2 transition-colors text-left"
            >
              Contacto
            </button>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-white font-medium py-3 px-4 rounded-md transition-colors"
            >
              <Phone size={16} />
              Agenda tu cita
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
