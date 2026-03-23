import cepin from "../assets/img/cepin.webp";

export default function Footer() {
  return (
    <footer className="bg-[#DCEBFD] text-gray-400">

      {/* Línea superior verde → naranja */}
      {/* <div className="h-1 w-full bg-gradient-to-r from-[#7AC143] via-[#F97316] to-transparent" /> */}

      <div className="max-w-6xl mx-auto px-8 py-14 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Col 1 - Logo + descripción + redes */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <img className="h-28 w-42 py-2" src={cepin} alt="Logo Cepin" />
          </div>

          <p className="text-sm text-gray-600 leading-relaxed">
            Centro de Promoción Integral del Niño. Trabajamos por una infancia plena, segura y con igualdad de oportunidades.
          </p>

          {/* Redes sociales */}
          <div className="flex gap-3 mt-1">
            <a href="https://www.instagram.com/cepinzulia/" 
               aria-label="Seguir a Fundación CEPIN en Instagram"
               className="w-9 h-9 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-[#7AC143] hover:border-[#7AC143] transition-all duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="https://www.facebook.com/share/17CHKngfZa/" 
               aria-label="Seguir a Fundación CEPIN en Facebook"
               className="w-9 h-9 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-[#7AC143] hover:border-[#7AC143] transition-all duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
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

                <a href={`#${item.toLowerCase().replace(" ", "-")}`}
                   aria-label={`Ir a la sección de ${item}`}
                   className="text-sm text-gray-600 hover:text-[#7AC143] transition-colors duration-200"
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
                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.079 3.713-5.115 3.713-9.077A8 8 0 004 9.25c0 3.963 1.77 6.998 3.714 9.077a19.575 19.575 0 002.683 2.282 16.975 16.975 0 001.143.742zM12 12.25a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-600">Av 107 del Barrio Etnia Guajira Etapa I, Maracaibo-Edo. Zulia</span>
            </li>
            <li className="flex items-center gap-3 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#7AC143] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              <span className="text-gray-600">centropromocionintegraldelnino@gmail.com</span>
            </li>
            <li className="flex items-center gap-3 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#7AC143] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-600">+58 412 393 89350</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Divider + copyright */}
      <div className="border-t border-[#7AC143]/20">
        <p className="text-center text-xs text-gray-600 py-5">
          © 2026 Fundación CEPIN. Todos los derechos reservados.
        </p>
      </div>

    </footer>
  );
}

// import { useState } from "react";

// const teammates = [
//   { id: 1, name: "Carlos Méndez", role: "IT Admin", status: "online", avatar: "CM", tickets: 12 },
//   { id: 2, name: "Ana Torres", role: "Soporte L1", status: "online", avatar: "AT", tickets: 8 },
//   { id: 3, name: "Luis Vega", role: "Soporte L2", status: "away", avatar: "LV", tickets: 5 },
//   { id: 4, name: "María Ruiz", role: "Redes", status: "offline", avatar: "MR", tickets: 3 },
//   { id: 5, name: "Pedro Sanz", role: "Seguridad", status: "online", avatar: "PS", tickets: 7 },
// ];

// const tasks = [
//   { id: 1, title: "Resetear credenciales usuario #2041", priority: "alta", status: "pendiente", assignee: "AT", due: "Hoy" },
//   { id: 2, title: "Revisar backup servidor principal", priority: "alta", status: "en progreso", assignee: "CM", due: "Hoy" },
//   { id: 3, title: "Instalar licencias Office nuevos empleados", priority: "media", status: "pendiente", assignee: "LV", due: "Mañana" },
//   { id: 4, title: "Documentar proceso VPN", priority: "baja", status: "en progreso", assignee: "PS", due: "Viernes" },
//   { id: 5, title: "Auditoría de accesos Q1", priority: "media", status: "completado", assignee: "MR", due: "Ayer" },
//   { id: 6, title: "Actualizar firewall reglas", priority: "alta", status: "pendiente", assignee: "PS", due: "Mañana" },
// ];

// const wiki = [
//   { id: 1, title: "Guía de onboarding IT", category: "Procesos", updated: "hace 2 días", icon: "📋" },
//   { id: 2, title: "Configuración VPN corporativa", category: "Redes", updated: "hace 1 semana", icon: "🔒" },
//   { id: 3, title: "Protocolo de incidencias críticas", category: "Soporte", updated: "hace 3 días", icon: "🚨" },
//   { id: 4, title: "Inventario de equipos", category: "Hardware", updated: "hace 5 días", icon: "💻" },
//   { id: 5, title: "Política de contraseñas", category: "Seguridad", updated: "hace 2 semanas", icon: "🔑" },
//   { id: 6, title: "Accesos y permisos por rol", category: "Seguridad", updated: "hace 1 día", icon: "👤" },
// ];

// const statusColor = { online: "#22c55e", away: "#f59e0b", offline: "#d1d5db" };
// const priorityStyle = {
//   alta: { bg: "#fef2f2", color: "#dc2626", label: "Alta" },
//   media: { bg: "#fffbeb", color: "#d97706", label: "Media" },
//   baja: { bg: "#f0fdf4", color: "#16a34a", label: "Baja" },
// };
// const taskStatusStyle = {
//   pendiente: { bg: "#f1f5f9", color: "#64748b" },
//   "en progreso": { bg: "#eff6ff", color: "#2563eb" },
//   completado: { bg: "#f0fdf4", color: "#16a34a" },
// };

// export default function Footer() {
//   const [activeTab, setActiveTab] = useState("tareas");
//   const [taskFilter, setTaskFilter] = useState("todos");
//   const [searchWiki, setSearchWiki] = useState("");

//   const filteredTasks = tasks.filter(t =>
//     taskFilter === "todos" ? true : t.status === taskFilter
//   );

//   const filteredWiki = wiki.filter(w =>
//     w.title.toLowerCase().includes(searchWiki.toLowerCase()) ||
//     w.category.toLowerCase().includes(searchWiki.toLowerCase())
//   );

//   const online = teammates.filter(t => t.status === "online").length;
//   const pending = tasks.filter(t => t.status === "pendiente").length;
//   const inProgress = tasks.filter(t => t.status === "en progreso").length;

//   return (
//     <div style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif", background: "#f8fafc", minHeight: "100vh", color: "#0f172a" }}>
//       {/* Topbar */}
//       <div style={{ background: "#fff", borderBottom: "1px solid #e2e8f0", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 60, position: "sticky", top: 0, zIndex: 100 }}>
//         <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
//           <div style={{ width: 32, height: 32, background: "#0f172a", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
//             <span style={{ color: "#fff", fontSize: 14, fontWeight: 700 }}>IT</span>
//           </div>
//           <span style={{ fontWeight: 700, fontSize: 16, letterSpacing: "-0.3px" }}>Portal IT</span>
//         </div>
//         <nav style={{ display: "flex", gap: 4 }}>
//           {[["tareas", "Tareas"], ["equipo", "Equipo"], ["wiki", "Wiki"]].map(([key, label]) => (
//             <button key={key} onClick={() => setActiveTab(key)} style={{
//               padding: "6px 16px", borderRadius: 8, border: "none", cursor: "pointer", fontSize: 14, fontWeight: 500,
//               background: activeTab === key ? "#0f172a" : "transparent",
//               color: activeTab === key ? "#fff" : "#64748b",
//               transition: "all 0.15s"
//             }}>{label}</button>
//           ))}
//         </nav>
//         <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
//           <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e" }} />
//           <span style={{ fontSize: 13, color: "#64748b" }}>{online} en línea</span>
//         </div>
//       </div>

//       <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 24px" }}>

//         {/* Stats row */}
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 32 }}>
//           {[
//             { label: "Tickets pendientes", value: pending, color: "#dc2626", bg: "#fef2f2" },
//             { label: "En progreso", value: inProgress, color: "#2563eb", bg: "#eff6ff" },
//             { label: "Equipo activo", value: `${online}/${teammates.length}`, color: "#16a34a", bg: "#f0fdf4" },
//           ].map((s, i) => (
//             <div key={i} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//               <div>
//                 <div style={{ fontSize: 13, color: "#64748b", marginBottom: 4 }}>{s.label}</div>
//                 <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: "-1px" }}>{s.value}</div>
//               </div>
//               <div style={{ width: 48, height: 48, borderRadius: 12, background: s.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
//                 <span style={{ fontSize: 22, color: s.color, fontWeight: 800 }}>{s.value}</span>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* TAREAS */}
//         {activeTab === "tareas" && (
//           <div>
//             <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
//               <h2 style={{ fontSize: 20, fontWeight: 700, margin: 0, letterSpacing: "-0.5px" }}>Gestión de Tareas</h2>
//               <div style={{ display: "flex", gap: 6 }}>
//                 {["todos", "pendiente", "en progreso", "completado"].map(f => (
//                   <button key={f} onClick={() => setTaskFilter(f)} style={{
//                     padding: "5px 14px", borderRadius: 8, border: "1px solid", fontSize: 13, cursor: "pointer",
//                     borderColor: taskFilter === f ? "#0f172a" : "#e2e8f0",
//                     background: taskFilter === f ? "#0f172a" : "#fff",
//                     color: taskFilter === f ? "#fff" : "#64748b",
//                     textTransform: "capitalize"
//                   }}>{f}</button>
//                 ))}
//               </div>
//             </div>
//             <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, overflow: "hidden" }}>
//               {filteredTasks.map((task, i) => (
//                 <div key={task.id} style={{
//                   display: "grid", gridTemplateColumns: "1fr auto auto auto auto",
//                   gap: 16, padding: "16px 24px", alignItems: "center",
//                   borderBottom: i < filteredTasks.length - 1 ? "1px solid #f1f5f9" : "none",
//                   transition: "background 0.1s"
//                 }}
//                   onMouseEnter={e => e.currentTarget.style.background = "#fafafa"}
//                   onMouseLeave={e => e.currentTarget.style.background = "transparent"}
//                 >
//                   <div style={{ fontSize: 14, fontWeight: 500 }}>{task.title}</div>
//                   <span style={{ padding: "3px 10px", borderRadius: 6, fontSize: 12, fontWeight: 600, background: priorityStyle[task.priority].bg, color: priorityStyle[task.priority].color, whiteSpace: "nowrap" }}>
//                     {priorityStyle[task.priority].label}
//                   </span>
//                   <span style={{ padding: "3px 10px", borderRadius: 6, fontSize: 12, background: taskStatusStyle[task.status].bg, color: taskStatusStyle[task.status].color, whiteSpace: "nowrap", textTransform: "capitalize" }}>
//                     {task.status}
//                   </span>
//                   <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#0f172a", display: "flex", alignItems: "center", justifyContent: "center" }}>
//                     <span style={{ color: "#fff", fontSize: 11, fontWeight: 700 }}>{task.assignee}</span>
//                   </div>
//                   <span style={{ fontSize: 12, color: "#94a3b8", whiteSpace: "nowrap" }}>{task.due}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* EQUIPO */}
//         {activeTab === "equipo" && (
//           <div>
//             <h2 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 20px", letterSpacing: "-0.5px" }}>Directorio del Equipo</h2>
//             <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 16 }}>
//               {teammates.map(member => (
//                 <div key={member.id} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, padding: 24, textAlign: "center", transition: "box-shadow 0.15s", cursor: "default" }}
//                   onMouseEnter={e => e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.07)"}
//                   onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}
//                 >
//                   <div style={{ position: "relative", display: "inline-block", marginBottom: 12 }}>
//                     <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#0f172a", display: "flex", alignItems: "center", justifyContent: "center" }}>
//                       <span style={{ color: "#fff", fontWeight: 700, fontSize: 16 }}>{member.avatar}</span>
//                     </div>
//                     <div style={{ position: "absolute", bottom: 2, right: 2, width: 12, height: 12, borderRadius: "50%", background: statusColor[member.status], border: "2px solid #fff" }} />
//                   </div>
//                   <div style={{ fontWeight: 700, fontSize: 15 }}>{member.name}</div>
//                   <div style={{ fontSize: 12, color: "#64748b", marginTop: 2, marginBottom: 12 }}>{member.role}</div>
//                   <div style={{ background: "#f8fafc", borderRadius: 8, padding: "8px 0" }}>
//                     <span style={{ fontSize: 20, fontWeight: 700 }}>{member.tickets}</span>
//                     <div style={{ fontSize: 11, color: "#94a3b8" }}>tickets activos</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* WIKI */}
//         {activeTab === "wiki" && (
//           <div>
//             <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
//               <h2 style={{ fontSize: 20, fontWeight: 700, margin: 0, letterSpacing: "-0.5px" }}>Wiki IT</h2>
//               <input
//                 placeholder="Buscar documentos..."
//                 value={searchWiki}
//                 onChange={e => setSearchWiki(e.target.value)}
//                 style={{ padding: "8px 16px", borderRadius: 10, border: "1px solid #e2e8f0", fontSize: 14, outline: "none", width: 220, background: "#fff" }}
//               />
//             </div>
//             <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 14 }}>
//               {filteredWiki.map(doc => (
//                 <div key={doc.id} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, padding: "20px 22px", cursor: "pointer", transition: "all 0.15s" }}
//                   onMouseEnter={e => { e.currentTarget.style.borderColor = "#0f172a"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.06)"; }}
//                   onMouseLeave={e => { e.currentTarget.style.borderColor = "#e2e8f0"; e.currentTarget.style.boxShadow = "none"; }}
//                 >
//                   <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
//                     <span style={{ fontSize: 28 }}>{doc.icon}</span>
//                     <div style={{ flex: 1 }}>
//                       <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 4 }}>{doc.title}</div>
//                       <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
//                         <span style={{ fontSize: 11, background: "#f1f5f9", color: "#475569", padding: "2px 8px", borderRadius: 6, fontWeight: 500 }}>{doc.category}</span>
//                         <span style={{ fontSize: 11, color: "#94a3b8" }}>Actualizado {doc.updated}</span>
//                       </div>
//                     </div>
//                     <span style={{ fontSize: 18, color: "#cbd5e1" }}>→</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }