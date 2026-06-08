import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import PillHeader from "@/components/PillHeader";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "About Baara",
  description:
    "Baara means work in Bambara. Learn about the mission, vision, values, and founder behind Baara — AI automation and digital skills for African talent.",
  path: "/a-propos",
});

const values = [
  { icon: "🔧", title: "Practical skills", desc: "We teach and build things that work in the real world.", bg: "bg-orange-100 text-orange-900" },
  { icon: "🤝", title: "Trust", desc: "Honest about what automation and training can and cannot do.", bg: "bg-blue-100 text-blue-900" },
  { icon: "🌍", title: "Ownership", desc: "We help African entrepreneurs own their digital future.", bg: "bg-teal-100 text-teal-900" },
  { icon: "👥", title: "Community", desc: "We build with and for African communities.", bg: "bg-pink-100 text-pink-900" },
  { icon: "🗣️", title: "Bilingual access", desc: "English and French, because Africa speaks both.", bg: "bg-indigo-100 text-indigo-900" },
  { icon: "🤖", title: "Responsible AI", desc: "Safe, practical, human-centered AI — not hype.", bg: "bg-emerald-100 text-emerald-900" },
  { icon: "🚫", title: "No hype", desc: "No guaranteed six figures. No overnight magic. Real systems.", bg: "bg-amber-100 text-amber-900" },
  { icon: "⭐", title: "African talent", desc: "We believe in the capacity of African professionals to build world-class systems.", bg: "bg-purple-100 text-purple-900" },
];

export default function AProposPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-blue-900 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <span className="bg-pink-500 text-white font-extrabold text-2xl px-10 py-4 rounded-full shadow-lg">
              About / &Agrave; Propos
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5 leading-tight">
            About Baara
          </h1>
          <p className="text-blue-200 text-xl max-w-2xl mx-auto leading-relaxed">
            <em>Baara</em> means &ldquo;work&rdquo; in Bambara. A word that carries the dignity of effort, the value of skill, and the power of building something that lasts.
          </p>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="bg-sky-100 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-900 rounded-3xl p-8 text-white">
              <PillHeader bg="bg-orange-500" text="text-white" size="sm">
                🎯 Mission
              </PillHeader>
              <p className="text-blue-100 text-lg leading-relaxed">
                Baara helps African entrepreneurs, professionals, and communities use practical AI automation and digital skills to create better work, better systems, and better opportunities.
              </p>
            </div>
            <div className="bg-teal-700 rounded-3xl p-8 text-white">
              <PillHeader bg="bg-pink-500" text="text-white" size="sm">
                🔭 Vision
              </PillHeader>
              <p className="text-teal-100 text-lg leading-relaxed">
                To become a trusted bilingual platform for AI automation, digital skills, and career-focused learning for African talent and African-led businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-orange-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <PillHeader bg="bg-blue-900" text="text-white" size="md" center>
            👋 The Founder
          </PillHeader>
          <div className="grid md:grid-cols-2 gap-8 items-start max-w-4xl mx-auto mt-4">
            <div className="bg-teal-700 rounded-3xl p-8 text-center flex flex-col items-center gap-4">
              <span className="text-6xl">👤</span>
              <h2 className="font-extrabold text-white text-2xl">{site.founder.name}</h2>
              <p className="text-teal-200 text-sm">Founder, Baara &middot; Jacksonville, FL</p>
              <p className="text-teal-300 text-xs">Connected to GlobalSABT</p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <div className="prose-brand">
                <p>{site.founder.name} is a Malian-born, bilingual English/French healthcare IT professional based in Jacksonville, Florida.</p>
                <p>With deep experience in healthcare IT — including radiation oncology systems, EHR workflows, clinical application support, HL7/FHIR, EMR integration, workflow documentation, AI productivity, and healthcare interoperability — Abdel built Baara to bridge two gaps he observed firsthand.</p>
                <p>First: small businesses and African entrepreneurs were spending hours on manual tasks that could be automated. Second: African and diaspora professionals were shut out of growing healthcare IT careers — not because of lack of ability, but because of lack of accessible, practical, bilingual training.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-sky-100 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <PillHeader bg="bg-blue-900" text="text-white" size="md" center>
            🧭 Values
          </PillHeader>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            {values.map((v) => (
              <div key={v.title} className={`${v.bg} rounded-3xl p-6`}>
                <div className="text-2xl mb-2">{v.icon}</div>
                <h3 className="font-extrabold mb-1">{v.title}</h3>
                <p className="text-sm opacity-80">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Baara is not */}
      <section className="bg-orange-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 shadow-sm">
            <PillHeader bg="bg-blue-900" text="text-white" size="sm">
              ⚖️ Honesty about what we do
            </PillHeader>
            <ul className="space-y-3">
              {[
                "Baara does not provide official Epic, Varian, Elekta, ARIA, MOSAIQ, or Oracle Health certifications.",
                "Baara Academy does not guarantee jobs, salaries, or income outcomes.",
                "Baara Automation does not guarantee revenue growth or specific business results.",
                "We are not affiliated with or endorsed by any EHR or healthcare technology vendor.",
                "We do not use employer-owned materials, PHI, or confidential client data in any program.",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start text-sm text-slate-600">
                  <span className="text-blue-400 font-bold mt-0.5 flex-shrink-0">&bull;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-700 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-extrabold text-white mb-6">Ready to work with Baara?</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <CTAButton href="/contact" variant="white" size="lg">
              Book a Free Audit
            </CTAButton>
            <CTAButton href="/academy" variant="ghost" size="lg">
              Explore Baara Academy
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
