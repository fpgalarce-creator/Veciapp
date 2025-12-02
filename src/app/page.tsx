"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  HandCoins,
  HeartHandshake,
  LocateFixed,
  LucideIcon,
  Sparkles,
  Users,
} from "lucide-react";
import { useAppContext } from "@/context/AppContext";

const tasks = [
  {
    id: 1,
    title: "Mantención eléctrica express",
    city: "Rancagua",
    villa: "Centro",
    price: "$28.000",
    time: "Hoy 18:30",
    tag: "Urgente",
  },
  {
    id: 2,
    title: "Jardín y riego automátizado",
    city: "Machalí",
    villa: "San Damián",
    price: "$45.000",
    time: "Mañana 10:00",
    tag: "Sustentable",
  },
  {
    id: 3,
    title: "Clases de reforzamiento PSU",
    city: "Rancagua",
    villa: "Villa Cordillera",
    price: "$18.000",
    time: "Sábado 11:00",
    tag: "Educación",
  },
  {
    id: 4,
    title: "Paseo premium para mascota",
    city: "Graneros",
    villa: "Las Brisas",
    price: "$12.000",
    time: "Diario",
    tag: "Mascotas",
  },
];

const professionals = [
  {
    id: 1,
    name: "Camila Rivas",
    specialty: "Gasfitería certificada",
    city: "Rancagua",
    villa: "El Tenis",
    badge: "Top veci",
    price: "$25.000",
  },
  {
    id: 2,
    name: "Diego Vargas",
    specialty: "Electricista residencial",
    city: "Machalí",
    villa: "El Polo",
    badge: "Energía segura",
    price: "$30.000",
  },
  {
    id: 3,
    name: "Fernanda Pinto",
    specialty: "Chef a domicilio",
    city: "Rancagua",
    villa: "Centro",
    badge: "Experiencia gourmet",
    price: "$38.000",
  },
];

const pymes = [
  {
    id: 1,
    name: "Cafetería Andina",
    city: "Rancagua",
    villa: "Centro",
    detail: "Café de especialidad + brunch local",
  },
  {
    id: 2,
    name: "Huerta Valle Verde",
    city: "Machalí",
    villa: "San Damián",
    detail: "Verduras agroecológicas por caja",
  },
  {
    id: 3,
    name: "Frutos del Teniente",
    city: "Graneros",
    villa: "Lo Castillo",
    detail: "Quesos y cecinas de productores locales",
  },
];

const testimonials = [
  {
    name: "Valentina", city: "Rancagua", quote: "Encontré a Diego en minutos y dejó mi casa iluminada. Pago directo y cero estrés." },
  { name: "Rodrigo", city: "Machalí", quote: "Publicar mi huerta en VeciApp me trajo clientes fieles en el barrio." },
  { name: "María", city: "Graneros", quote: "Los vecinos confían porque todo parte con transparencia y reputación." },
];

const logos = ["Andes Lab", "RoboTech", "Barrio Network", "Chaski", "Mutual Veci", "Fondo Innovación"];

type Slide = {
  id: number;
  title: string;
  description: string;
  action?: string;
  variant: "main" | "services" | "oficios" | "pymes";
};

const slides: Slide[] = [
  {
    id: 1,
    title: "Resuelve tareas, gana dinero y apoya a tu comunidad",
    description: "Publica lo que necesitas, ofrece tu talento y haz que tu barrio prospere con confianza.",
    action: "Buscar ahora",
    variant: "main",
  },
  {
    id: 2,
    title: "Servicios publicados recientes",
    description: "Todo lo que los vecis están pidiendo y ofreciendo cerca de ti.",
    variant: "services",
  },
  {
    id: 3,
    title: "Oficios destacados",
    description: "Profesionales confiables con reputación impecable en tu zona.",
    variant: "oficios",
  },
  {
    id: 4,
    title: "PYMEs que mueven tu barrio",
    description: "Emprendimientos locales listos para sorprenderte.",
    variant: "pymes",
  },
];

const StepCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) => (
  <div className="relative flex flex-col items-center gap-3 rounded-3xl bg-white/5 px-6 py-8 text-center shadow-xl backdrop-blur-xl ring-1 ring-white/10">
    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-highlight ring-1 ring-white/10">
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <p className="text-sm text-muted">{description}</p>
  </div>
);

const matchesLocation = (city: string, villa: string, currentCity: string, currentVilla: string) => {
  const sameCity = city === currentCity;
  const sameVilla = villa === currentVilla;
  return sameCity && sameVilla;
};

export default function HomePage() {
  const { location, session } = useAppContext();
  const [activeSlide, setActiveSlide] = useState(0);
  const [query, setQuery] = useState("");
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        left: `${(i * 17) % 100}%`,
        top: `${(i * 21) % 100}%`,
      })),
    [],
  );

  const filteredTasks = useMemo(
    () => tasks.filter((task) => matchesLocation(task.city, task.villa, location.city, location.villa)),
    [location],
  );

  const filteredProfessionals = useMemo(
    () => professionals.filter((pro) => matchesLocation(pro.city, pro.villa, location.city, location.villa)),
    [location],
  );

  const filteredPymes = useMemo(
    () => pymes.filter((pyme) => matchesLocation(pyme.city, pyme.villa, location.city, location.villa)),
    [location],
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const renderSlide = (slide: Slide) => {
    if (slide.variant === "services") {
      return (
        <div className="grid gap-4 md:grid-cols-2">
          {filteredTasks.map((task) => (
            <div key={task.id} className="card-premium relative overflow-hidden">
              <div className="absolute right-3 top-3 rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary ring-1 ring-primary/30">
                {task.tag}
              </div>
              <h3 className="text-lg font-semibold text-white">{task.title}</h3>
              <p className="text-sm text-muted">{task.city} • {task.villa}</p>
              <div className="mt-4 flex items-center justify-between text-sm text-white">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 ring-1 ring-white/10">
                  <LocateFixed className="h-4 w-4 text-highlight" /> {task.time}
                </span>
                <span className="font-semibold text-primary">{task.price}</span>
              </div>
            </div>
          ))}
          {filteredTasks.length === 0 && (
            <p className="text-sm text-muted">No hay tareas en esta ubicación aún. ¡Publica la primera!</p>
          )}
        </div>
      );
    }

    if (slide.variant === "oficios") {
      return (
        <div className="grid gap-4 md:grid-cols-3">
          {filteredProfessionals.map((pro) => (
            <div key={pro.id} className="card-premium space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-highlight">{pro.badge}</p>
                <BadgeCheck className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-white">{pro.name}</h3>
              <p className="text-sm text-muted">{pro.specialty}</p>
              <p className="text-xs text-muted">{pro.city} • {pro.villa}</p>
              <div className="flex items-center justify-between rounded-2xl bg-white/5 px-3 py-2 text-sm">
                <span className="text-muted">Desde</span>
                <span className="font-semibold text-primary">{pro.price}</span>
              </div>
            </div>
          ))}
          {filteredProfessionals.length === 0 && <p className="text-sm text-muted">Pronto verás especialistas en tu zona.</p>}
        </div>
      );
    }

    if (slide.variant === "pymes") {
      return (
        <div className="grid gap-4 md:grid-cols-3">
          {filteredPymes.map((pyme) => (
            <div key={pyme.id} className="card-premium space-y-3">
              <h3 className="text-xl font-semibold text-white">{pyme.name}</h3>
              <p className="text-sm text-muted">{pyme.detail}</p>
              <p className="text-xs text-muted">{pyme.city} • {pyme.villa}</p>
              <div className="flex items-center gap-2 text-sm text-primary">
                <HeartHandshake className="h-4 w-4" />
                Compras que quedan en tu barrio
              </div>
            </div>
          ))}
          {filteredPymes.length === 0 && <p className="text-sm text-muted">Aún no hay PYMEs aquí. ¡Invita a tu favorito!</p>}
        </div>
      );
    }

    return (
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-highlight ring-1 ring-white/10">
            Nueva era VeciApp
          </div>
          <h1 className="text-4xl font-extrabold leading-tight text-white lg:text-5xl">{slide.title}</h1>
          <p className="max-w-xl text-lg text-muted">{slide.description}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="flex flex-1 items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 ring-1 ring-white/10">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="¿Qué necesitas hoy?"
                className="w-full bg-transparent text-base text-white placeholder:text-white/50 focus:outline-none"
              />
              <button className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-brand-navy shadow-glow">
                Buscar
              </button>
            </div>
            <div className="flex flex-wrap gap-3 text-sm font-semibold">
              {session && (
                <Link
                  href="/publicar"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-highlight px-5 py-3 text-brand-navy ring-1 ring-white/15"
                >
                  Publicar tarea
                  <ArrowRight className="h-4 w-4" />
                </Link>
              )}
              <Link
                href="/ofrecer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/15 px-5 py-3 text-white ring-1 ring-white/15"
              >
                Ofrecer mis servicios
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 text-xs text-muted">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/10">
              <BadgeCheck className="h-4 w-4 text-primary" /> Usuarios verificados
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/10">
              <Sparkles className="h-4 w-4 text-highlight" /> Economía circular real
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/10">
              <HandCoins className="h-4 w-4 text-primary" /> Paga justo y local
            </span>
          </div>
        </div>
        <div className="card-premium relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-highlight/10 to-transparent" aria-hidden />
          <div className="relative space-y-4">
            <h3 className="text-lg font-semibold text-white">Activación rápida</h3>
            <div className="space-y-3 text-sm text-muted">
              <p>1. Crea tu perfil con reputación real.</p>
              <p>2. Define tu disponibilidad y cobertura.</p>
              <p>3. Conecta con vecis confiables y cobra sin esperas.</p>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4 text-sm text-white">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/20 text-primary">24/7</div>
              <div>
                <p className="font-semibold text-white">Atención premium</p>
                <p className="text-muted">Tu comunidad, siempre contigo.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-16 pb-6">
      <section className="relative overflow-hidden rounded-[34px] bg-gradient-to-br from-indigo-600/80 via-slate-900/70 to-emerald-400/40 p-8 sm:p-12 shadow-2xl ring-1 ring-white/10">
        <div className="cosmic-overlay">
          {particles.map((particle) => (
            <span key={particle.id} style={{ left: particle.left, top: particle.top }} />
          ))}
        </div>
        <div className="relative space-y-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/10">
              <Users className="h-4 w-4 text-highlight" /> Comunidad premium activa
            </div>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <span className="h-2 w-2 rounded-full bg-emerald-400" /> En línea ahora
            </div>
          </div>
          <div className="space-y-10">
            {renderSlide(slides[activeSlide])}
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    onClick={() => setActiveSlide(index)}
                    className={`h-2 w-10 rounded-full transition ${
                      index === activeSlide ? "bg-white" : "bg-white/30 hover:bg-white/60"
                    }`}
                    aria-label={`Ir a slide ${index + 1}`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-3 text-sm text-white/80">
                <LocateFixed className="h-4 w-4" /> Filtrado por {location.city} • {location.villa}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold text-highlight">Empresas y personas que confían en nosotros</p>
          <h2 className="text-3xl font-bold text-white">Reputación construida en comunidad</h2>
        </div>
        <div className="grid gap-4 rounded-3xl bg-white/5 p-6 backdrop-blur-lg ring-1 ring-white/10 lg:grid-cols-2">
          <div className="flex flex-wrap items-center gap-3">
            {logos.map((logo) => (
              <div
                key={logo}
                className="flex flex-1 items-center justify-center rounded-2xl bg-white/5 px-4 py-3 text-sm font-semibold text-white ring-1 ring-white/10"
              >
                {logo}
              </div>
            ))}
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="card-premium text-sm">
                <div className="flex items-center gap-2 text-highlight">
                  <Users className="h-4 w-4" /> {testimonial.city}
                </div>
                <p className="mt-2 text-white">“{testimonial.quote}”</p>
                <p className="mt-3 text-xs text-muted">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-8 rounded-[30px] bg-white/5 p-8 shadow-xl backdrop-blur-xl ring-1 ring-white/10">
        <div className="flex flex-col gap-2 text-center">
          <p className="text-sm font-semibold text-highlight">Economía circular aplicada</p>
          <h2 className="text-3xl font-bold text-white">Sigue tres pasos simples</h2>
          <p className="text-muted">Publica, conecta y reciproca para fortalecer la confianza en tu barrio.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <StepCard
            icon={Sparkles}
            title="1️⃣ Publica"
            description="Cuenta lo que necesitas o el servicio que ofreces con transparencia y estilo."
          />
          <StepCard
            icon={Building2}
            title="2️⃣ Conecta"
            description="Encuentra vecinos confiables con buena reputación y ubicación precisa."
          />
          <StepCard
            icon={HeartHandshake}
            title="3️⃣ Reciproca"
            description="Evalúa, mejora la comunidad y fortalece la economía local con cada intercambio."
          />
        </div>
      </section>
    </div>
  );
}
