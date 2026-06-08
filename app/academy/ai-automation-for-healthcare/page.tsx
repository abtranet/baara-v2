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
    "Join the waitlist for the AI Automation for Healthcare and Business Workflows course — prompt writing, no-code tools, SOP generation, and responsible AI.",
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
      <section className="bg-blue-700 text-white py-20">
        <Container>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Academy", href: "/academy" }, { label: "AI Automation for Healthcare" }]} />
          <div className="text-center max-w-2xl mx-auto mt-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="inline-block text-cyan-400 font-semibold text-sm uppercase tracking-widest">
                Baara Academy
              </span>
              <Badge variant="amber">Waitlist Open</Badge>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-5 leading-tight">
              AI Automation for Healthcare
              <br />
              <span className="text-cyan-400">and Business Workflows</span>
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed">
              Practical AI productivity and no-code automation for healthcare professionals, IT teams, and business operators who want to work smarter — responsibly.
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
              <div className="mt-5 bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="text-amber-900 text-sm font-semibold mb-1">A note on responsible AI</p>
                <p className="text-amber-800 text-sm">
                  This course covers HIPAA awareness and responsible AI boundaries. We do not provide official HIPAA certification. The course focuses on non-PHI use cases and safe automation practices.
                </p>
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
