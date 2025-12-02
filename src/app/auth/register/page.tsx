"use client";

import { ArrowRight, Building2, Lock, Mail, Phone, Sparkles, UserRound } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";
import { useAppContext } from "@/context/AppContext";

const userTypes = [
  "Quiero publicar tareas",
  "Quiero ofrecer servicios",
  "Soy PyME",
];

export default function RegisterPage() {
  const router = useRouter();
  const { login } = useAppContext();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    villa: "",
    type: userTypes[0],
    password: "",
    confirmPassword: "",
  });
  const particles = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => ({
        id: i,
        left: `${(i * 11) % 100}%`,
        top: `${(i * 23) % 100}%`,
      })),
    [],
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    login({ email: form.email, name: form.name });
    router.push("/");
  };

  return (
    <div className="relative mx-auto flex max-w-4xl flex-col gap-10 rounded-[32px] bg-gradient-to-br from-indigo-600/70 via-slate-900/70 to-emerald-400/30 p-8 shadow-2xl ring-1 ring-white/10">
      <div className="cosmic-overlay">
        {particles.map((particle) => (
          <span key={particle.id} style={{ left: particle.left, top: particle.top }} />
        ))}
      </div>
      <div className="relative space-y-3 text-white">
        <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-semibold ring-1 ring-white/10">
          <Sparkles className="h-4 w-4" /> Perfil verificado
        </p>
        <h1 className="text-3xl font-bold">Crear cuenta</h1>
        <p className="text-sm text-white/80">
          Tu información ayuda a convertirte en un usuario confiable dentro de tu comunidad.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="relative grid gap-4 rounded-3xl bg-white/10 p-6 text-white shadow-xl backdrop-blur-xl ring-1 ring-white/15 sm:grid-cols-2">
        <div className="space-y-2 sm:col-span-2">
          <label className="text-sm font-semibold">Nombre completo</label>
          <div className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
            <UserRound className="h-5 w-5 text-highlight" />
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Nombre y apellido"
              className="w-full bg-transparent text-sm focus:outline-none"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold">Email</label>
          <div className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
            <Mail className="h-5 w-5 text-highlight" />
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="tiveci@correo.com"
              className="w-full bg-transparent text-sm focus:outline-none"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold">Teléfono</label>
          <div className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
            <Phone className="h-5 w-5 text-highlight" />
            <input
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="+56 9 1234 5678"
              className="w-full bg-transparent text-sm focus:outline-none"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold">Ciudad</label>
          <div className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
            <Building2 className="h-5 w-5 text-highlight" />
            <input
              required
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
              placeholder="Rancagua"
              className="w-full bg-transparent text-sm focus:outline-none"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold">Villa / Condominio</label>
          <div className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
            <Building2 className="h-5 w-5 text-highlight" />
            <input
              required
              value={form.villa}
              onChange={(e) => setForm({ ...form, villa: e.target.value })}
              placeholder="Villa Triana"
              className="w-full bg-transparent text-sm focus:outline-none"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold">Tipo de usuario</label>
          <select
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
            className="w-full rounded-2xl bg-white/5 px-4 py-3 text-sm font-semibold ring-1 ring-white/10 focus:outline-none"
          >
            {userTypes.map((type) => (
              <option key={type} value={type} className="bg-slate-900">
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold">Contraseña</label>
          <div className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
            <Lock className="h-5 w-5 text-highlight" />
            <input
              required
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              placeholder="••••••••"
              className="w-full bg-transparent text-sm focus:outline-none"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold">Confirmar contraseña</label>
          <div className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
            <Lock className="h-5 w-5 text-highlight" />
            <input
              required
              type="password"
              value={form.confirmPassword}
              onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
              placeholder="Repite tu contraseña"
              className="w-full bg-transparent text-sm focus:outline-none"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-4 py-3 text-sm font-semibold text-brand-navy shadow-glow"
          >
            Crear cuenta <ArrowRight className="h-4 w-4" />
          </button>
        </div>
        <div className="sm:col-span-2 text-right text-xs text-white/70">
          ¿Ya tienes cuenta? {" "}
          <Link href="/auth/login" className="font-semibold text-highlight underline">
            Iniciar sesión
          </Link>
        </div>
      </form>
    </div>
  );
}
