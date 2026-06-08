interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeader({ eyebrow, title, subtitle, center }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      {eyebrow && (
        <span className="inline-block text-cyan-600 font-semibold text-sm uppercase tracking-widest mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">{title}</h2>
      {subtitle && (
        <p className={`mt-4 text-lg text-slate-600 leading-relaxed ${center ? "max-w-2xl mx-auto" : "max-w-2xl"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
