import type { Metadata } from "next";
import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import SectionHeader from "@/components/SectionHeader";
import JsonLd from "@/components/JsonLd";
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

      {/* Hero */}
      <section className="bg-blue-700 text-white py-20">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Academy", href: "/academy" },
              { label: "Healthcare IT Career Launch" },
            ]}
          />
          <div className="text-center max-w-3xl mx-auto mt-6">
            <span className="inline-block text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-4">
              Baara Academy &middot; First Cohort
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-5 leading-tight">
              Healthcare IT Career Launch Program
              <br />
              <span className="text-cyan-400">for African Professionals</span>
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed mb-8">
              A practical 8-week online cohort for African and diaspora career-changers who want to understand healthcare IT, EHR workflows, clinical application support, ticketing, HL7/FHIR basics, AI productivity, and job-search strategy.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <CTAButton href="/academy/healthcare-it-roadmap" variant="secondary" size="lg">
                Join the Waitlist
              </CTAButton>
              <CTAButton href="/academy/healthcare-it-roadmap" variant="ghost" size="lg">
                Download Free Roadmap
              </CTAButton>
            </div>
          </div>
        </Container>
      </section>

      {/* Disclaimer */}
      <section className="bg-amber-50 py-8 border-y border-amber-200">
        <Container>
          <div className="flex items-start gap-4 max-w-3xl mx-auto">
            <span className="text-2xl flex-shrink-0">&#9878;</span>
            <p className="text-amber-900 text-sm leading-relaxed">
              <strong>Vendor-neutral disclaimer:</strong> Baara Academy does not provide official Epic, Oracle Health, Varian, Elekta, ARIA, MOSAIQ, or other vendor certifications. We teach practical concepts, workflows, documentation, AI productivity, and career readiness using original materials, simulated workflows, and synthetic examples. No job guarantee. Results depend on individual effort, background, location, work authorization, and market conditions.
            </p>
          </div>
        </Container>
      </section>

      {/* Who this is for */}
      <section className="section-padding bg-indigo-50">
        <Container>
          <SectionHeader eyebrow="Who This Is For" title="Is this program right for you?" center />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {whoFor.map((item) => (
              <div key={item} className="bg-white rounded-xl px-5 py-4 flex items-start gap-3 shadow-sm">
                <span className="text-blue-600 font-bold mt-0.5 flex-shrink-0">&#10003;</span>
                <span className="text-slate-800 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* What you will learn */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeader eyebrow="Curriculum" title="What you will learn" center />
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
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
              <div key={item.topic} className="bg-indigo-50 rounded-xl px-6 py-4 flex items-start gap-4 border border-blue-100">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <span className="text-slate-800 text-sm leading-relaxed">{item.topic}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 8-Week Schedule */}
      <section className="section-padding bg-indigo-50">
        <Container>
          <SectionHeader eyebrow="Program Schedule" title="8-Week Schedule" center />
          <p className="text-center text-slate-600 mb-8">
            Live sessions &middot; Recordings &middot; Worksheets &middot; Portfolio assignments &middot; 3&ndash;5 hours/week
          </p>
          {/* Desktop */}
          <div className="hidden md:block overflow-hidden rounded-xl border border-slate-200 shadow-sm max-w-3xl mx-auto">
            <table className="w-full text-sm" role="table" aria-label="8-week program curriculum">
              <thead>
                <tr className="bg-blue-700 text-white">
                  <th scope="col" className="text-left px-6 py-4 font-bold w-24">Week</th>
                  <th scope="col" className="text-left px-6 py-4 font-bold">Topic</th>
                </tr>
              </thead>
              <tbody>
                {curriculum.map((week, i) => (
                  <tr key={week.week} className={i % 2 === 0 ? "bg-white" : "bg-indigo-50"}>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-700 text-white font-bold text-xs">
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
          <div className="md:hidden space-y-3 max-w-sm mx-auto">
            {curriculum.map((week) => (
              <div key={week.week} className="bg-white rounded-xl px-5 py-4 flex items-center gap-4 border border-slate-200">
                <span className="w-10 h-10 rounded-full bg-blue-700 text-white font-bold text-sm flex items-center justify-center flex-shrink-0">
                  W{week.week}
                </span>
                <span className="font-medium text-slate-800 text-sm">{week.title}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Portfolio outcomes */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeader eyebrow="What You Will Build" title="Real portfolio artifacts" center />
          <p className="text-center text-slate-600 mb-8 max-w-xl mx-auto">
            By the end of 8 weeks, you will have real portfolio items to show employers.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {outcomes.map((o) => (
              <div key={o.label} className="bg-indigo-50 rounded-xl p-5 text-center border border-blue-100">
                <div className="text-3xl mb-2">{o.icon}</div>
                <p className="text-slate-800 font-semibold text-xs leading-snug">{o.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Meet Abdel */}
      <section className="section-padding bg-indigo-50">
        <Container narrow>
          <SectionHeader eyebrow="Your Instructor" title="Meet Your Instructor" center />
          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-16 h-16 rounded-full bg-blue-700 flex items-center justify-center text-2xl flex-shrink-0 text-white">
                &#128100;
              </div>
              <div>
                <h2 className="font-extrabold text-slate-900 text-xl">{site.founder.name}</h2>
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
        </Container>
      </section>

      {/* Waitlist */}
      <section className="bg-blue-700 py-20">
        <Container>
          <div className="bg-white rounded-xl p-10 max-w-2xl mx-auto text-center shadow-sm">
            <span className="inline-block text-cyan-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Join the Waitlist
            </span>
            <h2 className="font-extrabold text-slate-900 text-2xl mb-3">
              Cohort 1 pricing coming soon
            </h2>
            <p className="text-slate-600 mb-6">
              Join the waitlist to be notified when enrollment opens. Waitlist members get early access and first consideration.
            </p>
            <CTAButton href="/academy/healthcare-it-roadmap" variant="primary" size="lg">
              Join the Waitlist
            </CTAButton>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-indigo-50">
        <Container narrow>
          <SectionHeader eyebrow="FAQ" title="Frequently Asked Questions" center />
          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
            <FAQ items={careerLaunchFaqs} />
          </div>
        </Container>
      </section>

      <FinalCTA
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
