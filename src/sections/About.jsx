const cards = [
  {
    icon: "🎯",
    title: "Misión",
    text: "Servir a los niños del sector mediante una formación integral y una alimentación balanceada que los ayuden a crecer sanamente.",
    accent: "bg-red-600",
    iconBg: "bg-red-50",
  },
  {
    icon: "🔭",
    title: "Visión",
    text: "Formar a partir de su cultura el niño de esta comunidad, desarrollando sus talentos a través de la educación integral, recreación y nutrición para que sea un adulto productivo.",
    accent: "bg-teal-500",
    iconBg: "bg-teal-50",
  },
  {
    icon: "⭐",
    title: "Valores",
    text: "Los valores que caracterizan y definen la cultura y marco de actuación de la institución son los siguientes: Respeto, Compromiso, Excelencia, Solidaridad y Responsabilidad.",
    accent: "bg-red-600",
    iconBg: "bg-red-50",
  },
];

export default function About() {
  return (
    <section id="quiénes-somos" className="bg-gray-50 py-16 px-6 scroll-smooth">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-red-500 mb-2">
          Quiénes somos
        </p>
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-12">
          Nuestra identidad
        </h2>
        <p className="text-sm text-muted leading-relaxed mb-16">
          El Centro de Promoción Integral del Niño (CEPIN) es una institución
          fundada en 1995 dedicada a la atención y desarrollo integral de la
          infancia, especialmente de niños y niñas de la etnia wayuu en el
          estado Zulia. Inspirado por la misión de las Hermanas Misioneras de
          Cristo Jesús, el CEPIN promueve educación, nutrición y acompañamiento
          comunitario para mejorar la calidad de vida de las familias. A lo
          largo de los años, la organización ha ampliado su labor mediante
          alianzas con instituciones nacionales e internacionales. Desde 2018,
          en el contexto de la emergencia humanitaria en Venezuela, CEPIN ha
          fortalecido su trabajo humanitario en coordinación con organizaciones
          no gubernamentales, el Sistema de Naciones Unidas y diversos donantes
          internacionales, llevando apoyo y oportunidades a las comunidades más
          vulnerables.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              {/* Top accent bar */}
              <div className={`h-1 w-full ${card.accent}`} />

              <div className="p-8">
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5 ${card.iconBg}`}
                >
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {card.title}
                </h3>

                {/* Text */}
                <p className="text-sm text-gray-500 leading-relaxed">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
