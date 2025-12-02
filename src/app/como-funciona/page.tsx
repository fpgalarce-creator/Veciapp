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
      />
      <div className="grid gap-4 rounded-[28px] bg-white/5 p-6 shadow-2xl ring-1 ring-white/10 md:grid-cols-3">
        {cards.map((audience) => (
          <div key={audience.title} className="flex flex-col gap-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
            <h3 className="text-lg font-semibold text-white">{audience.title}</h3>
            <ul className="space-y-2 text-sm text-white/80">
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
          className="rounded-full bg-primary px-6 py-3 text-white font-semibold shadow-soft ring-1 ring-white/20 transition hover:bg-primary/90"
        >
          Publicar una tarea
        </Link>
        <Link
          href="/ofrecer"
          className="rounded-full bg-highlight px-6 py-3 text-brand-navy font-semibold shadow-soft ring-1 ring-white/20 transition hover:bg-highlight/90"
        >
          Ofrecer mis servicios
        </Link>
      </div>
    </div>
  );
}
