import type { Metadata } from "next";
import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import JsonLd from "@/components/JsonLd";
import ProgramCurriculum from "@/components/ProgramCurriculum";
import SectionHeader from "@/components/SectionHeader";
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

const outcomes = [
  "Healthcare IT career roadmap",
  "Sample workflow diagram",
  "Ticket documentation portfolio",
  "Basic HL7/FHIR concept map",
  "Healthcare IT resume",
  "LinkedIn profile improvements",
  "Interview practice stories",
  "Capstone project",
];

const whoFor = [
  "African and diaspora professionals considering healthcare IT",
  "Healthcare workers wanting to move into IT or support roles",
  "IT professionals wanting to enter the healthcare sector",
  "Career changers from admin, operations, or customer service",
  "Bilingual professionals who want to serve diverse healthcare settings",
  "Recent graduates exploring healthcare technology careers",
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
      <section className="bg-stone-900 text-white py-20">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Academy", href: "/academy" },
              { label: "Healthcare IT Career Launch" },
            ]}
          />
          <div className="max-w-3xl">
            <span className="inline-block text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4">
              Baara Academy · First Cohort
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-5 leading-tight">
              Healthcare IT Career Launch Program for African Professionals
            </h1>
            <p className="text-stone-300 text-xl leading-relaxed mb-4">
              A practical 8-week online cohort for African and diaspora career changers who want to understand healthcare IT, EHR workflows, clinical application support, ticketing, HL7/FHIR basics, AI productivity, and job-search strategy.
            </p>
            <div className="bg-amber-900/30 border border-amber-700/40 rounded-xl p-4 mb-8">
              <p className="text-amber-200 text-sm">
                <strong>Vendor-neutral disclaimer:</strong> Baara Academy does not provide official Epic, Oracle Health, Varian, Elekta, ARIA, MOSAIQ, or other vendor certifications. We teach practical concepts, workflows, documentation, AI productivity, and career readiness using original materials and synthetic examples.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <CTAButton href="/academy/healthcare-it-roadmap" variant="primary" size="lg">
                Join the Waitlist
              </CTAButton>
              <CTAButton
                href="/academy/healthcare-it-roadmap"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-stone-900 transition-colors font-semibold rounded-lg inline-flex items-center justify-center px-8 py-4 text-lg"
              >
                Download Free Career Roadmap
              </CTAButton>
            </div>
          </div>
        </Container>
      </section>

      {/* Who this is for */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <SectionHeader eyebrow="Who This Is For" title="You belong in this cohort if..." />
              <ul className="space-y-3">
                {whoFor.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <span className="text-amber-600 font-bold mt-0.5">✓</span>
                    <span className="text-stone-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeader eyebrow="Why Healthcare IT" title="A growing field with real opportunity" />
              <div className="prose-brand">
                <p>
                  Healthcare IT is one of the most stable and growing sectors in the US job market. EHR implementation, clinical application support, and interoperability roles are in demand — and many do not require a clinical background.
                </p>
                <p>
                  For African and diaspora professionals, healthcare IT offers a path that combines existing skills in IT, operations, healthcare, or admin with new technical and workflow knowledge.
                </p>
                <p>
                  This program does not guarantee employment. But it gives you the practical foundation, portfolio, and career preparation to compete for entry-level and transitional healthcare IT roles.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Curriculum */}
      <section className="section-padding bg-stone-50">
        <Container>
          <SectionHeader
            eyebrow="8-Week Curriculum"
            title="What you will learn, week by week"
            subtitle="Live sessions, recordings, worksheets, portfolio assignments, and community support throughout."
          />
          <ProgramCurriculum weeks={curriculum} />
          <div className="mt-6 p-4 bg-stone-100 rounded-xl text-sm text-stone-500">
            Format: 8 weeks · Live online sessions · Recordings provided · 3–5 hours/week
          </div>
        </Container>
      </section>

      {/* What you will build */}
      <section className="section-padding bg-white">
        <Container narrow>
          <SectionHeader
            eyebrow="Portfolio Outcomes"
            title="What you will build by graduation"
            center
          />
          <div className="grid sm:grid-cols-2 gap-4">
            {outcomes.map((outcome) => (
              <div
                key={outcome}
                className="flex gap-3 items-center bg-amber-50 border border-amber-100 rounded-xl px-5 py-4"
              >
                <span className="text-amber-600 font-bold">✓</span>
                <span className="text-stone-800 font-medium text-sm">{outcome}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Founder credibility */}
      <section className="section-padding bg-stone-50">
        <Container narrow>
          <div className="text-center">
            <span className="inline-block text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">Instructor</span>
            <h2 className="text-2xl font-bold text-stone-900 mb-4">Taught by a healthcare IT practitioner</h2>
            <p className="text-stone-600 leading-relaxed mb-3">
              {site.founder.name} is a {site.founder.bio}
            </p>
            <p className="text-stone-500 text-sm">
              All course materials are original. No employer-owned documents, PHI, or proprietary vendor materials are used. Simulated workflows use synthetic data only.
            </p>
          </div>
        </Container>
      </section>

      {/* Pricing/waitlist placeholder */}
      <section className="section-padding bg-white">
        <Container narrow>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 text-center">
            <span className="inline-block text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">Waitlist</span>
            <h2 className="text-2xl font-bold text-stone-900 mb-3">Cohort 1 pricing coming soon</h2>
            <p className="text-stone-600 mb-6">
              Join the waitlist to be notified when enrollment opens. Waitlist members get early access and first consideration.
            </p>
            <CTAButton href="/academy/healthcare-it-roadmap" variant="primary" size="lg">
              Join the Waitlist
            </CTAButton>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-stone-50">
        <Container narrow>
          <SectionHeader eyebrow="FAQ" title="Questions about the program" />
          <FAQ items={careerLaunchFaqs} />
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
