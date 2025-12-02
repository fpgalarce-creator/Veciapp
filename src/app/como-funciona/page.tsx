import Link from "next/link";
import CircularEconomySteps from "@/components/CircularEconomySteps";
import SectionTitle from "@/components/SectionTitle";

const audiences = [
  {
    title: "Para quienes piden servicios",
    description:
      "Publica lo que necesitas con barrio y horario claro. Elige postulaciones confiables y paga como prefieras cuando la tarea esté lista.",
  },
  {
    title: "Para quienes ofrecen servicios",
    description:
      "Muestra tu ficha con especialidad, precio y sectores. Postula a tareas cercanas, responde rápido y gana visibilidad con reseñas reales.",
  },
  {
    title: "Para PYMEs y comerciantes",
    description:
      "Comparte tus horarios, contacto y reparto. Recibe encargos de vecinos, coordina entregas y deja que tu vitrina con reputación hable por ti.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="space-y-10">
      <SectionTitle
        title="Cómo funciona VeciApp"
        subtitle="Conecta con tu comunidad en tres pasos y entiende tu rol en la economía circular"
      />
      <CircularEconomySteps />
      <div className="grid gap-4 rounded-[28px] bg-white/5 p-6 shadow-2xl ring-1 ring-white/10 md:grid-cols-3">
        {audiences.map((audience) => (
          <div key={audience.title} className="flex flex-col gap-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
            <h3 className="text-lg font-semibold text-white">{audience.title}</h3>
            <p className="text-sm text-white/80">{audience.description}</p>
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
