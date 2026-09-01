import { useState } from "react";
import { Truck, Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "INICIO", href: "#inicio" },
    { label: "SERVICIOS", href: "#servicios" },
    { label: "FLOTA", href: "#flota" },
    { label: "NOSOTROS", href: "#nosotros" },
    { label: "CONTACTO", href: "#contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[#1a365d]">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6">
        <a href="#inicio" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#60a5fa]">
            <Truck size={22} className="text-white" />
          </div>
          <div>
            <h1 className="text-lg font-extrabold tracking-tight text-white">
              MARIELA
            </h1>
            <p className="text-[8px] font-bold tracking-[0.2em] text-[#60a5fa]">
              TRANSPORTE DE CARGA
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-semibold tracking-wide text-white/80 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="rounded-md bg-[#60a5fa] px-5 py-2.5 text-[13px] font-bold text-[#0f172a] transition hover:bg-[#93c5fd]"
          >
            COTIZAR AHORA
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white md:hidden"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#152c4a] px-6 py-5 md:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-semibold text-white/80 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setMenuOpen(false)}
              className="rounded-md bg-[#60a5fa] px-5 py-3 text-center text-sm font-bold text-[#0f172a]"
            >
              COTIZAR AHORA
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
