import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Use",
  description: "Baara terms of use placeholder.",
  path: "/legal/terms",
  noIndex: true,
});

export default function TermsPage() {
  return (
    <>
      <section className="bg-blue-900 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-extrabold text-white">Terms of Use</h1>
          <p className="text-blue-300 mt-2 text-sm">Placeholder — review with legal counsel before production use.</p>
        </div>
      </section>
      <section className="bg-orange-50 py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-10 shadow-sm prose-brand">
            <h2>Educational information</h2>
            <p>Content on this website and in Baara Academy programs is provided for educational and informational purposes only. It is not professional, legal, medical, financial, or career advice.</p>
            <h2>No guaranteed outcomes</h2>
            <p>Baara does not guarantee employment, income, revenue growth, certification, or any specific outcome from its automation services or Academy programs.</p>
            <h2>No official vendor certification</h2>
            <p>Baara Academy is vendor-neutral. Completing any Baara Academy program does not provide official Epic, Oracle Health, Varian, Elekta, ARIA, MOSAIQ, or any other vendor certification.</p>
            <h2>Responsible use</h2>
            <p>Users agree to use knowledge, tools, and templates responsibly, ethically, and in compliance with applicable laws.</p>
            <h2>No PHI or confidential data</h2>
            <p>Do not submit PHI, confidential employer data, client records, passwords, or API keys to Baara through any channel.</p>
            <h2>Intellectual property</h2>
            <p>All Baara course materials, templates, and documentation are original works. Do not reproduce, redistribute, or resell without written permission.</p>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mt-6 text-amber-800 text-sm">
              Placeholder — not reviewed by legal counsel. Consult a qualified attorney before publishing publicly.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
