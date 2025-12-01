import Link from "next/link";

const HeroHome = () => {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-secondary to-blue-700 px-6 py-12 shadow-lg text-white">
      <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -right-16 -bottom-16 h-48 w-48 rounded-full bg-amber-300/30 blur-3xl" />
      <div className="relative grid gap-8 lg:grid-cols-2 items-center">
        <div className="space-y-6">
          <p className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-sm font-semibold backdrop-blur">
            Rancagua · Comunidad confiable
          </p>
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
              Resuelve tus tareas y apoya a tu barrio
            </h1>
            <p className="text-lg text-white/90">
              VeciApp conecta a vecinos, profesionales y PYMEs para que las tareas del día a día se
              resuelvan rápido, seguro y con talento local.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <input
              type="text"
              placeholder="¿Qué necesitas hoy?"
              className="w-full rounded-xl border border-white/30 bg-white/15 px-4 py-3 text-white placeholder-white/70 focus:border-accent focus:outline-none"
            />
            <button className="rounded-xl bg-accent px-5 py-3 font-semibold text-text shadow-soft hover:bg-accent/90 transition">
              Buscar
            </button>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/publicar"
              className="rounded-xl bg-white px-6 py-3 text-secondary font-semibold shadow-soft hover:bg-gray-100 transition text-center"
            >
              Publicar una tarea
            </Link>
            <Link
              href="/ofrecer"
              className="rounded-xl border border-white/50 px-6 py-3 font-semibold text-white hover:bg-white/10 transition text-center"
            >
              Ofrecer mis servicios
            </Link>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <div className="grid grid-cols-2 gap-4">
            <div className="h-52 rounded-2xl bg-white/15 backdrop-blur shadow-soft flex flex-col justify-center p-5">
              <p className="text-sm text-white/80">Tareas del barrio</p>
              <p className="text-xl font-semibold">+120 este mes</p>
              <p className="text-white/70 mt-2">Limpieza, mascotas, jardinería y más.</p>
            </div>
            <div className="h-64 rounded-2xl bg-white/10 backdrop-blur shadow-soft flex flex-col justify-between p-5">
              <div>
                <p className="text-sm text-white/80">Profesionales</p>
                <p className="text-xl font-semibold">Top vecis confiables</p>
              </div>
              <div className="space-y-2 text-sm">
                <p className="flex items-center justify-between">
                  <span>Gasfiter</span>
                  <span className="rounded-full bg-emerald-200/30 px-3 py-1 text-xs">4.9★</span>
                </p>
                <p className="flex items-center justify-between">
                  <span>Electricista</span>
                  <span className="rounded-full bg-amber-200/30 px-3 py-1 text-xs">4.8★</span>
                </p>
                <p className="flex items-center justify-between">
                  <span>Profe particular</span>
                  <span className="rounded-full bg-blue-200/30 px-3 py-1 text-xs">4.7★</span>
                </p>
              </div>
            </div>
            <div className="col-span-2 h-40 rounded-2xl bg-amber-300/20 backdrop-blur shadow-soft flex items-center justify-between px-6">
              <div>
                <p className="text-sm text-white/80">PYMEs locales</p>
                <p className="text-xl font-semibold">Apoya comercio móvil</p>
              </div>
              <span className="rounded-full bg-white/30 px-3 py-1 text-sm font-semibold text-text">Demo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
