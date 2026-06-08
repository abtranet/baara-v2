import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Baara privacy policy placeholder.",
  path: "/legal/privacy",
  noIndex: true,
});

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-blue-900 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-extrabold text-white">Privacy Policy</h1>
          <p className="text-blue-300 mt-2 text-sm">Placeholder — review with legal counsel before production use.</p>
        </div>
      </section>
      <section className="bg-orange-50 py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-10 shadow-sm prose-brand">
            <h2>Data collection</h2>
            <p>Baara collects personal information through forms when you voluntarily submit it. This is used to respond to inquiries, deliver resources, and send newsletters you opt into.</p>
            <h2>Email capture</h2>
            <p>When you subscribe to the newsletter or join a waitlist, your email is stored in our email platform. You may unsubscribe at any time.</p>
            <h2>Analytics</h2>
            <p>This site may use analytics tools to understand traffic. Analytics data is aggregated and does not identify individuals.</p>
            <h2>Third-party tools</h2>
            <p>Baara may use MailerLite, ConvertKit, Resend, Airtable, Calendly, and analytics tools. Each operates under its own privacy policy.</p>
            <h2>No PHI</h2>
            <p>Do not submit protected health information (PHI), confidential employer data, passwords, or API keys through any form on this website.</p>
            <h2>Contact</h2>
            <p>For privacy questions, contact us at the email listed on the Contact page.</p>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mt-6 text-amber-800 text-sm">
              Placeholder — not reviewed by legal counsel. Consult a qualified attorney before publishing publicly.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
