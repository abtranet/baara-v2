import type { Metadata } from "next";
import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";
import FinalCTA from "@/components/FinalCTA";
import SectionHeader from "@/components/SectionHeader";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Start With a Simple AI Automation Roadmap",
  description:
    "Learn how Baara onboards new clients — from a free audit to a working automation system in weeks.",
  path: "/onboarding",
});

const steps = [
  {
    number: "01",
    title: "Book Your Free Audit",
    description:
      "Schedule a 30-minute call. No preparation required. We come to you with questions, not a sales pitch.",
  },
  {
    number: "02",
    title: "Map Your Current Workflow",
    description:
      "We walk through how you currently handle leads, communication, operations, and reporting. We document exactly how things work today.",
  },
  {
    number: "03",
    title: "Identify Automation Opportunities",
    description:
      "We highlight which tasks can be automated, which tools can connect, and what you would gain from each change — without overpromising.",
  },
  {
    number: "04",
    title: "Build Your First Workflow",
    description:
      "We configure and build your first automation system. You review it, test it, and approve it before it goes live.",
  },
  {
    number: "05",
    title: "Train Your Team",
    description:
      "We walk through how everything works, document the setup, and make sure you can manage it going forward.",
  },
  {
    number: "06",
    title: "Review & Improve",
    description:
      "We check in regularly, review performance, and help you build on what is working — one workflow at a time.",
  },
];

export default function OnboardingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-blue-700 text-white py-20">
        <Container>
          <div className="max-w-2xl">
            <span className="inline-block text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-4">
              Getting Started
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-5 leading-tight">
              Start With a Simple AI Automation Roadmap
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed mb-8">
              Working with Baara starts with a free audit and ends with a system that runs without you. Here is what to expect.
            </p>
            <CTAButton href="/contact" variant="secondary" size="lg">
              Book Your Free Audit
            </CTAButton>
          </div>
        </Container>
      </section>

      {/* Steps */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeader
            eyebrow="The Baara Process"
            title="Six steps from first call to working automation"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-extrabold text-sm flex items-center justify-center">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Timelines */}
      <section className="section-padding bg-indigo-50">
        <Container narrow>
          <SectionHeader
            eyebrow="What to Expect"
            title="Honest about what automation can do"
            center
          />
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              { label: "Starter workflow", value: "1–2 weeks" },
              { label: "Growth plan setup", value: "2–4 weeks" },
              { label: "Scale project", value: "By scope" },
            ].map((item) => (
              <div key={item.label} className="bg-white border border-blue-100 rounded-xl p-6">
                <div className="text-2xl font-extrabold text-blue-700 mb-1">{item.value}</div>
                <div className="text-slate-600 text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA
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
