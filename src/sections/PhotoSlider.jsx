import { useState, useEffect, useRef } from "react";
import foto1 from "../assets/img/1.webp";
import foto2 from "../assets/img/2.webp";
import foto3 from "../assets/img/26.webp";
import foto4 from "../assets/img/5.webp";
import foto5 from "../assets/img/35.webp";
import foto6 from "../assets/img/45.webp";
import foto7 from "../assets/img/39.webp";
import foto8 from "../assets/img/40.webp";
import foto9 from "../assets/img/52.webp";
import foto10 from "../assets/img/42.webp";
import foto11 from "../assets/img/50.webp";

const photos = [
  {
    url: foto1,
    caption: "HUERTOS FAMILIARES",
  },
    {
    url: foto2,
    caption: "HUERTO ESCOLAR",
  },
    {
    url: foto3,
    caption: "HUERTO",
  },
  {
    url: foto11,
    caption: "NUTRICIÓN",
  },

  {
    url: foto4,
    caption: "HUERTO",
  },  {
    url: foto5,
    caption: "EDUCACIÓN",
  },
    {
    url: foto6,
    caption: "PROTECCIÓN",
  },
    {
    url: foto7,
    caption: "INSTRUCCIÓN",
  },
    {
    url: foto8,
    caption: "CULTURA",
  },
     {
    url: foto9,
    caption: "PSICOLOGÍA",
  },   {
    url: foto10,
    caption: "FORMACIÓN",
  },
  
];

export default function PhotoSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = (index) => {
    if (animating) return;
    setAnimating(true);
    setCurrent(index);
    setTimeout(() => setAnimating(false), 500);
  };

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const prev = () => goTo((current - 1 + photos.length) % photos.length);
  const next = () => goTo((current + 1) % photos.length);

  // Auto-advance only if visible
  useEffect(() => {
    if (!isVisible) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [current, isVisible]);


  return (
    <section id="galeria" ref={sectionRef} className="bg-gray-100 py-16 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <p className="text-xs font-bold uppercase tracking-widest text-red-500 mb-2">
          Galería
        </p>
        <h2 className="text-3xl font-black text-gray-900 mb-8">
          Momentos que inspiran
        </h2>

        {/* Slider */}
        <div className="relative rounded-3xl overflow-hidden shadow-lg">

          {/* Image */}
          <div
            className="w-full h-96 bg-cover bg-center transition-all duration-500"
            style={{
              backgroundImage: `url(${photos[current].url})`,
              opacity: animating ? 0.7 : 1,
            }}
          >
            {/* Gradient overlay */}
            <div className="w-full h-full bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
              <span className="text-white font-semibold text-lg">
                {photos[current].caption}
              </span>
            </div>
          </div>

          {/* Prev button */}
          <button
            onClick={prev}
            aria-label="Foto anterior"
            className="absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow transition-all duration-200"
          >
            ‹
          </button>

          {/* Next button */}
          <button
            onClick={next}
            aria-label="Siguiente foto"
            className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow transition-all duration-200"
          >
            ›
          </button>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-3 mt-5 overflow-x-auto pb-1">
          {photos.map((p, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`flex-shrink-0 w-20 h-16 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                i === current
                  ? "border-red-500 scale-105 shadow-md"
                  : "border-transparent opacity-60 hover:opacity-90"
              }`}
              style={{ aspectRatio: "20 / 16" }}
            >
              <img
                src={p.url}
                alt={p.caption}
                loading="lazy"
                width="80"
                height="64"
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {photos.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                i === current ? "bg-red-500 w-5" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}