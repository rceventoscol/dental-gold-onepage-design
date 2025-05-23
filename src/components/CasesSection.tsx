import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Case = {
  id: number;
  title: string;
  description: string;
  beforeImg: string;
  afterImg: string;
};

const CasesSection = () => {
  const [currentCase, setCurrentCase] = useState(0);

  const cases: Case[] = [
    {
      id: 1,
      title: "Transformación con Carillas",
      description:
        "Paciente con dientes desalineados y manchados. Solución con 8 carillas de porcelana en 2 semanas.",
      beforeImg: "/lovable-uploads/b701e61b-bed6-41ba-b987-05cbd38da0c5.png",
      afterImg: "/lovable-uploads/c1e49a48-6371-42c7-ab10-21dffc826101.png",
    },
    {
      id: 2,
      title: "Diseño de Sonrisa Completo",
      description:
        "Restauración completa con implantes y coronas de cerámica para recuperar función y estética.",
      beforeImg: "/placeholder.svg",
      afterImg: "/placeholder.svg",
    },
    {
      id: 3,
      title: "Ortodoncia Invisible",
      description:
        "Corrección de mordida y alineación con Invisalign en 14 meses sin aparatos visibles.",
      beforeImg: "/placeholder.svg",
      afterImg: "/placeholder.svg",
    },
  ];

  const nextCase = () => {
    setCurrentCase((prev) => (prev === cases.length - 1 ? 0 : prev + 1));
  };

  const prevCase = () => {
    setCurrentCase((prev) => (prev === 0 ? cases.length - 1 : prev - 1));
  };

  return (
    <section id="cases" className="py-20 bg-white">
      <div className="container-section">
        <h2 className="section-title pb-4">Resultados Reales</h2>
        <p className="text-center text-xl text-gray-600 max-w-2xl mx-auto mb-12">
          Pacientes felices con sonrisas transformadas. Casos reales de personas que confiaron en nosotros.
        </p>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-dental-light p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-playfair font-semibold text-gold mb-4 text-center">
              {cases[currentCase].title}
            </h3>
            
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="md:w-1/2 relative">
                <div className="absolute top-4 left-4 bg-gold text-white text-sm font-medium py-1 px-3 rounded-md">
                  Antes
                </div>
                <img 
                  src={cases[currentCase].beforeImg} 
                  alt={`Antes - ${cases[currentCase].title}`}
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              
              <div className="md:w-1/2 relative">
                <div className="absolute top-4 left-4 bg-gold text-white text-sm font-medium py-1 px-3 rounded-md">
                  Después
                </div>
                <img 
                  src={cases[currentCase].afterImg} 
                  alt={`Después - ${cases[currentCase].title}`}
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
            
            <p className="text-gray-700 text-center mb-6">
              {cases[currentCase].description}
            </p>
            
            <div className="flex justify-center gap-2">
              {cases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCase(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentCase === index ? "bg-gold" : "bg-gray-300"
                  }`}
                  aria-label={`Ver caso ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <button
            onClick={prevCase}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 bg-white p-2 rounded-full shadow-md text-gold hover:text-gold-dark transition-colors"
            aria-label="Caso anterior"
          >
            <ArrowLeft size={24} />
          </button>
          
          <button
            onClick={nextCase}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 bg-white p-2 rounded-full shadow-md text-gold hover:text-gold-dark transition-colors"
            aria-label="Caso siguiente"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
