import Link from "next/link";

type Professional = {
  id: number;
  name: string;
  role: string;
  rating: number;
  price: string;
  sector: string;
  verified?: boolean;
  image: string;
};

interface Props {
  professionals: Professional[];
}

const ProfessionalsSection = ({ professionals }: Props) => {
  return (
    <section className="space-y-4">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-primary">Profesionales destacados</p>
          <h2 className="text-2xl font-bold text-brand-navy">Talento confiable en tu barrio</h2>
          <p className="text-brand-muted">Perfiles verificados, con reseñas y precios claros.</p>
        </div>
        <Link
          href="/profesionales"
          className="rounded-full bg-brand-navy px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-brand-muted"
        >
          Ver directorio
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {professionals.map((pro) => (
          <article
            key={pro.id}
            className="group overflow-hidden rounded-2xl bg-white/90 shadow-md ring-1 ring-muted/60 transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div
              className="h-36 w-full bg-cover bg-center transition duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${pro.image})` }}
              aria-label={pro.name}
            />
            <div className="space-y-3 p-4 text-brand-navy">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-brand-navy">{pro.name}</h3>
                {pro.verified && (
                  <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">Verificado</span>
                )}
              </div>
              <p className="text-sm font-semibold text-brand-muted">{pro.role}</p>
              <div className="flex items-center gap-2 text-sm text-brand-muted">
                <span>⭐ {pro.rating.toFixed(1)}</span>
                <span>• Desde {pro.price}</span>
                <span>• {pro.sector}</span>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 rounded-full border border-brand-navy px-4 py-2 text-xs font-semibold text-brand-navy transition hover:bg-brand-navy hover:text-white">
                  Ver perfil
                </button>
                <button className="flex-1 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-brand-navy shadow-sm transition hover:bg-primary-dark">
                  Contactar
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProfessionalsSection;
