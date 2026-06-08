import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import FinalCTA from "@/components/FinalCTA";
import JsonLd from "@/components/JsonLd";
import PillHeader from "@/components/PillHeader";
import { buildMetadata } from "@/lib/seo";
import { serviceSchema } from "@/lib/schema";
import { services, toolEcosystem } from "@/lib/content/services";

export const metadata: Metadata = buildMetadata({
  title: "AI Automation Services for Small Businesses and African Entrepreneurs",
  description:
    "Baara helps small businesses, entrepreneurs, and African-led organizations automate follow-up, customer communication, operations, reporting, and repetitive workflows.",
  path: "/services",
});

const serviceColors = [
  "bg-orange-500",
  "bg-pink-500",
  "bg-teal-600",
  "bg-indigo-600",
  "bg-blue-900",
  "bg-emerald-600",
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd schema={serviceSchema("AI Automation Services", "Practical AI automation workflows for small businesses and African entrepreneurs.")} />

      {/* Hero */}
      <section className="bg-blue-900 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-8">
            <span className="bg-orange-500 text-white font-extrabold text-2xl px-10 py-4 rounded-full shadow-lg">
              AI Automation Services
            </span>
          </div>
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5 leading-tight">
              Turn Manual Work Into Simple Systems
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed mb-8">
              Baara designs and builds AI-powered workflows for small businesses, entrepreneurs, and African-led organizations.
            </p>
            <CTAButton href="/contact" variant="primary" size="lg">
              Book a Free Audit
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-sky-100 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <PillHeader bg="bg-blue-900" text="text-white" size="md" center>
            🛠️ What Baara Builds
          </PillHeader>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {services.map((s, i) => (
              <div key={s.id} className="bg-white rounded-3xl overflow-hidden shadow-sm card-lift flex flex-col">
                <div className={`${serviceColors[i % serviceColors.length]} h-14 flex items-center px-6`}>
                  <h3 className="text-white font-extrabold text-base">{s.title}</h3>
                </div>
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <p className="text-slate-600 text-sm leading-relaxed">{s.description}</p>
                  <div className="space-y-3 flex-1">
                    <div>
                      <span className="text-xs font-bold text-orange-600 uppercase tracking-widest">Who it&apos;s for</span>
                      <p className="text-slate-700 text-sm mt-1">{s.whoFor}</p>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-orange-600 uppercase tracking-widest">Can connect with</span>
                      <p className="text-slate-500 text-xs mt-1">{s.tools.join(", ")}</p>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-orange-600 uppercase tracking-widest">Outcome</span>
                      <p className="text-slate-700 text-sm mt-1">{s.outcome}</p>
                    </div>
                  </div>
                  <CTAButton href="/contact" variant="primary" size="sm" className="self-start mt-2">
                    Book Free Audit
                  </CTAButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tool ecosystem */}
      <section className="bg-orange-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <PillHeader bg="bg-teal-700" text="text-white" size="md" center>
            🔧 Tools Baara Can Work With
          </PillHeader>
          <p className="text-center text-slate-600 mb-8 max-w-xl mx-auto">
            These workflows can be designed to connect with tools you already use. Final compatibility depends on your specific setup.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {toolEcosystem.map((tool) => (
              <span
                key={tool}
                className="bg-white text-slate-700 border border-slate-200 text-sm font-semibold px-5 py-2.5 rounded-full shadow-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA
        bg="bg-teal-700"
        title="Ready to automate your first workflow?"
        subtitle="Book a free audit and walk away with a clear picture of your highest-impact automation opportunities."
        primaryLabel="Book a Free Audit"
        primaryHref="/contact"
        secondaryLabel="See Case Studies"
        secondaryHref="/case-studies"
      />
    </>
  );
}
