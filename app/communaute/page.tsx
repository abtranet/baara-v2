import type { Metadata } from "next";
import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";
import FinalCTA from "@/components/FinalCTA";
import SectionHeader from "@/components/SectionHeader";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Join the Baara Community",
  description:
    "A bilingual, Pan-African community for AI automation, digital skills, healthcare IT career growth, and business automation. Connect with African professionals worldwide.",
  path: "/communaute",
});

const channels = [
  {
    name: "WhatsApp Community",
    description: "Bilingual discussions on AI automation, tools, and career resources. Fast and practical.",
    icon: "💬",
    href: site.social.whatsapp || "#",
    label: "Join on WhatsApp",
  },
  {
    name: "LinkedIn",
    description: "Professional updates, job tips, AI news, and Baara content for African professionals.",
    icon: "💼",
    href: site.social.linkedin || "#",
    label: "Follow on LinkedIn",
  },
  {
    name: "Instagram",
    description: "Visual automation breakdowns, Academy updates, and community highlights.",
    icon: "📸",
    href: site.social.instagram || "#",
    label: "Follow on Instagram",
  },
  {
    name: "TikTok",
    description: "Short-form AI productivity demos, career tips, and automation walkthroughs.",
    icon: "🎬",
    href: site.social.tiktok || "#",
    label: "Follow on TikTok",
  },
  {
    name: "X / Twitter",
    description: "Real-time AI news, tools, and opinions on technology in Africa and the diaspora.",
    icon: "🐦",
    href: site.social.x || "#",
    label: "Follow on X",
  },
  {
    name: "Newsletter",
    description: "Weekly digest of AI news, automation tips, Academy updates, and career resources.",
    icon: "📧",
    href: "/newsletter",
    label: "Subscribe",
  },
];

const values = [
  { icon: "🌍", title: "Pan-African", description: "Built for African entrepreneurs, professionals, and diaspora communities worldwide." },
  { icon: "🗣️", title: "Bilingual", description: "English and French — because Africa is multilingual and so is Baara." },
  { icon: "🔧", title: "Practical", description: "We focus on real tools, real workflows, and real career moves — not hype." },
  { icon: "🤝", title: "Community trust", description: "We are building a community of African professionals who help each other grow." },
];

export default function CommunautePage() {
  return (
    <>
      <section className="bg-blue-700 text-white py-20">
        <Container>
          <div className="max-w-2xl">
            <span className="inline-block text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-4">
              Communauté / Community
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-5 leading-tight">
              Join the Baara Community
            </h1>
            <p className="text-blue-100 text-xl leading-relaxed">
              A bilingual, Pan-African community for AI automation, digital skills, healthcare IT career growth, and business automation.
            </p>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeader eyebrow="Community Values" title="What this community is about" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-indigo-50 border border-blue-100 rounded-xl p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl mb-3">
                  {v.icon}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{v.title}</h3>
                <p className="text-slate-600 text-sm">{v.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Channels */}
      <section className="section-padding bg-indigo-50">
        <Container>
          <SectionHeader
            eyebrow="Where to Find Us"
            title="Connect with Baara on your platform"
            subtitle="Join the conversation on the channels that work for you."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {channels.map((channel) => (
              <div
                key={channel.name}
                className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col gap-4 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">
                  {channel.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 mb-2">{channel.name}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{channel.description}</p>
                </div>
                <CTAButton
                  href={channel.href}
                  variant="outline"
                  size="sm"
                  external={channel.href !== "/newsletter"}
                  className="self-start"
                >
                  {channel.label}
                </CTAButton>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA
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
