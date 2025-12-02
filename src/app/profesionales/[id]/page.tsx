import Link from "next/link";
import { BadgeCheck, Hammer, MapPin, ShieldCheck, Sparkles, Star, Wrench } from "lucide-react";
import StarsRating from "@/components/StarsRating";
import { professionals } from "@/data/professionals";

const gallery = [
  { title: "Cambio de tablero", description: "Reemplazo completo con protecciones nuevas" },
  { title: "Iluminación led", description: "Instalación empotrada y sensores de movimiento" },
  { title: "Urgencia nocturna", description: "Corte de energía resuelto en 40 minutos" },
  { title: "Mantenimiento anual", description: "Chequeo de conexiones y limpieza de tablero" },
];

const testimonials = [
  { author: "Valentina", rating: 5, text: "Llegó en 20 minutos y dejó todo seguro. Explica cada paso." },
  { author: "Matías", rating: 4.8, text: "Ordenó el cableado y cobró lo justo. Recomendado." },
  { author: "Patricia", rating: 5, text: "Atención cálida, respetuosa y muy profesional." },
];

export default function ProfessionalProfilePage({ params }: { params: { id: string } }) {
  const professional = professionals.find((pro) => pro.id === Number(params.id)) ?? professionals[0];

  return (
    <div className="space-y-8">
      <div className="relative overflow-hidden rounded-[32px] bg-white/5 p-6 shadow-2xl ring-1 ring-white/10 backdrop-blur-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-transparent to-emerald-400/10" aria-hidden />
        <div className="relative grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col items-center gap-4 rounded-3xl bg-white/5 p-5 text-center ring-1 ring-white/10">
            <div className="relative h-32 w-32 overflow-hidden rounded-full ring-4 ring-emerald-400/40">
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${professional.avatar ?? '/images/professionals/carlos.jpg'})` }}
                aria-label={professional.name}
              />
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500/90 px-3 py-1 text-xs font-semibold text-brand-navy shadow-[0_0_25px_rgba(16,185,129,0.45)]">
                Top Veci
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2 text-sm text-emerald-100">
                <ShieldCheck className="h-4 w-4" /> Perfil verificado
              </div>
              <h1 className="text-3xl font-bold text-white">{professional.name}</h1>
              <p className="text-lg text-white/80">{professional.role}</p>
              <div className="flex items-center justify-center gap-3">
                <StarsRating value={professional.rating} />
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80 ring-1 ring-white/15">
                  {professional.rating.toFixed(1)}
                </span>
              </div>
              <div className="flex flex-wrap justify-center gap-2 text-xs text-white/75">
                {professional.sectors.split(",").map((zone) => (
                  <span
                    key={zone.trim()}
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10"
                  >
                    <MapPin className="h-3.5 w-3.5 text-highlight" /> {zone.trim()}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 ring-1 ring-white/10">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-highlight">
                <Sparkles className="h-4 w-4" /> Sobre mí
              </div>
              <p className="text-base leading-relaxed text-white/85">
                Soy especialista en instalaciones y urgencias residenciales. Combino normas SEC con una mirada humana:
                llego puntual, explico cada paso y dejo recomendaciones para que tu hogar quede seguro y eficiente.
              </p>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 ring-1 ring-white/10">
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-emerald-200">
                  <BadgeCheck className="h-4 w-4" /> Rangos y servicios
                </div>
                <div className="space-y-2 text-sm text-white/85">
                  <div className="flex items-center justify-between rounded-2xl bg-white/5 px-3 py-2 ring-1 ring-white/10">
                    <span className="inline-flex items-center gap-2 text-white">
                      <Hammer className="h-4 w-4 text-highlight" /> Urgencias
                    </span>
                    <span className="text-emerald-200 font-semibold">$35.000 - $45.000</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-white/5 px-3 py-2 ring-1 ring-white/10">
                    <span className="inline-flex items-center gap-2 text-white">
                      <Wrench className="h-4 w-4 text-highlight" /> Visita programada
                    </span>
                    <span className="text-emerald-200 font-semibold">$22.000</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-white/5 px-3 py-2 ring-1 ring-white/10">
                    <span className="inline-flex items-center gap-2 text-white">
                      <Star className="h-4 w-4 text-highlight" /> Mantención anual
                    </span>
                    <span className="text-emerald-200 font-semibold">$60.000 pack</span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2 text-[12px]">
                    {[
                      "Garantía escrita",
                      "Boleta digital",
                      "Cobertura 24/7",
                      "Pagos sin contacto",
                    ].map((badge) => (
                      <span
                        key={badge}
                        className="rounded-full bg-white/10 px-3 py-1 text-white/80 ring-1 ring-white/15"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 ring-1 ring-white/10">
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-highlight">
                  <Sparkles className="h-4 w-4" /> Disponibilidad
                </div>
                <div className="space-y-2 text-sm text-white/85">
                  <p className="rounded-2xl bg-white/5 px-3 py-2 ring-1 ring-white/10">Lunes a sábado 08:30 - 21:00</p>
                  <p className="rounded-2xl bg-white/5 px-3 py-2 ring-1 ring-white/10">Urgencias en 40 min promedio</p>
                  <p className="rounded-2xl bg-white/5 px-3 py-2 ring-1 ring-white/10">Cobertura especial para adultos mayores</p>
                </div>
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-white/75">
                  <span className="rounded-full bg-emerald-500/15 px-3 py-1 ring-1 ring-emerald-400/30">Atiendo condominios</span>
                  <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/15">Coordinación por VeciApp</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-2xl ring-1 ring-white/10 backdrop-blur-xl">
        <div className="mb-4 flex items-center justify-between gap-2">
          <div>
            <p className="text-sm font-semibold text-highlight">Galería de trabajos</p>
            <h2 className="text-2xl font-bold text-white">Resultados metalizados</h2>
          </div>
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80 ring-1 ring-white/15">Actualizado hoy</span>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {gallery.map((item) => (
            <div
              key={item.title}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-transparent to-highlight/10 p-5 shadow-xl"
            >
              <div className="absolute inset-0 opacity-40" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.25), transparent 45%)" }} aria-hidden />
              <div className="relative space-y-1">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-white/75">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-2xl ring-1 ring-white/10 backdrop-blur-xl">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-highlight">Reseñas</p>
            <h2 className="text-2xl font-bold text-white">Construidas en comunidad</h2>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs text-white/80 ring-1 ring-white/15">
            <Star className="h-4 w-4 text-amber-300" /> 120 reseñas verificadas
          </div>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="rounded-3xl border border-white/10 bg-white/8 p-4 text-sm text-white/85 shadow-xl ring-1 ring-white/15"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80 ring-1 ring-white/15">
                  {testimonial.author}
                </span>
                <StarsRating value={testimonial.rating} />
              </div>
              <p className="mt-3 text-base leading-relaxed text-white">“{testimonial.text}”</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-3 rounded-[28px] border border-emerald-300/20 bg-emerald-400/10 p-6 text-center shadow-[0_25px_60px_rgba(6,182,212,0.25)] backdrop-blur-xl">
        <p className="text-sm font-semibold text-emerald-100">Agenda directa</p>
        <h2 className="text-2xl font-bold text-white">Coordina con {professional.name} en un clic</h2>
        <p className="max-w-2xl text-white/80">
          Agenda tu visita, envía fotos de referencia y recibe confirmación inmediata. VeciApp protege tu pago hasta que el trabajo esté completo.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href={`/ofrecer?pro=${professional.id}`}
            className="rounded-full bg-emerald-400 px-6 py-3 text-brand-navy font-semibold shadow-[0_0_26px_rgba(16,185,129,0.45)] transition hover:-translate-y-0.5"
          >
            Contactar ahora
          </Link>
          <Link
            href="/profesionales"
            className="rounded-full bg-white/10 px-6 py-3 text-white font-semibold ring-1 ring-white/20 transition hover:-translate-y-0.5 hover:bg-white/15"
          >
            Volver al directorio
          </Link>
        </div>
      </div>
    </div>
  );
}
