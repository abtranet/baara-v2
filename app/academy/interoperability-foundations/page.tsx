import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import PillHeader from "@/components/PillHeader";
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
      <section className="bg-blue-900 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Academy", href: "/academy" }, { label: "Interoperability Foundations" }]} />
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="bg-teal-600 text-white font-extrabold text-xl px-8 py-3.5 rounded-full shadow-lg">
              Baara Academy
            </span>
            <Badge variant="amber">Waitlist Open</Badge>
          </div>
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">
              Healthcare Interoperability Foundations
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              Learn how healthcare systems exchange data — HL7, FHIR, ADT, interface engines, and APIs explained practically for IT and support professionals.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-sky-100 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <PillHeader bg="bg-teal-700" text="text-white" size="md">
                📚 Course Topics
              </PillHeader>
              <div className="space-y-3">
                {topics.map((topic) => (
                  <div key={topic} className="bg-white rounded-2xl px-5 py-4 flex items-start gap-3 shadow-sm">
                    <span className="text-teal-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-slate-700 text-sm">{topic}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 bg-blue-50 rounded-2xl p-4 text-slate-500 text-sm">
                This course is in development. Join the waitlist to be notified when enrollment opens.
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <PillHeader bg="bg-teal-700" text="text-white" size="sm">
                📋 Join the Waitlist
              </PillHeader>
              <LeadForm type="waitlist" title="Be notified when this course opens." showCountry showLanguage />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
