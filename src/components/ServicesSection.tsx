
import { useState } from "react";
import { User, Clock, Mail, Users, Calendar } from "lucide-react";

type Service = {
  id: number;
  title: string;
  icon: React.ReactNode;
  shortDesc: string;
  longDesc: string;
};

const ServicesSection = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  const services: Service[] = [
    {
      id: 1,
      title: "Diseño de Sonrisa Digital",
      icon: <User className="w-10 h-10 text-gold" />,
      shortDesc: "Planificación digital personalizada para tu sonrisa ideal.",
      longDesc: "Utilizamos tecnología de vanguardia para diseñar digitalmente tu sonrisa perfecta, visualizando los resultados antes de iniciar cualquier tratamiento. Un enfoque personalizado que considera tus rasgos faciales, preferencias y necesidades dentales."
    },
    {
      id: 2,
      title: "Carillas de Porcelana",
      icon: <User className="w-10 h-10 text-gold" />,
      shortDesc: "Transformación estética con mínima invasión dental.",
      longDesc: "Láminas ultrafinas de porcelana que se adhieren a la superficie de tus dientes, mejorando color, forma y alineación. Resistentes a las manchas y de aspecto completamente natural, las carillas son la elección premium para una sonrisa perfecta."
    },
    {
      id: 3,
      title: "Blanqueamiento Dental",
      icon: <User className="w-10 h-10 text-gold" />,
      shortDesc: "Recupera el brillo y blancura natural de tus dientes.",
      longDesc: "Tratamiento profesional para eliminar manchas y decoloraciones, devolviendo a tus dientes su blancura natural. Utilizamos productos de alta calidad que no dañan el esmalte dental, obteniendo resultados notables en una sola sesión."
    },
    {
      id: 4,
      title: "Ortodoncia Invisible",
      icon: <User className="w-10 h-10 text-gold" />,
      shortDesc: "Alineación dental discreta y efectiva con Invisalign.",
      longDesc: "Sistema de alineadores transparentes personalizados que corrigen la posición de tus dientes de forma prácticamente invisible. Cómodos, removibles y sin los inconvenientes de la ortodoncia tradicional."
    },
    {
      id: 5,
      title: "Implantes Dentales",
      icon: <User className="w-10 h-10 text-gold" />,
      shortDesc: "Sustitución permanente para dientes perdidos.",
      longDesc: "Solución definitiva para la pérdida dental, los implantes reemplazan tanto la raíz como la corona del diente. Ofrecen estabilidad, funcionalidad y estética natural, integrándose completamente con tu estructura ósea."
    },
    {
      id: 6,
      title: "Limpiezas y Profilaxis",
      icon: <User className="w-10 h-10 text-gold" />,
      shortDesc: "Mantenimiento preventivo para una salud bucal óptima.",
      longDesc: "Eliminación profesional de placa y sarro, prevención de caries y enfermedades periodontales. Incluye pulido para remover manchas superficiales y aplicación de flúor para fortalecer el esmalte dental."
    },
  ];

  const toggleService = (id: number) => {
    if (activeService === id) {
      setActiveService(null);
    } else {
      setActiveService(id);
    }
  };

  return (
    <section id="services" className="py-20 bg-dental-light">
      <div className="container-section">
        <h2 className="section-title pb-4">Nuestros Servicios</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service) => (
            <div 
              key={service.id} 
              className={`service-card group ${activeService === service.id ? 'border-gold' : ''}`}
            >
              <div className="flex items-start mb-4">
                <div className="mr-4 p-2 bg-gold-light rounded-lg">{service.icon}</div>
                <h3 className="text-xl font-playfair font-semibold text-gray-800 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-4">{service.shortDesc}</p>
              
              {activeService === service.id && (
                <div className="mt-4 pt-4 border-t border-dental animate-fade-in">
                  <p className="text-gray-700">{service.longDesc}</p>
                </div>
              )}
              
              <button 
                onClick={() => toggleService(service.id)}
                className="mt-2 text-gold hover:text-gold-dark font-medium transition-colors flex items-center"
              >
                {activeService === service.id ? 'Leer menos' : 'Más información'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
