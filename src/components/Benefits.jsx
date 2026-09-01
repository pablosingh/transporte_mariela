import { ShieldCheck, Clock3, MapPin, Headphones } from "lucide-react";

const benefits = [
  {
    icon: <ShieldCheck size={36} />,
    title: "Seguridad",
    text: "Protegemos tu carga en cada etapa del proceso.",
  },
  {
    icon: <Clock3 size={36} />,
    title: "Puntualidad",
    text: "Cumplimos con los tiempos acordados.",
  },
  {
    icon: <MapPin size={36} />,
    title: "Cobertura Nacional",
    text: "Llegamos a donde tu negocio nos necesite.",
  },
  {
    icon: <Headphones size={36} />,
    title: "Atención Personalizada",
    text: "Un equipo siempre dispuesto a ayudarte.",
  },
];

export default function Benefits() {
  return (
    <section id="nosotros" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-sm font-bold tracking-[0.2em] text-[#1a365d]">
            ¿POR QUÉ ELEGIRNOS?
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
            Compromiso que genera confianza
          </h2>
          <div className="mx-auto mt-5 h-1 w-14 bg-[#1a365d]" />
        </div>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, i) => (
            <div key={i} className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#1a365d]/20 text-[#1a365d]">
                {benefit.icon}
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">
                {benefit.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">
                {benefit.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
