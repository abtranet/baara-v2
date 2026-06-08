import CTAButton from "./CTAButton";

interface ServiceCardProps {
  title: string;
  description: string;
  whoFor: string;
  tools: string[];
  outcome: string;
}

export default function ServiceCard({ title, description, whoFor, tools, outcome }: ServiceCardProps) {
  return (
    <div className="bg-white border border-stone-200 rounded-2xl p-8 hover:shadow-lg transition-shadow flex flex-col gap-4">
      <h3 className="text-xl font-bold text-stone-900">{title}</h3>
      <p className="text-stone-600 leading-relaxed">{description}</p>
      <div className="space-y-3 flex-1">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-600">Who it&apos;s for</span>
          <p className="text-stone-700 text-sm mt-1">{whoFor}</p>
        </div>
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-600">Tools it can connect with</span>
          <p className="text-stone-500 text-sm mt-1">{tools.join(", ")}</p>
        </div>
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-600">Practical outcome</span>
          <p className="text-stone-700 text-sm mt-1">{outcome}</p>
        </div>
      </div>
      <CTAButton href="/contact" variant="outline" size="sm" className="self-start mt-2">
        Book Free Audit
      </CTAButton>
    </div>
  );
}
