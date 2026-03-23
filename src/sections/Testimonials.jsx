export default function Testimonials() {
  return (
    <section id="contacto" className="bg-gray-50 py-16 px-6 scroll-mt-24">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Card Donante - Azul */}
        <div className="bg-blue-500 rounded-3xl p-10 flex flex-col gap-6">
          <div>
            <h3 className="text-2xl font-black text-white leading-snug mb-3">
              ¿Quieres ser motor de cambio?
            </h3>
            <p className="text-sm text-blue-100 leading-relaxed">
              Tu donación se traduce directamente en materiales educativos, platos de comida y un futuro digno para cientos de niños.
            </p>
          </div>
          <a href="https://wa.me/584123938935?text=Hola,+quiero+ser+Donate+de+la+fundación+CEPIN+🩷" 
             aria-label="Contactar por WhatsApp para ser donante"
             className="self-start flex items-center gap-2 bg-white text-blue-600 font-semibold text-sm px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors duration-200">
            <span>❤️</span> Ser Donante
          </a>
        </div>

        {/* Card Voluntario - Verde */}
        <div className="bg-green-400 rounded-3xl p-10 flex flex-col gap-6">
          <div>
            <h3 className="text-2xl font-black text-white leading-snug mb-3">
              Tu tiempo es el mejor regalo
            </h3>
            <p className="text-sm text-green-50 leading-relaxed">
              Únete a nuestro equipo de voluntarios y vive la experiencia de transformar realidades con tus propias manos y corazón.
            </p>
          </div>
          <a href="https://wa.me/584123938935?text=Hola,+quiero+ser+Voluntario+de+la+fundación+CEPIN+🤝" 
             aria-label="Contactar por WhatsApp para ser voluntario"
             className="self-start flex items-center gap-2 bg-white text-green-600 font-semibold text-sm px-6 py-3 rounded-xl hover:bg-green-50 transition-colors duration-200">
            <span>🤝</span> Ser Voluntario
          </a>
        </div>

      </div>
    </section>
  );
}