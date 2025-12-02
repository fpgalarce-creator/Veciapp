"use client";

import { Building2, ChevronDown, LogIn, MapPin, MoonStar, Sparkles, SunMedium, UserRound } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useAppContext } from "@/context/AppContext";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/explorar", label: "Explorar" },
  { href: "/pymes", label: "Negocios" },
  { href: "/profesionales", label: "Profesionales" },
  { href: "/como-funciona", label: "Cómo funciona" },
];

const cities = [
  "Rancagua",
  "Machalí",
  "Graneros",
];

const villasByCity: Record<string, string[]> = {
  Rancagua: ["Villa Triana", "Centro", "Alameda", "El Tenis", "Villa Cordillera"],
  Machalí: ["San Damián", "La Vinilla", "El Polo", "Valle Hermoso"],
  Graneros: ["Doñihue", "Las Brisas", "Lo Castillo"],
};

const themes = [
  { value: "light", label: "Modo claro", icon: SunMedium },
  { value: "dark", label: "Modo oscuro premium", icon: MoonStar },
  { value: "galaxy", label: "Modo Galaxia", icon: Sparkles },
] as const;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showTheme, setShowTheme] = useState(false);
  const pathname = usePathname();
  const { location, setLocation, theme, setTheme, session } = useAppContext();

  const villas = villasByCity[location.city] ?? [];

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

          <div className="hidden flex-1 items-center justify-center gap-6 xl:flex">
            <div className="flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-white ring-1 ring-white/15">
              <MapPin className="h-5 w-5 text-primary" />
              <div className="flex flex-col">
                <span className="text-xs text-muted">Ciudad</span>
                <select
                  value={location.city}
                  onChange={(e) => {
                    const nextCity = e.target.value;
                    const nextVillas = villasByCity[nextCity] ?? villas;
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
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-white ring-1 ring-white/15">
              <Building2 className="h-5 w-5 text-highlight" />
              <div className="flex flex-col">
                <span className="text-xs text-muted">Villa / Condominio</span>
                <select
                  value={location.villa}
                  onChange={(e) => setLocation({ ...location, villa: e.target.value })}
                  className="bg-transparent text-sm font-semibold focus:outline-none"
                >
                  {villas.map((villa) => (
                    <option key={villa} value={villa} className="bg-slate-900">
                      {villa}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

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
            <Link
              href="/explorar"
              className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
            >
              Explorar
            </Link>
            {session ? (
              <Link
                href="/publicar"
                className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-brand-navy shadow-glow hover:bg-primary-dark"
              >
                Publicar tarea
              </Link>
            ) : (
              <Link
                href="/auth/login"
                className="rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/20 hover:bg-white/25"
              >
                Iniciar sesión
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
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/10 p-3 ring-1 ring-white/15">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <MapPin className="h-4 w-4 text-primary" /> Ciudad
                  </div>
                  <select
                    value={location.city}
                    onChange={(e) => {
                      const nextCity = e.target.value;
                      const nextVillas = villasByCity[nextCity] ?? villas;
                      setLocation({ city: nextCity, villa: nextVillas[0] ?? location.villa });
                    }}
                    className="mt-2 w-full rounded-xl bg-white/5 px-3 py-2 text-sm font-semibold focus:outline-none"
                  >
                    {cities.map((city) => (
                      <option key={city} value={city} className="bg-slate-900">
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="rounded-2xl bg-white/10 p-3 ring-1 ring-white/15">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <Building2 className="h-4 w-4 text-highlight" /> Villa / Condominio
                  </div>
                  <select
                    value={location.villa}
                    onChange={(e) => setLocation({ ...location, villa: e.target.value })}
                    className="mt-2 w-full rounded-xl bg-white/5 px-3 py-2 text-sm font-semibold focus:outline-none"
                  >
                    {villas.map((villa) => (
                      <option key={villa} value={villa} className="bg-slate-900">
                        {villa}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

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
                    href="/publicar"
                    className="rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-brand-navy shadow-glow"
                    onClick={() => setOpen(false)}
                  >
                    Publicar tarea
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
                <Link
                  href="/explorar"
                  className="rounded-xl border border-white/10 px-4 py-3 text-center text-sm font-semibold"
                  onClick={() => setOpen(false)}
                >
                  Explorar
                </Link>
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
