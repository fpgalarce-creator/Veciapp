"use client";

import LocationFilters from "@/components/LocationFilters";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import { services, ServiceStatus } from "@/data/services";
import { useMemo, useState } from "react";

const categories = ["Todas", "Limpieza", "Mascotas", "Jardinería", "Educación", "Otros"] as const;
const statuses: ("Todos" | ServiceStatus)[] = ["Todos", "Pendiente", "En curso", "Completado"];

type CategoryFilter = typeof categories[number];

export default function ExplorePage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("Todas");
  const [status, setStatus] = useState<(typeof statuses)[number]>("Todos");

  const filtered = useMemo(
    () =>
      services.filter((service) => {
        const matchesText = service.title.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = category === "Todas" || service.category === category;
        const matchesStatus = status === "Todos" || service.status === status;
        return matchesText && matchesCategory && matchesStatus;
      }),
    [search, category, status]
  );

  return (
    <div className="space-y-6">
      <SectionTitle
        title="Explorar servicios publicados"
        subtitle="Filtra por categoría, estado o busca por texto"
      />
      <LocationFilters />
      <div className="section-card space-y-4">
        <div className="grid gap-3 md:grid-cols-3">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por título o palabra clave"
            className="w-full rounded-2xl bg-white/5 px-3 py-2 text-white ring-1 ring-white/10 placeholder:text-white/70 focus:outline-none"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as CategoryFilter)}
            className="w-full rounded-2xl bg-white/5 px-3 py-2 text-white ring-1 ring-white/10 focus:outline-none"
          >
            {categories.map((item) => (
              <option key={item} value={item} className="bg-slate-900">
                {item}
              </option>
            ))}
          </select>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as (typeof statuses)[number])}
            className="w-full rounded-2xl bg-white/5 px-3 py-2 text-white ring-1 ring-white/10 focus:outline-none"
          >
            {statuses.map((item) => (
              <option key={item} value={item} className="bg-slate-900">
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}
