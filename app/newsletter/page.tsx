import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import PillHeader from "@/components/PillHeader";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Subscribe to the Baara Newsletter",
  description:
    "Weekly AI news, automation tips, Baara Academy updates, African digital economy stories, and practical career resources — in English and French.",
  path: "/newsletter",
});

const whatToExpect = [
  { icon: "🌍", text: "Weekly AI news from Africa and the diaspora" },
  { icon: "⚙️", text: "Practical automation tips and workflow ideas" },
  { icon: "🎓", text: "Baara Academy updates and early program access" },
  { icon: "🏥", text: "Healthcare IT career resources and job market insights" },
  { icon: "📊", text: "African digital economy stories worth knowing" },
  { icon: "🔧", text: "Tool recommendations and how-to guides" },
];

export default function NewsletterPage() {
  return (
    <>
      <section className="bg-blue-900 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <span className="bg-orange-500 text-white font-extrabold text-2xl px-10 py-4 rounded-full shadow-lg">
              Newsletter
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Subscribe to the Baara Newsletter
          </h1>
          <p className="text-blue-200 text-lg max-w-xl mx-auto">
            Practical AI news, automation tips, Academy updates, and career resources — weekly, in English and French.
          </p>
        </div>
      </section>

      <section className="bg-sky-100 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <PillHeader bg="bg-blue-900" text="text-white" size="md">
                📬 What You Will Get
              </PillHeader>
              <div className="grid sm:grid-cols-2 gap-4">
                {whatToExpect.map((item) => (
                  <div key={item.text} className="bg-white rounded-2xl p-5 flex items-start gap-3 shadow-sm">
                    <span className="text-xl flex-shrink-0">{item.icon}</span>
                    <span className="text-slate-700 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-slate-500 text-sm bg-white rounded-2xl p-4 shadow-sm">
                No spam. No daily emails. Unsubscribe any time. Free.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <PillHeader bg="bg-orange-500" text="text-white" size="sm">
                ✉️ Subscribe for Free
              </PillHeader>
              {/* TODO: Wire up to MailerLite, ConvertKit, Resend, or Airtable */}
              <LeadForm type="newsletter" showCountry showLanguage />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
