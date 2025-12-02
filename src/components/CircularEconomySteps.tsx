import { Building2, HeartHandshake, LucideIcon, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export type StepDefinition = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type Props = {
  className?: string;
  title?: string;
  subtitle?: string;
  steps?: StepDefinition[];
  StepCardComponent?: React.ComponentType<{ icon: LucideIcon; title: string; description: string }>;
};

const defaultSteps: StepDefinition[] = [
  {
    icon: Sparkles,
    title: "1️⃣ Publica",
    description: "Cuenta lo que necesitas o el servicio que ofreces con transparencia y estilo.",
  },
  {
    icon: Building2,
    title: "2️⃣ Conecta",
    description: "Encuentra vecinos confiables con buena reputación y ubicación precisa.",
  },
  {
    icon: HeartHandshake,
    title: "3️⃣ Reciproca",
    description: "Evalúa, mejora la comunidad y fortalece la economía local con cada intercambio.",
  },
];

export default function CircularEconomySteps({ className, StepCardComponent, steps, title, subtitle }: Props) {
  const Card = StepCardComponent;
  const displayedSteps = steps ?? defaultSteps;

  return (
    <section className={cn("space-y-8 rounded-[30px] bg-white/5 p-8 shadow-xl backdrop-blur-xl ring-1 ring-white/10", className)}>
      <div className="flex flex-col gap-2 text-center">
        <p className="text-sm font-semibold text-highlight">Economía circular aplicada</p>
        <h2 className="text-3xl font-bold text-white">{title ?? "Sigue tres pasos simples"}</h2>
        <p className="text-muted">
          {subtitle ?? "Publica, conecta y reciproca para fortalecer la confianza en tu barrio."}
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {displayedSteps.map((step) =>
          Card ? (
            <Card key={step.title} icon={step.icon} title={step.title} description={step.description} />
          ) : (
            <article
              key={step.title}
              className="relative flex flex-col items-center gap-3 rounded-3xl bg-white/5 px-6 py-8 text-center shadow-xl backdrop-blur-xl ring-1 ring-white/10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-highlight ring-1 ring-white/10">
                <step.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">{step.title}</h3>
              <p className="text-sm text-muted">{step.description}</p>
            </article>
          ),
        )}
      </div>
    </section>
  );
}
