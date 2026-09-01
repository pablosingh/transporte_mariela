import { Truck, Package, Warehouse, ClipboardCheck } from "lucide-react";

const services = [
  {
    icon: <Truck size={32} />,
    title: "Transporte Terrestre",
    text: "Cobertura nacional con unidades modernas y monitoreo 24/7.",
  },
  {
    icon: <Package size={32} />,
    title: "Carga Completa",
    text: "Traslado exclusivo para tu carga con máxima eficiencia.",
  },
  {
    icon: <Warehouse size={32} />,
    title: "Almacenamiento",
    text: "Depósitos seguros para el resguardo de tu mercadería.",
  },
  {
    icon: <ClipboardCheck size={32} />,
    title: "Distribución",
    text: "Entregas rápidas y seguras en todo el país.",
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
            Ofrecemos una amplia gama de servicios de transporte y
            logística para adaptarnos a las necesidades de tu empresa.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}
