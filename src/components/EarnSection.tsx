import { ReactNode } from "react";

const steps = [
  {
    title: "Ofrece un servicio",
    description: "Publica tu habilidad, sector y disponibilidad en minutos.",
    icon: (
      <svg className="h-10 w-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3 3 7.5l9 4.5 9-4.5L12 3Z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 12l9 4.5 9-4.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 16.5 12 21l9-4.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Recibe solicitudes",
    description: "Vecinos verificados te contactan directo por el chat seguro de VeciApp.",
    icon: (
      <svg className="h-10 w-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 5h16v12H5.17L4 18.17V5Z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 9h8M8 13h5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Completa tareas y gana",
    description: "Entrega resultados, acuerda el pago y suma reseñas que te destaquen.",
    icon: (
      <svg className="h-10 w-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3v18" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 7h6a4 4 0 0 1 0 8H7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const EarnSection = () => {
  return (
    <section className="rounded-3xl bg-white/90 p-6 shadow-2xl ring-1 ring-muted/60 sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-primary">Gana dinero hoy</p>
          <h2 className="text-2xl font-bold text-brand-navy">Publica, acepta y cobra sin fricción</h2>
          <p className="text-brand-muted">Solo 3 pasos para empezar a monetizar tu talento.</p>
        </div>
        <div className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">Proceso seguro</div>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {steps.map((step) => (
          <article key={step.title} className="rounded-2xl border border-muted/60 bg-surface p-4 shadow-sm">
            <div className="mb-4 inline-flex items-center justify-center rounded-2xl bg-primary/10 p-3 text-primary">
              {step.icon as ReactNode}
            </div>
            <h3 className="text-lg font-bold text-brand-navy">{step.title}</h3>
            <p className="mt-2 text-sm text-brand-muted">{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default EarnSection;
