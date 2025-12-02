"use client";

import { FC } from "react";
import { Pyme } from "@/data/pymes";
import { useAppContext } from "@/context/AppContext";

const PymeCard: FC<{ pyme: Pyme }> = ({ pyme }) => {
  const { session } = useAppContext();

  return (
    <article className="card-premium flex min-w-[260px] flex-col gap-3">
      <div className="flex items-start justify-between gap-2">
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-wide text-white/70">{pyme.type}</p>
          <h3 className="text-xl font-semibold text-white">{pyme.name}</h3>
        </div>
        {pyme.highlighted && (
          <span className="badge bg-amber-400/20 text-amber-100 ring-1 ring-amber-300/40">Destacada</span>
        )}
      </div>
      <div className="space-y-2 text-sm text-white/80">
        <p className="rounded-2xl bg-white/5 px-3 py-2 ring-1 ring-white/10">
          <span className="font-semibold text-white">Horarios: </span>
          {pyme.schedule}
        </p>
        <p className="rounded-2xl bg-white/5 px-3 py-2 ring-1 ring-white/10">
          <span className="font-semibold text-white">Sectores: </span>
          {pyme.sectors}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <button className="inline-flex flex-1 items-center justify-center rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-brand-navy shadow-glow transition hover:bg-emerald-300">
          Encargar ahora
        </button>
        {session?.role === "admin" && (
          <div className="flex gap-2 text-xs font-semibold text-white">
            <button
              onClick={() => console.log("Editar PyME", pyme.id)}
              className="rounded-full bg-white/10 px-3 py-2 ring-1 ring-white/20 hover:bg-white/20"
            >
              Editar
            </button>
            <button
              onClick={() => console.log("Eliminar PyME", pyme.id)}
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

export default PymeCard;
