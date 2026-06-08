import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";
import FinalCTA from "@/components/FinalCTA";
import SectionHeader from "@/components/SectionHeader";
import Badge from "@/components/Badge";
import { buildMetadata } from "@/lib/seo";
import { academyTracks } from "@/lib/content/academy";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Baara Academy | Practical Digital Skills for African Professionals",
  description:
    "Build job-ready skills in healthcare IT, AI automation, interoperability, workflow documentation, and digital career development — for African and diaspora professionals.",
  path: "/academy",
});

const learningApproach = [
  { icon: "🎥", title: "Live cohorts", description: "Scheduled live sessions with recordings." },
  { icon: "📋", title: "Templates", description: "Practical tools you can use on the job from day one." },
  { icon: "🧪", title: "Simulated workflows", description: "Practice with synthetic data — no PHI, no compliance risk." },
  { icon: "💼", title: "Portfolio work", description: "Build samples you can show employers." },
  { icon: "🌍", title: "Bilingual support", description: "English-first. French support growing." },
  { icon: "👥", title: "Community", description: "Learn with other African professionals on the same path." },
];

export default function AcademyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-blue-700 text-white py-20">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-4">
              Baara Academy
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-5 leading-tight">
              Practical Digital Skills for{" "}
              <span className="text-cyan-400">African Professionals</span>
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed mb-8">
              Build job-ready skills in healthcare IT, AI automation, interoperability, workflow documentation, and digital career development.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <CTAButton href="/academy/healthcare-it-career-launch" variant="secondary" size="lg">
                Join the Waitlist
              </CTAButton>
              <CTAButton href="/academy/healthcare-it-roadmap" variant="ghost" size="lg">
                Free Career Roadmap
              </CTAButton>
            </div>
          </div>
        </Container>
      </section>

      {/* Academy Tracks */}
      <section className="section-padding bg-indigo-50">
        <Container>
          <SectionHeader eyebrow="Learning Tracks" title="Six career-ready digital skill tracks" center />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {academyTracks.map((track) => (
              <Link
                key={track.id}
                href={track.href}
                className="bg-white rounded-xl p-6 flex flex-col gap-4 border border-slate-200 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-extrabold text-slate-900 leading-snug">{track.title}</h3>
                  <Badge
                    variant={
                      track.status === "available"
                        ? "green"
                        : track.status === "waitlist"
                        ? "amber"
                        : "stone"
                    }
                  >
                    {track.status === "available"
                      ? "Open"
                      : track.status === "waitlist"
                      ? "Waitlist"
                      : "Coming Soon"}
                  </Badge>
                </div>
                {track.status !== "coming" && (
                  <span className="text-blue-700 text-sm font-semibold">Learn more &rarr;</span>
                )}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Program */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeader eyebrow="Featured Program" title="Healthcare IT Career Launch" center />
          <div className="bg-indigo-50 rounded-xl p-8 max-w-3xl mx-auto border border-blue-100">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🏥</span>
              <span className="bg-blue-100 text-blue-800 font-bold text-xs px-4 py-1.5 rounded-full">
                8-Week Online Cohort
              </span>
            </div>
            <h2 className="font-extrabold text-slate-900 text-2xl mb-4">
              Practical Program for African and Diaspora Professionals
            </h2>
            <ul className="space-y-2 mb-6">
              {[
                "EHR workflows and clinical application support",
                "Ticketing, incidents, and change control",
                "HL7, FHIR, and healthcare data exchange",
                "AI productivity for healthcare contexts",
                "Resume, LinkedIn, and interview preparation",
                "Capstone project and individual career roadmap",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="text-blue-600 font-bold mt-0.5">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-xs text-slate-400 mb-5">
              Vendor-neutral. No official Epic, Oracle Health, Varian, Elekta, ARIA, MOSAIQ, or other vendor certifications. No job guarantee.
            </p>
            <CTAButton href="/academy/healthcare-it-career-launch" variant="primary" size="md">
              Join the Waitlist
            </CTAButton>
          </div>
        </Container>
      </section>

      {/* Learning approach */}
      <section className="section-padding bg-indigo-50">
        <Container>
          <SectionHeader eyebrow="How We Teach" title="Practical by design" center />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {learningApproach.map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-sm transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Founder credibility */}
      <section className="section-padding bg-white">
        <Container narrow>
          <div className="bg-blue-700 rounded-xl p-10 text-center text-white">
            <span className="inline-block text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-4">
              Who Built This
            </span>
            <h2 className="font-extrabold text-2xl mb-4">
              Taught by a healthcare IT practitioner
            </h2>
            <p className="text-blue-200 leading-relaxed mb-3">
              Baara Academy is built by <strong className="text-white">{site.founder.name}</strong>, a {site.founder.bio}
            </p>
            <p className="text-blue-300 text-sm">
              All materials are original. No employer-owned documents, PHI, or proprietary vendor materials are used.
            </p>
          </div>
        </Container>
      </section>

      <FinalCTA
        title="Ready to build healthcare IT or digital skills?"
        subtitle="Join the waitlist or download the free career roadmap to start learning today."
        primaryLabel="Join the Waitlist"
        primaryHref="/academy/healthcare-it-career-launch"
        secondaryLabel="Free Career Roadmap"
        secondaryHref="/academy/healthcare-it-roadmap"
      />
    </>
  );
}
