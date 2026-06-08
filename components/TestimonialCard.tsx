interface TestimonialCardProps {
  quote: string;
  name: string;
  title?: string;
  location?: string;
}

export default function TestimonialCard({ quote, name, title, location }: TestimonialCardProps) {
  return (
    <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6">
      <p className="text-stone-700 leading-relaxed italic mb-4">&ldquo;{quote}&rdquo;</p>
      <div>
        <span className="font-semibold text-stone-900">{name}</span>
        {(title || location) && (
          <p className="text-stone-500 text-sm mt-0.5">
            {[title, location].filter(Boolean).join(" · ")}
          </p>
        )}
      </div>
    </div>
  );
}
