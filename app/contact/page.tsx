import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import LeadForm from "@/components/LeadForm";
import PillHeader from "@/components/PillHeader";
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
      {/* Hero */}
      <section className="bg-blue-900 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <span className="bg-orange-500 text-white font-extrabold text-2xl px-10 py-4 rounded-full shadow-lg">
              Contact
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Contact Baara
          </h1>
          <p className="text-blue-200 text-lg max-w-xl mx-auto">
            Book a free audit, ask about the Academy, or just say hello. We respond in English and French.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="bg-sky-100 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Form */}
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <PillHeader bg="bg-blue-900" text="text-white" size="sm">
                ✉️ Send a Message
              </PillHeader>
              {/* TODO: Wire up to Resend, Airtable, or Supabase */}
              <LeadForm type="contact" showMessage />
            </div>

            {/* Info + CTAs */}
            <div className="space-y-5">
              <div className="bg-orange-500 rounded-3xl p-7 text-white">
                <h3 className="font-extrabold text-xl mb-2">Book a Free AI Automation Audit</h3>
                <p className="text-orange-100 text-sm mb-5">
                  30-minute call. We map your workflow and identify your highest-impact automation opportunities. No pitch, no pressure.
                </p>
                <CTAButton href={site.social.calendly || "/contact"} variant="white" size="sm">
                  Book Free Audit
                </CTAButton>
              </div>

              <div className="bg-white rounded-3xl p-7 shadow-sm">
                <h3 className="font-extrabold text-blue-900 text-lg mb-2">Baara Academy Waitlist</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Interested in the Healthcare IT Career Launch program?
                </p>
                <CTAButton href="/academy/healthcare-it-career-launch" variant="secondary" size="sm">
                  Join the Waitlist
                </CTAButton>
              </div>

              <div className="bg-white rounded-3xl p-7 shadow-sm">
                <h3 className="font-extrabold text-blue-900 text-lg mb-2">Email</h3>
                <a
                  href={`mailto:${site.email}`}
                  className="text-orange-600 font-bold hover:underline"
                >
                  {site.email}
                </a>
              </div>

              <p className="text-xs text-slate-400 px-2">
                Do not submit PHI, confidential employer data, passwords, API keys, or sensitive client data through this form.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
