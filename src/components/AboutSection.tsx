
import { CalendarDays, User } from "lucide-react";

const AboutSection = () => {
  const certificates = [
    "Especialista en Estética Dental",
    "Máster en Implantología",
    "Certificado en Invisalign",
    "Miembro de la Asociación Americana de Estética Dental",
    "Doctorado en Odontología",
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-section">
        <h2 className="section-title pb-4">Sobre el Dr. Iván</h2>
        
        <div className="flex flex-col md:flex-row gap-10 mt-12">
          <div className="md:w-2/5 animate-fade-in">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl border-2 border-dental-light">
                <img
                  src="/placeholder.svg"
                  alt="Dr. Iván Abril"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gold text-white rounded-full p-4 shadow-lg">
                <User size={32} />
              </div>
              <div className="absolute -top-6 -right-6 bg-gold text-white rounded-full p-4 shadow-lg">
                <CalendarDays size={32} />
              </div>
            </div>
          </div>
          
          <div className="md:w-3/5 animate-slide-up delay-100">
            <h3 className="text-2xl md:text-3xl font-playfair font-semibold text-gray-800 mb-6">
              Especialista en <span className="text-gold">Estética Dental</span>
            </h3>
            
            <p className="text-lg text-gray-700 mb-6">
              Soy el Dr. Iván Abril, especialista en estética dental. Más de una década creando 
              sonrisas naturales, armónicas y saludables.
            </p>
            
            <p className="text-lg text-gray-700 mb-8">
              Mi enfoque combina tecnología avanzada y diseño personalizado para lograr resultados 
              que realmente cambian vidas. Cada tratamiento es una obra de arte única, diseñada 
              exclusivamente para ti.
            </p>
            
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Certificaciones</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certificates.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-gold-light border-2 border-gold"></div>
                    <span className="text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <a 
              href="https://wa.me/1234567890" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Agenda una consulta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
