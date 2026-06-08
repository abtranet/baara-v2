interface FeatureCardProps {
  icon?: string;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
      {icon && (
        <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center text-2xl mb-4">
          {icon}
        </div>
      )}
      <h3 className="font-bold text-slate-900 text-lg mb-2">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
