import cepin from "../assets/img/cepin.png";

export default function Footer() {
  return (
    <footer className="bg-teal-500 text-gray-400">

      {/* Línea superior verde → naranja */}
      <div className="h-1 w-full bg-gradient-to-r from-[#7AC143] via-[#F97316] to-transparent" />

      <div className="max-w-6xl mx-auto px-8 py-14 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Col 1 - Logo + descripción + redes */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <img className="h-28 w-42 py-2" src={cepin} alt="Logo Cepin" /> 
          </div>

          <p className="text-sm text-gray-200 leading-relaxed">
            Centro de Promoción Integral del Niño. Trabajamos por una infancia plena, segura y con igualdad de oportunidades.
          </p>

          {/* Redes sociales */}
          <div className="flex gap-3 mt-1">
            <a href="https://www.instagram.com/cepinzulia/" className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#7AC143] hover:border-[#7AC143] transition-all duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/share/17CHKngfZa/" className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#7AC143] hover:border-[#7AC143] transition-all duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Col 2 - Navegación */}
        <div>
          <h4 className="text-[#7AC143] font-semibold text-sm mb-5">Navegación</h4>
          <ul className="flex flex-col gap-3">
            {["Inicio", "Quiénes Somos", "Proyectos", "Contacto"].map((item) => (
              <li key={item}>
                
               <a   href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-sm text-gray-200 hover:text-[#7AC143] transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 - Contacto */}
        <div>
          <h4 className="text-[#7AC143] font-semibold text-sm mb-5">Contacto</h4>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#F97316] mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.079 3.713-5.115 3.713-9.077A8 8 0 004 9.25c0 3.963 1.77 6.998 3.714 9.077a19.575 19.575 0 002.683 2.282 16.975 16.975 0 001.143.742zM12 12.25a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
              </svg>
              <span className="text-gray-200">Av 107 del Barrio Etnia Guajira Etapa I, Maracaibo-Edo. Zulia</span>
            </li>
            <li className="flex items-center gap-3 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#7AC143] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
              </svg>
              <span className="text-gray-200">centropromocionintegraldelnino@gmail.com</span>
            </li>
            <li className="flex items-center gap-3 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#7AC143] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd"/>
              </svg>
              <span className="text-gray-200">+58 412 393 89350</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Divider + copyright */}
      <div className="border-t border-[#7AC143]/20">
        <p className="text-center text-xs text-gray-200 py-5">
          © 2024 Fundación CEPIN. Todos los derechos reservados.
        </p>
      </div>

    </footer>
  );
}