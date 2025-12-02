"use client";

import { useState } from "react";

type Service = {
  id: number;
  name: string;
  category: string;
  sector: string;
  price: string;
  icon: string;
};

interface Props {
  services: Service[];
}

const ServicesGrid = ({ services }: Props) => {
  const [view, setView] = useState<"grid" | "list">("grid");

  return (
    <section className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-primary">Servicios disponibles en tu sector</p>
          <h2 className="text-2xl font-bold text-brand-navy">Elige cómo verlo: tarjetas o lista</h2>
        </div>
        <div className="inline-flex rounded-full bg-white/70 p-1 shadow ring-1 ring-muted/60">
          <button
            onClick={() => setView("grid")}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              view === "grid"
                ? "bg-primary text-brand-navy shadow"
                : "text-brand-muted hover:text-brand-navy"
            }`}
          >
            Vista tarjetas
          </button>
          <button
            onClick={() => setView("list")}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              view === "list"
                ? "bg-primary text-brand-navy shadow"
                : "text-brand-muted hover:text-brand-navy"
            }`}
          >
            Vista lista
          </button>
        </div>
      </div>

      <div
        className={
          view === "grid"
            ? "grid gap-4 md:grid-cols-2 lg:grid-cols-3"
            : "space-y-3"
        }
      >
        {services.map((service) => (
          <article
            key={service.id}
            className={`rounded-2xl border border-muted/60 bg-white/90 p-4 shadow-md transition hover:-translate-y-1 hover:shadow-lg ${
              view === "list" ? "flex items-center gap-4" : ""
            }`}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-xl text-brand-navy">
              {service.icon}
            </div>
            <div className={view === "list" ? "flex-1" : "mt-3 space-y-1"}>
              <h3 className="text-lg font-bold text-brand-navy">{service.name}</h3>
              <p className="text-sm font-semibold text-primary">{service.category}</p>
              <p className="text-sm text-brand-muted">Sector: {service.sector}</p>
              <p className="text-sm text-brand-muted">Rango de precio: {service.price}</p>
            </div>
            <div className="ml-auto">
              <button className="rounded-full bg-brand-navy px-4 py-2 text-xs font-semibold text-white ring-1 ring-white/10 hover:bg-brand-muted">
                Ver más
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;
