import { Truck, Instagram, Facebook, Linkedin, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1a365d]">
              <Truck size={22} className="text-white" />
            </div>
            <div>
              <h3 className="text-lg font-extrabold">MARIELA</h3>
              <p className="text-[8px] tracking-[0.2em] text-[#60a5fa]">
                TRANSPORTE DE CARGA
              </p>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-slate-400">
            Más de 15 años brindando soluciones logísticas
            confiables y eficientes en todo el país.
          </p>
          <div className="mt-6 flex gap-4">
            <Facebook size={18} className="cursor-pointer text-slate-400 hover:text-white transition" />
            <Instagram size={18} className="cursor-pointer text-slate-400 hover:text-white transition" />
            <Linkedin size={18} className="cursor-pointer text-slate-400 hover:text-white transition" />
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
            <span>Transporte Terrestre</span>
            <span>Carga Completa</span>
            <span>Almacenamiento</span>
            <span>Distribución</span>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-sm tracking-wide">CONTACTO</h3>
          <div className="mt-5 space-y-4 text-sm text-slate-400">
            <div className="flex gap-3">
              <Phone size={16} className="mt-0.5 shrink-0" />
              <span>(11) 1234-5678</span>
            </div>
            <div className="flex gap-3">
              <Mail size={16} className="mt-0.5 shrink-0" />
              <span>info@mariela.com.ar</span>
            </div>
            <div className="flex gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>Buenos Aires, Argentina</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-6 py-5 text-xs text-slate-500 md:flex-row">
          <span>© 2024 Mariela Transporte de Carga. Todos los derechos reservados.</span>
          <span>Desarrollado por tuweb.com</span>
        </div>
      </div>
    </footer>
  );
}
