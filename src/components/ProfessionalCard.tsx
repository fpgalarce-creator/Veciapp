"use client";

import { FC } from "react";
import StarsRating from "./StarsRating";
import { Professional } from "@/data/professionals";
import { useAppContext } from "@/context/AppContext";

const ProfessionalCard: FC<{ professional: Professional }> = ({ professional }) => {
  const { session } = useAppContext();

  return (
    <article className="card-premium flex flex-col gap-3">
      <div className="flex items-start justify-between gap-2">
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-wide text-white/70">{professional.role}</p>
          <h3 className="text-xl font-semibold text-white">{professional.name}</h3>
          <p className="text-sm text-white/70">{professional.sectors}</p>
        </div>
        {professional.badge && (
          <span className="badge bg-emerald-400/20 text-emerald-100 ring-1 ring-emerald-300/40">
            {professional.badge}
          </span>
        )}
      </div>
      <div className="flex items-center justify-between text-sm text-white/80">
        <div className="rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
          <p className="font-semibold text-white">Tarifa</p>
          <p>{professional.price}</p>
        </div>
        <StarsRating value={professional.rating} />
      </div>
      <div className="flex items-center gap-2">
        <button className="inline-flex flex-1 items-center justify-center rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-brand-navy shadow-glow transition hover:bg-emerald-300">
          Contactar
        </button>
        {session?.role === "admin" && (
          <div className="flex gap-2 text-xs font-semibold text-white">
            <button
              onClick={() => console.log("Editar profesional", professional.id)}
              className="rounded-full bg-white/10 px-3 py-2 ring-1 ring-white/20 hover:bg-white/20"
            >
              Editar
            </button>
            <button
              onClick={() => console.log("Eliminar profesional", professional.id)}
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

export default ProfessionalCard;
