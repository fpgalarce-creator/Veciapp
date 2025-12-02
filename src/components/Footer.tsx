import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-auto w-full border-t border-white/10 bg-brand-navy/90 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-lg font-extrabold text-highlight">
            VA
          </div>
          <div>
            <p className="text-lg font-bold">VeciApp</p>
            <p className="text-sm text-muted">Talento local que mueve tu barrio.</p>
          </div>
        </div>

        <div className="grid flex-1 grid-cols-1 gap-8 text-sm sm:grid-cols-3">
          <div className="space-y-3">
            <h4 className="text-base font-semibold text-white">Compañía</h4>
            <div className="flex flex-col gap-2 text-muted">
              <Link href="/sobre-nosotros" className="hover:text-white">Sobre VeciApp</Link>
              <Link href="/trabaja" className="hover:text-white">Trabaja con nosotros</Link>
              <Link href="/contacto" className="hover:text-white">Contacto</Link>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="text-base font-semibold text-white">Legal</h4>
            <div className="flex flex-col gap-2 text-muted">
              <Link href="/terminos" className="hover:text-white">Términos y condiciones</Link>
              <Link href="/privacidad" className="hover:text-white">Política de privacidad</Link>
              <Link href="/seguridad" className="hover:text-white">Seguridad</Link>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="text-base font-semibold text-white">Comunidad</h4>
            <div className="flex flex-col gap-2 text-muted">
              <Link href="/blog" className="hover:text-white">Blog & tips</Link>
              <Link href="/ayuda" className="hover:text-white">Centro de ayuda</Link>
              <a href="mailto:hola@veciapp.com" className="hover:text-white">hola@veciapp.com</a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 bg-brand-muted/60 py-4 text-center text-xs text-muted">
        © {new Date().getFullYear()} VeciApp. Hecho en Rancagua.
      </div>
    </footer>
  );
};

export default Footer;
