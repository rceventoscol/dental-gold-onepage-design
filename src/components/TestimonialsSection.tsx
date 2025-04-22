
import { useState, useEffect } from "react";

type Testimonial = {
  id: number;
  name: string;
  location: string;
  quote: string;
  avatar: string;
};

const stockImages = [
  "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=facearea&w=128&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=128&q=80",
  "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=facearea&w=128&q=80",
  "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=facearea&w=128&q=80",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=facearea&w=128&q=80"
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Ana Martínez",
      location: "Madrid",
      quote: "El trabajo del Dr. Iván cambió mi vida. Por fin puedo sonreír con confianza después de años escondiendo mis dientes. Las carillas son perfectas, totalmente naturales.",
      avatar: stockImages[0],
    },
    {
      id: 2,
      name: "Carlos Ruiz",
      location: "Diseñador Gráfico",
      quote: "Como profesional que trabaja de cara al público, mi sonrisa es parte de mi carta de presentación. El Dr. Iván entendió exactamente lo que necesitaba. Resultados impecables.",
      avatar: stockImages[1],
    },
    {
      id: 3,
      name: "Laura Gómez",
      location: "Valencia",
      quote: "El tratamiento de Invisalign con el Dr. Iván fue la mejor decisión. Proceso cómodo, resultados perfectos y atención personalizada en cada visita.",
      avatar: stockImages[2],
    },
    {
      id: 4,
      name: "Javier Sánchez",
      location: "Empresario",
      quote: "Después de años con miedo al dentista, el Dr. Iván me hizo sentir cómodo desde la primera visita. Su profesionalidad y el ambiente de la clínica son excepcionales.",
      avatar: stockImages[3],
    },
    {
      id: 5,
      name: "María López",
      location: "Barcelona",
      quote: "Los implantes dentales realizados por el Dr. Iván son perfectos. Recuperé función y estética, y el proceso fue mucho más sencillo de lo que imaginaba.",
      avatar: stockImages[4],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) =>
        current === testimonials.length - 1 ? 0 : current + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-20 bg-dental-light">
      <div className="container-section">
        <h2 className="section-title pb-4">Lo Que Dicen Nuestros Pacientes</h2>

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-card transition-opacity duration-500 ${
                  activeIndex === index ? "opacity-100" : "opacity-0 absolute inset-0"
                }`}
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-gold">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-playfair font-semibold text-gray-800">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                <blockquote className="text-lg text-gray-700 italic">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index ? "bg-gold" : "bg-gray-300"
                }`}
                aria-label={`Ver testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
