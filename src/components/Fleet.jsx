import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import carrusel1 from "../assets/carrusel_1.jpg";
import carrusel2 from "../assets/carrusel_2.jpg";
import carrusel3 from "../assets/carrusel_3.jpg";

const fleetImages = [carrusel1, carrusel2, carrusel3];

export default function Fleet() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? fleetImages.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === fleetImages.length - 1 ? 0 : c + 1));

  return (
    <section id="flota" className="bg-[#0f172a] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold tracking-[0.2em] text-[#60a5fa]">
              NUESTRA FLOTA
            </p>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl lg:text-5xl">
              Unidades modernas
              <br />
              para un servicio superior
            </h2>
            <div className="mt-5 h-1 w-14 bg-[#60a5fa]" />
            <p className="mt-6 max-w-lg leading-relaxed text-slate-300">
              Contamos con camiones de última generación equipados
              con tecnología de rastreo satelital para garantizar
              la seguridad de tu carga.
            </p>
            <button className="mt-8 rounded-md bg-white px-6 py-3 text-sm font-bold text-slate-900 transition hover:bg-[#60a5fa] hover:text-white">
              VER FLOTA
            </button>
          </div>

          <div className="relative">
            <div className="relative h-72 overflow-hidden rounded-xl md:h-80">
              {fleetImages.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Camión ${i + 1}`}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                    i === current ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={prev}
              className="absolute -left-5 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg transition hover:bg-[#60a5fa] hover:text-white"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={next}
              className="absolute -right-5 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg transition hover:bg-[#60a5fa] hover:text-white"
            >
              <ChevronRight size={20} />
            </button>

            <div className="mt-6 flex justify-center gap-2">
              {fleetImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    i === current ? "bg-[#60a5fa]" : "bg-slate-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
