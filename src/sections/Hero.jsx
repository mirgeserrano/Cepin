import { useState, useEffect } from "react";
import hero1 from "../assets/img/13.webp";
import hero2 from "../assets/img/7.webp";
import hero3 from "../assets/img/9.webp";
import ContactButton from "../components/ContactButton ";
import { projects } from "../components/Project";


const images = [hero1, hero2, hero3];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const goTo = (index) => {
    setCurrent(index);
    setAnimKey((k) => k + 1);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <section id="inicio"  className="relative overflow-hidden min-h-[90vh] flex items-center bg-gray-900 scroll-mt-24">

      {/* Imágenes slideshow */}
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={
            i === 0 ? "Apoyo educativo a la niñez en Zulia" :
            i === 1 ? "Programas de nutrición infantil Fundación CEPIN" :
            "Desarrollo integral comunitario en Venezuela"
          }
          loading={i === 0 ? "eager" : "lazy"}
          {...(i === 0 ? { fetchPriority: "high" } : {})}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-transparent" />

      {/* Glows decorativos */}
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-green-400/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-400/10 blur-3xl" />

      {/* Contenido */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 md:py-28 w-full">
        <div key={animKey} className="max-w-xl animate-fadeUp">

          {/* Badge */}
          <span className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
           Bienvenido a la Fundación CEPIN
          </span>

          {/* Título */}
          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-4">
            <span className="text-white">Impulsando el </span>
            <span className="text-[#7AC143]">Futuro</span>
            <br />
            <span className="text-white">de Nuestra </span>
            <span className="text-[#F97316]">Niñez</span>
          </h1>

          {/* Línea decorativa */}
          <div className="flex items-center gap-2 mb-5">
            <div className="h-1 w-12 rounded-full bg-[#7AC143]" />
            <div className="h-1 w-6 rounded-full bg-[#F97316]" />
            <div className="h-1 w-3 rounded-full bg-white/40" />
          </div>

          {/* Descripción */}
          <p className="text-white/85 text-base md:text-lg leading-relaxed mb-8 max-w-md">
            Trabajamos cada día para brindar  a los niños y niñas de nuestra comunidad, ofreciendo
            <span className="text-[#7AC143] font-bold"> oportunidades, educación</span>
            <span className="text-orange-300 font-bold">y un desarrollo integral</span> a los pequenos en situación de vulnerabilidad.
          </p>

          {/* Botones */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="https://wa.me/584123938935?text=Hola,+quiero+ser+Donante+de+la+fundación+CEPIN+🩷"
              aria-label="Información para ser donante por WhatsApp"
              className="inline-flex items-center gap-2 rounded-full bg-[#7AC143] px-6 py-3 text-sm font-extrabold text-white shadow-lg shadow-green-500/40 hover:bg-[#7AC143] hover:scale-105 transition-all duration-200"
            >
              ❤️ Quiero Ser Donante
            </a>
            <a
              href="https://wa.me/584123938935?text=Hola,+quiero+ser+Voluntario+de+la+fundación+CEPIN+🤝"
              aria-label="Información para ser voluntario por WhatsApp"
              className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/40 px-6 py-3 text-sm font-extrabold text-white hover:bg-white/25 hover:scale-105 transition-all duration-200"
            >
              🤝 Quiero Ser Voluntario
            </a>
          </div>

          {/* Stats pills */}
          <div className="flex flex-wrap gap-3">
            {[
              { num: "+500", label: "Familias apoyadas" },
              { num: `${projects.length}`, label: "Proyectos activos" },
              { num: `+${new Date().getFullYear() - 1995}`, label: "Años de labor" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-1.5 rounded-full text-xs font-bold"
              >
                <span className="text-[#7AC143] mr-1">{s.num}</span>
                {s.label}
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}