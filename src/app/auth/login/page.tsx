"use client";

import { Mail, Lock, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";
import { useAppContext } from "@/context/AppContext";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAppContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const particles = useMemo(
    () =>
      Array.from({ length: 16 }).map((_, i) => ({
        id: i,
        left: `${(i * 13) % 100}%`,
        top: `${(i * 29) % 100}%`,
      })),
    [],
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    login({ email });
    router.push("/");
  };

  return (
    <div className="relative mx-auto flex max-w-4xl flex-col gap-10 rounded-[32px] bg-gradient-to-br from-indigo-600/70 via-slate-900/70 to-fuchsia-500/30 p-8 shadow-2xl ring-1 ring-white/10">
      <div className="cosmic-overlay">
        {particles.map((particle) => (
          <span key={particle.id} style={{ left: particle.left, top: particle.top }} />
        ))}
      </div>
      <div className="relative space-y-3 text-white">
        <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-semibold ring-1 ring-white/10">
          <Sparkles className="h-4 w-4" /> Acceso premium
        </p>
        <h1 className="text-3xl font-bold">Iniciar sesión</h1>
        <p className="text-sm text-white/80">Ingresa a tu cuenta para publicar tareas, ofrecer servicios y seguir tu reputación.</p>
      </div>
      <form onSubmit={handleSubmit} className="relative space-y-4 rounded-3xl bg-white/10 p-6 text-white shadow-xl backdrop-blur-xl ring-1 ring-white/15">
        <div className="space-y-2">
          <label className="text-sm font-semibold">Email</label>
          <div className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
            <Mail className="h-5 w-5 text-highlight" />
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tiveci@correo.com"
              className="w-full bg-transparent text-sm focus:outline-none"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold">Contraseña</label>
          <div className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
            <Lock className="h-5 w-5 text-highlight" />
            <input
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-transparent text-sm focus:outline-none"
            />
          </div>
        </div>
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-4 py-3 text-sm font-semibold text-brand-navy shadow-glow"
        >
          Iniciar sesión <ArrowRight className="h-4 w-4" />
        </button>
        <div className="flex items-center justify-between text-xs text-white/70">
          <span>¿No tienes cuenta?</span>
          <Link href="/auth/register" className="font-semibold text-highlight underline">
            Crear cuenta
          </Link>
        </div>
      </form>
    </div>
  );
}
