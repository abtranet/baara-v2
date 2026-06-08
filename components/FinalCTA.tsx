import CTAButton from "./CTAButton";

interface FinalCTAProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  bg?: string;
}

export default function FinalCTA({
  title = "Ready to build better work with AI and practical digital skills?",
  subtitle = "Book a free AI automation audit or join the Baara Academy waitlist.",
  primaryLabel = "Book a Free AI Audit",
  primaryHref = "/contact",
  secondaryLabel = "Join Baara Academy Waitlist",
  secondaryHref = "/academy/healthcare-it-career-launch",
  bg = "bg-blue-700",
}: FinalCTAProps) {
  return (
    <section className={`${bg} py-20`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
            {title}
          </h2>
          <p className="text-blue-200 text-lg mb-8 leading-relaxed">{subtitle}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <CTAButton href={primaryHref} variant="white" size="lg">
              {primaryLabel}
            </CTAButton>
            <CTAButton href={secondaryHref} variant="ghost" size="lg">
              {secondaryLabel}
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
