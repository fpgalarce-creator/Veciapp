"use client";

import LocationFilters from "@/components/LocationFilters";
import PymeCard from "@/components/PymeCard";
import SectionTitle from "@/components/SectionTitle";
import { pymes } from "@/data/pymes";
import { useMemo, useState } from "react";

export default function PymesPage() {
  const [search, setSearch] = useState("");
  const [onlyFeatured, setOnlyFeatured] = useState(false);

  const filtered = useMemo(
    () =>
      pymes.filter((pyme) => {
        const matchesText =
          pyme.name.toLowerCase().includes(search.toLowerCase()) ||
          pyme.type.toLowerCase().includes(search.toLowerCase());
        const matchesFeatured = !onlyFeatured || pyme.highlighted;
        return matchesText && matchesFeatured;
      }),
    [search, onlyFeatured]
  );

  return (
    <div className="space-y-6">
      <SectionTitle
        title="PYMEs y comerciantes móviles"
        subtitle="Apoya emprendimientos de Rancagua"
      />
      <LocationFilters />
      <div className="section-card space-y-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por nombre o tipo"
            className="w-full rounded-2xl bg-white/5 px-3 py-2 text-white ring-1 ring-white/10 placeholder:text-white/70 focus:outline-none md:max-w-sm"
          />
          <label className="flex items-center gap-2 text-sm font-semibold text-white">
            <input
              type="checkbox"
              checked={onlyFeatured}
              onChange={(e) => setOnlyFeatured(e.target.checked)}
              className="h-4 w-4 rounded border-white/40 bg-transparent text-primary focus:ring-primary"
            />
            Ver solo destacadas
          </label>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((pyme) => (
          <PymeCard key={pyme.id} pyme={pyme} />
        ))}
      </div>
    </div>
  );
}
