import { ReactNode } from "react";

interface SectionBandProps {
  children: ReactNode;
  bg?: string;
  className?: string;
  id?: string;
}

export default function SectionBand({
  children,
  bg = "bg-white",
  className = "",
  id,
}: SectionBandProps) {
  return (
    <section id={id} className={`band w-full ${bg} ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
