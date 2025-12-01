import { FC } from "react";
import { Pyme } from "@/data/pymes";

const PymeCard: FC<{ pyme: Pyme }> = ({ pyme }) => {
  return (
    <article className="section-card flex flex-col gap-3 min-w-[260px]">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-sm text-gray-500">{pyme.type}</p>
          <h3 className="text-lg font-semibold text-text">{pyme.name}</h3>
        </div>
        {pyme.highlighted && (
          <span className="badge bg-accent/20 text-amber-900">Destacada</span>
        )}
      </div>
      <div className="space-y-2 text-sm text-gray-700">
        <p>
          <span className="font-semibold text-text">Horarios: </span>
          {pyme.schedule}
        </p>
        <p>
          <span className="font-semibold text-text">Sectores: </span>
          {pyme.sectors}
        </p>
      </div>
      <button className="inline-flex items-center justify-center rounded-lg bg-secondary px-4 py-2 text-white font-semibold hover:bg-secondary/90 transition">
        Encargar (demo)
      </button>
    </article>
  );
};

export default PymeCard;
