import type { Metadata } from "next";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import PillHeader from "@/components/PillHeader";
import CTAButton from "@/components/CTAButton";
import { buildMetadata } from "@/lib/seo";
import { pricingTiers, pricingFaqs } from "@/lib/content/pricing";

export const metadata: Metadata = buildMetadata({
  title: "AI Automation Pricing for Small Businesses",
  description:
    "Simple, transparent AI automation pricing for small businesses and African entrepreneurs. Three tiers — Starter, Growth, and Scale.",
  path: "/pricing",
});

const tierColors = ["bg-sky-100", "bg-blue-900", "bg-teal-700"];
const tierTextColors = ["text-blue-900", "text-white", "text-white"];
const tierPriceColors = ["text-orange-500", "text-orange-400", "text-teal-200"];
const tierSubColors = ["text-slate-500", "text-blue-200", "text-teal-100"];
const tierCheckColors = ["text-orange-500", "text-orange-400", "text-teal-300"];
const tierItemColors = ["text-slate-700", "text-blue-100", "text-teal-100"];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-blue-900 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <span className="bg-orange-500 text-white font-extrabold text-2xl px-10 py-4 rounded-full shadow-lg">
              Pricing
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Simple AI Automation Pricing
          </h1>
          <p className="text-blue-200 text-lg max-w-xl mx-auto">
            No long-term contracts. Start with one workflow and build from there.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="bg-sky-100 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, i) => (
              <div
                key={tier.id}
                className={`rounded-3xl p-8 flex flex-col gap-5 shadow-sm relative ${tierColors[i]}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-pink-500 text-white font-bold text-xs px-5 py-2 rounded-full shadow">
                      Most Popular
                    </span>
                  </div>
                )}
                <div>
                  <h3 className={`text-xl font-extrabold mb-1 ${tierTextColors[i]}`}>{tier.name}</h3>
                  <div className={`text-4xl font-extrabold ${tierPriceColors[i]}`}>{tier.price}</div>
                  <p className={`text-sm mt-2 ${tierSubColors[i]}`}>{tier.tagline}</p>
                </div>
                <ul className="space-y-3 flex-1">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex gap-3 items-start">
                      <span className={`font-bold mt-0.5 flex-shrink-0 ${tierCheckColors[i]}`}>✓</span>
                      <span className={`text-sm ${tierItemColors[i]}`}>{item}</span>
                    </li>
                  ))}
                </ul>
                <CTAButton
                  href="/contact"
                  variant={i === 1 ? "primary" : i === 2 ? "white" : "outline"}
                  size="md"
                  className="w-full justify-center"
                >
                  {tier.price === "Custom" ? "Contact Us" : "Get Started"}
                </CTAButton>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-8 text-center max-w-2xl mx-auto">
            Final scope depends on tools, data, workflow complexity, and business needs. No guaranteed revenue outcome. Sensitive data requires additional review.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-orange-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <PillHeader bg="bg-blue-900" text="text-white" size="md" center>
              ❓ Pricing FAQ
            </PillHeader>
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <FAQ items={pricingFaqs} />
            </div>
          </div>
        </div>
      </section>

      <FinalCTA
        bg="bg-teal-700"
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
