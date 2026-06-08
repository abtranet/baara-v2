import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import JsonLd from "@/components/JsonLd";
import PillHeader from "@/components/PillHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { courseSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { curriculum, careerLaunchFaqs } from "@/lib/content/academy";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Healthcare IT Career Launch Program for African Professionals",
  description:
    "Baara Academy helps African and diaspora professionals build practical healthcare IT, EHR workflow, ticketing, HL7/FHIR, AI productivity, resume, LinkedIn, and interview skills.",
  path: "/academy/healthcare-it-career-launch",
});

const whoFor = [
  "African and diaspora professionals considering healthcare IT",
  "Healthcare workers wanting to move into IT or support roles",
  "IT professionals wanting to enter the healthcare sector",
  "Career changers from admin, operations, or customer service",
  "Bilingual professionals who want to serve diverse healthcare settings",
  "Recent graduates exploring healthcare technology careers",
];

const outcomes = [
  { icon: "🗺️", label: "Healthcare IT career roadmap" },
  { icon: "📊", label: "Sample workflow diagram" },
  { icon: "🎫", label: "Ticket documentation portfolio" },
  { icon: "🔗", label: "Basic HL7/FHIR concept map" },
  { icon: "📄", label: "Healthcare IT resume" },
  { icon: "💼", label: "LinkedIn profile improvements" },
  { icon: "🎤", label: "Interview practice stories" },
  { icon: "🎓", label: "Capstone project" },
];

export default function HealthcareITCareerLaunchPage() {
  return (
    <>
      <JsonLd
        schema={[
          courseSchema({
            name: "Healthcare IT Career Launch Program for African Professionals",
            description:
              "An 8-week practical online cohort covering EHR workflows, clinical application support, HL7/FHIR, AI productivity, and career readiness.",
            url: `${site.url}/academy/healthcare-it-career-launch`,
          }),
          faqSchema(careerLaunchFaqs),
          breadcrumbSchema([
            { name: "Home", url: site.url },
            { name: "Academy", url: `${site.url}/academy` },
            { name: "Healthcare IT Career Launch", url: `${site.url}/academy/healthcare-it-career-launch` },
          ]),
        ]}
      />

      {/* ═══ HERO ═══ */}
      <section className="bg-blue-900 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Academy", href: "/academy" },
              { label: "Healthcare IT Career Launch" },
            ]}
          />
          <div className="flex justify-center mb-8">
            <span className="bg-pink-500 text-white font-extrabold text-xl px-8 py-3.5 rounded-full shadow-lg">
              Baara Academy &middot; First Cohort
            </span>
          </div>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5 leading-tight">
              Healthcare IT Career Launch Program
              <br />
              <span className="text-orange-400">for African Professionals</span>
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed mb-8">
              A practical 8-week online cohort for African and diaspora career-changers who want to understand healthcare IT, EHR workflows, clinical application support, ticketing, HL7/FHIR basics, AI productivity, and job-search strategy.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <CTAButton href="/academy/healthcare-it-roadmap" variant="primary" size="lg">
                Join the Waitlist
              </CTAButton>
              <CTAButton href="/academy/healthcare-it-roadmap" variant="ghost" size="lg">
                Download Free Roadmap
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ VENDOR-NEUTRAL DISCLAIMER ═══ */}
      <section className="bg-amber-50 py-10 border-y border-amber-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 max-w-3xl mx-auto">
            <span className="text-2xl flex-shrink-0">⚖️</span>
            <p className="text-amber-900 text-sm leading-relaxed">
              <strong>Vendor-neutral disclaimer:</strong> Baara Academy does not provide official Epic, Oracle Health, Varian, Elekta, ARIA, MOSAIQ, or other vendor certifications. We teach practical concepts, workflows, documentation, AI productivity, and career readiness using original materials, simulated workflows, and synthetic examples. No job guarantee. Results depend on individual effort, background, location, work authorization, and market conditions.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ WHO THIS IS FOR ═══ */}
      <section className="bg-sky-100 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <PillHeader bg="bg-blue-900" text="text-white" size="md" center>
            🎯 Who This Is For
          </PillHeader>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto mt-4">
            {whoFor.map((item) => (
              <div key={item} className="bg-white rounded-2xl px-5 py-4 flex items-start gap-3 shadow-sm">
                <span className="text-orange-500 font-bold mt-0.5 flex-shrink-0">✓</span>
                <span className="text-slate-800 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHAT YOU WILL LEARN ═══ */}
      <section className="bg-orange-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <PillHeader bg="bg-teal-700" text="text-white" size="md" center>
            📖 What You Will Learn
          </PillHeader>
          <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto mt-4">
            {[
              { icon: "🏥", topic: "Healthcare IT career paths and the digital health landscape" },
              { icon: "💻", topic: "EHR workflows and clinical application support roles" },
              { icon: "🎫", topic: "Ticket management, incidents, service requests, and change control" },
              { icon: "🔗", topic: "HL7, FHIR, ADT, orders, results, charges, and data exchange" },
              { icon: "🤖", topic: "AI productivity and safe automation for healthcare workflows" },
              { icon: "📋", topic: "Workflow documentation and portfolio-building techniques" },
              { icon: "📝", topic: "Resume writing, LinkedIn optimization, and job-search strategy" },
              { icon: "🎓", topic: "Capstone project and individual career roadmap" },
            ].map((item) => (
              <div key={item.topic} className="bg-white rounded-2xl px-6 py-4 flex items-start gap-4 shadow-sm">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <span className="text-slate-800 text-sm leading-relaxed">{item.topic}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 8-WEEK SCHEDULE ═══ */}
      <section className="bg-teal-700 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <PillHeader bg="bg-blue-900" text="text-white" size="md" center>
            📅 8-Week Schedule
          </PillHeader>
          <p className="text-center text-teal-100 mb-8">
            Live sessions &middot; Recordings &middot; Worksheets &middot; Portfolio assignments &middot; 3–5 hours/week
          </p>

          {/* Desktop */}
          <div className="hidden md:block overflow-hidden rounded-3xl bg-white shadow-sm">
            <table className="w-full text-sm" role="table" aria-label="8-week program curriculum">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th scope="col" className="text-left px-6 py-4 font-bold w-24">Week</th>
                  <th scope="col" className="text-left px-6 py-4 font-bold">Topic</th>
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

          {/* Mobile */}
          <div className="md:hidden space-y-3">
            {curriculum.map((week) => (
              <div key={week.week} className="bg-white rounded-2xl px-5 py-4 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-orange-500 text-white font-bold text-sm flex items-center justify-center flex-shrink-0">
                  W{week.week}
                </span>
                <span className="font-medium text-slate-800 text-sm">{week.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PORTFOLIO OUTCOMES ═══ */}
      <section className="bg-orange-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <PillHeader bg="bg-pink-500" text="text-white" size="md" center>
            💼 What You Will Build
          </PillHeader>
          <p className="text-center text-slate-600 mb-8 max-w-xl mx-auto">
            By the end of 8 weeks, you will have real portfolio artifacts to show employers.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {outcomes.map((o) => (
              <div key={o.label} className="bg-white rounded-2xl p-5 text-center shadow-sm">
                <div className="text-3xl mb-2">{o.icon}</div>
                <p className="text-slate-800 font-semibold text-xs leading-snug">{o.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MEET ABDEL ═══ */}
      <section className="bg-sky-100 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <PillHeader bg="bg-blue-900" text="text-white" size="md" center>
            👋 Meet Your Instructor
          </PillHeader>
          <div className="bg-white rounded-3xl p-8 max-w-3xl mx-auto shadow-sm">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-16 h-16 rounded-full bg-teal-700 flex items-center justify-center text-2xl flex-shrink-0">
                👤
              </div>
              <div>
                <h2 className="font-extrabold text-blue-900 text-xl">{site.founder.name}</h2>
                <p className="text-slate-500 text-sm">Healthcare IT Professional &middot; Jacksonville, FL</p>
              </div>
            </div>
            <p className="text-slate-600 leading-relaxed mb-4">
              {site.founder.bio}
            </p>
            <p className="text-xs text-slate-400">
              All course materials are original. No employer-owned documents, PHI, or proprietary vendor materials are used. Simulated workflows use synthetic data only.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ WAITLIST ═══ */}
      <section className="bg-blue-900 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-10 max-w-2xl mx-auto text-center shadow-sm">
            <PillHeader bg="bg-orange-500" text="text-white" size="sm" center>
              📋 Join the Waitlist
            </PillHeader>
            <h2 className="font-extrabold text-blue-900 text-2xl mb-3">
              Cohort 1 pricing coming soon
            </h2>
            <p className="text-slate-600 mb-6">
              Join the waitlist to be notified when enrollment opens. Waitlist members get early access and first consideration.
            </p>
            <CTAButton href="/academy/healthcare-it-roadmap" variant="primary" size="lg">
              Join the Waitlist
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="bg-orange-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <PillHeader bg="bg-blue-900" text="text-white" size="md" center>
              ❓ Frequently Asked Questions
            </PillHeader>
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <FAQ items={careerLaunchFaqs} />
            </div>
          </div>
        </div>
      </section>

      <FinalCTA
        bg="bg-pink-500"
        title="Ready to build your healthcare IT foundation?"
        subtitle="Join the waitlist or download the free career roadmap to start learning today."
        primaryLabel="Join the Waitlist"
        primaryHref="/academy/healthcare-it-roadmap"
        secondaryLabel="Download Free Roadmap"
        secondaryHref="/academy/healthcare-it-roadmap"
      />
    </>
  );
}
