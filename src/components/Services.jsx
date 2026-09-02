import { Truck, Package, Container, ArrowUpDown, Car, Forklift, Wrench } from "lucide-react";
import servicios1 from "../assets/servicios_01a.png";
import servicios2 from "../assets/servicios_02a.png";
import bsasImg from "../assets/bsas.png";

const services = [
  {
    icon: <Container size={32} />,
    title: "Chasis",
    text: "Transporte de chasis con unidades especializadas.",
  },
  {
    icon: <ArrowUpDown size={32} />,
    title: "Balancín-Chasis",
    text: "Servicio de balancín para chasis y cargas especiales.",
  },
  {
    icon: <Car size={32} />,
    title: "Acoplado-Semirremolque",
    text: "Traslado con acoplado y semirremolque.",
  },
  {
    icon: <Forklift size={32} />,
    title: "Carga y Descarga con Autoelevador",
    text: "Operaciones de carga y descarga con autoelevador.",
  },
  {
    icon: <Wrench size={32} />,
    title: "Alquiler de Autoelevador",
    text: "Alquiler de autoelevadores para tu operación.",
  },
  {
    icon: <Truck size={32} />,
    title: "Transporte Terrestre",
    text: "Cobertura en CABA y toda la Prov. de Buenos Aires.",
  },
  {
    icon: <Package size={32} />,
    title: "Carga Completa",
    text: "Traslado exclusivo para tu carga con máxima eficiencia.",
  },
  {
    isImageCard: true,
    image: bsasImg,
    title: "CABA y Bs As",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-sm font-bold tracking-[0.2em] text-[#1a365d]">
            NUESTROS SERVICIOS
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
            Soluciones a la medida
          </h2>
          <div className="mx-auto mt-5 h-1 w-14 bg-[#1a365d]" />
          <p className="mt-5 text-slate-500">
            Nos especializamos en transporte de carga terrestre, ofreciendo
            unidades monitoreadas por GPS las 24 hs. Ofrecemos puntualidad
            garantizada y tarifas competitivas que protegen tu margen de ganancia.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, i) =>
            service.isImageCard ? (
              <div
                key={i}
                className="group relative overflow-hidden rounded-xl transition duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[#1a365d]/70 transition group-hover:bg-[#1a365d]/80" />
                <div className="relative flex h-full min-h-[220px] flex-col items-center justify-center p-8 text-center">
                  <h3 className="text-lg font-extrabold text-white">
                    {service.title}
                  </h3>
                </div>
              </div>
            ) : (
              <div
                key={i}
                className="group rounded-xl border border-slate-200 bg-white p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-[#1a365d]/30 hover:shadow-lg"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#1a365d]/20 text-[#1a365d] transition group-hover:border-[#1a365d] group-hover:bg-[#1a365d] group-hover:text-white">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  {service.text}
                </p>
              </div>
            )
          )}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <img
            src={servicios1}
            alt="Servicio de transporte 1"
            className="h-64 w-full rounded-xl object-cover"
          />
          <img
            src={servicios2}
            alt="Servicio de transporte 2"
            className="h-64 w-full rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
