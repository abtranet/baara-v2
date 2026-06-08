import type { Metadata } from "next";
import Container from "@/components/Container";
import LeadForm from "@/components/LeadForm";
import SectionHeader from "@/components/SectionHeader";
import Badge from "@/components/Badge";
import Breadcrumbs from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "AI Automation for Healthcare and Business Workflows | Baara Academy",
  description:
    "Join the waitlist for the AI Automation for Healthcare and Business Workflows course — prompt writing, no-code tools, SOP generation, and responsible AI for healthcare IT professionals.",
  path: "/academy/ai-automation-for-healthcare",
});

const topics = [
  "AI productivity fundamentals — tools you can use today",
  "Prompt writing for healthcare and business tasks",
  "Workflow automation without code — Make, n8n, Zapier",
  "SOP and documentation generation with AI",
  "Reporting and data summarization automation",
  "No-code tools for healthcare-adjacent workflows",
  "Responsible AI — what to automate and what not to",
  "Non-PHI healthcare use cases and safe boundaries",
];

export default function AIAutomationForHealthcarePage() {
  return (
    <>
      <section className="bg-stone-900 text-white py-20">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Academy", href: "/academy" },
              { label: "AI Automation for Healthcare" },
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
              AI Automation for Healthcare and Business Workflows
            </h1>
            <p className="text-stone-300 text-xl leading-relaxed">
              Learn practical AI productivity and no-code automation for healthcare professionals, IT teams, and business operators who want to work smarter — responsibly.
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
                title="Practical AI skills for healthcare and business"
                subtitle="No deep technical background required. Built for professionals who want to use AI tools safely and effectively."
              />
              <ul className="space-y-3">
                {topics.map((topic) => (
                  <li key={topic} className="flex gap-3 items-start">
                    <span className="text-amber-600 font-bold mt-0.5">✓</span>
                    <span className="text-stone-700">{topic}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 bg-amber-50 border border-amber-100 rounded-xl p-5">
                <p className="text-stone-700 text-sm font-medium mb-1">A note on responsible AI</p>
                <p className="text-stone-600 text-sm">
                  This course covers HIPAA awareness and responsible AI boundaries. We do not provide official HIPAA certification. The course focuses on non-PHI use cases and safe automation practices.
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
