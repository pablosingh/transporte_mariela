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
