"use client";

import Link from "next/link";
import { FC } from "react";
import { Globe2, MapPin, Phone, ShoppingBag } from "lucide-react";
import { Pyme } from "@/data/pymes";
import { useAppContext } from "@/context/AppContext";

const PymeCard: FC<{ pyme: Pyme }> = ({ pyme }) => {
  const { session } = useAppContext();

  return (
    <article className="card-premium flex min-w-[280px] flex-col gap-3">
      <div className="flex items-start justify-between gap-2">
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-wide text-white/70">{pyme.category ?? pyme.type}</p>
          <h3 className="text-xl font-semibold text-white">{pyme.name}</h3>
          <p className="text-sm text-white/70">{pyme.type}</p>
        </div>
        {pyme.highlighted && (
          <span className="badge bg-amber-400/20 text-amber-100 ring-1 ring-amber-300/40">Destacada</span>
        )}
      </div>
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-white/5 ring-1 ring-white/10">
        {pyme.image ? (
          <div
            className="h-36 w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${pyme.image})` }}
            aria-label={pyme.name}
          />
        ) : (
          <div className="flex h-36 items-center justify-center gap-2 text-white/70">
            <ShoppingBag className="h-5 w-5 text-highlight" />
            <span className="text-sm">Vitrina en construcción</span>
          </div>
        )}
      </div>
      <div className="grid gap-2 text-sm text-white/80">
        <p className="flex items-center gap-2 rounded-2xl bg-white/5 px-3 py-2 ring-1 ring-white/10">
          <MapPin className="h-4 w-4 text-highlight" />
          <span className="font-semibold text-white">{pyme.location ?? pyme.sectors}</span>
        </p>
        <p className="rounded-2xl bg-white/5 px-3 py-2 ring-1 ring-white/10">
          <span className="font-semibold text-white">Horarios: </span>
          {pyme.schedule}
        </p>
        <p className="rounded-2xl bg-white/5 px-3 py-2 ring-1 ring-white/10">
          <span className="font-semibold text-white">Cobertura: </span>
          {pyme.sectors}
        </p>
        {pyme.phone && (
          <p className="flex items-center gap-2 rounded-2xl bg-white/5 px-3 py-2 ring-1 ring-white/10">
            <Phone className="h-4 w-4 text-emerald-300" /> {pyme.phone}
          </p>
        )}
        {pyme.website && (
          <Link
            href={pyme.website}
            className="flex items-center gap-2 rounded-2xl bg-white/5 px-3 py-2 text-highlight ring-1 ring-white/10 hover:text-white"
          >
            <Globe2 className="h-4 w-4" />
            {pyme.website.replace("https://", "")}
          </Link>
        )}
        {pyme.products && (
          <div className="flex flex-wrap gap-2">
            {pyme.products.slice(0, 3).map((product) => (
              <span
                key={product}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white ring-1 ring-white/15"
              >
                <ShoppingBag className="h-3.5 w-3.5 text-highlight" />
                {product}
              </span>
            ))}
          </div>
        )}
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
