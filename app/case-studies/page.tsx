import type { Metadata } from "next";
import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";
import FinalCTA from "@/components/FinalCTA";
import SectionHeader from "@/components/SectionHeader";
import { buildMetadata } from "@/lib/seo";
import { caseStudies } from "@/lib/content/caseStudies";

export const metadata: Metadata = buildMetadata({
  title: "Practical AI Automation Case Studies",
  description:
    "Sample workflow scenarios showing how Baara designs AI automation systems for local service companies, e-commerce brands, and real estate teams.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <section className="bg-stone-900 text-white py-20">
        <Container>
          <div className="max-w-2xl">
            <span className="inline-block text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4">
              Case Studies
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-5 leading-tight">
              Practical AI Automation Case Studies
            </h1>
            <p className="text-stone-300 text-lg leading-relaxed">
              These are representative automation scenarios showing how Baara approaches common business problems. They are not guaranteed results — every workflow is different.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          <SectionHeader
            eyebrow="Sample Scenarios"
            title="How Baara designs automation workflows"
            subtitle="Each scenario below represents a realistic automation approach. Results depend on your tools, team, and data quality."
          />
          <div className="space-y-12">
            {caseStudies.map((cs) => (
              <div
                key={cs.id}
                className="bg-stone-50 border border-stone-200 rounded-2xl p-8"
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    {cs.label}
                  </span>
                  <h2 className="text-xl font-bold text-stone-900">{cs.industry}</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div>
                      <span className="text-xs font-semibold text-amber-600 uppercase tracking-widest">Challenge</span>
                      <p className="text-stone-700 mt-1 text-sm leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-amber-600 uppercase tracking-widest">Workflow designed</span>
                      <p className="text-stone-700 mt-1 text-sm leading-relaxed">{cs.workflow}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <span className="text-xs font-semibold text-amber-600 uppercase tracking-widest">Tools involved</span>
                      <p className="text-stone-500 mt-1 text-sm">{cs.tools.join(", ")}</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-amber-600 uppercase tracking-widest">Practical outcome</span>
                      <p className="text-stone-700 mt-1 text-sm leading-relaxed">{cs.outcome}</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-amber-600 uppercase tracking-widest">Next improvement</span>
                      <p className="text-stone-500 mt-1 text-sm italic">{cs.next}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <CTAButton href="/contact" variant="primary" size="lg">
              See What We Can Build for You
            </CTAButton>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
