import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";
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

const services = [
  {
    icon: "⚡",
    title: "Lead Capture & Follow-Up",
    description: "Automated lead intake, instant replies, CRM records, and follow-up sequences — so no opportunity slips through.",
  },
  {
    icon: "💬",
    title: "WhatsApp & Web Chat AI",
    description: "AI-powered chat that answers inquiries, qualifies leads, and books appointments around the clock.",
  },
  {
    icon: "🔗",
    title: "CRM & Pipeline Automation",
    description: "Connect your tools, auto-route leads, and keep your pipeline moving without manual data entry.",
  },
];

const whyChoose = [
  {
    icon: "🎯",
    title: "Built for African contexts",
    description: "We understand the specific tools, platforms, and workflows used by African entrepreneurs and diaspora professionals.",
  },
  {
    icon: "🤝",
    title: "We value our clients",
    description: "Practical results, clear communication, and systems you actually own — no vendor lock-in or black-box solutions.",
  },
  {
    icon: "🛠️",
    title: "Top-tier systems",
    description: "Our interface is simple and easy to use. We build reliable automations that run quietly in the background.",
  },
];

const howItWorks = [
  { step: "1", title: "Free Audit", description: "We map your current workflow and identify your highest-impact automation opportunities." },
  { step: "2", title: "Clear Roadmap", description: "You get a practical plan — which workflows to automate first and what outcomes to expect." },
  { step: "3", title: "Build & Train", description: "Baara builds your automation systems or trains your team through Baara Academy." },
  { step: "4", title: "Launch & Improve", description: "Your systems go live. We review, refine, and help you expand over time." },
];

const testimonials = [
  {
    initials: "EG",
    name: "Elan Grantley",
    company: "Wrede Co.",
    text: "Testimonials are short quotes from people who love your brand. It&apos;s a great way to convince customers to try your services.",
  },
  {
    initials: "DS",
    name: "Douglas Salvation",
    company: "Bluell Financial",
    text: "Testimonials are short quotes from people who love your brand. It&apos;s a great way to convince customers to try your services.",
  },
  {
    initials: "AG",
    name: "Alex Graham",
    company: "Hadlow Express",
    text: "Testimonials are short quotes from people who love your brand. It&apos;s a great way to convince customers to try your services.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd schema={[organizationSchema(), websiteSchema()]} />

      {/* Hero */}
      <section className="bg-blue-700 text-white py-24 sm:py-32">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                AI Solutions that transform your{" "}
                <span className="text-cyan-400">business</span>
              </h1>
              <p className="text-blue-100 text-xl leading-relaxed mb-8 max-w-xl">
                Baara helps entrepreneurs, professionals, and African communities use practical AI systems to save time, capture opportunities, and build future-ready digital careers.
              </p>
              <div className="flex flex-wrap gap-4">
                <CTAButton href="/contact" variant="secondary" size="lg">
                  Learn More
                </CTAButton>
                <CTAButton href="/academy" variant="ghost" size="lg">
                  Explore Academy
                </CTAButton>
              </div>
              <p className="mt-6 text-blue-300 text-sm">
                Bilingual English/French &middot; Built for African entrepreneurs and diaspora professionals
              </p>
            </div>
            {/* Decorative tech graphic */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-80 h-72">
                <div className="absolute inset-0 bg-blue-600 rounded-2xl opacity-50" />
                <div className="absolute inset-4 border-2 border-cyan-400 rounded-xl opacity-60" />
                <div className="absolute top-8 right-8 w-24 h-24 border-4 border-cyan-400 rounded-full opacity-70" />
                <div className="absolute bottom-10 left-10 flex flex-col gap-1.5">
                  {[80, 55, 95, 40, 70, 85].map((h, i) => (
                    <div key={i} className="flex items-end gap-1">
                      <div className="bg-cyan-400 rounded-sm opacity-80" style={{ width: 12, height: h * 0.4 }} />
                    </div>
                  ))}
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                  <div className="text-cyan-400 font-extrabold text-4xl opacity-70">AI</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Who We Are */}
      <section className="section-padding bg-white">
        <Container narrow>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Who We Are</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-4">
              Baara is an AI automation and digital skills company built for African entrepreneurs, diaspora professionals, and small businesses. We combine practical workflow automation with hands-on education to help you work smarter.
            </p>
            <p className="text-slate-500 leading-relaxed">
              Founded by <strong className="text-slate-700">{site.founder.name}</strong>, a {site.founder.bio}, Baara is connected to <strong className="text-slate-700">GlobalSABT</strong> and built to serve the African diaspora community.{" "}
              <Link href="/a-propos" className="text-blue-700 font-semibold hover:underline">
                Read the full story &rarr;
              </Link>
            </p>
          </div>
        </Container>
      </section>

      {/* Our Services */}
      <section className="section-padding bg-indigo-50">
        <Container>
          <SectionHeader
            eyebrow="Our Services"
            title="What Baara builds for you"
            subtitle="From lead capture to AI-powered chat, Baara designs and builds practical automation systems that run without you."
            center
          />
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-blue-700 h-40 flex items-center justify-center">
                  <span className="text-5xl">{s.icon}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{s.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <CTAButton href="/services" variant="primary">
              See All Services
            </CTAButton>
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeader eyebrow="Why Choose Us" title="Built differently, for you" center />
          <div className="grid md:grid-cols-3 gap-10 max-w-4xl mx-auto">
            {whyChoose.map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-indigo-50">
        <Container>
          <SectionHeader eyebrow="How It Works" title="From audit to running systems in weeks" center />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step) => (
              <div key={step.step} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center font-extrabold text-lg mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Quote banner */}
      <section className="bg-blue-700 py-20">
        <Container narrow>
          <div className="text-center">
            <div className="w-16 h-1 bg-cyan-400 mx-auto mb-8" />
            <blockquote className="text-2xl sm:text-3xl font-bold text-white leading-snug italic mb-6">
              &ldquo;Grab the reader&apos;s attention with a descriptive line that
              highlights your event, product, or service. A short and relevant
              quote works, too!&rdquo;
            </blockquote>
            <div className="w-16 h-1 bg-cyan-400 mx-auto mt-6" />
          </div>
        </Container>
      </section>

      {/* Academy */}
      <section className="section-padding bg-indigo-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-blue-700 rounded-xl p-8 text-white">
              <h3 className="font-bold text-cyan-400 text-lg mb-4">Healthcare IT Career Launch</h3>
              <p className="text-blue-200 text-sm mb-4">8-week online cohort for African and diaspora professionals</p>
              <ul className="space-y-2 text-sm text-blue-100">
                {[
                  "EHR workflows & clinical application support",
                  "Ticketing, incidents & change control",
                  "HL7, FHIR & healthcare data exchange",
                  "AI productivity for healthcare",
                  "Resume, LinkedIn & interview prep",
                  "Capstone project & career roadmap",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold mt-0.5">&#10003;</span> {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-blue-400 mt-5">
                Vendor-neutral. No official Epic or ARIA certifications implied.
              </p>
            </div>
            <div>
              <span className="inline-block text-cyan-600 font-semibold text-sm uppercase tracking-widest mb-3">
                Baara Academy
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-5 leading-tight">
                Practical digital skills for African professionals
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Baara Academy helps African and diaspora professionals build job-ready skills in healthcare IT, AI automation, interoperability, and digital career development.
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

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeader eyebrow="Client Testimonials" title="What our community says" center />
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-indigo-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                    <p className="text-slate-500 text-xs">{t.company}</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Testimonials are short quotes from people who love your brand. It&apos;s a great way to convince customers to try your services.
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA
        title="Let's work together!"
        subtitle="Book a free consultation and see how Baara can transform your workflow or advance your career."
        primaryLabel="Book a Free AI Audit"
        primaryHref="/contact"
        secondaryLabel="Explore Baara Academy"
        secondaryHref="/academy"
      />
    </>
  );
}
