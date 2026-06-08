import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import FinalCTA from "@/components/FinalCTA";
import PillHeader from "@/components/PillHeader";
import { buildMetadata } from "@/lib/seo";
import { caseStudies } from "@/lib/content/caseStudies";

export const metadata: Metadata = buildMetadata({
  title: "Practical AI Automation Case Studies",
  description:
    "Sample workflow scenarios showing how Baara designs AI automation systems for local service companies, e-commerce brands, and real estate teams.",
  path: "/case-studies",
});

const caseColors = ["bg-orange-500", "bg-teal-600", "bg-blue-900"];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="bg-blue-900 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <span className="bg-teal-600 text-white font-extrabold text-2xl px-10 py-4 rounded-full shadow-lg">
              Case Studies
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">
            Practical AI Automation Case Studies
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Representative automation scenarios showing how Baara approaches common business problems. Not guaranteed results — every workflow is different.
          </p>
        </div>
      </section>

      <section className="bg-sky-100 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <PillHeader bg="bg-blue-900" text="text-white" size="md" center>
            📋 Sample Scenarios
          </PillHeader>
          <div className="space-y-8 mt-4">
            {caseStudies.map((cs, i) => (
              <div key={cs.id} className="bg-white rounded-3xl overflow-hidden shadow-sm">
                <div className={`${caseColors[i % caseColors.length]} px-8 py-5 flex items-center gap-4`}>
                  <span className="bg-white text-slate-700 font-bold text-xs px-4 py-1.5 rounded-full">
                    {cs.label}
                  </span>
                  <h2 className="text-white font-extrabold text-xl">{cs.industry}</h2>
                </div>
                <div className="p-8 grid md:grid-cols-2 gap-8">
                  <div className="space-y-5">
                    <div>
                      <span className="text-xs font-bold text-orange-600 uppercase tracking-widest">Challenge</span>
                      <p className="text-slate-700 mt-1 text-sm leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-orange-600 uppercase tracking-widest">Workflow designed</span>
                      <p className="text-slate-700 mt-1 text-sm leading-relaxed">{cs.workflow}</p>
                    </div>
                  </div>
                  <div className="space-y-5">
                    <div>
                      <span className="text-xs font-bold text-orange-600 uppercase tracking-widest">Tools involved</span>
                      <p className="text-slate-500 mt-1 text-sm">{cs.tools.join(", ")}</p>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-orange-600 uppercase tracking-widest">Practical outcome</span>
                      <p className="text-slate-700 mt-1 text-sm leading-relaxed">{cs.outcome}</p>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-orange-600 uppercase tracking-widest">Next improvement</span>
                      <p className="text-slate-400 mt-1 text-sm italic">{cs.next}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <CTAButton href="/contact" variant="secondary" size="lg">
              See What We Can Build for You
            </CTAButton>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
