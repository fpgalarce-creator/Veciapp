"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/explorar", label: "Explorar" },
  { href: "/pymes", label: "Negocios" },
  { href: "/profesionales", label: "Profesionales" },
  { href: "/como-funciona", label: "Cómo funciona" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between gap-3 rounded-2xl bg-brand-navy/90 px-4 py-4 ring-1 ring-white/10 shadow-lg">
          <Link href="/" className="flex items-center gap-3 text-white">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 font-extrabold text-highlight">
              VA
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-sm font-semibold text-muted">VeciApp</span>
              <span className="text-lg font-bold text-white">Talento local</span>
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
                      ? "bg-white/10 text-white ring-1 ring-white/20"
                      : "text-muted hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/explorar"
              className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
            >
              Explorar
            </Link>
            <Link
              href="/ofrecer"
              className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-brand-navy shadow-glow hover:bg-primary-dark"
            >
              Ofrecer mis servicios
            </Link>
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
          <div className="rounded-2xl bg-brand-muted/80 p-4 text-white shadow-xl ring-1 ring-white/10">
            <div className="flex flex-col gap-2">
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
              <div className="mt-2 flex flex-col gap-2">
                <Link
                  href="/ofrecer"
                  className="rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-brand-navy shadow-glow"
                  onClick={() => setOpen(false)}
                >
                  Ofrecer mis servicios
                </Link>
                <Link
                  href="/explorar"
                  className="rounded-xl border border-white/10 px-4 py-3 text-center text-sm font-semibold"
                  onClick={() => setOpen(false)}
                >
                  Explorar
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
