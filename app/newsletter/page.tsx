import type { Metadata } from "next";
import Container from "@/components/Container";
import LeadForm from "@/components/LeadForm";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Subscribe to the Baara Newsletter",
  description:
    "Weekly AI news, automation tips, Baara Academy updates, African digital economy stories, and practical career resources — in English and French.",
  path: "/newsletter",
});

const whatToExpect = [
  "Weekly AI news from Africa and the diaspora",
  "Practical automation tips and workflow ideas",
  "Baara Academy updates and early access to programs",
  "Healthcare IT career resources and job market insights",
  "African digital economy stories worth knowing",
  "Tool recommendations and how-to guides",
];

export default function NewsletterPage() {
  return (
    <>
      <section className="bg-stone-900 text-white py-20">
        <Container>
          <div className="max-w-2xl">
            <span className="inline-block text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4">
              Newsletter
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-5 leading-tight">
              Subscribe to the Baara Newsletter
            </h1>
            <p className="text-stone-300 text-lg leading-relaxed">
              Practical AI news, automation tips, Academy updates, and career resources — delivered weekly in English and French.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-2xl font-bold text-stone-900 mb-6">What you will get each week</h2>
              <ul className="space-y-4">
                {whatToExpect.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <span className="text-amber-600 font-bold mt-0.5">✓</span>
                    <span className="text-stone-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 bg-stone-50 border border-stone-200 rounded-xl p-5">
                <p className="text-stone-500 text-sm">
                  No spam. No daily emails. Unsubscribe any time. The newsletter is free.
                </p>
              </div>
            </div>
            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-8">
              <LeadForm
                type="newsletter"
                title="Subscribe for free"
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
