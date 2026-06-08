import CTAButton from "./CTAButton";
import Badge from "./Badge";

interface PricingCardProps {
  name: string;
  price: string;
  tagline: string;
  popular: boolean;
  includes: string[];
  ctaLabel?: string;
  ctaHref?: string;
}

export default function PricingCard({
  name,
  price,
  tagline,
  popular,
  includes,
  ctaLabel = "Get Started",
  ctaHref = "/contact",
}: PricingCardProps) {
  return (
    <div
      className={`relative rounded-2xl p-8 flex flex-col gap-6 ${
        popular
          ? "bg-stone-900 text-white shadow-2xl ring-2 ring-amber-500"
          : "bg-white border border-stone-200 shadow-md"
      }`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge variant="amber">Most Popular</Badge>
        </div>
      )}
      <div>
        <h3 className={`text-xl font-bold mb-1 ${popular ? "text-white" : "text-stone-900"}`}>
          {name}
        </h3>
        <div className={`text-3xl font-extrabold ${popular ? "text-amber-400" : "text-stone-900"}`}>
          {price}
        </div>
        <p className={`text-sm mt-2 ${popular ? "text-stone-300" : "text-stone-600"}`}>{tagline}</p>
      </div>
      <ul className="space-y-3 flex-1">
        {includes.map((item) => (
          <li key={item} className="flex gap-3 items-start">
            <span className={`text-sm ${popular ? "text-amber-400" : "text-amber-600"} font-bold mt-0.5`}>✓</span>
            <span className={`text-sm ${popular ? "text-stone-200" : "text-stone-700"}`}>{item}</span>
          </li>
        ))}
      </ul>
      <CTAButton
        href={ctaHref}
        variant={popular ? "primary" : "outline"}
        size="md"
        className="w-full justify-center"
      >
        {ctaLabel}
      </CTAButton>
    </div>
  );
}
