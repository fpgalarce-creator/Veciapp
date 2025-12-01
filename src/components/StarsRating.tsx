import { FC } from "react";

type StarsRatingProps = {
  value: number;
};

const StarsRating: FC<StarsRatingProps> = ({ value }) => {
  const maxStars = 5;
  return (
    <div className="flex items-center gap-1" aria-label={`Puntaje ${value} de 5`}>
      {Array.from({ length: maxStars }).map((_, index) => {
        const filled = index + 1 <= Math.round(value);
        return (
          <span
            key={index}
            className={`text-lg ${filled ? "text-accent" : "text-gray-300"}`}
          >
            ★
          </span>
        );
      })}
      <span className="text-sm text-gray-600">{value.toFixed(1)}</span>
    </div>
  );
};

export default StarsRating;
