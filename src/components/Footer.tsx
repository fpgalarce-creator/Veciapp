import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-text">VeciApp – Rancagua</p>
          <p className="text-sm text-gray-600">Hecho con cariño por vecinos para vecinos.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-gray-700">
          <Link href="/como-funciona">Cómo funciona</Link>
          <Link href="/ayuda">Ayuda</Link>
          <a href="#" aria-label="Instagram" className="hover:text-primary">Instagram</a>
          <a href="#" aria-label="Facebook" className="hover:text-primary">Facebook</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
