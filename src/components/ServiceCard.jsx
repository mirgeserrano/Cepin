

// import { useState, useEffect } from "react";

// const projects = [
//   {
//     icon: "👨‍👩‍👧",
//     title: "HUERTOS FAMILIARES",
//     text: "Ayudan a las familias a mejorar su seguridad alimentaria enseñándoles a cultivar sus propios alimentos, aplicar buenas prácticas agrícolas y recibir educación nutricional. Las capacitaciones son teóricas y prácticas, y promueven la participación de toda la familia.",
//     image: "/src/assets/img/7.jpg",
//     iconColor: "text-blue-500",
//   },
//   {
//     icon: "🌈",
//     title: "HUERTO ESCOLAR",
//     text: "Los niños aprenden sobre agricultura, nutrición y cuidado del ambiente. En este espacio investigan sobre cultivos, reciclan residuos del comedor escolar para hacer abono y elaboran ecobloques con materiales reciclados.",
//     image: "/src/assets/img/9.jpg",
//     iconColor: "text-pink-500",
//   },
//   {
//     icon: "🍽️",
//     title: "NUTRICIÓN",
//     text: "Atiende a niños de 0 a 10 años y a mujeres embarazadas o lactantes. Ofrecen evaluaciones nutricionales, suplementos alimenticios y vitaminas en casos de desnutrición, junto con seguimiento comunitario y charlas sobre nutrición y lactancia materna.",
//     image: "/src/assets/img/12.jpg",
//     iconColor: "text-orange-400",
//   },
// ];

// export default function Services() {
//   const [current, setCurrent] = useState(0);
//   const [animating, setAnimating] = useState(false);

//   const goTo = (index) => {
//     if (animating) return;
//     setAnimating(true);
//     setTimeout(() => {
//       setCurrent(index);
//       setAnimating(false);
//     }, 300);
//   };

//   const prev = () => goTo((current - 1 + projects.length) % projects.length);
//   const next = () => goTo((current + 1) % projects.length);

//   // Autoplay cada 4 segundos
//   useEffect(() => {
//     const timer = setInterval(() => {
//       goTo((current + 1) % projects.length);
//     }, 4000);
//     return () => clearInterval(timer);
//   }, [current]);

//   const p = projects[current];

//   return (
//     <section id="services" className="bg-gray-100 py-16 px-6">
//       <div className="max-w-6xl mx-auto">

//         {/* Header */}
//         <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
//           <div>
//             <p className="text-xs font-bold uppercase tracking-widest text-red-500 mb-2">
//               Nuestra Labor
//             </p>
//             <h2 className="text-4xl font-black text-gray-900 leading-tight">
//               Proyectos que<br />transforman vidas
//             </h2>
//           </div>
//           <p className="text-sm text-gray-500 max-w-xs md:text-right leading-relaxed">
//             Conoce las áreas donde generamos un impacto real y directo en la comunidad.
//           </p>
//         </div>

//         {/* Slider */}
//         <div className="relative">
//           {/* Card principal */}
//           <div
//             className={`bg-white rounded-2xl overflow-hidden shadow-md transition-opacity duration-300 ${
//               animating ? "opacity-0" : "opacity-100"
//             }`}
//           >
//             <div className="flex flex-col md:flex-row">
//               {/* Imagen */}
//               <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
//                 <img
//                   src={p.image}
//                   alt={p.title}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* Contenido */}
//               <div className="md:w-1/2 p-8 flex flex-col justify-center gap-4">
//                 <span className={`text-4xl ${p.iconColor}`}>{p.icon}</span>
//                 <h3 className="text-2xl font-black text-gray-800">{p.title}</h3>
//                 <p className="text-sm text-gray-500 leading-relaxed">{p.text}</p>

//                 {/* Indicador de slide */}
//                 <p className="text-xs text-gray-400 font-medium">
//                   {current + 1} / {projects.length}
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Botones anterior / siguiente */}
//           <button
//             onClick={prev}
//             className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-50 transition z-10"
//           >
//             ‹
//           </button>
//           <button
//             onClick={next}
//             className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-50 transition z-10"
//           >
//             ›
//           </button>
//         </div>

//         {/* Dots */}
//         <div className="flex justify-center gap-2 mt-6">
//           {projects.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => goTo(i)}
//               className={`rounded-full transition-all duration-300 ${
//                 i === current
//                   ? "bg-red-500 w-6 h-2"
//                   : "bg-gray-300 w-2 h-2"
//               }`}
//             />
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }


// import { useState, useEffect } from "react";

// const projects = [
//   {
//     icon: "👨‍👩‍👧",
//     title: "HUERTOS FAMILIARES",
//     text: "Ayudan a las familias a mejorar su seguridad alimentaria enseñándoles a cultivar sus propios alimentos, aplicar buenas prácticas agrícolas y recibir educación nutricional. Las capacitaciones son teóricas y prácticas, y promueven la participación de toda la familia.",
//     image: "/src/assets/img/7.jpg",
//     iconColor: "text-blue-500",
//   },
//   {
//     icon: "🌈",
//     title: "HUERTO ESCOLAR",
//     text: "Los niños aprenden sobre agricultura, nutrición y cuidado del ambiente. En este espacio investigan sobre cultivos, reciclan residuos del comedor escolar para hacer abono y elaboran ecobloques con materiales reciclados.",
//     image: "/src/assets/img/9.jpg",
//     iconColor: "text-pink-500",
//   },
//   {
//     icon: "🍽️",
//     title: "NUTRICIÓN",
//     text: "Atiende a niños de 0 a 10 años y a mujeres embarazadas o lactantes. Ofrecen evaluaciones nutricionales, suplementos alimenticios y vitaminas en casos de desnutrición, junto con seguimiento comunitario y charlas sobre nutrición y lactancia materna.",
//     image: "/src/assets/img/12.jpg",
//     iconColor: "text-orange-400",
//   },
//   // Agrega más proyectos aquí para que el slider tenga sentido
//   {
//     icon: "🌱",
//     title: "AGRICULTURA SOSTENIBLE",
//     text: "El proyecto de protección ofrece servicios a la comunidad enfocados en el bienestar y la seguridad de las personas. Incluye apoyo psicosocial individual y grupal, atención a niños, niñas, adolescentes y sus cuidadores, y servicios de protección con enfoque de edad, género y diversidad, como gestión de casos y asesoría legal. Además, realiza capacitaciones y actividades de sensibilización comunitaria para la protección de la niñez y la prevención de la violencia sexual.",
//     image: "/src/assets/img/7.jpg",
//     iconColor: "text-green-500",
//   },
//   {
//     icon: "💧",
//     title: "AGUA Y SANEAMIENTO",
//     text: "Promovemos el acceso al agua potable y prácticas de higiene en comunidades rurales, reduciendo enfermedades y mejorando la calidad de vida de niños y familias.",
//     image: "/src/assets/img/9.jpg",
//     iconColor: "text-cyan-500",
//   },
// ];

// export default function Services() {
//   const [current, setCurrent] = useState(0);
//   const [animating, setAnimating] = useState(false);
//   const visible = 3;

//   const total = projects.length;

//   const goTo = (index) => {
//     if (animating) return;
//     setAnimating(true);
//     setTimeout(() => {
//       setCurrent(index);
//       setAnimating(false);
//     }, 400);
//   };

//   const prev = () => goTo((current - 1 + total) % total);
//   const next = () => goTo((current + 1) % total);

//   // Autoplay cada 4 segundos
//   useEffect(() => {
//     const timer = setInterval(() => next(), 4000);
//     return () => clearInterval(timer);
//   }, [current]);

//   // Obtener las 3 cards visibles en orden circular
//   const visibleProjects = Array.from({ length: visible }, (_, i) =>
//     projects[(current + i) % total]
//   );

//   return (
//     <section id="services" className="bg-gray-100 py-16 px-6">
//       <div className="max-w-6xl mx-auto">

//         {/* Header */}
//         <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
//           <div>
//             <p className="text-xs font-bold uppercase tracking-widest text-red-500 mb-2">
//               Nuestra Labor
//             </p>
//             <h2 className="text-4xl font-black text-gray-900 leading-tight">
//               Proyectos que<br />transforman vidas
//             </h2>
//           </div>
//           <p className="text-sm text-gray-500 max-w-xs md:text-right leading-relaxed">
//             Conoce las áreas donde generamos un impacto real y directo en la comunidad.
//           </p>
//         </div>

//         {/* Slider con 3 cards */}
//         <div className="relative">

//           {/* Cards */}
//           <div
//             className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 transition-opacity duration-400 ${
//               animating ? "opacity-0" : "opacity-100"
//             }`}
//           >
//             {visibleProjects.map((p, i) => (
//               <div
//                 key={i}
//                 className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
//               >
//                 {/* Imagen */}
//                 <div className="h-44 overflow-hidden">
//                   <img
//                     src={p.image}
//                     alt={p.title}
//                     className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
//                   />
//                 </div>

//                 {/* Contenido */}
//                 <div className="p-5 flex flex-col gap-2">
//                   <span className={`text-xl ${p.iconColor}`}>{p.icon}</span>
//                   <h3 className="text-base font-bold text-gray-800">{p.title}</h3>
//                   <p className="text-xs text-gray-500 leading-relaxed">{p.text}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Botón anterior */}
//           <button
//             onClick={prev}
//             className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center text-xl hover:bg-gray-50 transition z-10"
//           >
//             ‹
//           </button>

//           {/* Botón siguiente */}
//           <button
//             onClick={next}
//             className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center text-xl hover:bg-gray-50 transition z-10"
//           >
//             ›
//           </button>
//         </div>

//         {/* Dots */}
//         <div className="flex justify-center gap-2 mt-6">
//           {projects.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => goTo(i)}
//               className={`rounded-full transition-all duration-300 ${
//                 i === current ? "bg-red-500 w-6 h-2" : "bg-gray-300 w-2 h-2"
//               }`}
//             />
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

import { useState, useEffect } from "react";

const projects = [
  {
    icon: "👨‍👩‍👧",
    title: "HUERTOS FAMILIARES",
    text: "Ayudan a las familias a mejorar su seguridad alimentaria enseñándoles a cultivar sus propios alimentos, aplicar buenas prácticas agrícolas y recibir educación nutricional. Las capacitaciones son teóricas y prácticas, y promueven la participación de toda la familia.",
    image: "/src/assets/img/7.jpg",
    iconColor: "text-blue-500",
  },
  {
    icon: "🌈",
    title: "HUERTO ESCOLAR",
    text: "Los niños aprenden sobre agricultura, nutrición y cuidado del ambiente. En este espacio investigan sobre cultivos, reciclan residuos del comedor escolar para hacer abono y elaboran ecobloques con materiales reciclados.",
    image: "/src/assets/img/9.jpg",
    iconColor: "text-pink-500",
  },
  {
    icon: "🍽️",
    title: "NUTRICIÓN",
    text: "Atiende a niños de 0 a 10 años y a mujeres embarazadas o lactantes. Ofrecen evaluaciones nutricionales, suplementos alimenticios y vitaminas en casos de desnutrición, junto con seguimiento comunitario y charlas sobre nutrición y lactancia materna.",
    image: "/src/assets/img/nutricion.jpeg",
    iconColor: "text-orange-400",
  },
  {
    icon: "🚸",
    title: "PROTECCIÓN:",
    text: "El proyecto de Protección brinda apoyo psicosocial individual y grupal a niños, niñas, adolescentes y cuidadores, además de gestión de casos y asesoría legal. También realiza capacitaciones comunitarias sobre protección infantil y prevención de la violencia sexual.",
    image: "/src/assets/img/proteccion.jpeg",
    iconColor: "text-green-500",
  },
  {
    icon: "💧",
    title: "WASH ",
    text: "El proyecto WASH brinda capacitaciones comunitarias sobre higiene de manos, tratamiento y almacenamiento seguro del agua, higiene de alimentos, salud menstrual, saneamiento y manejo de residuos, además de promover higiene personal y cuidado del ambiente.",
    image: "/src/assets/img/agua.jpeg",
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

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     goTo((current + 1) % projects.length);
  //   }, 4000);
  //   return () => clearInterval(timer);
  // }, [current]);

  const p = projects[current];

  return (
    <section id="proyectos"  className="bg-gray-100 py-12 px-6 sm:px-6">
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
        <div className="relative px-6 sm:px-10">

          {/* Card */}
          <div
            className={`bg-white rounded-2xl overflow-hidden shadow-md transition-opacity duration-300 ${
              animating ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="flex flex-col md:flex-row">

              {/* Imagen */}
              <div className="w-full md:w-1/2 h-52 sm:h-64 md:h-80 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Contenido */}
              <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-center gap-3 sm:gap-4">
                <span className={`text-3xl sm:text-4xl ${p.iconColor}`}>{p.icon}</span>
                <h3 className="text-xl sm:text-2xl font-black text-gray-800">{p.title}</h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{p.text}</p>
                <p className="text-xs text-gray-400 font-medium">
                  {current + 1} / {projects.length}
                </p>
              </div>

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

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current ? "bg-red-500 w-6 h-2" : "bg-gray-300 w-2 h-2"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}