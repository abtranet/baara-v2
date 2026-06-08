import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import FinalCTA from "@/components/FinalCTA";
import PillHeader from "@/components/PillHeader";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Start With a Simple AI Automation Roadmap",
  description: "Learn how Baara onboards new clients — from a free audit to a working automation system in weeks.",
  path: "/onboarding",
});

const steps = [
  { n: "01", icon: "📞", title: "Book Your Free Audit", desc: "Schedule a 30-minute call. No preparation required. We come to you with questions, not a sales pitch." },
  { n: "02", icon: "🗺️", title: "Map Your Current Workflow", desc: "We walk through how you currently handle leads, communication, operations, and reporting." },
  { n: "03", icon: "🔍", title: "Identify Opportunities", desc: "We highlight which tasks can be automated, which tools can connect, and what you would gain — without overpromising." },
  { n: "04", icon: "🔧", title: "Build Your First Workflow", desc: "We configure and build your first automation. You review, test, and approve before it goes live." },
  { n: "05", icon: "🎓", title: "Train Your Team", desc: "We walk through how everything works, document the setup, and make sure you can manage it going forward." },
  { n: "06", icon: "📈", title: "Review & Improve", desc: "We check in regularly, review performance, and help you build on what is working — one workflow at a time." },
];

const stepColors = ["bg-orange-500", "bg-pink-500", "bg-teal-600", "bg-blue-900", "bg-indigo-600", "bg-emerald-600"];

export default function OnboardingPage() {
  return (
    <>
      <section className="bg-blue-900 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <span className="bg-teal-600 text-white font-extrabold text-2xl px-10 py-4 rounded-full shadow-lg">
              Getting Started
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">
            Start With a Simple AI Automation Roadmap
          </h1>
          <p className="text-blue-200 text-lg max-w-xl mx-auto mb-8">
            Working with Baara starts with a free audit and ends with a system that runs without you.
          </p>
          <CTAButton href="/contact" variant="primary" size="lg">
            Book Your Free Audit
          </CTAButton>
        </div>
      </section>

      <section className="bg-sky-100 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <PillHeader bg="bg-blue-900" text="text-white" size="md" center>
            🪜 The Baara Process
          </PillHeader>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
            {steps.map((step, i) => (
              <div key={step.n} className="bg-white rounded-3xl overflow-hidden shadow-sm card-lift flex flex-col">
                <div className={`${stepColors[i]} h-12 flex items-center px-6 gap-3`}>
                  <span className="text-white font-extrabold">{step.n}</span>
                  <span className="text-lg">{step.icon}</span>
                </div>
                <div className="p-6 flex flex-col gap-2 flex-1">
                  <h3 className="font-extrabold text-blue-900">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-orange-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {[
              { label: "Starter workflow", value: "1–2 weeks" },
              { label: "Growth plan setup", value: "2–4 weeks" },
              { label: "Scale project", value: "By scope" },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-3xl p-6 text-center shadow-sm">
                <div className="text-3xl font-extrabold text-orange-500 mb-1">{item.value}</div>
                <div className="text-slate-600 text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA
        bg="bg-teal-700"
        title="Let us map your automation opportunities"
        subtitle="Book a free 30-minute audit. Walk away with a clear picture of what to automate first."
        primaryLabel="Book Free Audit"
        primaryHref="/contact"
        secondaryLabel="View Pricing"
        secondaryHref="/pricing"
      />
    </>
  );
}
