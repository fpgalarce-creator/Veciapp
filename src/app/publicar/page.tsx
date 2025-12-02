"use client";

import SectionTitle from "@/components/SectionTitle";
import { useAppContext } from "@/context/AppContext";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import LocationFilters from "@/components/LocationFilters";

const initialForm = {
  title: "",
  description: "",
  category: "Limpieza",
  sector: "",
  datetime: "",
  priceMin: "",
  priceMax: "",
  photo: "",
};

export default function PublishPage() {
  const { session } = useAppContext();
  const router = useRouter();
  const [form, setForm] = useState(initialForm);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!session) {
      router.replace("/auth/login");
    }
  }, [router, session]);

  if (!session) {
    return <div className="text-center text-white">Redirigiendo a inicio de sesión...</div>;
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("Tu tarea ha sido publicada");
    setForm(initialForm);
  };

  return (
    <div className="space-y-6">
      <SectionTitle
        title="Publicar una nueva tarea"
        subtitle="Describe tu necesidad para que los vecis puedan ayudarte"
      />
      <LocationFilters />
      <form onSubmit={handleSubmit} className="section-card space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-text">Título</label>
            <input
              required
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:border-secondary focus:outline-none"
              placeholder="Ej: Necesito lavar mi auto"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-text">Categoría</label>
            <select
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:border-secondary focus:outline-none"
            >
              {['Limpieza','Mascotas','Jardinería','Educación','Otros'].map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-text">Descripción</label>
          <textarea
            required
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:border-secondary focus:outline-none"
            rows={4}
            placeholder="Cuenta los detalles, materiales, duración, etc."
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-text">Dirección / sector</label>
            <input
              required
              value={form.sector}
              onChange={(e) => setForm({ ...form, sector: e.target.value })}
              className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:border-secondary focus:outline-none"
              placeholder="Villa, barrio, referencia"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-text">Fecha y hora aproximada</label>
            <input
              required
              value={form.datetime}
              onChange={(e) => setForm({ ...form, datetime: e.target.value })}
              className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:border-secondary focus:outline-none"
              placeholder="Ej: Sábado 10:00"
            />
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-text">Precio mínimo</label>
            <input
              required
              type="number"
              value={form.priceMin}
              onChange={(e) => setForm({ ...form, priceMin: e.target.value })}
              className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:border-secondary focus:outline-none"
              placeholder="$0"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-text">Precio máximo</label>
            <input
              required
              type="number"
              value={form.priceMax}
              onChange={(e) => setForm({ ...form, priceMax: e.target.value })}
              className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:border-secondary focus:outline-none"
              placeholder="$0"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-text">Subir foto</label>
          <input
            type="file"
            onChange={(e) => setForm({ ...form, photo: e.target.value })}
            className="w-full rounded-lg border border-dashed border-gray-300 px-3 py-2"
          />
        </div>
        <div className="flex items-center justify-between">
          <p className="text-gray-600 text-sm">Tu contacto real se coordina directamente con el veci asignado.</p>
          <button
            type="submit"
            className="rounded-xl bg-primary px-6 py-3 text-white font-semibold shadow-soft hover:bg-primary/90 transition"
          >
            Publicar tarea
          </button>
        </div>
        {message && (
          <div className="rounded-lg bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
            {message}
          </div>
        )}
      </form>
    </div>
  );
}
