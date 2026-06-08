import type { Metadata } from "next";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import FinalCTA from "@/components/FinalCTA";
import JsonLd from "@/components/JsonLd";
import PillHeader from "@/components/PillHeader";
import { buildMetadata } from "@/lib/seo";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import { curriculum } from "@/lib/content/academy";

export const metadata: Metadata = buildMetadata({
  title: "AI Automation and Digital Skills for African Talent and Small Businesses",
  description: site.description,
  path: "/",
});

/* ── Hub navigation pills ── */
const hubLinks = [
  { label: "AI Automation", href: "/services", bg: "bg-orange-500 hover:bg-orange-600" },
  { label: "Academy", href: "/academy", bg: "bg-pink-500 hover:bg-pink-600" },
  { label: "Healthcare IT Roadmap", href: "/academy/healthcare-it-roadmap", bg: "bg-teal-600 hover:bg-teal-700" },
  { label: "Pricing", href: "/pricing", bg: "bg-indigo-600 hover:bg-indigo-700" },
  { label: "Community", href: "/communaute", bg: "bg-pink-400 hover:bg-pink-500" },
  { label: "Contact", href: "/contact", bg: "bg-orange-600 hover:bg-orange-700" },
];

/* ── Automation bullets ── */
const automationItems = [
  "Lead capture and follow-up",
  "WhatsApp and customer communication",
  "CRM and pipeline workflows",
  "Reports and dashboards",
  "Email and content workflows",
  "Repetitive admin tasks",
];

/* ── Update cards ── */
const updates = [
  {
    pill: "Academy",
    pillBg: "bg-pink-500",
    icon: "🎓",
    title: "Baara Academy waitlist is opening",
    body: "The Healthcare IT Career Launch Program for African professionals is accepting early interest. Join the waitlist for first access.",
    href: "/academy/healthcare-it-career-launch",
  },
  {
    pill: "Program",
    pillBg: "bg-orange-500",
    icon: "📋",
    title: "Healthcare IT Career Launch Program is coming",
    body: "An 8-week practical cohort covering EHR workflows, HL7/FHIR, AI productivity, and career readiness. English-first with French support coming.",
    href: "/academy/healthcare-it-career-launch",
  },
  {
    pill: "Automation",
    pillBg: "bg-sky-500",
    icon: "⚙️",
    title: "AI Automation audits are available",
    body: "Book a free 30-minute audit and walk away with a clear automation roadmap for your business. No pitch, no pressure.",
    href: "/contact",
  },
];

/* ── Principle pills ── */
const principles = [
  { label: "Build practical systems", bg: "bg-orange-100 text-orange-800" },
  { label: "Protect private data", bg: "bg-blue-100 text-blue-800" },
  { label: "Use AI responsibly", bg: "bg-teal-100 text-teal-800" },
  { label: "No hype, no fake guarantees", bg: "bg-pink-100 text-pink-800" },
  { label: "Learn by building", bg: "bg-indigo-100 text-indigo-800" },
  { label: "Serve the community", bg: "bg-emerald-100 text-emerald-800" },
  { label: "Start simple, improve weekly", bg: "bg-amber-100 text-amber-800" },
  { label: "Keep ownership of your skills", bg: "bg-purple-100 text-purple-800" },
];

/* ── Timeline phases ── */
const timeline = [
  { phase: "1", label: "Join Waitlist", icon: "📋", desc: "Register early to secure your spot and get updates." },
  { phase: "2", label: "Free Webinar", icon: "🎥", desc: "Attend a free intro session on healthcare IT career paths." },
  { phase: "3", label: "Pilot Cohort", icon: "🚀", desc: "8-week live cohort with sessions, labs, and portfolio work." },
  { phase: "4", label: "Portfolio Review", icon: "💼", desc: "Submit your capstone and receive feedback from the community." },
  { phase: "5", label: "Membership Community", icon: "🌍", desc: "Join the ongoing Baara learning community for alumni." },
];

/* ── Resources ── */
const resources = [
  {
    icon: "🗺️",
    title: "Healthcare IT Career Roadmap",
    desc: "Understand roles, pathways, EHR support, and how to position your experience.",
    href: "/academy/healthcare-it-roadmap",
    cta: "Download Free",
    bg: "bg-blue-900",
  },
  {
    icon: "✅",
    title: "AI Automation Checklist",
    desc: "A practical checklist for identifying your first automation opportunities.",
    href: "/onboarding",
    cta: "View Checklist",
    bg: "bg-orange-500",
  },
  {
    icon: "🔒",
    title: "Responsible AI + Data Privacy Guide",
    desc: "How to use AI tools safely in healthcare and business contexts.",
    href: "/academy/ai-automation-for-healthcare",
    cta: "Learn More",
    bg: "bg-teal-700",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd schema={[organizationSchema(), websiteSchema()]} />

      {/* ═══ 1. HERO / BAARA HUB ═══ */}
      <section className="bg-blue-900 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Pill title */}
          <div className="flex justify-center mb-8">
            <span className="bg-orange-500 text-white font-extrabold text-2xl sm:text-3xl px-10 py-4 rounded-full shadow-lg">
              Baara Hub
            </span>
          </div>

          {/* Hub nav pills */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-2xl mx-auto mb-12">
            {hubLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-white font-bold text-sm py-3 px-4 rounded-full text-center transition-colors ${link.bg}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Main headline */}
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
              AI Automation + Digital Skills
              <br />
              <span className="text-orange-400">for African Talent</span>
            </h1>
            <p className="text-blue-200 text-xl leading-relaxed max-w-2xl mx-auto mb-8">
              Baara helps entrepreneurs, professionals, and African communities use practical AI systems to save time, capture opportunities, and build future-ready digital careers.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <CTAButton href="/contact" variant="primary" size="lg">
                Get a Free AI Automation Audit
              </CTAButton>
              <CTAButton href="/academy" variant="ghost" size="lg">
                Explore Baara Academy
              </CTAButton>
            </div>
            <p className="mt-5 text-blue-400 text-sm">
              Bilingual English/French &middot; Built for African entrepreneurs and diaspora professionals &middot; Practical systems, not hype
            </p>
          </div>
        </div>
      </section>

      {/* ═══ 2. QUOTE ═══ */}
      <section className="bg-orange-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <PillHeader bg="bg-pink-500" text="text-white" size="sm" center>
            Words Worth Sharing
          </PillHeader>
          <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-md p-10 text-center">
            <blockquote className="text-2xl sm:text-3xl font-bold text-blue-900 leading-snug italic mb-6">
              &ldquo;Practical skills create better work, stronger systems, and wider opportunity.&rdquo;
            </blockquote>
            <p className="text-orange-500 font-bold text-sm uppercase tracking-widest">— Baara</p>
          </div>
        </div>
      </section>

      {/* ═══ 3. TODAY'S AI AUTOMATION ROADMAP ═══ */}
      <section className="bg-sky-100 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <PillHeader bg="bg-blue-900" text="text-white" size="md" center>
            📍 Today&apos;s AI Automation Roadmap
          </PillHeader>
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            {/* Left card */}
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h2 className="font-extrabold text-blue-900 text-lg mb-4">What Baara helps you automate</h2>
              <ul className="space-y-3">
                {automationItems.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-bold flex-shrink-0">
                      ✓
                    </span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <CTAButton href="/services" variant="secondary" size="sm">
                  See All Services
                </CTAButton>
              </div>
            </div>

            {/* Right reminder card */}
            <div className="bg-orange-500 rounded-3xl p-8 text-white flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 bg-white text-orange-600 font-bold text-xs px-4 py-1.5 rounded-full mb-5 uppercase tracking-wide">
                  ⏰ Reminder
                </div>
                <h2 className="font-extrabold text-2xl mb-4 leading-snug">
                  Start with one workflow.<br />
                  Don&apos;t automate chaos.
                </h2>
                <p className="text-orange-100 leading-relaxed">
                  Map the process first. The most successful automations start with a clear, documented workflow — not a messy one. Baara helps you build it right.
                </p>
              </div>
              <div className="mt-8">
                <CTAButton href="/onboarding" variant="white" size="sm">
                  See How It Works
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 4. BAARA UPDATES ═══ */}
      <section className="bg-teal-700 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <PillHeader bg="bg-pink-500" text="text-white" size="md" center>
            📢 Baara Updates
          </PillHeader>
          <div className="grid sm:grid-cols-3 gap-6 mt-4">
            {updates.map((update) => (
              <div key={update.title} className="bg-white rounded-3xl p-6 shadow-sm flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{update.icon}</span>
                  <span className={`text-white font-bold text-xs px-3 py-1 rounded-full ${update.pillBg}`}>
                    {update.pill}
                  </span>
                </div>
                <h3 className="font-extrabold text-blue-900 leading-snug">{update.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-1">{update.body}</p>
                <Link
                  href={update.href}
                  className="text-orange-600 font-bold text-sm hover:text-orange-700"
                >
                  Learn more &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 5. BAARA PRINCIPLES ═══ */}
      <section className="bg-orange-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <PillHeader bg="bg-blue-900" text="text-white" size="md" center>
            🧭 Baara Principles
          </PillHeader>
          <p className="text-center text-slate-600 mb-8 max-w-xl mx-auto">
            These principles guide everything Baara builds, teaches, and delivers.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {principles.map((p) => (
              <div
                key={p.label}
                className={`${p.bg} rounded-full px-5 py-3 text-center font-bold text-sm flex items-center justify-center`}
              >
                {p.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 6. FEATURED PROGRAM ═══ */}
      <section className="bg-sky-100 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <PillHeader bg="bg-orange-500" text="text-white" size="md" center>
            ⭐ Featured Program
          </PillHeader>
          <div className="grid md:grid-cols-2 gap-8 items-start mt-4">
            {/* Image placeholder */}
            <div className="bg-blue-900 rounded-3xl aspect-video flex flex-col items-center justify-center p-8 text-center">
              <span className="text-5xl mb-4">🏥</span>
              <span className="text-orange-400 font-bold text-xl">Healthcare IT</span>
              <span className="text-white font-extrabold text-2xl">Career Launch</span>
              <span className="text-blue-300 text-sm mt-2">for African Professionals</span>
            </div>

            {/* Content card */}
            <div className="bg-white rounded-3xl p-8 shadow-sm flex flex-col gap-4">
              <span className="inline-block bg-pink-100 text-pink-800 font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-wide">
                Baara Academy · First Cohort
              </span>
              <h2 className="font-extrabold text-blue-900 text-2xl leading-snug">
                Healthcare IT Career Launch Program for African Professionals
              </h2>
              <p className="text-slate-600 leading-relaxed">
                An 8-week practical online cohort for African and diaspora career-changers who want to understand healthcare IT, EHR workflows, clinical application support, ticketing, HL7/FHIR basics, AI productivity, and job-search strategy.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-xs text-amber-800">
                <strong>Vendor-neutral training.</strong> No official Epic, Oracle Health, Varian, Elekta, ARIA, MOSAIQ, or other vendor certification. No job guarantee.
              </div>
              <div className="flex gap-3 flex-wrap">
                <CTAButton href="/academy/healthcare-it-career-launch" variant="primary" size="sm">
                  Join the Waitlist
                </CTAButton>
                <CTAButton href="/academy/healthcare-it-roadmap" variant="outline" size="sm">
                  Free Career Roadmap
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 7. PROGRAM SCHEDULE ═══ */}
      <section className="bg-teal-700 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <PillHeader bg="bg-blue-900" text="text-white" size="md" center>
            📅 Program Schedule
          </PillHeader>
          <p className="text-center text-teal-100 mb-8">
            The 8-week Healthcare IT Career Launch curriculum at a glance.
          </p>

          {/* Desktop table */}
          <div className="hidden md:block overflow-hidden rounded-3xl bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="text-left px-6 py-4 font-bold w-24">Week</th>
                  <th className="text-left px-6 py-4 font-bold">Topic</th>
                </tr>
              </thead>
              <tbody>
                {curriculum.map((week, i) => (
                  <tr key={week.week} className={i % 2 === 0 ? "bg-white" : "bg-sky-50"}>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 text-white font-bold text-xs">
                        W{week.week}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-medium text-slate-800">{week.title}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile stacked cards */}
          <div className="md:hidden grid gap-3">
            {curriculum.map((week) => (
              <div key={week.week} className="bg-white rounded-2xl px-5 py-4 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-orange-500 text-white font-bold text-sm flex items-center justify-center flex-shrink-0">
                  W{week.week}
                </span>
                <span className="font-medium text-slate-800 text-sm">{week.title}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <CTAButton href="/academy/healthcare-it-career-launch" variant="white" size="md">
              View Full Program
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ═══ 8. LAUNCH CALENDAR / TIMELINE ═══ */}
      <section className="bg-blue-900 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <PillHeader bg="bg-pink-500" text="text-white" size="md" center>
            🗓️ Launch Calendar
          </PillHeader>
          <p className="text-center text-blue-200 mb-10">
            How the Academy rollout unfolds — from first sign-up to ongoing community.
          </p>
          <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {timeline.map((phase) => (
              <div key={phase.phase} className="bg-white rounded-3xl p-6 text-center flex flex-col gap-3">
                <span className="text-3xl">{phase.icon}</span>
                <span className="inline-block bg-blue-900 text-white font-bold text-xs px-3 py-1 rounded-full mx-auto">
                  Phase {phase.phase}
                </span>
                <h3 className="font-extrabold text-blue-900">{phase.label}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 9. MEET ABDEL ═══ */}
      <section className="bg-orange-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <PillHeader bg="bg-pink-500" text="text-white" size="md" center>
            👋 Meet Abdel
          </PillHeader>
          <div className="grid md:grid-cols-2 gap-8 items-start mt-4">
            {/* Photo placeholder */}
            <div className="bg-teal-700 rounded-3xl aspect-square max-w-xs mx-auto md:mx-0 flex flex-col items-center justify-center p-8 text-center">
              <span className="text-6xl mb-4">👤</span>
              <span className="text-white font-extrabold text-xl">{site.founder.name}</span>
              <span className="text-teal-200 text-sm mt-1">{site.founder.title}</span>
              <span className="text-teal-300 text-xs mt-1">Jacksonville, Florida</span>
            </div>

            {/* Bio card */}
            <div className="bg-white rounded-3xl p-8 shadow-sm flex flex-col gap-5">
              <h2 className="font-extrabold text-blue-900 text-2xl">
                Abdel Traore
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Abdel Traore is a Malian-born bilingual English/French healthcare IT professional based in Jacksonville, Florida. He brings deep experience across healthcare IT, radiation oncology systems, EHR workflows, HL7/FHIR, clinical application support, workflow documentation, SQL validation, AI productivity, and healthcare interoperability.
              </p>
              <ul className="space-y-2">
                {[
                  "Built for African and diaspora learners",
                  "Practical healthcare IT and AI automation training",
                  "English-first with French-language expansion planned",
                  "Focused on real skills, portfolio work, and professional confidence",
                ].map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-orange-500 font-bold mt-0.5">✓</span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-slate-400">
                Baara is connected to <strong className="text-slate-600">GlobalSABT</strong>. All materials are original. No employer-owned documents or PHI are used.
              </p>
              <div>
                <CTAButton href="/contact" variant="primary" size="sm">
                  Contact Baara
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 10. RESOURCE HUB ═══ */}
      <section className="bg-sky-100 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <PillHeader bg="bg-blue-900" text="text-white" size="md" center>
            📚 Resource Hub
          </PillHeader>
          <p className="text-center text-slate-600 mb-8">
            Free resources to help you get started with automation and healthcare IT.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <div key={resource.title} className="bg-white rounded-3xl overflow-hidden shadow-sm card-lift flex flex-col">
                {/* Thumbnail */}
                <div className={`${resource.bg} h-28 flex items-center justify-center`}>
                  <span className="text-5xl">{resource.icon}</span>
                </div>
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <h3 className="font-extrabold text-blue-900">{resource.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed flex-1">{resource.desc}</p>
                  <CTAButton href={resource.href} variant="primary" size="sm" className="self-start">
                    {resource.cta}
                  </CTAButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 11. FINAL CTA ═══ */}
      <FinalCTA
        bg="bg-orange-500"
        title="Ready to build better work with AI and practical digital skills?"
        subtitle="Book a free AI automation audit or join the Baara Academy waitlist today."
        primaryLabel="Get a Free AI Automation Audit"
        primaryHref="/contact"
        secondaryLabel="Join Baara Academy Waitlist"
        secondaryHref="/academy/healthcare-it-career-launch"
      />
    </>
  );
}
