import { FC } from "react";
import StarsRating from "./StarsRating";
import { Professional } from "@/data/professionals";

const ProfessionalCard: FC<{ professional: Professional }> = ({ professional }) => {
  return (
    <article className="section-card flex flex-col gap-3">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-sm text-gray-500">{professional.role}</p>
          <h3 className="text-lg font-semibold text-text">{professional.name}</h3>
          <p className="text-gray-600 text-sm mt-1">{professional.sectors}</p>
        </div>
        {professional.badge && (
          <span className="badge bg-emerald-100 text-emerald-800">
            {professional.badge}
          </span>
        )}
      </div>
      <div className="flex items-center justify-between text-sm text-gray-700">
        <div>
          <p className="font-semibold text-text">Tarifa</p>
          <p>{professional.price}</p>
        </div>
        <StarsRating value={professional.rating} />
      </div>
      <button className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-white font-semibold hover:bg-primary/90 transition">
        Contactar
      </button>
    </article>
  );
};

export default ProfessionalCard;
