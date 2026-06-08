import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";
import FeatureCard from "@/components/FeatureCard";
import FinalCTA from "@/components/FinalCTA";
import JsonLd from "@/components/JsonLd";
import SectionHeader from "@/components/SectionHeader";
import { buildMetadata } from "@/lib/seo";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "AI Automation and Digital Skills for African Talent and Small Businesses",
  description: site.description,
  path: "/",
});

const problems = [
  {
    icon: "⏳",
    title: "Manual follow-up killing your time",
    description:
      "Leads wait hours or days to hear from you. Potential clients move on while you handle other tasks.",
  },
  {
    icon: "📉",
    title: "Missed opportunities and scattered tools",
    description:
      "Your data lives in five different places. You have no clear picture of what is working or falling through.",
  },
  {
    icon: "🧱",
    title: "Slow operations, fast competition",
    description:
      "Competitors are automating. You are still manually copying data, sending individual messages, and chasing invoices.",
  },
  {
    icon: "🎓",
    title: "Skills gaps blocking career moves",
    description:
      "Healthcare IT jobs are growing, but the path in is unclear — especially for African and diaspora professionals navigating a new market.",
  },
];

const howItWorks = [
  {
    step: "1",
    title: "Free Audit",
    description:
      "We map your current workflow and identify your highest-impact automation opportunities.",
  },
  {
    step: "2",
    title: "Clear Roadmap",
    description:
      "You get a practical plan — which workflows to automate first, which tools to use, and what outcomes to expect.",
  },
  {
    step: "3",
    title: "Build & Train",
    description:
      "Baara builds your automation systems or trains your team through Baara Academy.",
  },
  {
    step: "4",
    title: "Launch & Improve",
    description:
      "Your systems go live. We review, refine, and help you expand over time.",
  },
];

const workflowExamples = [
  "Web inquiry → instant WhatsApp + email + CRM record → booked call",
  "New student signup → welcome sequence + community invite + calendar link",
  "Order completed → post-purchase tip + review request + repeat purchase nudge",
  "Healthcare IT ticket submitted → auto-acknowledgment + priority routing + SLA tracking",
  "Lead form filled → scored in CRM → rep assigned → follow-up task created",
];

export default function HomePage() {
  return (
    <>
      <JsonLd schema={[organizationSchema(), websiteSchema()]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white py-24 sm:py-32">
        <Container>
          <div className="max-w-3xl">
            <span className="inline-block bg-amber-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-6">
              Bilingual English/French · Pan-African
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              AI Automation and Digital Skills for{" "}
              <span className="text-amber-400">African Talent</span> and Small
              Businesses
            </h1>
            <p className="text-stone-300 text-xl leading-relaxed mb-8 max-w-2xl">
              Baara helps entrepreneurs, professionals, and African communities
              use practical AI systems to save time, capture opportunities, and
              build future-ready digital careers.
            </p>
            <div className="flex flex-wrap gap-4">
              <CTAButton href="/contact" variant="primary" size="lg">
                Get a Free AI Automation Audit
              </CTAButton>
              <CTAButton
                href="/academy"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-stone-900 transition-colors font-semibold rounded-lg inline-flex items-center justify-center px-8 py-4 text-lg"
              >
                Explore Baara Academy
              </CTAButton>
            </div>
            <p className="mt-6 text-stone-500 text-sm">
              Bilingual English/French · Built for African entrepreneurs and
              diaspora professionals · Practical systems, not hype
            </p>
          </div>
        </Container>
      </section>

      {/* Problem */}
      <section className="section-padding bg-stone-50">
        <Container>
          <SectionHeader
            eyebrow="The Problem"
            title="Manual work is slowing you down"
            subtitle="Every hour spent on repetitive tasks is an hour not spent growing your business or advancing your career."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((p) => (
              <FeatureCard
                key={p.title}
                icon={p.icon}
                title={p.title}
                description={p.description}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* AI Automation Branch */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">
                Baara AI Automation
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-5 leading-tight">
                Practical automation systems for your business
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed mb-6">
                Baara designs and builds AI-powered workflows for small
                businesses, entrepreneurs, and African-led organizations — from
                lead capture and WhatsApp AI to CRM pipelines and custom
                reporting.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Lead capture & follow-up automation",
                  "WhatsApp & web chat AI",
                  "CRM & pipeline automation",
                  "Reporting & dashboard automation",
                  "Custom AI workflow design",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-stone-700">
                    <span className="text-amber-600 font-bold">✓</span> {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <CTAButton href="/services" variant="primary">
                  See All Services
                </CTAButton>
                <CTAButton href="/pricing" variant="outline">
                  View Pricing
                </CTAButton>
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-stone-100 rounded-2xl p-8 border border-stone-200">
              <h3 className="font-bold text-stone-800 mb-4">Sample workflow</h3>
              <div className="space-y-3 text-sm text-stone-700">
                {[
                  "New inquiry via web form",
                  "Instant WhatsApp + email reply",
                  "CRM record created automatically",
                  "Booking link sent",
                  "Follow-up scheduled if no response",
                ].map((step, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-3 ${i > 0 ? "pl-4" : ""}`}
                  >
                    {i === 0 ? (
                      <span className="w-5 h-5 bg-amber-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                        1
                      </span>
                    ) : (
                      <span className="text-amber-400 flex-shrink-0 font-bold">→</span>
                    )}
                    <span>{step}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-stone-400 mt-5">
                All automatic. Zero manual work.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Academy Branch */}
      <section className="section-padding bg-stone-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 bg-gradient-to-br from-stone-800 to-stone-900 rounded-2xl p-8 text-white">
              <h3 className="font-bold text-amber-400 mb-4">
                Healthcare IT Career Launch
              </h3>
              <p className="text-stone-300 text-sm mb-4">
                8-week online cohort for African and diaspora professionals
              </p>
              <ul className="space-y-2 text-sm text-stone-300">
                {[
                  "EHR workflows & clinical application support",
                  "Ticketing, incidents & change control",
                  "HL7, FHIR & healthcare data exchange",
                  "AI productivity for healthcare",
                  "Resume, LinkedIn & interview prep",
                  "Capstone project & career roadmap",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold mt-0.5">✓</span>{" "}
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-stone-500 mt-5">
                Vendor-neutral. No official Epic or ARIA certifications implied.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">
                Baara Academy
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-5 leading-tight">
                Practical digital skills for African professionals
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed mb-6">
                Baara Academy helps African and diaspora professionals build
                job-ready skills in healthcare IT, AI automation,
                interoperability, and digital career development.
              </p>
              <div className="flex flex-wrap gap-3">
                <CTAButton href="/academy/healthcare-it-career-launch" variant="primary">
                  Join the Waitlist
                </CTAButton>
                <CTAButton href="/academy/healthcare-it-roadmap" variant="outline">
                  Free Career Roadmap
                </CTAButton>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* How Baara Works */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeader
            eyebrow="How It Works"
            title="From audit to running systems in weeks"
            center
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center font-extrabold text-lg mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="font-bold text-stone-900 mb-2">{step.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Workflow Examples */}
      <section className="section-padding bg-stone-50">
        <Container>
          <SectionHeader
            eyebrow="Practical Workflows"
            title="Real automation scenarios"
            subtitle="These are the kinds of workflows Baara can design and build for your business."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {workflowExamples.map((ex, i) => (
              <div
                key={i}
                className="bg-white border border-stone-200 rounded-xl p-5 text-stone-700 text-sm leading-relaxed font-medium"
              >
                {ex}
              </div>
            ))}
          </div>
          <div className="mt-8">
            <CTAButton href="/case-studies" variant="outline">
              See Full Case Studies
            </CTAButton>
          </div>
        </Container>
      </section>

      {/* Founder */}
      <section className="section-padding bg-white">
        <Container narrow>
          <div className="text-center">
            <span className="inline-block text-amber-600 font-semibold text-sm uppercase tracking-widest mb-4">
              About the Founder
            </span>
            <h2 className="text-3xl font-bold text-stone-900 mb-5">
              Built by someone who knows both worlds
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-6">
              {site.founder.name} is a {site.founder.bio}
            </p>
            <p className="text-stone-500 mb-8">
              Baara is connected to{" "}
              <strong className="text-stone-700">GlobalSABT</strong> and built
              for the African diaspora professionals and entrepreneurs who are
              ready to build smarter systems.
            </p>
            <Link
              href="/a-propos"
              className="text-amber-700 font-semibold hover:underline"
            >
              Read the full story →
            </Link>
          </div>
        </Container>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-amber-50 border-y border-amber-100">
        <Container narrow>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-stone-900 mb-3">
              Stay ahead of AI in Africa
            </h2>
            <p className="text-stone-600 mb-6">
              Weekly AI news, automation tips, Academy updates, and practical
              career resources — in English and French.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <CTAButton href="/newsletter" variant="primary">
                Subscribe to the Newsletter
              </CTAButton>
              <CTAButton href="/communaute" variant="outline">
                Join the Community
              </CTAButton>
            </div>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
