import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import PillHeader from "@/components/PillHeader";
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
      <section className="bg-blue-900 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Academy", href: "/academy" }, { label: "AI Automation for Healthcare" }]} />
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="bg-indigo-600 text-white font-extrabold text-xl px-8 py-3.5 rounded-full shadow-lg">
              Baara Academy
            </span>
            <Badge variant="amber">Waitlist Open</Badge>
          </div>
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">
              AI Automation for Healthcare
              <br />
              <span className="text-orange-400">and Business Workflows</span>
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              Practical AI productivity and no-code automation for healthcare professionals, IT teams, and business operators who want to work smarter — responsibly.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-sky-100 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <PillHeader bg="bg-indigo-600" text="text-white" size="md">
                🤖 Course Topics
              </PillHeader>
              <div className="space-y-3">
                {topics.map((topic) => (
                  <div key={topic} className="bg-white rounded-2xl px-5 py-4 flex items-start gap-3 shadow-sm">
                    <span className="text-orange-500 font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-slate-700 text-sm">{topic}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 bg-amber-50 border border-amber-200 rounded-2xl p-4">
                <p className="text-amber-900 text-sm font-semibold mb-1">A note on responsible AI</p>
                <p className="text-amber-800 text-sm">
                  This course covers HIPAA awareness and responsible AI boundaries. We do not provide official HIPAA certification. The course focuses on non-PHI use cases and safe automation practices.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <PillHeader bg="bg-indigo-600" text="text-white" size="sm">
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
