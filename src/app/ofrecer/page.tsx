"use client";

import SectionTitle from "@/components/SectionTitle";
import { FormEvent, useState } from "react";

const initialForm = {
  name: "",
  description: "",
  category: "Gasfiter",
  sectors: "",
  price: "",
  photo: "",
  accepted: false,
};

export default function OfferPage() {
  const [form, setForm] = useState(initialForm);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("Tu perfil de servicios ha sido enviado");
    setForm(initialForm);
  };

  return (
    <div className="space-y-6">
      <SectionTitle
        title="Ofrecer mis servicios"
        subtitle="Crea tu ficha para que los vecinos te encuentren"
      />
      <form onSubmit={handleSubmit} className="section-card space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-text">Nombre completo</label>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:border-secondary focus:outline-none"
              placeholder="Tu nombre"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-text">Categoría de oficio</label>
            <select
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:border-secondary focus:outline-none"
            >
              {["Gasfiter", "Electricista", "Maestro", "Profesor particular", "Manicure", "Jardinero", "Otros"].map(
                (cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                )
              )}
            </select>
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-text">Descripción corta</label>
          <textarea
            required
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:border-secondary focus:outline-none"
            rows={3}
            placeholder="Cuenta en qué te especializas y tu experiencia"
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-text">Sectores donde trabajas</label>
            <input
              required
              value={form.sectors}
              onChange={(e) => setForm({ ...form, sectors: e.target.value })}
              className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:border-secondary focus:outline-none"
              placeholder="Ej: Centro, Machalí, Graneros"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-text">Precio base por hora/servicio</label>
            <input
              required
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:border-secondary focus:outline-none"
              placeholder="$0"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-text">Foto de perfil</label>
          <input
            type="file"
            onChange={(e) => setForm({ ...form, photo: e.target.value })}
            className="w-full rounded-lg border border-dashed border-gray-300 px-3 py-2"
          />
        </div>
        <label className="flex items-center gap-3 rounded-lg bg-gray-50 px-4 py-3 text-sm text-gray-700">
          <input
            type="checkbox"
            checked={form.accepted}
            onChange={(e) => setForm({ ...form, accepted: e.target.checked })}
            required
            className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
          />
          Acepto las condiciones del servicio
        </label>
        <div className="flex items-center justify-end">
          <button
            type="submit"
            className="rounded-xl bg-secondary px-6 py-3 text-white font-semibold shadow-soft hover:bg-secondary/90 transition"
          >
            Enviar ficha
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
