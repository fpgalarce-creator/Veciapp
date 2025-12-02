"use client";

import { FC } from "react";
import { Service, ServiceStatus } from "@/data/services";
import { useAppContext } from "@/context/AppContext";

const statusStyles: Record<ServiceStatus, string> = {
  Pendiente: "bg-amber-500/15 text-amber-100 ring-1 ring-amber-400/30",
  "En curso": "bg-sky-500/15 text-sky-100 ring-1 ring-sky-400/30",
  Completado: "bg-emerald-500/15 text-emerald-100 ring-1 ring-emerald-400/30",
};

const ServiceCard: FC<{ service: Service }> = ({ service }) => {
  const { session } = useAppContext();

  return (
    <article className="card-premium flex flex-col gap-3">
      <div className="flex items-start justify-between gap-2">
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-wide text-white/70">{service.category}</p>
          <h3 className="text-xl font-semibold text-white">{service.title}</h3>
        </div>
        <span className={`badge ${statusStyles[service.status]} text-xs`}>{service.status}</span>
      </div>
      <div className="grid grid-cols-2 gap-3 text-sm text-white/80">
        <div className="rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
          <p className="font-semibold text-white">Sector</p>
          <p>{service.sector}</p>
        </div>
        <div className="rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
          <p className="font-semibold text-white">Fecha / hora</p>
          <p>{service.datetime}</p>
        </div>
        <div className="rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
          <p className="font-semibold text-white">Rango</p>
          <p>{service.priceRange}</p>
        </div>
        <div className="rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
          <p className="font-semibold text-white">Estado</p>
          <p className="text-sm">{service.status}</p>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-3 pt-1">
        <button className="inline-flex flex-1 items-center justify-center rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-brand-navy shadow-glow transition hover:bg-emerald-300">
          Postular ahora
        </button>
        {session?.role === "admin" && (
          <div className="flex gap-2 text-xs font-semibold text-white">
            <button
              onClick={() => console.log("Editar servicio", service.id)}
              className="rounded-full bg-white/10 px-3 py-2 ring-1 ring-white/20 hover:bg-white/20"
            >
              Editar
            </button>
            <button
              onClick={() => console.log("Eliminar servicio", service.id)}
              className="rounded-full bg-red-500/15 px-3 py-2 text-red-100 ring-1 ring-red-400/30 hover:bg-red-500/25"
            >
              Eliminar
            </button>
          </div>
        )}
      </div>
    </article>
  );
};

export default ServiceCard;
