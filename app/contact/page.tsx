import type { Metadata } from "next";
import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";
import LeadForm from "@/components/LeadForm";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact Baara",
  description:
    "Contact Baara for AI automation services, Academy waitlist inquiries, or general questions. Book a free AI automation audit.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="bg-blue-700 text-white py-20">
        <Container>
          <div className="max-w-2xl">
            <span className="inline-block text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-4">
              Contact
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
              Contact Baara
            </h1>
            <p className="text-blue-100 text-lg">
              Book a free audit, ask about the Academy, or just say hello. We respond in English and French.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact form */}
            <div>
              <LeadForm
                type="contact"
                title="Send a message"
                subtitle="Tell us about your business or what you are looking for."
                showMessage
              />
            </div>

            {/* Contact info + CTAs */}
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-4">Other ways to reach us</h2>
                <div className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <span className="text-blue-700 font-bold mt-0.5">@</span>
                    <div>
                      <p className="text-slate-700 font-medium">Email</p>
                      <a href={`mailto:${site.email}`} className="text-blue-700 hover:underline">
                        {site.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-indigo-50 border border-blue-200 rounded-xl p-5">
                  <h3 className="font-bold text-slate-900 mb-2">Book a Free AI Automation Audit</h3>
                  <p className="text-slate-600 text-sm mb-4">
                    30-minute call. We map your workflow and identify your highest-impact automation opportunities. No pitch, no pressure.
                  </p>
                  <CTAButton href={site.social.calendly || "/contact"} variant="primary" size="sm">
                    Book Free Audit
                  </CTAButton>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                  <h3 className="font-bold text-slate-900 mb-2">Baara Academy Waitlist</h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Interested in the Healthcare IT Career Launch program or other Academy courses?
                  </p>
                  <CTAButton href="/academy/healthcare-it-career-launch" variant="outline" size="sm">
                    Join the Waitlist
                  </CTAButton>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                  <h3 className="font-bold text-slate-900 mb-2">Stay connected</h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Subscribe to the newsletter for weekly AI news, automation tips, and Academy updates.
                  </p>
                  <CTAButton href="/newsletter" variant="outline" size="sm">
                    Subscribe
                  </CTAButton>
                </div>
              </div>

              <p className="text-xs text-slate-400">
                Do not submit PHI, confidential employer data, passwords, API keys, or sensitive client data through this form.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
