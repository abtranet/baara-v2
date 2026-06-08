import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import FinalCTA from "@/components/FinalCTA";
import PillHeader from "@/components/PillHeader";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Join the Baara Community",
  description:
    "A bilingual, Pan-African community for AI automation, digital skills, healthcare IT career growth, and business automation.",
  path: "/communaute",
});

const channels = [
  { name: "WhatsApp Community", icon: "💬", desc: "Bilingual discussions on AI automation, tools, and career resources.", href: site.social.whatsapp || "#", bg: "bg-emerald-500", label: "Join on WhatsApp" },
  { name: "LinkedIn", icon: "💼", desc: "Professional updates, job tips, AI news, and Baara content.", href: site.social.linkedin || "#", bg: "bg-blue-600", label: "Follow on LinkedIn" },
  { name: "Instagram", icon: "📸", desc: "Visual automation breakdowns, Academy updates, and highlights.", href: site.social.instagram || "#", bg: "bg-pink-500", label: "Follow on Instagram" },
  { name: "TikTok", icon: "🎬", desc: "Short-form AI productivity demos, career tips, and walkthroughs.", href: site.social.tiktok || "#", bg: "bg-slate-900", label: "Follow on TikTok" },
  { name: "X / Twitter", icon: "🐦", desc: "Real-time AI news, tools, and opinions on technology in Africa.", href: site.social.x || "#", bg: "bg-sky-500", label: "Follow on X" },
  { name: "Newsletter", icon: "📧", desc: "Weekly digest of AI news, automation tips, and career resources.", href: "/newsletter", bg: "bg-orange-500", label: "Subscribe" },
];

export default function CommunautePage() {
  return (
    <>
      <section className="bg-blue-900 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <span className="bg-pink-500 text-white font-extrabold text-2xl px-10 py-4 rounded-full shadow-lg">
              Communaut&eacute; / Community
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">
            Join the Baara Community
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            A bilingual, Pan-African community for AI automation, digital skills, healthcare IT career growth, and business automation.
          </p>
        </div>
      </section>

      <section className="bg-sky-100 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <PillHeader bg="bg-blue-900" text="text-white" size="md" center>
            🌍 Where to Find Us
          </PillHeader>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
            {channels.map((ch) => (
              <div key={ch.name} className="bg-white rounded-3xl overflow-hidden shadow-sm card-lift flex flex-col">
                <div className={`${ch.bg} h-16 flex items-center px-6 gap-3`}>
                  <span className="text-2xl">{ch.icon}</span>
                  <span className="text-white font-extrabold">{ch.name}</span>
                </div>
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <p className="text-slate-600 text-sm flex-1">{ch.desc}</p>
                  <CTAButton
                    href={ch.href}
                    variant="primary"
                    size="sm"
                    external={ch.href !== "/newsletter"}
                    className="self-start"
                  >
                    {ch.label}
                  </CTAButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA
        bg="bg-teal-700"
        title="Join the community. Learn. Build. Grow."
        subtitle="Connect with African professionals working on automation, healthcare IT, and digital careers."
        primaryLabel="Subscribe to Newsletter"
        primaryHref="/newsletter"
        secondaryLabel="Explore Baara Academy"
        secondaryHref="/academy"
      />
    </>
  );
}
