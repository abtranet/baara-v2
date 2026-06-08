import type { Metadata } from "next";
import Container from "@/components/Container";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import PricingCard from "@/components/PricingCard";
import SectionHeader from "@/components/SectionHeader";
import { buildMetadata } from "@/lib/seo";
import { pricingTiers, pricingFaqs } from "@/lib/content/pricing";

export const metadata: Metadata = buildMetadata({
  title: "AI Automation Pricing for Small Businesses",
  description:
    "Simple, transparent AI automation pricing for small businesses and African entrepreneurs. Three tiers — Starter, Growth, and Scale.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-stone-50 border-b border-stone-200 py-16">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Pricing
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-stone-900 mb-4">
              Simple AI Automation Pricing
            </h1>
            <p className="text-stone-600 text-lg">
              No long-term contracts. Start with one workflow and build from there.
            </p>
          </div>
        </Container>
      </section>

      {/* Pricing cards */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {pricingTiers.map((tier) => (
              <PricingCard
                key={tier.id}
                {...tier}
                ctaLabel={tier.price === "Custom" ? "Contact Us" : "Get Started"}
                ctaHref="/contact"
              />
            ))}
          </div>
          <p className="text-xs text-stone-400 mt-8 text-center max-w-2xl mx-auto">
            Final scope depends on tools, data, workflow complexity, and business needs. No guaranteed revenue outcome. Sensitive data requires additional review.
          </p>
        </Container>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-stone-50">
        <Container narrow>
          <SectionHeader eyebrow="FAQ" title="Pricing questions answered" />
          <FAQ items={pricingFaqs} />
        </Container>
      </section>

      <FinalCTA
        title="Not sure which plan is right?"
        subtitle="Book a free audit. We will tell you exactly what you need — no upsell pressure."
        primaryLabel="Book Free Audit"
        primaryHref="/contact"
        secondaryLabel="See How It Works"
        secondaryHref="/onboarding"
      />
    </>
  );
}
