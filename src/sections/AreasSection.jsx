import { useState } from "react";
import nutri from "../assets/img/Nutri.webp";
import adm from "../assets/img/Administración.webp";
import cocina from "../assets/img/cocina.webp";
import psi from "../assets/img/Psicología-protección.webp";
import edu from "../assets/img/Educación.webp";
import promo from "../assets/img/PromotorComunitario.webp";

const areas = [

  {
    name: "Área de Nutrición",
    photo: nutri,
    border: "border-orange-500",
    bg: "bg-orange-500",
    fallbackBg: "bg-orange-50",
    fallbackIcon: "🥗",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    activities: [
      "Evaluación y control del estado nutricional",
      "Distribución de suplementos alimentarios",
      "Educación en hábitos alimentarios saludables",
      "Atención a niños con desnutrición aguda",
      "Coordinación con organismos de salud locales",
    ],
  },
  {
    name: "Área de Administración",
    photo: adm,
    border: "border-pink-500",
    bg: "bg-pink-500",
    fallbackBg: "bg-pink-50",
    fallbackIcon: "📋",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    activities: [
      "Gestión de recursos financieros y contables",
      "Coordinación de alianzas y convenios",
      "Manejo de inventario y logística institucional",
      "Elaboración de informes para donantes",
      "Planificación estratégica y operativa",
    ],
  },
  {
    name: "Área de Cocina",
    photo: cocina,
    border: "border-red-500",
    bg: "bg-red-500",
    fallbackBg: "bg-red-50",
    fallbackIcon: "🍽️",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    activities: [
      "Preparación de raciones alimentarias diarias",
      "Planificación de menús balanceados",
      "Control de higiene y seguridad alimentaria",
      "Gestión de insumos y provisiones",
      "Atención a niños con dietas especiales",
    ],
  },
  {
    name: "Psicología y Protección",
    photo: psi,
    border: "border-violet-500",
    bg: "bg-violet-500",
    fallbackBg: "bg-violet-50",
    fallbackIcon: "🤝",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    activities: [
      "Atención psicológica individual y grupal",
      "Detección y manejo de casos de vulneración",
      "Talleres de habilidades socioemocionales",
      "Acompañamiento a familias en situación de riesgo",
      "Coordinación con entes de protección infantil",
    ],
  },
  {
    name: "Educación",
    photo: edu,
    border: "border-teal-500",
    bg: "bg-teal-500",
    fallbackBg: "bg-teal-50",
    fallbackIcon: "📚",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    activities: [
      "Clases de educación inicial y primaria",
      "Refuerzo escolar y apoyo pedagógico",
      "Talleres de lectura, escritura y matemáticas",
      "Actividades recreativas y culturales",
      "Formación en valores e identidad cultural wayuu",
    ],
  },
  {
    name: "Promotor Comunitario",
    photo: promo,
    border: "border-yellow-500",
    bg: "bg-yellow-500",
    fallbackBg: "bg-yellow-50",
    fallbackIcon: "🏘️",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    activities: [
      "Visitas domiciliarias a familias vulnerables",
      "Seguimiento nutricional en la comunidad",
      "Talleres de formación para padres y cuidadores",
      "Enlace entre familias y servicios institucionales",
      "Registro y documentación de casos comunitarios",
    ],
  },
];

function Modal({ area, onClose }) {
  const [setImgError] = useState(false);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Foto en la modal */}
        <div className="relative w-full h-56 overflow-hidden rounded-t-2xl">
          <img
            src={area.photo}
            alt={area.name}
            loading="lazy"
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
          />


          {/* Botón cerrar */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 bg-white/90 hover:bg-white text-gray-700 rounded-full w-8 h-8 flex items-center justify-center shadow transition cursor-pointer"
          >
            ✕
          </button>
          {/* Gradiente sobre la foto */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
        </div>

        {/* Contenido */}
        <div className="px-6 pb-6">
          {/* Título con borde de color */}
          <div className={`border-l-4 ${area.border} pl-3 mb-4`}>
            <h3 className="text-xl font-bold text-gray-900">{area.name}</h3>
          </div>

          {/* Descripción */}
          <p className="text-sm text-gray-500 leading-relaxed mb-5">
            {area.description}
          </p>

          {/* Actividades */}
          <h4 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-3">
            Actividades
          </h4>
          <ul className="space-y-2">
            {area.activities.map((activity, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600 ">
                <span className={`mt-1 w-2 h-2 rounded-full ${area.bg} flex-shrink-0`} />
                {activity}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function AreaCard({ area, onClick }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-2xl shadow-sm border border-gray-200 border-t-4 ${area.border} overflow-hidden group cursor-pointer hover:shadow-md transition-shadow duration-300`}
    >
      {/* Foto */}
      <div className="w-full h-44 overflow-hidden">
        {!imgError ? (
          <img
            src={area.photo}
            alt={area.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className={`w-full h-full ${area.fallbackBg} flex items-center justify-center text-5xl`}>
            {area.fallbackIcon}
          </div>
        )}
      </div>

      {/* Nombre + hint */}
      <div className="p-4 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-800 leading-snug">
          {area.name}
        </h3>
        <span className="text-gray-500 text-lg">→</span>
      </div>
    </div>
  );
}

export default function AreasSection() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="Areas" className="bg-gray-100 py-16 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Encabezado */}
        <p className="text-center text-xs font-semibold tracking-widest uppercase text-red-500 mb-2">
          Lo que hacemos
        </p>
        <h2 className="text-center text-4xl font-bold text-gray-900 mb-4">
          Nuestros espacios de trabajo
        </h2>

        <p className="text-center text-gray-600 text-sm max-w-xl mx-auto mb-14">
          En CEPIN contamos con personas capacitadas en diferentes áreas,
          brindando servicio de calidad y enmarcado en valores para nuestra
          comunidad. Nuestro talento humano se distribuyen en las siguientes áreas:
        </p>


        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {areas.map((area) => (
            <AreaCard
              key={area.name}
              area={area}
              onClick={() => setSelected(area)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <Modal area={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}