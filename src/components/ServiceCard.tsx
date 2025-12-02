import { FC } from "react";
import { Service, ServiceStatus } from "@/data/services";

const statusStyles: Record<ServiceStatus, string> = {
  Pendiente: "bg-amber-100 text-amber-800",
  "En curso": "bg-blue-100 text-blue-800",
  Completado: "bg-emerald-100 text-emerald-800",
};

const ServiceCard: FC<{ service: Service }> = ({ service }) => {
  return (
    <article className="section-card flex flex-col gap-3">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-sm text-gray-500">{service.category}</p>
          <h3 className="text-lg font-semibold text-text">{service.title}</h3>
        </div>
        <span className={`badge ${statusStyles[service.status]}`}>
          {service.status}
        </span>
      </div>
      <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
        <div>
          <p className="font-semibold text-text">Sector</p>
          <p>{service.sector}</p>
        </div>
        <div>
          <p className="font-semibold text-text">Fecha / hora</p>
          <p>{service.datetime}</p>
        </div>
        <div>
          <p className="font-semibold text-text">Rango</p>
          <p>{service.priceRange}</p>
        </div>
        <div>
          <p className="font-semibold text-text">Estado</p>
          <p className="text-sm">{service.status}</p>
        </div>
      </div>
      <button className="mt-1 inline-flex items-center justify-center rounded-lg bg-secondary px-4 py-2 text-white font-semibold hover:bg-secondary/90 transition">
        Postular ahora
      </button>
    </article>
  );
};

export default ServiceCard;
