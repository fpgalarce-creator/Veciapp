import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const social = [
  { href: "https://twitter.com", label: "Twitter", icon: Twitter },
  { href: "https://instagram.com", label: "Instagram", icon: Instagram },
  { href: "https://facebook.com", label: "Facebook", icon: Facebook },
  { href: "https://linkedin.com", label: "LinkedIn", icon: Linkedin },
];

const quickLinks = [
  { label: "Inicio", href: "/" },
  { label: "Publicar tarea", href: "/publicar" },
  { label: "Ofrecer servicios", href: "/ofrecer" },
  { label: "PYMEs", href: "/pymes" },
  { label: "Login / Registro", href: "/auth/login" },
];

const legal = [
  { label: "Términos y condiciones", href: "/terminos" },
  { label: "Política de privacidad", href: "/privacidad" },
  { label: "Política de reembolsos", href: "/reembolsos" },
];

const Footer = () => {
  return (
    <footer className="mt-auto w-full bg-gradient-to-br from-slate-950/90 via-slate-900/90 to-black text-white ring-1 ring-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 lg:flex-row lg:items-start lg:justify-between">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-lg font-extrabold text-highlight">
              VA
            </div>
            <div>
              <p className="text-lg font-bold">VeciApp</p>
              <p className="text-sm text-muted">Conecta, colabora y fortalece tu comunidad.</p>
            </div>
          </div>
          <p className="max-w-md text-sm text-muted">
            Tecnología diseñada en Chile para que vecinos, profesionales y PYMEs puedan construir confianza, resolver rápido y
            prosperar en red.
          </p>
          <div className="flex items-center gap-3 text-xs text-highlight">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 ring-1 ring-white/10">
              Hecho con ❤️ desde Chile para tu comunidad.
            </span>
          </div>
        </div>

        <div className="grid flex-1 grid-cols-1 gap-8 text-sm sm:grid-cols-3">
          <div className="space-y-3">
            <h4 className="text-base font-semibold text-white">Links rápidos</h4>
            <div className="flex flex-col gap-2 text-muted">
              {quickLinks.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="text-base font-semibold text-white">Legal</h4>
            <div className="flex flex-col gap-2 text-muted">
              {legal.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="text-base font-semibold text-white">Redes</h4>
            <div className="flex flex-wrap gap-3 text-muted">
              {social.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-sm font-semibold hover:border-white/30 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 bg-white/5 py-4 text-center text-xs text-muted">
        © {new Date().getFullYear()} VeciApp. Inspirado en tu barrio.
      </div>
    </footer>
  );
};

export default Footer;
