import { useState, useEffect } from "react";


const photos = [
  {
    url: "/src/assets/img/2.jpg",
    caption: "Talleres de Arte",
  },
    {
    url: "/src/assets/img/3.jpg",
    caption: "Comedor Infantil",
  },
    {
    url: "/src/assets/img/26.jpg",
    caption: "Deporte Social",
  },
  {
    url: "/src/assets/img/1.jpg",
    caption: "Apoyo Escolar",
  },

  {
    url: "/src/assets/img/5.jpg",
    caption: "Voluntariado",
  },  {
    url: "/src/assets/img/35.jpeg",
    caption: "Voluntariado",
  },
    {
    url: "/src/assets/img/45.jpeg",
    caption: "Voluntariado",
  },
    {
    url: "/src/assets/img/39.jpeg",
    caption: "Voluntariado",
  },
    {
    url: "/src/assets/img/40.jpeg",
    caption: "Voluntariado",
  },
     {
    url: "/src/assets/img/52.jpeg",
    caption: "Voluntariado",
  },   {
    url: "/src/assets/img/42.jpeg",
    caption: "Voluntariado",
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

  const prev = () => goTo((current - 1 + photos.length) % photos.length);
  const next = () => goTo((current + 1) % photos.length);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [current]);


  


  return (
    <section className="bg-gray-50 py-16 px-6">
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
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow transition-all duration-200"
          >
            ‹
          </button>

          {/* Next button */}
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow transition-all duration-200"
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
            >
              <img
                src={p.url}
                alt={p.caption}
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