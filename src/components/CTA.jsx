import contactoImg from "../assets/footer.png";

export default function CTA() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden py-24"
    >
      <img
        src={contactoImg}
        alt="Contacto Transportes Edgardo"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[#0f172a]/75" />

      <div className="relative mx-auto max-w-4xl px-6 text-center text-white">
        <h2 className="text-3xl font-extrabold md:text-4xl lg:text-5xl">
          ¿Listo para mover tu carga?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-slate-200">
          Solicitá tu presupuesto sin cargo y recibí asesoramiento
          personalizado.
        </p>
        <a
          href="https://wa.me/5491171366651"
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex rounded-md border-2 border-white bg-transparent px-8 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-[#0f172a]"
        >
          CONTACTANOS
        </a>
      </div>
    </section>
  );
}
