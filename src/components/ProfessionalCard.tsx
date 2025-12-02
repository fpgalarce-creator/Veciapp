"use client";

import { FC, useState } from "react";
import { Info, MessageCircleMore, ShieldCheck } from "lucide-react";
import StarsRating from "./StarsRating";
import { Professional } from "@/data/professionals";
import { useAppContext } from "@/context/AppContext";

const ProfessionalCard: FC<{ professional: Professional }> = ({ professional }) => {
  const { session } = useAppContext();
  const [showTestimonials, setShowTestimonials] = useState(false);

  const testimonial = professional.testimonials?.[0];
  const avatarFallback = `https://api.dicebear.com/7.x/identicon/svg?seed=${encodeURIComponent(professional.name)}`;

  return (
    <article
      className="card-premium group relative flex min-h-[260px] flex-col gap-4"
      onMouseEnter={() => setShowTestimonials(true)}
      onMouseLeave={() => setShowTestimonials(false)}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="relative h-16 w-16 overflow-hidden rounded-full ring-2 ring-white/20">
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${professional.avatar ?? avatarFallback})` }}
              aria-label={professional.name}
            />
            <span className="absolute -right-1 -bottom-1 rounded-full bg-emerald-400/80 p-1 text-[10px] text-brand-navy ring-2 ring-slate-900">
              <ShieldCheck className="h-3 w-3" />
            </span>
          </div>
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-wide text-white/70">{professional.role}</p>
            <h3 className="text-xl font-semibold text-white">{professional.name}</h3>
            <p className="text-sm text-white/70">{professional.sectors}</p>
            <div className="flex flex-wrap gap-2 text-[11px] text-white/70">
              <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10">{professional.price}</span>
              <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10">Veci confiable</span>
            </div>
          </div>
        </div>
        {professional.badge && (
          <span className="badge bg-emerald-400/20 text-emerald-100 ring-1 ring-emerald-300/40">{professional.badge}</span>
        )}
      </div>
      <div className="flex items-center justify-between text-sm text-white/80">
        <div className="rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
          <p className="font-semibold text-white">Reputación</p>
          <div className="flex items-center gap-2">
            <StarsRating value={professional.rating} />
            <span className="text-xs text-white/70">({professional.rating.toFixed(1)})</span>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2 text-[13px] text-white/70">
          <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10">Top Veci</span>
          <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10">Reseñas verificadas</span>
        </div>
      </div>
      <div className="mt-auto flex items-center gap-2">
        <button className="inline-flex flex-1 items-center justify-center rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-brand-navy shadow-glow transition hover:-translate-y-0.5 hover:bg-emerald-300">
          Contactar
        </button>
        {testimonial ? (
          <button
            onClick={() => setShowTestimonials((prev) => !prev)}
            className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-xs font-semibold text-white ring-1 ring-white/20 transition hover:-translate-y-0.5 hover:bg-white/20"
          >
            <MessageCircleMore className="h-4 w-4 text-highlight" /> Opiniones
          </button>
        ) : null}
        {session?.role === "admin" && (
          <div className="flex gap-2 text-xs font-semibold text-white">
            <button
              onClick={() => console.log("Editar profesional", professional.id)}
              className="rounded-full bg-white/10 px-3 py-2 ring-1 ring-white/20 transition hover:-translate-y-0.5 hover:bg-white/20"
            >
              Editar
            </button>
            <button
              onClick={() => console.log("Eliminar profesional", professional.id)}
              className="rounded-full bg-red-500/15 px-3 py-2 text-red-100 ring-1 ring-red-400/30 transition hover:-translate-y-0.5 hover:bg-red-500/25"
            >
              Eliminar
            </button>
          </div>
        )}
        {testimonial ? (
          <button
            onClick={() => setShowTestimonials((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/15 transition hover:-translate-y-0.5 hover:bg-white/20 sm:hidden"
            aria-label="Ver testimonio"
          >
            <Info className="h-4 w-4" />
          </button>
        ) : null}
      </div>
      {testimonial ? (
        <div
          className={`absolute inset-x-0 top-full z-20 mt-2 transition-opacity duration-300 ${
            showTestimonials ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
        >
          <div className="rounded-3xl bg-slate-900/90 p-4 shadow-2xl ring-1 ring-white/10">
            <p className="mb-2 text-xs uppercase tracking-wide text-highlight">Testimonio</p>
            <div className="rounded-2xl bg-white/5 p-3 text-sm text-white/80 ring-1 ring-white/10">
              <p className="text-white">“{testimonial.text}”</p>
              <p className="mt-2 text-xs text-white/60">{testimonial.author}</p>
            </div>
          </div>
        </div>
      ) : null}
    </article>
  );
};

export default ProfessionalCard;
