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

const whyExists = [
  "The healthcare IT job market is growing, but career pathways are unclear for many African and diaspora professionals.",
  "Existing training programs often lack bilingual support and African community context.",
  "Many learners need practical, portfolio-based skills — not just theory.",
  "AI automation literacy is becoming essential across industries.",
];

const audience = [
  "Africans living in the United States",
  "African immigrants and diaspora professionals",
  "French-speaking Africans in Africa",
  "African healthcare workers moving into healthcare IT",
  "African IT professionals transitioning into healthcare technology",
  "Career changers who want practical digital skills",
];

const learningApproach = [
  { icon: "🎥", title: "Live cohorts", description: "Structured learning with scheduled live sessions and recordings." },
  { icon: "📋", title: "Templates & worksheets", description: "Practical tools you can use on the job from day one." },
  { icon: "🧪", title: "Simulated workflows", description: "Practice with synthetic data — no real patient data, no compliance risk." },
  { icon: "💼", title: "Portfolio assignments", description: "Build work samples you can show employers." },
  { icon: "🌍", title: "Bilingual support", description: "English first, French support growing over time." },
  { icon: "👥", title: "Community accountability", description: "Learn alongside other African professionals on the same path." },
];

export default function AcademyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-stone-900 text-white py-20">
        <Container>
          <div className="max-w-2xl">
            <span className="inline-block text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4">
              Baara Academy
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-5 leading-tight">
              Practical Digital Skills for African Professionals
            </h1>
            <p className="text-stone-300 text-xl leading-relaxed mb-8">
              Build job-ready skills in healthcare IT, AI automation, interoperability, workflow documentation, and digital career development.
            </p>
            <div className="flex flex-wrap gap-4">
              <CTAButton href="/academy/healthcare-it-career-launch" variant="primary" size="lg">
                Join the Waitlist
              </CTAButton>
              <CTAButton href="/academy/healthcare-it-roadmap" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-stone-900 transition-colors font-semibold rounded-lg inline-flex items-center justify-center px-8 py-4 text-lg">
                Free Career Roadmap
              </CTAButton>
            </div>
          </div>
        </Container>
      </section>

      {/* Why it exists */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeader
                eyebrow="Why Baara Academy"
                title="Built for learners the mainstream skips"
              />
              <ul className="space-y-4">
                {whyExists.map((reason) => (
                  <li key={reason} className="flex gap-3 items-start">
                    <span className="text-amber-600 font-bold mt-0.5">→</span>
                    <span className="text-stone-700">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeader eyebrow="Who It Serves" title="You belong here if..." />
              <ul className="space-y-3">
                {audience.map((a) => (
                  <li key={a} className="flex gap-3 items-start">
                    <span className="text-amber-600 font-bold mt-0.5">✓</span>
                    <span className="text-stone-700">{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Tracks */}
      <section className="section-padding bg-stone-50">
        <Container>
          <SectionHeader
            eyebrow="Academy Tracks"
            title="Six learning tracks, one practical goal"
            subtitle="Career-ready digital skills for the African professional."
            center
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {academyTracks.map((track) => (
              <Link
                key={track.id}
                href={track.href}
                className="bg-white border border-stone-200 rounded-xl p-6 hover:shadow-md hover:border-amber-300 transition-all flex flex-col gap-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-bold text-stone-900 leading-snug">{track.title}</h3>
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
                  <span className="text-amber-600 text-sm font-semibold">Learn more →</span>
                )}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Learning approach */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeader
            eyebrow="How We Teach"
            title="Practical learning that builds real skills"
            center
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningApproach.map((item) => (
              <div key={item.title} className="bg-stone-50 border border-stone-200 rounded-xl p-6">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-stone-900 mb-2">{item.title}</h3>
                <p className="text-stone-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Founder credibility */}
      <section className="section-padding bg-stone-50">
        <Container narrow>
          <div className="text-center">
            <span className="inline-block text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Who Built This
            </span>
            <h2 className="text-3xl font-bold text-stone-900 mb-4">Taught by a practitioner, not a generalist</h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              Baara Academy is built by <strong>{site.founder.name}</strong>, a {site.founder.bio}
            </p>
            <p className="text-stone-500 text-sm">
              Programs use original materials, simulated workflows, and synthetic examples. No employer-owned materials, PHI, or proprietary vendor resources are used.
            </p>
          </div>
        </Container>
      </section>

      <FinalCTA
        title="Ready to build healthcare IT or digital skills?"
        subtitle="Join the waitlist for the Healthcare IT Career Launch program or download the free career roadmap."
        primaryLabel="Join the Waitlist"
        primaryHref="/academy/healthcare-it-career-launch"
        secondaryLabel="Free Career Roadmap"
        secondaryHref="/academy/healthcare-it-roadmap"
      />
    </>
  );
}
