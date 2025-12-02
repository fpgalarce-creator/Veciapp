import Link from "next/link";

const highlights = [
  "Usuarios verificados",
  "+50 tareas publicadas este mes en Rancagua",
  "Vecinos ganando dinero cerca de ti",
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-brand-navy via-brand-muted to-brand-navy p-8 sm:p-12 shadow-2xl ring-1 ring-white/10">
      <div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-30"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-transparent" aria-hidden />
      <div className="relative grid items-center gap-10 lg:grid-cols-2">
        <div className="space-y-6 text-white">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-highlight ring-1 ring-white/10">
            Nuevo diseño VeciApp
          </div>
          <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Gana dinero ofreciendo servicios cuando tú quieras.
          </h1>
          <p className="text-lg text-surface/90 sm:text-xl">
            Conecta con tu barrio, ayuda a tus vecinos y genera ingresos de forma flexible.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/ofrecer"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-base font-semibold text-brand-navy shadow-glow transition hover:bg-primary-dark"
            >
              Ofrecer mis servicios
            </Link>
            <Link
              href="/explorar"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
            >
              Explorar servicios
            </Link>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-white/80">
            {highlights.map((item) => (
              <span
                key={item}
                className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/10"
              >
                <span className="text-primary">✔</span>
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="glass-panel relative p-6 text-surface">
          <div className="absolute -left-10 -top-10 h-24 w-24 rounded-full bg-primary/20 blur-3xl" aria-hidden />
          <div className="absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-highlight/20 blur-3xl" aria-hidden />
          <h3 className="text-lg font-semibold text-white">Empieza en 5 minutos</h3>
          <ul className="mt-4 space-y-4 text-sm text-white/80">
            <li className="flex items-start gap-3">
              <div className="mt-1 h-8 w-8 rounded-full bg-primary/20 text-primary/90 flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <p className="font-semibold text-white">Crea tu perfil</p>
                <p>Cuenta qué ofreces, tu sector y disponibilidad.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 h-8 w-8 rounded-full bg-primary/20 text-primary/90 flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <p className="font-semibold text-white">Recibe solicitudes</p>
                <p>Responde a vecinos verificados y fija tu precio.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 h-8 w-8 rounded-full bg-primary/20 text-primary/90 flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <p className="font-semibold text-white">Gana dinero</p>
                <p>Completa tareas y suma reseñas que te recomienden.</p>
              </div>
            </li>
          </ul>
          <div className="mt-6 flex items-center gap-3 rounded-2xl bg-white/5 p-4 text-sm text-white/90">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary font-bold">$</div>
            <div>
              <p className="font-semibold text-white">Pagos flexibles</p>
              <p>Acuerda métodos y cobra sin esperas.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
