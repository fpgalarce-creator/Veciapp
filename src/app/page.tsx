"use client";

import HeroHome from "@/components/HeroHome";
import PymeCard from "@/components/PymeCard";
import ProfessionalCard from "@/components/ProfessionalCard";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import { pymes } from "@/data/pymes";
import { professionals } from "@/data/professionals";
import { services } from "@/data/services";
import Link from "next/link";
import { useState } from "react";

const categories = ["Todos", "Limpieza", "Mascotas", "Jardinería", "Educación", "Otros"] as const;

type CategoryFilter = typeof categories[number];

export default function HomePage() {
  const [category, setCategory] = useState<CategoryFilter>("Todos");

  const filteredServices =
    category === "Todos" ? services : services.filter((service) => service.category === category);

  return (
    <div className="space-y-12">
      <HeroHome />

      <section className="space-y-4">
        <SectionTitle
          title="PYMEs destacadas de tu barrio"
          subtitle="Comercio móvil, productos caseros y emprendedores que se mueven por Rancagua."
          action={<Link href="/pymes" className="text-sm font-semibold text-secondary">Ver todas</Link>}
        />
        <div className="grid gap-4 md:hidden">
          <div className="flex gap-4 overflow-x-auto pb-3">
            {pymes.slice(0, 6).map((pyme) => (
              <PymeCard key={pyme.id} pyme={pyme} />
            ))}
          </div>
        </div>
        <div className="hidden md:grid md:grid-cols-3 md:gap-4 lg:grid-cols-3">
          {pymes.slice(0, 6).map((pyme) => (
            <PymeCard key={pyme.id} pyme={pyme} />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <SectionTitle
          title="Servicios publicados cerca de ti"
          subtitle="Encuentra tareas reales en Rancagua y alrededores"
          action={
            <div className="flex flex-wrap gap-2">
              {categories.map((item) => (
                <button
                  key={item}
                  onClick={() => setCategory(item)}
                  className={`rounded-full px-3 py-2 text-sm font-semibold transition border ${
                    category === item
                      ? "bg-primary text-white border-primary"
                      : "bg-white text-text border-gray-200 hover:border-primary"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          }
        />
        <div className="grid gap-4 md:grid-cols-2">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <SectionTitle
          title="Oficios destacados"
          subtitle="Vecis con buen historial y reseñas"
          action={<Link href="/profesionales" className="text-sm font-semibold text-secondary">Ver directorio</Link>}
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {professionals.slice(0, 4).map((professional) => (
            <ProfessionalCard key={professional.id} professional={professional} />
          ))}
        </div>
      </section>

      <section className="section-card grid gap-6 md:grid-cols-3">
        <div className="col-span-3 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-secondary">¿Cómo funciona VeciApp?</p>
            <h3 className="text-2xl font-bold text-text">Sigue tres pasos simples</h3>
          </div>
          <Link
            href="/como-funciona"
            className="hidden rounded-full border border-secondary px-4 py-2 text-sm font-semibold text-secondary hover:bg-secondary/10 md:inline-flex"
          >
            Ver detalle
          </Link>
        </div>
        {["Publica", "Elige", "Evalúa"].map((step, index) => (
          <div key={step} className="rounded-xl bg-gray-50 p-5">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-white font-bold">
              {index + 1}
            </div>
            <h4 className="text-lg font-semibold text-text">{step}</h4>
            <p className="text-gray-600 mt-2">
              {index === 0 && "Cuenta lo que necesitas o el servicio que ofreces con precio y sector."}
              {index === 1 && "Revisa perfiles, puntuaciones y elige quién te acompañará en la tarea."}
              {index === 2 && "Completa el trabajo, paga según acuerden y deja tu reseña para la comunidad."}
            </p>
          </div>
        ))}
      </section>

      <section className="section-card flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="text-sm font-semibold text-secondary">Listo para partir</p>
          <h3 className="text-2xl font-bold text-text">Publica tu necesidad o muestra tu talento</h3>
          <p className="text-gray-600">
            Crea tu aviso en segundos y conecta con vecinos confiables de Rancagua.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/publicar"
            className="rounded-xl bg-primary px-6 py-3 text-white font-semibold shadow-soft hover:bg-primary/90 transition text-center"
          >
            Publicar tarea
          </Link>
          <Link
            href="/ofrecer"
            className="rounded-xl bg-secondary px-6 py-3 text-white font-semibold shadow-soft hover:bg-secondary/90 transition text-center"
          >
            Ofrecer servicios
          </Link>
        </div>
      </section>
    </div>
  );
}
