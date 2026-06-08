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
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
      <div className="bg-blue-700 px-6 py-5">
        <h3 className="text-lg font-bold text-white">{title}</h3>
      </div>
      <div className="p-6 flex flex-col gap-4 flex-1">
        <p className="text-slate-600 leading-relaxed">{description}</p>
        <div className="space-y-3 flex-1">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-600">Who it&apos;s for</span>
            <p className="text-slate-700 text-sm mt-1">{whoFor}</p>
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-600">Tools it can connect with</span>
            <p className="text-slate-500 text-sm mt-1">{tools.join(", ")}</p>
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-600">Practical outcome</span>
            <p className="text-slate-700 text-sm mt-1">{outcome}</p>
          </div>
        </div>
        <CTAButton href="/contact" variant="outline" size="sm" className="self-start mt-2">
          Book Free Audit
        </CTAButton>
      </div>
    </div>
  );
}
