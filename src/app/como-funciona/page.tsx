import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";

const steps = [
  {
    audience: "Para quienes piden servicios",
    items: [
      "Publica la tarea con barrio, presupuesto y horario.",
      "Revisa postulaciones y perfiles verificados por la comunidad.",
      "Coordina directo y paga como prefieras.",
    ],
  },
  {
    audience: "Para quienes ofrecen servicios",
    items: [
      "Crea tu ficha con especialidad, precio y sectores.",
      "Postula a tareas cercanas y responde rápido.",
      "Suma reseñas positivas y gana visibilidad.",
    ],
  },
  {
    audience: "Para PYMEs y comerciantes",
    items: [
      "Publica tus horarios y zonas de reparto.",
      "Recibe encargos de vecinos y coordina la entrega.",
      "Destaca tu vitrina con buenas reseñas.",
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <div className="space-y-8">
      <SectionTitle
        title="Cómo funciona VeciApp"
        subtitle="Conecta con tu comunidad en tres simples columnas"
      />
      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((step, index) => (
          <div key={step.audience} className="section-card space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-bold">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold text-text">{step.audience}</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              {step.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-secondary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
        <Link
          href="/publicar"
          className="rounded-xl bg-primary px-6 py-3 text-white font-semibold shadow-soft hover:bg-primary/90 transition"
        >
          Publicar una tarea
        </Link>
        <Link
          href="/ofrecer"
          className="rounded-xl bg-secondary px-6 py-3 text-white font-semibold shadow-soft hover:bg-secondary/90 transition"
        >
          Ofrecer mis servicios
        </Link>
      </div>
    </div>
  );
}
