import type { Metadata } from "next";
import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";
import SectionHeader from "@/components/SectionHeader";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "About Baara",
  description:
    "Baara means work in Bambara. Learn about the mission, vision, values, and founder behind Baara — AI automation and digital skills for African talent.",
  path: "/a-propos",
});

const values = [
  { title: "Practical skills", description: "We teach and build things that work in the real world — not theory for its own sake." },
  { title: "Trust", description: "We are honest about what automation and training can and cannot do." },
  { title: "Ownership", description: "We help African entrepreneurs and professionals own their digital future." },
  { title: "Community", description: "We build with and for African communities, not just at them." },
  { title: "Bilingual access", description: "English and French, because Africa speaks both and so do we." },
  { title: "Responsible AI", description: "We do not promote hype. We promote safe, practical, human-centered AI use." },
  { title: "No hype", description: "No guaranteed six figures. No overnight automation magic. Just real systems and real skills." },
  { title: "African talent", description: "We believe in the capacity of African professionals and entrepreneurs to build world-class systems." },
];

export default function AProposPage() {
  return (
    <>
      <section className="bg-blue-700 text-white py-20">
        <Container>
          <div className="max-w-2xl">
            <span className="inline-block text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-4">
              About / &Agrave; Propos
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-5 leading-tight">
              About Baara
            </h1>
            <p className="text-blue-100 text-xl leading-relaxed">
              <em>Baara</em> means &ldquo;work&rdquo; in Bambara. It is a word that carries weight — the dignity of effort, the value of skill, and the power of building something that lasts.
            </p>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <SectionHeader eyebrow="Mission" title="Why Baara exists" />
              <p className="text-slate-600 text-lg leading-relaxed">
                Baara helps African entrepreneurs, professionals, and communities use practical AI automation and digital skills to create better work, better systems, and better opportunities.
              </p>
            </div>
            <div>
              <SectionHeader eyebrow="Vision" title="Where Baara is going" />
              <p className="text-slate-600 text-lg leading-relaxed">
                To become a trusted bilingual platform for AI automation, digital skills, and career-focused learning for African talent and African-led businesses.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Founder */}
      <section className="section-padding bg-indigo-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeader eyebrow="Founder" title={site.founder.name} />
              <div className="prose-brand">
                <p>
                  {site.founder.name} is a Malian-born, bilingual English/French healthcare IT professional based in Jacksonville, Florida.
                </p>
                <p>
                  With deep experience in healthcare IT — including radiation oncology systems, EHR workflows, clinical application support, HL7/FHIR, EMR integration, workflow documentation, AI productivity, and healthcare interoperability — Abdel built Baara to bridge two gaps he observed firsthand:
                </p>
                <p>
                  First, small businesses and African entrepreneurs were spending hours on manual tasks that could be automated. Second, African and diaspora professionals were shut out of growing healthcare IT careers not because of lack of ability, but because of lack of accessible, practical, bilingual training.
                </p>
                <p>
                  Baara is the answer to both.
                </p>
              </div>
              <p className="text-slate-500 text-sm mt-4">
                Baara is connected to <strong className="text-slate-700">GlobalSABT</strong>, a services and training initiative supporting African professionals and business owners.
              </p>
            </div>
            <div>
              <SectionHeader eyebrow="What Baara Is Not" title="Honesty about what we do" />
              <ul className="space-y-4">
                {[
                  "Baara does not provide official Epic, Varian, Elekta, ARIA, MOSAIQ, or Oracle Health certifications.",
                  "Baara Academy does not guarantee jobs, salaries, or income outcomes.",
                  "Baara Automation does not guarantee revenue growth or specific business results.",
                  "We are not affiliated with or endorsed by any EHR or healthcare technology vendor.",
                  "We do not use employer-owned materials, PHI, or confidential client data in any program.",
                ].map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <span className="text-blue-400 mt-0.5 font-bold">&bull;</span>
                    <span className="text-slate-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeader eyebrow="Values" title="What guides everything Baara does" center />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-indigo-50 border border-blue-100 rounded-xl p-5">
                <h3 className="font-bold text-slate-900 mb-2">{v.title}</h3>
                <p className="text-slate-600 text-sm">{v.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 py-16">
        <Container narrow>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-6">Ready to work with Baara?</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <CTAButton href="/contact" variant="secondary">
                Book a Free Audit
              </CTAButton>
              <CTAButton href="/academy" variant="ghost">
                Explore Baara Academy
              </CTAButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
