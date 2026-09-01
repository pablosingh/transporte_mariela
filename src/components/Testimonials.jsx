import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Trabajar con Mariela Transporte de Carga nos da la tranquilidad de saber que nuestra mercadería está en buenas manos. Cumplen siempre con lo pactado.",
    author: "Juan Pablo Gómez",
    company: "Logística del Sur",
  },
  {
    text: "Excelente servicio y atención. Nuestra carga siempre llega a tiempo y en perfectas condiciones. Muy profesionales.",
    author: "María Elena Rodríguez",
    company: "Distribuidora del Norte",
  },
  {
    text: "Llevamos años trabajando con Mariela y nunca nos han fallado. Su flota es moderna y el seguimiento en tiempo real es una gran ventaja.",
    author: "Carlos Méndez",
    company: "Industrias San Martín",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-sm font-bold tracking-[0.2em] text-[#1a365d]">
          LO QUE DICEN NUESTROS CLIENTES
        </p>
        <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
          Clientes satisfechos
        </h2>
        <div className="mx-auto mt-5 h-1 w-14 bg-[#1a365d]" />

        <div className="relative mt-12 rounded-xl bg-white p-10 shadow-sm border border-slate-100">
          <Quote
            size={36}
            className="mx-auto mb-5 text-[#1a365d]/30"
          />
          <p className="text-lg leading-relaxed text-slate-600">
            &ldquo;{testimonials[0].text}&rdquo;
          </p>
          <p className="mt-6 font-bold text-slate-900">
            — {testimonials[0].author}
          </p>
          <p className="text-sm text-slate-500">
            {testimonials[0].company}
          </p>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`h-2.5 w-2.5 rounded-full ${
                i === 0 ? "bg-[#1a365d]" : "bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
