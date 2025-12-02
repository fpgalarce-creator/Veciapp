import Link from "next/link";
import CircularEconomySteps from "@/components/CircularEconomySteps";
import SectionTitle from "@/components/SectionTitle";

const cards = [
  {
    title: "Para quienes piden servicios",
    items: [
      "Publica lo que necesitas con fotos y horarios claros.",
      "Recibe postulaciones con reputación y notas.",
      "Acepta a tu veci favorito y coordina el pago.",
    ],
  },
  {
    title: "Para quienes ofrecen servicios",
    items: [
      "Postula con un mensaje personalizado y disponibilidad.",
      "Destaca con badges y reseñas de tu zona.",
      "Recibe avisos cuando te acepten y confirma horarios.",
    ],
  },
  {
    title: "Para PYMEs y comercios",
    items: [
      "Muestra tu vitrina, horarios y cobertura.",
      "Recibe encargos directos y organiza tus repartos.",
      "Suma reseñas que respalden tu negocio local.",
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <div className="space-y-10">
      <SectionTitle
        title="Cómo funciona VeciApp"
        subtitle="Conecta con tu comunidad en tres pasos y entiende tu rol en la economía circular"
      />
      <CircularEconomySteps
        subtitle="Publica, conecta y reciproca para que el talento local circule con confianza."
        className="shadow-3xl"
      />
      <div className="grid gap-5 rounded-[28px] bg-white/5 p-6 shadow-2xl ring-1 ring-white/10 backdrop-blur-xl md:grid-cols-3">
        {cards.map((audience) => (
          <div
            key={audience.title}
            className="relative flex flex-col gap-3 overflow-hidden rounded-2xl bg-white/5 p-5 ring-1 ring-white/10"
          >
            <div
              className="absolute inset-0 opacity-50"
              style={{ background: "radial-gradient(circle at 30% 20%, rgba(99,102,241,0.12), transparent 40%)" }}
              aria-hidden
            />
            <div className="relative space-y-2">
              <h3 className="text-lg font-semibold text-white">{audience.title}</h3>
              <p className="text-sm text-white/75">Diseñado para que aproveches la red vecinal sin fricción.</p>
            </div>
            <ul className="relative space-y-2 text-sm text-white/85">
              {audience.items.map((item) => (
                <li key={item} className="rounded-xl bg-white/5 px-3 py-2 ring-1 ring-white/10">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
        <Link
          href="/publicar"
          className="rounded-full bg-primary px-6 py-3 text-white font-semibold shadow-[0_0_22px_rgba(14,165,233,0.55)] ring-1 ring-white/20 transition hover:-translate-y-0.5 hover:shadow-[0_0_26px_rgba(14,165,233,0.75)]"
        >
          Publicar una tarea
        </Link>
        <Link
          href="/ofrecer"
          className="rounded-full bg-highlight px-6 py-3 text-brand-navy font-semibold shadow-[0_0_22px_rgba(94,234,212,0.55)] ring-1 ring-white/20 transition hover:-translate-y-0.5 hover:shadow-[0_0_26px_rgba(94,234,212,0.75)]"
        >
          Ofrecer mis servicios
        </Link>
      </div>
    </div>
  );
}
