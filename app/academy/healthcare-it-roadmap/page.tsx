import type { Metadata } from "next";
import Container from "@/components/Container";
import LeadForm from "@/components/LeadForm";
import SectionHeader from "@/components/SectionHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Free Healthcare IT Career Roadmap for African Professionals",
  description:
    "Download the free roadmap to understand healthcare IT roles, EHR support, clinical application analyst pathways, interoperability basics, AI productivity, and how to position your existing experience.",
  path: "/academy/healthcare-it-roadmap",
});

const roadmapCovers = [
  { icon: "🗺️", text: "Healthcare IT career paths and entry points" },
  { icon: "💻", text: "EHR support and clinical application analyst roles" },
  { icon: "🔍", text: "What employers actually look for" },
  { icon: "💼", text: "How to position your existing experience" },
  { icon: "🔗", text: "Interoperability and HL7/FHIR basics explained simply" },
  { icon: "🤖", text: "AI productivity tools you can use today" },
  { icon: "📄", text: "Resume and LinkedIn positioning tips" },
  { icon: "🚀", text: "How to get started without a healthcare IT background" },
];

export default function HealthcareITRoadmapPage() {
  return (
    <>
      <section className="bg-blue-700 text-white py-20">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Academy", href: "/academy" },
              { label: "Free Career Roadmap" },
            ]}
          />
          <div className="text-center max-w-2xl mx-auto mt-6">
            <span className="inline-block text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-4">
              Free Download
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-5 leading-tight">
              Free Healthcare IT Career Roadmap
              <br />
              <span className="text-cyan-400">for African Professionals</span>
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed">
              Understand healthcare IT roles, EHR support pathways, interoperability basics, AI productivity, and how to position your existing experience.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <SectionHeader eyebrow="What You Will Get" title="Inside the free roadmap" />
              <div className="grid sm:grid-cols-2 gap-4">
                {roadmapCovers.map((item) => (
                  <div key={item.text} className="bg-indigo-50 rounded-xl p-4 flex items-start gap-3 border border-blue-100">
                    <span className="text-xl flex-shrink-0">{item.icon}</span>
                    <span className="text-slate-700 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="text-amber-900 text-sm">
                  The roadmap is free. No purchase required. It is a starting point — not a job guarantee. Employment depends on your background, location, work authorization, and effort.
                </p>
              </div>
            </div>
            <div className="bg-indigo-50 rounded-xl p-8 border border-blue-100">
              <SectionHeader eyebrow="Get the Free Roadmap" title="Download now — it's free" />
              <LeadForm type="roadmap" showCountry showBackground showLanguage />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
