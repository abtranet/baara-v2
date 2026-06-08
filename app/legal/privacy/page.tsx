import type { Metadata } from "next";
import Container from "@/components/Container";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Baara privacy policy placeholder — how we handle data collected through forms, email, and analytics.",
  path: "/legal/privacy",
  noIndex: true,
});

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-blue-700 text-white py-16">
        <Container>
          <div className="text-center max-w-xl mx-auto">
            <span className="inline-block text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-3">Legal</span>
            <h1 className="text-3xl font-extrabold">Privacy Policy</h1>
            <p className="text-blue-300 mt-2 text-sm">Placeholder — review with legal counsel before production use.</p>
          </div>
        </Container>
      </section>
      <section className="section-padding bg-white">
        <Container narrow>
          <div className="bg-indigo-50 rounded-2xl p-8 prose-brand">
            <h2>Data collection</h2>
            <p>
              Baara collects personal information — including name, email address, country, and background — through forms on this website when you voluntarily submit them. This information is used to respond to inquiries, deliver requested resources, and send newsletters you have opted into.
            </p>
            <h2>Email capture</h2>
            <p>
              When you subscribe to the Baara newsletter or join a waitlist, your email address is stored in our email platform. You may unsubscribe at any time using the link in any email we send.
            </p>
            <h2>Analytics</h2>
            <p>
              This site may use analytics tools to understand traffic and usage patterns. Analytics data is aggregated and does not identify individuals. We do not sell analytics data.
            </p>
            <h2>Third-party tools</h2>
            <p>
              Baara may use third-party services including email platforms (MailerLite, ConvertKit, Resend), form tools (Tally, Airtable), scheduling tools (Calendly), and analytics tools. Each third-party service operates under its own privacy policy.
            </p>
            <h2>No PHI</h2>
            <p>
              Do not submit protected health information (PHI), confidential employer data, passwords, API keys, or sensitive client data through any form on this website. Baara is not a covered entity under HIPAA and does not accept PHI submissions.
            </p>
            <h2>Data security</h2>
            <p>
              We take reasonable precautions to protect information you share with us. However, no transmission over the internet is completely secure.
            </p>
            <h2>Contact</h2>
            <p>
              For privacy questions, contact us at the email listed on the Contact page.
            </p>
            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-800 text-sm">
              This is a placeholder privacy policy. It has not been reviewed by legal counsel and should not be treated as a complete or compliant legal document. Consult a qualified attorney before publishing this site publicly.
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
