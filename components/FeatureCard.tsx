interface FeatureCardProps {
  icon?: string;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white border border-stone-200 rounded-xl p-6 hover:shadow-md transition-shadow">
      {icon && <div className="text-2xl mb-3">{icon}</div>}
      <h3 className="font-bold text-stone-900 text-lg mb-2">{title}</h3>
      <p className="text-stone-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
