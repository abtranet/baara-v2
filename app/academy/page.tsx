import type { Metadata } from "next";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import FinalCTA from "@/components/FinalCTA";
import PillHeader from "@/components/PillHeader";
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
      <section className="bg-blue-900 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-8">
            <span className="bg-pink-500 text-white font-extrabold text-2xl px-10 py-4 rounded-full shadow-lg">
              Baara Academy
            </span>
          </div>
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5 leading-tight">
              Practical Digital Skills for{" "}
              <span className="text-orange-400">African Professionals</span>
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed mb-8">
              Build job-ready skills in healthcare IT, AI automation, interoperability, workflow documentation, and digital career development.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <CTAButton href="/academy/healthcare-it-career-launch" variant="primary" size="lg">
                Join the Waitlist
              </CTAButton>
              <CTAButton href="/academy/healthcare-it-roadmap" variant="ghost" size="lg">
                Free Career Roadmap
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Academy Tracks */}
      <section className="bg-sky-100 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <PillHeader bg="bg-blue-900" text="text-white" size="md" center>
            📚 Learning Tracks
          </PillHeader>
          <p className="text-center text-slate-600 mb-8 max-w-xl mx-auto">
            Six career-ready digital skill tracks for the African professional.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {academyTracks.map((track) => (
              <Link
                key={track.id}
                href={track.href}
                className="bg-white rounded-3xl p-6 card-lift flex flex-col gap-4 border border-slate-100"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-extrabold text-blue-900 leading-snug">{track.title}</h3>
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
                  <span className="text-orange-600 text-sm font-bold">Learn more &rarr;</span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Program */}
      <section className="bg-teal-700 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <PillHeader bg="bg-orange-500" text="text-white" size="md" center>
            ⭐ Featured Program
          </PillHeader>
          <div className="bg-white rounded-3xl p-8 max-w-3xl mx-auto shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🏥</span>
              <span className="bg-pink-100 text-pink-800 font-bold text-xs px-4 py-1.5 rounded-full">
                Healthcare IT Career Launch
              </span>
            </div>
            <h2 className="font-extrabold text-blue-900 text-2xl mb-4">
              8-Week Practical Online Cohort for African and Diaspora Professionals
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
                  <span className="text-orange-500 font-bold mt-0.5">✓</span>
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
        </div>
      </section>

      {/* Learning approach */}
      <section className="bg-orange-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <PillHeader bg="bg-blue-900" text="text-white" size="md" center>
            🧠 How We Teach
          </PillHeader>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
            {learningApproach.map((item) => (
              <div key={item.title} className="bg-white rounded-3xl p-6 shadow-sm">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-extrabold text-blue-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder credibility */}
      <section className="bg-sky-100 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-900 rounded-3xl p-10 max-w-3xl mx-auto text-center text-white">
            <PillHeader bg="bg-pink-500" text="text-white" size="sm" center>
              👋 Who Built This
            </PillHeader>
            <h2 className="font-extrabold text-2xl mb-4">
              Taught by a healthcare IT practitioner
            </h2>
            <p className="text-blue-200 leading-relaxed mb-3">
              Baara Academy is built by <strong className="text-white">{site.founder.name}</strong>, a {site.founder.bio}
            </p>
            <p className="text-blue-400 text-sm">
              All materials are original. No employer-owned documents, PHI, or proprietary vendor materials are used.
            </p>
          </div>
        </div>
      </section>

      <FinalCTA
        bg="bg-pink-500"
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
