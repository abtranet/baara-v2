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
      <section className="bg-stone-900 text-white py-20">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Academy", href: "/academy" },
              { label: "Interoperability Foundations" },
            ]}
          />
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block text-amber-400 font-semibold text-sm uppercase tracking-widest">
                Baara Academy
              </span>
              <Badge variant="amber">Waitlist Open</Badge>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-5 leading-tight">
              Healthcare Interoperability Foundations
            </h1>
            <p className="text-stone-300 text-xl leading-relaxed">
              Learn how healthcare systems exchange data — HL7, FHIR, ADT, interface engines, and APIs explained practically for IT and support professionals.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeader
                eyebrow="Course Topics"
                title="What you will learn"
                subtitle="A vendor-neutral introduction to healthcare data exchange — built for professionals with or without a technical background."
              />
              <ul className="space-y-3">
                {topics.map((topic) => (
                  <li key={topic} className="flex gap-3 items-start">
                    <span className="text-amber-600 font-bold mt-0.5">✓</span>
                    <span className="text-stone-700">{topic}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 bg-stone-50 border border-stone-200 rounded-xl p-5">
                <p className="text-stone-500 text-sm">
                  This course is in development. Join the waitlist to be notified when enrollment opens and to help shape the curriculum.
                </p>
              </div>
            </div>
            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-8">
              {/* TODO: Wire up to email integration (ConvertKit, MailerLite, Resend, Airtable) */}
              <LeadForm
                type="waitlist"
                title="Join the Waitlist"
                subtitle="Be notified when this course opens."
                showCountry
                showLanguage
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
