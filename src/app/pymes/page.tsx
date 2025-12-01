"use client";

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
      <div className="section-card space-y-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por nombre o tipo"
            className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:border-secondary focus:outline-none md:max-w-sm"
          />
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
            <input
              type="checkbox"
              checked={onlyFeatured}
              onChange={(e) => setOnlyFeatured(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
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
