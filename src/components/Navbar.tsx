"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/explorar", label: "Explorar" },
  { href: "/publicar", label: "Publicar tarea" },
  { href: "/ofrecer", label: "Ofrecer servicios" },
  { href: "/profesionales", label: "Profesionales" },
  { href: "/pymes", label: "PYMEs" },
  { href: "/como-funciona", label: "Cómo funciona" },
  { href: "/ayuda", label: "Ayuda" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 w-full border-b border-gray-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-text">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">V</span>
          <span>VeciApp</span>
        </Link>
        <div className="hidden lg:flex items-center gap-2">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition hover:bg-gray-100 ${
                  active ? "bg-gray-100 text-secondary" : "text-text"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="rounded-lg border border-gray-200 p-2 text-gray-700 hover:bg-gray-100"
            aria-label="Abrir menú"
          >
            <div className="space-y-1">
              <span className="block h-0.5 w-6 bg-current" />
              <span className="block h-0.5 w-6 bg-current" />
              <span className="block h-0.5 w-6 bg-current" />
            </div>
          </button>
        </div>
      </nav>
      {open && (
        <div className="lg:hidden border-t border-gray-200 bg-white shadow-md">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-3">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-lg px-3 py-2 font-semibold transition hover:bg-gray-100 ${
                    active ? "text-secondary" : "text-text"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
