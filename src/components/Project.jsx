
import { useState } from "react";
import familia from "../assets/img/12.webp";
import escolar from "../assets/img/3.webp";
import nutricion from "../assets/img/nutricion.webp";
import proteccion from "../assets/img/proteccion.webp";
import agua from "../assets/img/agua.webp";

export const projects = [
  {
    icon: "👨‍👩‍👧",
    title: "HUERTOS FAMILIARES",
    text: "Ayudan a las familias a mejorar su seguridad alimentaria enseñándoles a cultivar sus propios alimentos, aplicar buenas prácticas agrícolas y recibir educación nutricional. Las capacitaciones son teóricas y prácticas, y promueven la participación de toda la familia.",
    image: familia,
    iconColor: "text-blue-500",
  },
  {
    icon: "🌈",
    title: "HUERTO ESCOLAR",
    text: "Los niños aprenden sobre agricultura, nutrición y cuidado del ambiente. En este espacio investigan sobre cultivos, reciclan residuos del comedor escolar para hacer abono y elaboran ecobloques con materiales reciclados.",
    image: escolar,
    iconColor: "text-pink-500",
  },
  {
    icon: "🍽️",
    title: "NUTRICIÓN",
    text: "Atiende a niños de 0 a 10 años y a mujeres embarazadas o lactantes. Ofrecen evaluaciones nutricionales, suplementos alimenticios y vitaminas en casos de desnutrición, junto con seguimiento comunitario y charlas sobre nutrición y lactancia materna.",
    image: nutricion,
    iconColor: "text-orange-400",
  },
  {
    icon: "🚸",
    title: "PROTECCIÓN",
    text: "El proyecto de Protección brinda apoyo psicosocial individual y grupal a niños, niñas, adolescentes y cuidadores, además de gestión de casos y asesoría legal. También realiza capacitaciones comunitarias sobre protección infantil y prevención de la violencia sexual.",
    image: proteccion,
    iconColor: "text-green-500",
  },
  {
    icon: "💧",
    title: "WASH ",
    text: "El proyecto WASH brinda capacitaciones comunitarias sobre higiene de manos, tratamiento y almacenamiento seguro del agua, higiene de alimentos, salud menstrual, saneamiento y manejo de residuos, además de promover higiene personal y cuidado del ambiente.",
    image: agua,
    iconColor: "text-cyan-500",
  },
  

];

export default function Services() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = (index) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 300);
  };

  const prev = () => goTo((current - 1 + projects.length) % projects.length);
  const next = () => goTo((current + 1) % projects.length);
  const p = projects[current];

  return (
    <section id="proyectos" className="bg-gray-50 py-16 px-6 sm:px-6 scroll-mt-24">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 md:mb-10 gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-red-500 mb-2">
              Nuestra Labor
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
              Proyectos que<br />transforman vidas
            </h2>
          </div>
          <p className="text-sm text-gray-500 max-w-xs md:text-right leading-relaxed">
            Conoce las áreas donde generamos un impacto real y directo en la comunidad.
          </p>
        </div>

        {/* Slider */}
        <div className="relative">

          {/* Card */}
          <div
            className={`bg-white rounded-2xl overflow-hidden shadow-md transition-opacity duration-300 ${animating ? "opacity-0" : "opacity-100"
              }`}
          >
            <div className="flex flex-col md:flex-row">

              {/* Imagen */}
              <div className="w-full md:w-1/2 h-52 sm:h-64 md:h-80 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Contenido */}
              <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-center gap-3 sm:gap-4 min-h-[300px] sm:min-h-[320px] md:min-h-0">
                <span className={`text-3xl sm:text-4xl ${p.iconColor}`}>{p.icon}</span>
                <h3 className="text-xl sm:text-2xl font-black text-gray-800">{p.title}</h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{p.text}</p>
                <p className="text-xs text-gray-400 font-medium mt-auto">
                  {current + 1} / {projects.length}
                </p>
              </div>

            </div>
          </div>


          {/* Prev button */}
          <button
            onClick={prev}
            aria-label="Proyecto anterior"
            className="absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow transition-all duration-200"
          >
            ‹
          </button>
?
          {/* Next button */}
          <button
            onClick={next}
            aria-label="Siguiente proyecto"
            className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow transition-all duration-200"
          >
            ›
          </button>

        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${i === current ? "bg-red-500 w-6 h-2" : "bg-gray-300 w-2 h-2"
                }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}