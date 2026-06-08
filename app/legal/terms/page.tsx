import type { Metadata } from "next";
import Container from "@/components/Container";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Use",
  description: "Baara terms of use placeholder — educational information, no guaranteed outcomes, responsible use policy.",
  path: "/legal/terms",
  noIndex: true,
});

export default function TermsPage() {
  return (
    <>
      <section className="bg-blue-700 text-white py-16">
        <Container>
          <div className="text-center max-w-xl mx-auto">
            <span className="inline-block text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-3">Legal</span>
            <h1 className="text-3xl font-extrabold">Terms of Use</h1>
            <p className="text-blue-300 mt-2 text-sm">Placeholder — review with legal counsel before production use.</p>
          </div>
        </Container>
      </section>
      <section className="section-padding bg-white">
        <Container narrow>
          <div className="bg-indigo-50 rounded-2xl p-8 prose-brand">
            <h2>Educational information</h2>
            <p>
              Content on this website and in Baara Academy programs is provided for educational and informational purposes only. It is not professional, legal, medical, financial, or career advice. Use it as a starting point for your own research and decisions.
            </p>
            <h2>No guaranteed outcomes</h2>
            <p>
              Baara does not guarantee employment, income, revenue growth, certification, or any specific outcome from its automation services or Academy programs. Results depend on individual effort, background, location, work authorization, market conditions, and many other factors outside our control.
            </p>
            <h2>No official vendor certification</h2>
            <p>
              Baara Academy is vendor-neutral. Completing any Baara Academy program does not provide official Epic, Oracle Health, Varian, Elekta, ARIA, MOSAIQ, or any other vendor certification. Baara is not affiliated with or endorsed by any healthcare technology vendor.
            </p>
            <h2>Responsible use</h2>
            <p>
              Users of Baara services and programs agree to use knowledge, tools, and templates responsibly, ethically, and in compliance with applicable laws. Automation workflows should not be used for spam, harassment, or illegal purposes.
            </p>
            <h2>No PHI or confidential data</h2>
            <p>
              Do not submit protected health information (PHI), confidential employer data, internal proprietary documents, client records, passwords, or API keys to Baara through any channel. Baara is not a covered entity under HIPAA.
            </p>
            <h2>Intellectual property</h2>
            <p>
              All Baara course materials, templates, and documentation are original works. Do not reproduce, redistribute, or resell Baara materials without written permission.
            </p>
            <h2>Changes to these terms</h2>
            <p>
              Baara may update these terms at any time. Continued use of this website constitutes acceptance of the current terms.
            </p>
            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-800 text-sm">
              This is a placeholder terms of use document. It has not been reviewed by legal counsel and should not be treated as a complete or legally compliant document. Consult a qualified attorney before publishing this site publicly.
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
