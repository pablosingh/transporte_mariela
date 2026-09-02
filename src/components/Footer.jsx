import { Instagram, Phone, Mail, MapPin } from "lucide-react";
import logo from "../assets/logo.jpeg";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="Mariela Transporte" className="h-10 w-auto rounded-lg object-cover" />
            <div>
              <h3 className="text-lg font-extrabold">TRANSPORTES EDGARDO</h3>
              <p className="text-[8px] tracking-[0.2em] text-[#60a5fa]">
                TRANSPORTE DE CARGAS
              </p>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-slate-400">
            Más de 15 años brindando soluciones logísticas
            confiables y eficientes en todo el país.
          </p>
          <div className="mt-6 flex gap-4">
            <a href="https://www.instagram.com/transporteedgardoaguirre" target="_blank" rel="noreferrer">
              <Instagram size={18} className="cursor-pointer text-slate-400 hover:text-white transition" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-sm tracking-wide">ENLACES</h3>
          <div className="mt-5 flex flex-col gap-3 text-sm text-slate-400">
            <a href="#inicio" className="hover:text-white transition">Inicio</a>
            <a href="#servicios" className="hover:text-white transition">Servicios</a>
            <a href="#flota" className="hover:text-white transition">Flota</a>
            <a href="#nosotros" className="hover:text-white transition">Nosotros</a>
            <a href="#contacto" className="hover:text-white transition">Contacto</a>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-sm tracking-wide">SERVICIOS</h3>
          <div className="mt-5 flex flex-col gap-3 text-sm text-slate-400">
            <span>Chasis</span>
            <span>Balancín-Chasis</span>
            <span>Acoplado-Semirremolque</span>
            <span>Carga y Descarga con Autoelevador</span>
            <span>Alquiler de Autoelevador</span>
            <span>Transporte Terrestre</span>
            <span>Carga Completa</span>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-sm tracking-wide">CONTACTO</h3>
          <div className="mt-5 space-y-4 text-sm text-slate-400">
            <div className="flex gap-3">
              <Phone size={16} className="mt-0.5 shrink-0" />
              <span>(11) 7136-6651</span>
            </div>
            <div className="flex gap-3">
              <Mail size={16} className="mt-0.5 shrink-0" />
              <span>transporte_edgardoa@hotmail.com</span>
            </div>
            <div className="flex gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>José C. Paz, Buenos Aires, Argentina</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-6 py-5 text-xs text-slate-500 md:flex-row">
          <span>© 2026 Mariela Transporte de Carga. Todos los derechos reservados.</span>
          {/* <span>Desarrollado por pablosingh</span> */}
        </div>
      </div>
    </footer>
  );
}
