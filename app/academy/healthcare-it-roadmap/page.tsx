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
  "Healthcare IT career paths and entry points",
  "EHR support and clinical application analyst roles",
  "What employers actually look for",
  "How to position your existing healthcare, IT, or admin experience",
  "Interoperability and HL7/FHIR basics explained simply",
  "AI productivity tools you can use today",
  "Resume and LinkedIn positioning tips",
  "How to get started without a healthcare IT background",
];

export default function HealthcareITRoadmapPage() {
  return (
    <>
      <section className="bg-stone-900 text-white py-20">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Academy", href: "/academy" },
              { label: "Free Career Roadmap" },
            ]}
          />
          <div className="max-w-2xl">
            <span className="inline-block text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4">
              Free Download
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-5 leading-tight">
              Free Healthcare IT Career Roadmap for African Professionals
            </h1>
            <p className="text-stone-300 text-lg leading-relaxed">
              Download the free roadmap to understand healthcare IT roles, EHR support, clinical application analyst pathways, interoperability basics, AI productivity, and how to position your existing experience.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeader
                eyebrow="What You Will Get"
                title="A practical roadmap built for African professionals"
              />
              <ul className="space-y-3">
                {roadmapCovers.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <span className="text-amber-600 font-bold mt-0.5">✓</span>
                    <span className="text-stone-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 bg-stone-50 border border-stone-200 rounded-xl p-5">
                <p className="text-stone-600 text-sm">
                  The roadmap is free. No purchase required. It is a starting point — not a job guarantee. Employment depends on your background, location, work authorization, and effort.
                </p>
              </div>
            </div>
            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-8">
              {/* TODO: Wire up to real email delivery system (ConvertKit, MailerLite, Resend, Airtable, or Tally) */}
              {/* Currently mocks a local success state — no data is stored or sent */}
              <LeadForm
                type="roadmap"
                title="Get the Free Roadmap"
                subtitle="Fill in your details and we will send it to your inbox."
                showCountry
                showBackground
                showLanguage
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
