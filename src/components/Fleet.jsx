import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import flota1 from "../assets/flota_169/flota_00.png";
import flota2 from "../assets/flota_169/flota_01.png";
import flota3 from "../assets/flota_169/flota_02.png";
import flota4 from "../assets/flota_169/flota_03.png";
import flota5 from "../assets/flota_169/flota_04.png";
import flota6 from "../assets/flota_169/flota_05a.png";
import flota7 from "../assets/flota_169/flota_06a.png";
import flota8 from "../assets/flota_169/flota_07.png";
import flota9 from "../assets/flota_169_2/flota2_00.jpg";
import flota10 from "../assets/flota_169_2/flota2_01.jpg";
import flota11 from "../assets/flota_169_2/flota2_02.jpg";
import flota12 from "../assets/flota_169_2/flota2_03.jpg";
import flota13 from "../assets/flota_169_2/flota2_04.jpg";
import flota14 from "../assets/flota_169_2/flota2_05.jpg";
import flota15 from "../assets/flota_169_2/flota2_06.jpg";
import flota16 from "../assets/flota_169_2/flota2_07.jpg";
import flota17 from "../assets/flota_169_2/flota2_08.jpg";
import flota18 from "../assets/flota_169_2/flota2_09.jpg";
import flota19 from "../assets/flota_169_2/flota2_10.jpg";
import flota20 from "../assets/flota_169_2/flota2_11.jpg";
import flota21 from "../assets/flota_169_2/flota2_12.jpg";
import flota22 from "../assets/flota_169_2/flota2_13.jpg";
import flota23 from "../assets/flota_169_2/flota2_14.jpg";

const fleetImages = [flota1, flota2, flota3, flota4, flota5, flota6, flota7, flota8, flota9, flota10, flota11, flota12, flota13, flota14, flota15, flota16, flota17, flota18, flota19, flota20, flota21, flota22, flota23];

export default function Fleet() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? fleetImages.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === fleetImages.length - 1 ? 0 : c + 1));

  return (
    <section id="flota" className="bg-[#0f172a] py-16 text-white md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="text-center lg:text-left">
            <p className="text-sm font-bold tracking-[0.2em] text-[#60a5fa]">
              NUESTRA FLOTA
            </p>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl lg:text-5xl">
              Unidades modernas
              <br />
              para un servicio superior
            </h2>
            <div className="mx-auto mt-5 h-1 w-14 bg-[#60a5fa] lg:mx-0" />
            <p className="mt-6 max-w-lg leading-relaxed text-slate-300">
              Contamos con camiones de última generación equipados
              con tecnología de rastreo satelital para garantizar
              la seguridad de tu carga.
            </p>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl md:aspect-[16/10]">
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
              className="absolute left-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-[#60a5fa] md:-left-5 md:h-10 md:w-10 md:bg-white md:text-slate-900"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={next}
              className="absolute right-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-[#60a5fa] md:-right-5 md:h-10 md:w-10 md:bg-white md:text-slate-900"
            >
              <ChevronRight size={18} />
            </button>

            <div className="mt-4 flex items-center justify-center gap-1.5 md:gap-2">
              {fleetImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition ${
                    i === current
                      ? "h-2.5 w-2.5 bg-[#60a5fa]"
                      : "h-2 w-2 bg-slate-600"
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
