import { FC, ReactNode } from "react";

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  action?: ReactNode;
};

const SectionTitle: FC<SectionTitleProps> = ({ title, subtitle, action }) => {
  return (
    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
      <div>
        <h2 className="text-2xl font-bold text-white md:text-3xl">{title}</h2>
        {subtitle && <p className="mt-1 text-sm text-white/80">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
};

export default SectionTitle;
