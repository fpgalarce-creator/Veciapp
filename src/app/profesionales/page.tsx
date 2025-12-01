"use client";

import ProfessionalCard from "@/components/ProfessionalCard";
import SectionTitle from "@/components/SectionTitle";
import { professionals } from "@/data/professionals";
import { useMemo, useState } from "react";

const categories = ["Todos", "Gasfiter", "Electricista", "Maestro", "Profesor particular", "Manicure", "Jardinero", "Otros"] as const;

type CategoryFilter = typeof categories[number];

export default function ProfessionalsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("Todos");

  const filtered = useMemo(
    () =>
      professionals.filter((professional) => {
        const matchesText =
          professional.name.toLowerCase().includes(search.toLowerCase()) ||
          professional.role.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = category === "Todos" || professional.role.includes(category);
        return matchesText && matchesCategory;
      }),
    [search, category]
  );

  return (
    <div className="space-y-6">
      <SectionTitle title="Directorio de oficios y profesionales" subtitle="Encuentra vecis expertos" />
      <div className="section-card space-y-4">
        <div className="grid gap-3 md:grid-cols-2">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por nombre u oficio"
            className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:border-secondary focus:outline-none"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as CategoryFilter)}
            className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:border-secondary focus:outline-none"
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((professional) => (
          <ProfessionalCard key={professional.id} professional={professional} />
        ))}
      </div>
    </div>
  );
}
