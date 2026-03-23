import { useState } from "react";
import presi from "../assets/img/presi.webp";

const presidenta = {
  initials: "JM",
  name: "Jeannette Makenga",
  role: "Presidenta / Fundadora— CEPIN",
  photo: presi,
  description:
    "Fundadora de CEPIN desde 1995, ha liderado durante décadas el desarrollo integral de la infancia wayuu en el estado Zulia, forjando alianzas con organismos nacionales e internacionales.",
};

function PhotoAvatar({ photo, initials, fallbackBg, fallbackText, className = "" }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className={`overflow-hidden flex items-center justify-center ${imgError ? fallbackBg : ""
        } ${className}`}
    >
      {!imgError ? (
        <img
          src={photo}
          alt={`Fundadora de CEPIN: ${initials}`}
          loading="lazy"
          width="400"
          height="500"
          className="w-full h-full object-cover object-top"
          style={{ aspectRatio: "4/5" }}
          onError={() => setImgError(true)}
        />
      ) : (
        <span className={`font-bold ${fallbackText}`}>{initials}</span>
      )}
    </div>
  );
}

export default function StaffSection() {
  return (
    <section id="Staff" className="bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Encabezado */}
        <p className="text-center text-xs font-semibold tracking-widest uppercase text-red-500 mb-2">
          Nuestro equipo
        </p>
        <h2 className="text-center text-4xl font-bold text-gray-900 mb-14">
          Quiénes nos guían
        </h2>

        {/* Label */}
        <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-5">
          Dirección
        </p>

        {/* Card presidenta — layout editorial */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row">

          {/* Foto grande izquierda */}
          <div className="md:w-2/5 w-full h-72 sm:h-80 md:h-auto flex-shrink-0">
            <PhotoAvatar
              photo={presidenta.photo}
              initials={presidenta.initials}
              fallbackBg="bg-pink-50"
              fallbackText="text-red-600 text-5xl"
              className="w-full h-full"
            />
          </div>

          {/* Contenido derecha */}
          <div className="flex-1 p-8 md:p-10 flex flex-col justify-center border-l-4 border-red-500">

            {/* Badge */}
            <span className="inline-block self-start bg-red-50 text-red-600 text-xs font-semibold px-3 py-1 rounded-full mb-5 tracking-wide uppercase">
              Presidenta
            </span>

            {/* Nombre */}
            <h3 className="text-3xl font-bold text-gray-900 mb-1 leading-tight">
              {presidenta.name}
            </h3>

            {/* Cargo */}
            <p className="text-sm font-semibold text-red-400 mb-5 tracking-wide">
              {presidenta.role}
            </p>

            {/* Separador */}
            <div className="w-10 h-0.5 bg-red-300 mb-5" />

            {/* Descripción */}
            <p className="text-sm text-gray-500 leading-relaxed">
              {presidenta.description}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}