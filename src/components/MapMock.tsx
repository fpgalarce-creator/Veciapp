const MapMock = () => {
  return (
    <section className="rounded-3xl bg-white/90 p-6 shadow-2xl ring-1 ring-muted/60 sm:p-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-primary">Servicios cerca de ti</p>
          <h2 className="text-2xl font-bold text-brand-navy">Próximamente con geolocalización en tiempo real</h2>
          <p className="text-brand-muted">Visualiza quién puede ayudarte en tu cuadra.</p>
        </div>
        <span className="hidden rounded-full bg-highlight px-3 py-2 text-xs font-semibold text-brand-navy sm:inline-flex">
          Beta
        </span>
      </div>
      <div className="mt-6 rounded-3xl bg-gradient-to-br from-surface to-white p-6 ring-1 ring-muted/60">
        <div className="relative h-72 w-full overflow-hidden rounded-2xl bg-brand-muted/10">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute left-1/4 top-1/3 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-brand-navy shadow-lg">
            ●
          </div>
          <div className="absolute right-1/3 top-1/4 flex h-12 w-12 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-highlight text-brand-navy shadow-lg">
            ★
          </div>
          <div className="absolute bottom-1/4 right-1/5 flex h-8 w-8 items-center justify-center rounded-full bg-white text-brand-navy shadow">
            ●
          </div>
          <div className="absolute bottom-6 left-1/3 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-primary/80 text-brand-navy shadow-lg">
            ●
          </div>
        </div>
        <p className="mt-4 text-sm font-semibold text-brand-muted">Próximamente: geolocalización en tiempo real.</p>
      </div>
    </section>
  );
};

export default MapMock;
