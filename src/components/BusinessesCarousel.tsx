"use client";

import Link from "next/link";
import { useRef } from "react";

type Business = {
  id: number;
  name: string;
  address: string;
  whatsapp: string;
  schedule: string;
  image: string;
};

interface Props {
  businesses: Business[];
}

const BusinessesCarousel = ({ businesses }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = direction === "left" ? -320 : 320;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-highlight">PYMEs destacadas</p>
          <h2 className="text-2xl font-bold text-white">PYMEs locales que llegan a tu puerta</h2>
        </div>
        <div className="hidden gap-2 md:flex">
          <button
            onClick={() => scroll("left")}
            className="h-10 w-10 rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
            aria-label="Anterior"
          >
            ←
          </button>
          <button
            onClick={() => scroll("right")}
            className="h-10 w-10 rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
            aria-label="Siguiente"
          >
            →
          </button>
        </div>
      </div>
      <div className="relative">
        <div ref={scrollRef} className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4">
          {businesses.map((business) => (
            <article
              key={business.id}
              className="min-w-[260px] max-w-sm snap-start rounded-2xl bg-white/90 p-4 shadow-lg ring-1 ring-muted/60 backdrop-blur"
            >
              <div className="h-32 w-full rounded-xl bg-cover bg-center"
                style={{ backgroundImage: `url(${business.image})` }}
                aria-label={business.name}
              />
              <div className="mt-4 space-y-2 text-brand-navy">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-brand-navy">{business.name}</h3>
                  <span className="rounded-full bg-highlight px-3 py-1 text-xs font-semibold text-brand-navy">
                    Destacado del día 🔥
                  </span>
                </div>
                <p className="text-sm text-brand-muted">{business.address}</p>
                <p className="text-sm text-brand-muted">WhatsApp: {business.whatsapp}</p>
                <p className="text-sm text-brand-muted">Horario: {business.schedule}</p>
                <div className="pt-2">
                  <Link
                    href="/pymes"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark"
                  >
                    Ver más
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessesCarousel;
