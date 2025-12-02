"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  HandCoins,
  HeartHandshake,
  LocateFixed,
  LucideIcon,
  Sparkles,
  Users,
} from "lucide-react";
import CircularEconomySteps from "@/components/CircularEconomySteps";
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
    title: "Tareas publicadas cerca de ti",
    description: "Servicios y tareas activos listos para que postules hoy.",
    variant: "services",
  },
  {
    id: 3,
    title: "Vecis expertos y profesionales confiables",
    description: "Profesionales con badges y recomendaciones reales de tu zona.",
    variant: "oficios",
  },
  {
    id: 4,
    title: "PYMEs y emprendedores de tu barrio",
    description: "Emprendimientos locales con reputación vecinal.",
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
        <div className="grid h-full items-stretch gap-8 rounded-[28px] bg-white/5 p-6 sm:p-8 shadow-2xl ring-1 ring-white/10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-between gap-6">
            <div className="space-y-3">
              <p className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-highlight ring-1 ring-white/10">
                Servicios disponibles
              </p>
              <h2 className="text-3xl font-bold text-white">Tareas publicadas cerca de ti</h2>
              <p className="max-w-xl text-white/80">
                Explora lo que tus vecis necesitan ahora mismo y postula con confianza.
              </p>
              <Link
                href="/explorar"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-highlight px-5 py-3 text-sm font-semibold text-brand-navy ring-1 ring-white/10 shadow-glow"
              >
                Ver todos los servicios
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="flex flex-wrap gap-3 text-xs text-white/80">
              <span className="rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/10">Cobertura por barrio</span>
              <span className="rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/10">Pagos locales y rápidos</span>
            </div>
          </div>
          <div className="relative rounded-3xl bg-white/5 p-4 ring-1 ring-white/10">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/15 via-highlight/10 to-transparent" aria-hidden />
            <div className="relative grid gap-4 md:grid-cols-2">
              {filteredTasks.slice(0, 3).map((task) => (
                <div key={task.id} className="rounded-2xl border border-white/10 bg-white/10 p-4 shadow-xl">
                  <div className="flex items-center justify-between text-xs text-white/70">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10">
                      <LocateFixed className="h-4 w-4 text-highlight" /> {task.city} • {task.villa}
                    </span>
                    <span className="rounded-full bg-primary/20 px-2 py-1 text-[11px] font-semibold text-primary ring-1 ring-primary/30">
                      {task.tag}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-white">{task.title}</h3>
                  <div className="mt-3 flex items-center justify-between text-sm text-white/80">
                    <span className="rounded-full bg-white/10 px-3 py-2 ring-1 ring-white/10">{task.time}</span>
                    <span className="font-semibold text-primary">{task.price}</span>
                  </div>
                </div>
              ))}
              {filteredTasks.length === 0 && (
                <p className="text-sm text-white/80">No hay tareas en esta ubicación aún. ¡Publica la primera!</p>
              )}
            </div>
          </div>
        </div>
      );
    }

    if (slide.variant === "oficios") {
      return (
        <div className="grid h-full items-stretch gap-8 rounded-[28px] bg-white/5 p-6 sm:p-8 shadow-2xl ring-1 ring-white/10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-between gap-6">
            <div className="space-y-3">
              <p className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-highlight ring-1 ring-white/10">
                Oficios / profesionales
              </p>
              <h2 className="text-3xl font-bold text-white">Vecis expertos y profesionales confiables</h2>
              <p className="max-w-xl text-white/80">Agenda con especialistas con reputación validada en tu comunidad.</p>
              <Link
                href="/profesionales"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-highlight px-5 py-3 text-sm font-semibold text-brand-navy ring-1 ring-white/10 shadow-glow"
              >
                Ver directorio de profesionales
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="flex flex-wrap gap-3 text-xs text-white/80">
              <span className="rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/10">Badges Top Veci</span>
              <span className="rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/10">Recomendados por tu barrio</span>
            </div>
          </div>
          <div className="relative rounded-3xl bg-white/5 p-4 ring-1 ring-white/10">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-highlight/10 via-primary/10 to-transparent" aria-hidden />
            <div className="relative grid gap-4 md:grid-cols-3">
              {filteredProfessionals.slice(0, 3).map((pro) => (
                <div key={pro.id} className="rounded-2xl border border-white/10 bg-white/10 p-4 shadow-xl">
                  <div className="flex items-center justify-between text-xs text-white/70">
                    <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10">{pro.city}</span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary/15 px-2 py-1 text-[11px] font-semibold text-primary ring-1 ring-primary/30">
                      <BadgeCheck className="h-4 w-4" /> {pro.badge ?? "Top Veci"}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-white">{pro.name}</h3>
                  <p className="text-sm text-white/70">{pro.specialty}</p>
                  <p className="text-xs text-white/60">{pro.villa}</p>
                  <div className="mt-3 flex items-center justify-between rounded-2xl bg-white/10 px-3 py-2 text-sm text-white">
                    <span>Desde</span>
                    <span className="font-semibold text-primary">{pro.price}</span>
                  </div>
                </div>
              ))}
              {filteredProfessionals.length === 0 && <p className="text-sm text-white/80">Pronto verás especialistas en tu zona.</p>}
            </div>
          </div>
        </div>
      );
    }

    if (slide.variant === "pymes") {
      return (
        <div className="grid h-full items-stretch gap-8 rounded-[28px] bg-white/5 p-6 sm:p-8 shadow-2xl ring-1 ring-white/10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-between gap-6">
            <div className="space-y-3">
              <p className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-highlight ring-1 ring-white/10">
                PYMEs y emprendedores
              </p>
              <h2 className="text-3xl font-bold text-white">PYMEs y emprendedores de tu barrio</h2>
              <p className="max-w-xl text-white/80">Descubre los negocios que mantienen viva la economía local.</p>
              <Link
                href="/pymes"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-highlight px-5 py-3 text-sm font-semibold text-brand-navy ring-1 ring-white/10 shadow-glow"
              >
                Ver PYMEs destacadas
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="flex flex-wrap gap-3 text-xs text-white/80">
              <span className="rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/10">Compras que quedan en tu barrio</span>
              <span className="rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/10">Emprendimientos con reputación</span>
            </div>
          </div>
          <div className="relative rounded-3xl bg-white/5 p-4 ring-1 ring-white/10">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-300/20 via-primary/10 to-transparent" aria-hidden />
            <div className="relative grid gap-4 md:grid-cols-3">
              {filteredPymes.slice(0, 3).map((pyme) => (
                <div key={pyme.id} className="rounded-2xl border border-white/10 bg-white/10 p-4 shadow-xl">
                  <h3 className="text-lg font-semibold text-white">{pyme.name}</h3>
                  <p className="text-sm text-white/70">{pyme.detail}</p>
                  <p className="text-xs text-white/60">{pyme.city} • {pyme.villa}</p>
                  <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-highlight ring-1 ring-white/15">
                    <HeartHandshake className="h-4 w-4" />
                    Comunidad agradecida
                  </div>
                </div>
              ))}
              {filteredPymes.length === 0 && <p className="text-sm text-white/80">Aún no hay PYMEs aquí. ¡Invita a tu favorito!</p>}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="grid h-full items-stretch gap-8 rounded-[28px] bg-white/5 p-6 sm:p-8 shadow-2xl ring-1 ring-white/10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col justify-between gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-highlight ring-1 ring-white/10">
              Nueva era VeciApp
            </div>
            <h1 className="max-w-[680px] text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              {slide.title}
            </h1>
            <p className="max-w-2xl text-base text-white/80 sm:text-lg">{slide.description}</p>
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
          </div>
          <div className="flex flex-wrap gap-3 text-xs text-white/80">
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
            <div className="space-y-3 text-sm text-white/80">
              <p>1. Crea tu perfil con reputación real.</p>
              <p>2. Define tu disponibilidad y cobertura.</p>
              <p>3. Conecta con vecis confiables y cobra sin esperas.</p>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4 text-sm text-white">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/20 text-primary">24/7</div>
              <div>
                <p className="font-semibold text-white">Atención premium</p>
                <p className="text-white/70">Tu comunidad, siempre contigo.</p>
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
            <div className="relative overflow-hidden rounded-[28px] bg-white/5 shadow-2xl ring-1 ring-white/10">
              <div className="absolute inset-0 space-time-warp" aria-hidden />
              <div className="relative min-h-[560px] p-2 sm:p-4">
                {slides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-700 ${
                      index === activeSlide ? "opacity-100" : "opacity-0"
                    }`}
                    aria-hidden={index !== activeSlide}
                  >
                    <div className="flex h-full flex-col rounded-[24px] bg-gradient-to-br from-white/5 via-white/0 to-white/10 p-4 sm:p-6">
                      <div className="flex-1">
                        {renderSlide(slide)}
                      </div>
                      <div className="mt-6 flex items-center justify-between">
                        <div className="flex gap-2 rounded-full bg-white/5 p-2 ring-1 ring-white/10">
                          {slides.map((slideItem, controlIndex) => (
                            <button
                              key={slideItem.id}
                              onClick={() => setActiveSlide(controlIndex)}
                              className={`h-2 w-10 rounded-full transition ${
                                controlIndex === activeSlide ? "bg-white" : "bg-white/30 hover:bg-white/60"
                              }`}
                              aria-label={`Ir a slide ${controlIndex + 1}`}
                            />
                          ))}
                        </div>
                        <div className="flex items-center gap-3 rounded-full bg-white/5 px-4 py-2 text-sm text-white/80 ring-1 ring-white/10">
                          <LocateFixed className="h-4 w-4" /> Filtrado por {location.city} • {location.villa}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CircularEconomySteps className="shadow-2xl" StepCardComponent={StepCard} />

      <section className="space-y-6">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold text-highlight">Empresas y personas que confían en VeciApp</p>
          <h2 className="text-3xl font-bold text-white">Reputación construida en comunidad</h2>
          <p className="text-white/75">La reputación se construye con cada tarea completada en tu barrio.</p>
        </div>
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-2xl ring-1 ring-white/10 backdrop-blur-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-highlight/10 to-transparent" aria-hidden />
          <div className="relative space-y-6">
            <div className="flex flex-wrap gap-3">
              {logos.map((logo) => (
                <div
                  key={logo}
                  className="rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white ring-1 ring-white/15 shadow-lg"
                >
                  {logo}
                </div>
              ))}
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {testimonials.map((testimonial) => (
                <div key={testimonial.name} className="rounded-3xl border border-white/10 bg-white/10 p-5 text-sm text-white shadow-2xl ring-1 ring-white/10">
                  <div className="flex items-center justify-between text-xs text-amber-200">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10">
                      <Users className="h-4 w-4" /> {testimonial.city}
                    </span>
                    <LocateFixed className="h-4 w-4 text-highlight" />
                  </div>
                  <p className="mt-3 text-base font-semibold leading-relaxed text-white">“{testimonial.quote}”</p>
                  <p className="mt-3 text-xs text-white/60">{testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
