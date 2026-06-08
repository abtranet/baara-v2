import type { Metadata } from "next";
import Container from "@/components/Container";
import FinalCTA from "@/components/FinalCTA";
import SectionHeader from "@/components/SectionHeader";
import { buildMetadata } from "@/lib/seo";
import { demoVideos } from "@/lib/content/videos";

export const metadata: Metadata = buildMetadata({
  title: "Baara Demo Videos and Workflow Walkthroughs",
  description:
    "Watch Baara AI automation demos: lead capture workflows, WhatsApp AI, CRM follow-up, healthcare IT documentation, and AI productivity walkthroughs.",
  path: "/videos",
});

export default function VideosPage() {
  return (
    <>
      <section className="bg-stone-50 border-b border-stone-200 py-16">
        <Container>
          <div className="max-w-2xl">
            <span className="inline-block text-amber-600 font-semibold text-sm uppercase tracking-widest mb-4">
              Demo Videos
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-stone-900 mb-4 leading-tight">
              Baara Demo Videos and Workflow Walkthroughs
            </h1>
            <p className="text-stone-600 text-lg">
              Watch how Baara automation workflows run in practice — from lead capture to healthcare IT documentation.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          <SectionHeader
            eyebrow="Demos"
            title="See automation in action"
            subtitle="Videos are being produced. Check back soon or subscribe to the newsletter for updates."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {demoVideos.map((video) => (
              <div
                key={video.id}
                className="bg-stone-50 border border-stone-200 rounded-2xl overflow-hidden flex flex-col"
              >
                {/* Placeholder video thumbnail */}
                <div className="bg-gradient-to-br from-stone-700 to-stone-900 aspect-video flex items-center justify-center">
                  {/* TODO: Replace with actual video embed (YouTube, Vimeo, etc.) */}
                  <div className="text-center text-white">
                    <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center mx-auto mb-2 opacity-50">
                      <span className="text-xl">▶</span>
                    </div>
                    <span className="text-xs text-stone-400 uppercase tracking-widest">Coming Soon</span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-stone-900 mb-2">{video.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed flex-1">{video.description}</p>
                  <span className="text-xs text-stone-400 mt-3">{video.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA
        title="Want a custom walkthrough?"
        subtitle="Book a free audit and we will show you exactly what automation could look like for your business."
        primaryLabel="Book a Free Audit"
        primaryHref="/contact"
        secondaryLabel="See Case Studies"
        secondaryHref="/case-studies"
      />
    </>
  );
}
