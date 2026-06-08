import Container from "./Container";
import CTAButton from "./CTAButton";

interface FinalCTAProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function FinalCTA({
  title = "Ready to build smarter systems?",
  subtitle = "Book a free AI automation audit or explore Baara Academy to see what's possible for your business or career.",
  primaryLabel = "Book a Free AI Audit",
  primaryHref = "/contact",
  secondaryLabel = "Explore Baara Academy",
  secondaryHref = "/academy",
}: FinalCTAProps) {
  return (
    <section className="bg-stone-900 py-20 mt-20">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-stone-300 text-lg mb-8 leading-relaxed">{subtitle}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <CTAButton href={primaryHref} variant="primary" size="lg">
              {primaryLabel}
            </CTAButton>
            <CTAButton
              href={secondaryHref}
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-stone-900 transition-colors font-semibold rounded-lg inline-flex items-center justify-center"
            >
              {secondaryLabel}
            </CTAButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
