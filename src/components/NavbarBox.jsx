import { useState } from "react";
import { Link } from "react-router-dom";
import cepin from "../assets/img/cepin.png";

export default function NavbarBox() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white relative">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold tracking-tight">
            <img className="h-24 w-38 py-2" src={cepin} alt="Logo Cepin" />
          </span>
        </div>

        {/* Links - Desktop */}
        <div className="hidden items-center gap-6 md:flex">
          <Link to="#inicio" className="text-sm text-slate-500 hover:text-blue-400">
            Inicio
          </Link>
          <a href="#quiénes-somos" className="text-sm text-slate-500 hover:text-blue-400">
            Quienes Somos
          </a>
          <a href="/#proyectos" className="text-sm text-slate-500 hover:text-blue-400">
            Proyecto
          </a>
          <a href="#contacto" className="text-sm text-slate-500 hover:text-blue-400">
            Contacto
          </a>
          <a href="#" className="rounded-xl bg-[#F97316] px-4 py-2 text-sm font-medium hover:bg-orange-400 text-white">
            Donar Ahora
          </a>
        </div>

        {/* Botón hamburguesa - Solo móvil */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`block h-0.5 w-6 bg-slate-700 transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-slate-700 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-slate-700 transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Menú móvil desplegable */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96" : "max-h-0"}`}>
        <div className="flex flex-col gap-4 px-6 py-4 bg-white shadow-md">
          <Link
            to="/"
            className="text-sm text-slate-500 hover:text-blue-400"
            onClick={() => setIsOpen(false)}
          >
            Inicio
          </Link>
          <a href="#about" className="text-sm text-slate-500 hover:text-blue-400" onClick={() => setIsOpen(false)}>
            Quienes Somos
          </a>
          <a href="#services" className="text-sm text-slate-500 hover:text-blue-400" onClick={() => setIsOpen(false)}>
            Proyecto
          </a>
          <a href="#contact" className="text-sm text-slate-500 hover:text-blue-400" onClick={() => setIsOpen(false)}>
            Contacto
          </a>
          <a href="#contact" className="rounded-xl bg-[#F97316] px-4 py-2 text-sm font-medium text-white text-center hover:bg-orange-400" onClick={() => setIsOpen(false)}>
            Donar Ahora
          </a>
        </div>
      </div>
    </header>
  );
}