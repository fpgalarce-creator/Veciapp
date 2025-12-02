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
    description: "Describe lo que necesitas u ofreces con claridad premium.",
  },
  {
    icon: Building2,
    title: "2️⃣ Conecta",
    description: "Recibe coincidencias confiables con reputación y cercanía.",
  },
  {
    icon: HeartHandshake,
    title: "3️⃣ Reciproca",
    description: "Evalúa, paga justo y fortalece la economía circular vecinal.",
  },
];

export default function CircularEconomySteps({ className, StepCardComponent, steps, title, subtitle }: Props) {
  const Card = StepCardComponent;
  const displayedSteps = steps ?? defaultSteps;

  return (
    <section
      className={cn(
        "relative overflow-hidden rounded-[32px] bg-white/5 p-8 shadow-2xl ring-1 ring-white/10 backdrop-blur-2xl",
        "before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_25%_30%,rgba(59,130,246,0.18),transparent_40%),radial-gradient(circle_at_78%_70%,rgba(16,185,129,0.14),transparent_45%)] before:opacity-70",
        className,
      )}
    >
      <div className="relative flex flex-col gap-2 text-center">
        <p className="text-sm font-semibold text-highlight">Economía circular aplicada</p>
        <h2 className="text-3xl font-bold text-white">{title ?? "Sigue tres pasos simples"}</h2>
        <p className="text-muted">
          {subtitle ?? "Publica, conecta y reciproca para fortalecer la confianza en tu barrio."}
        </p>
      </div>
      <div className="relative mt-6 grid gap-6 md:grid-cols-3">
        {displayedSteps.map((step, index) =>
          Card ? (
            <Card key={step.title} icon={step.icon} title={step.title} description={step.description} />
          ) : (
            <article
              key={step.title}
              className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-3xl bg-white/8 p-6 text-left shadow-xl ring-1 ring-white/15"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-highlight/10 opacity-70" aria-hidden />
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  background: `radial-gradient(circle at 30% 30%, rgba(99,102,241,0.16), transparent 45%), radial-gradient(circle at 80% 70%, rgba(16,185,129,0.16), transparent 50%)`,
                }}
              />
              <div className="relative flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-highlight ring-1 ring-white/15">
                  <step.icon className="h-6 w-6" />
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80 ring-1 ring-white/15">
                  Paso {index + 1}
                </span>
              </div>
              <div className="relative space-y-2">
                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                <p className="text-sm text-white/80">{step.description}</p>
              </div>
              <div className="relative mt-auto h-1 rounded-full bg-gradient-to-r from-highlight/60 via-primary/50 to-emerald-400/60" />
            </article>
          ),
        )}
      </div>
    </section>
  );
}
