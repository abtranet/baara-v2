import type { Metadata } from "next";
import Container from "@/components/Container";
import LeadForm from "@/components/LeadForm";
import SectionHeader from "@/components/SectionHeader";
import Badge from "@/components/Badge";
import Breadcrumbs from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Healthcare Interoperability Foundations | Baara Academy",
  description:
    "Join the waitlist for the Healthcare Interoperability Foundations course — HL7, FHIR, ADT, interface engines, and healthcare data exchange for African professionals.",
  path: "/academy/interoperability-foundations",
});

const topics = [
  "HL7 messaging basics — what it is and why it matters",
  "FHIR fundamentals — RESTful APIs in healthcare",
  "ADT messages — admissions, discharges, and transfers",
  "Orders, results, and charges in healthcare data flow",
  "Interface engines — what they do and how to troubleshoot",
  "APIs in healthcare — connecting systems",
  "Data flow diagrams for healthcare workflows",
  "Common integration troubleshooting concepts",
];

export default function InteroperabilityFoundationsPage() {
  return (
    <>
      <section className="bg-blue-700 text-white py-20">
        <Container>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Academy", href: "/academy" }, { label: "Interoperability Foundations" }]} />
          <div className="text-center max-w-2xl mx-auto mt-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="inline-block text-cyan-400 font-semibold text-sm uppercase tracking-widest">
                Baara Academy
              </span>
              <Badge variant="amber">Waitlist Open</Badge>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-5 leading-tight">
              Healthcare Interoperability Foundations
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed">
              Learn how healthcare systems exchange data — HL7, FHIR, ADT, interface engines, and APIs explained practically for IT and support professionals.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <SectionHeader eyebrow="Course Topics" title="What this course covers" />
              <div className="space-y-3">
                {topics.map((topic) => (
                  <div key={topic} className="bg-indigo-50 rounded-xl px-5 py-4 flex items-start gap-3 border border-blue-100">
                    <span className="text-blue-600 font-bold mt-0.5 flex-shrink-0">&#10003;</span>
                    <span className="text-slate-700 text-sm">{topic}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 bg-slate-50 rounded-xl p-4 text-slate-500 text-sm border border-slate-200">
                This course is in development. Join the waitlist to be notified when enrollment opens.
              </div>
            </div>
            <div className="bg-indigo-50 rounded-xl p-8 border border-blue-100">
              <SectionHeader eyebrow="Join the Waitlist" title="Be notified when this opens" />
              <LeadForm type="waitlist" title="Be notified when this course opens." showCountry showLanguage />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
