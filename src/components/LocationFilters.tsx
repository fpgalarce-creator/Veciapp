"use client";

import { Building2, MapPin, Sparkles } from "lucide-react";
import { useMemo } from "react";
import { useAppContext } from "@/context/AppContext";

const cities = ["Rancagua", "Machalí", "Graneros"];

const villasByCity: Record<string, string[]> = {
  Rancagua: ["Villa Triana", "Centro", "Alameda", "El Tenis", "Villa Cordillera"],
  Machalí: ["San Damián", "La Vinilla", "El Polo", "Valle Hermoso"],
  Graneros: ["Doñihue", "Las Brisas", "Lo Castillo"],
};

const LocationFilters = ({ showSummary = true }: { showSummary?: boolean }) => {
  const { location, setLocation } = useAppContext();

  const availableVillas = useMemo(() => villasByCity[location.city] ?? [], [location.city]);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-highlight/5 to-transparent" aria-hidden />
      <div className="relative flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <p className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-highlight ring-1 ring-white/10">
            <Sparkles className="h-4 w-4" /> Filtros por ubicación
          </p>
          {showSummary && (
            <p className="text-sm text-white/80">
              Filtrando resultados para <span className="font-semibold text-white">{location.city}</span> • {" "}
              <span className="font-semibold text-white">{location.villa}</span>
            </p>
          )}
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <label className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 text-sm font-semibold text-white ring-1 ring-white/15">
            <MapPin className="h-5 w-5 text-primary" />
            <select
              value={location.city}
              onChange={(e) => {
                const nextCity = e.target.value;
                const nextVillas = villasByCity[nextCity] ?? availableVillas;
                setLocation({ city: nextCity, villa: nextVillas[0] ?? location.villa });
              }}
              className="bg-transparent text-sm font-semibold focus:outline-none"
            >
              {cities.map((city) => (
                <option key={city} value={city} className="bg-slate-900">
                  {city}
                </option>
              ))}
            </select>
          </label>
          <label className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 text-sm font-semibold text-white ring-1 ring-white/15">
            <Building2 className="h-5 w-5 text-highlight" />
            <select
              value={location.villa}
              onChange={(e) => setLocation({ ...location, villa: e.target.value })}
              className="bg-transparent text-sm font-semibold focus:outline-none"
            >
              {availableVillas.map((villa) => (
                <option key={villa} value={villa} className="bg-slate-900">
                  {villa}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>
    </div>
  );
};

export default LocationFilters;
