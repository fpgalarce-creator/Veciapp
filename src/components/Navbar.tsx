"use client";

import { ChevronDown, LogIn, MoonStar, Sparkles, SunMedium, UserRound } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useAppContext } from "@/context/AppContext";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/explorar", label: "Explorar" },
  { href: "/pymes", label: "PYMEs" },
  { href: "/profesionales", label: "Profesionales" },
  { href: "/como-funciona", label: "Cómo funciona" },
];

const themes = [
  { value: "light", label: "Modo claro", icon: SunMedium },
  { value: "dark", label: "Modo oscuro premium", icon: MoonStar },
  { value: "galaxy", label: "Modo Galaxia", icon: Sparkles },
] as const;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showTheme, setShowTheme] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme, session } = useAppContext();

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between gap-3 rounded-2xl bg-white/10 px-4 py-4 ring-1 ring-white/10 shadow-lg">
          <Link href="/" className="flex items-center gap-3 text-white">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 font-extrabold text-highlight">
              VA
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-sm font-semibold text-muted">VeciApp</span>
              <span className="text-lg font-bold text-white">Conecta & resuelve</span>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 lg:flex">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    active
                      ? "bg-white/15 text-white ring-1 ring-white/25"
                      : "text-muted hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <div className="relative">
              <button
                onClick={() => setShowTheme((prev) => !prev)}
                className="flex items-center gap-2 rounded-full border border-white/20 px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
              >
                {themes.find((t) => t.value === theme)?.label}
                <ChevronDown className="h-4 w-4" />
              </button>
              {showTheme && (
                <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-white/10 p-2 shadow-2xl backdrop-blur-xl ring-1 ring-white/15">
                  {themes.map((option) => {
                    const Icon = option.icon;
                    return (
                      <button
                        key={option.value}
                        onClick={() => {
                          setTheme(option.value);
                          setShowTheme(false);
                        }}
                        className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm font-semibold text-white transition hover:bg-white/10 ${
                          theme === option.value ? "ring-1 ring-primary/60" : ""
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
              {session ? (
                <Link
                  href="/perfil-demo"
                  className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Mi perfil
                </Link>
              ) : (
                <Link
                  href="/auth/login"
                  className="rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/20 hover:bg-white/25"
                >
                  Iniciar sesión
                </Link>
              )}
              {session?.role === "admin" && (
                <Link
                  href="/admin"
                  className="rounded-full bg-highlight px-4 py-2 text-sm font-semibold text-brand-navy ring-1 ring-white/20 shadow-glow"
                >
                  Panel admin (demo)
                </Link>
              )}
            </div>

          <button
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Abrir menú"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-white lg:hidden"
          >
            <div className="space-y-1">
              <span className="block h-0.5 w-6 bg-current" />
              <span className="block h-0.5 w-6 bg-current" />
              <span className="block h-0.5 w-6 bg-current" />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl px-4 lg:hidden">
          <div className="rounded-2xl bg-white/10 p-4 text-white shadow-xl ring-1 ring-white/10">
            <div className="flex flex-col gap-4">
              {links.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-xl px-3 py-3 text-sm font-semibold transition ${
                      active ? "bg-white/10" : "hover:bg-white/5"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="flex items-center justify-between rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Sparkles className="h-4 w-4" /> Tema
                </div>
                <select
                  value={theme}
                  onChange={(e) => setTheme(e.target.value as typeof theme)}
                  className="rounded-lg bg-white/10 px-3 py-2 text-sm font-semibold focus:outline-none"
                >
                  {themes.map((option) => (
                    <option key={option.value} value={option.value} className="bg-slate-900">
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mt-2 flex flex-col gap-2">
                {session ? (
                  <Link
                    href="/perfil-demo"
                    className="rounded-xl border border-white/10 px-4 py-3 text-center text-sm font-semibold"
                    onClick={() => setOpen(false)}
                  >
                    Mi perfil
                  </Link>
                ) : (
                  <Link
                    href="/auth/login"
                    className="rounded-xl bg-white/15 px-4 py-3 text-center text-sm font-semibold text-white ring-1 ring-white/15"
                    onClick={() => setOpen(false)}
                  >
                    <span className="inline-flex items-center justify-center gap-2">
                      <LogIn className="h-4 w-4" /> Iniciar sesión
                    </span>
                  </Link>
                )}
                {session?.role === "admin" && (
                  <Link
                    href="/admin"
                    className="rounded-xl bg-highlight px-4 py-3 text-center text-sm font-semibold text-brand-navy ring-1 ring-white/20"
                    onClick={() => setOpen(false)}
                  >
                    Panel admin (demo)
                  </Link>
                )}
                {session && (
                  <div className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-xs text-muted">
                    <UserRound className="h-4 w-4" />
                    Sesión activa
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
