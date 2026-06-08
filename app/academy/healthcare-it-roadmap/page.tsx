import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import PillHeader from "@/components/PillHeader";
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
      <section className="bg-blue-900 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Academy", href: "/academy" },
              { label: "Free Career Roadmap" },
            ]}
          />
          <div className="flex justify-center mb-8">
            <span className="bg-pink-500 text-white font-extrabold text-2xl px-10 py-4 rounded-full shadow-lg">
              Free Download
            </span>
          </div>
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">
              Free Healthcare IT Career Roadmap
              <br />
              <span className="text-orange-400">for African Professionals</span>
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              Understand healthcare IT roles, EHR support pathways, interoperability basics, AI productivity, and how to position your existing experience.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-sky-100 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <PillHeader bg="bg-blue-900" text="text-white" size="md">
                📋 What You Will Get
              </PillHeader>
              <div className="grid sm:grid-cols-2 gap-4">
                {roadmapCovers.map((item) => (
                  <div key={item.text} className="bg-white rounded-2xl p-4 flex items-start gap-3 shadow-sm">
                    <span className="text-xl flex-shrink-0">{item.icon}</span>
                    <span className="text-slate-700 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 bg-amber-50 border border-amber-200 rounded-2xl p-4">
                <p className="text-amber-900 text-sm">
                  The roadmap is free. No purchase required. It is a starting point — not a job guarantee. Employment depends on your background, location, work authorization, and effort.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <PillHeader bg="bg-orange-500" text="text-white" size="sm">
                🗺️ Get the Free Roadmap
              </PillHeader>
              {/* TODO: Wire up to ConvertKit, MailerLite, Resend, Airtable, or Tally */}
              <LeadForm type="roadmap" showCountry showBackground showLanguage />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
