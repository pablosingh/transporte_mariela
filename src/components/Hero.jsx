import { ArrowRight, Phone } from "lucide-react";
import heroImg from "../assets/hero_2.png";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex h-[100vh] items-center overflow-hidden bg-slate-100"
    >
      <img
        src={heroImg}
        alt="Camión de transporte"
        className="absolute inset-0 h-full w-full object-cover object-center md:object-right"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent md:from-white md:via-white/60" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-20">
        <div className="max-w-xl">
          <p className="mb-4 text-sm font-bold tracking-[0.25em] text-[#1a365d]">
            TRANSPORTE DE CARGA
          </p>

          <h2 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl lg:text-[3.5rem]">
            Llevamos tu carga,
            <br />
            impulsamos tu negocio
          </h2>

          <p className="mt-6 max-w-md text-base leading-relaxed text-slate-600">
            Soluciones logísticas seguras, eficientes y personalizadas
            en todo el país.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#servicios"
              className="flex items-center justify-center gap-2 rounded-md bg-[#1a365d] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#152c4a]"
            >
              NUESTROS SERVICIOS
              <ArrowRight size={16} />
            </a>

            <a
              href="https://wa.me/5491171366651"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-md border-2 border-slate-800 bg-white/80 px-7 py-3.5 text-sm font-bold text-slate-800 transition hover:bg-slate-900 hover:text-white"
            >
              <Phone size={16} />
              CONTACTANOS
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block">
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-slate-400">
          <div className="mt-2 h-2 w-1 animate-bounce rounded-full bg-slate-400" />
        </div>
      </div>
    </section>
  );
}
