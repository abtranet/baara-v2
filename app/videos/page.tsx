import type { Metadata } from "next";
import FinalCTA from "@/components/FinalCTA";
import PillHeader from "@/components/PillHeader";
import { buildMetadata } from "@/lib/seo";
import { demoVideos } from "@/lib/content/videos";

export const metadata: Metadata = buildMetadata({
  title: "Baara Demo Videos and Workflow Walkthroughs",
  description:
    "Watch Baara AI automation demos: lead capture workflows, WhatsApp AI, CRM follow-up, healthcare IT documentation, and AI productivity walkthroughs.",
  path: "/videos",
});

const thumbColors = ["bg-blue-900", "bg-orange-500", "bg-teal-700", "bg-pink-500", "bg-indigo-700"];

export default function VideosPage() {
  return (
    <>
      <section className="bg-blue-900 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <span className="bg-orange-500 text-white font-extrabold text-2xl px-10 py-4 rounded-full shadow-lg">
              Demo Videos
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Baara Demo Videos and Workflow Walkthroughs
          </h1>
          <p className="text-blue-200 text-lg max-w-xl mx-auto">
            Watch how Baara automation workflows run in practice — from lead capture to healthcare IT documentation.
          </p>
        </div>
      </section>

      <section className="bg-sky-100 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <PillHeader bg="bg-blue-900" text="text-white" size="md" center>
            🎬 Demos Coming Soon
          </PillHeader>
          <p className="text-center text-slate-600 mb-8">
            Videos are being produced. Subscribe to the newsletter for updates.
          </p>
          {/* TODO: Replace placeholder cards with real video embeds (YouTube, Vimeo, etc.) */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {demoVideos.map((video, i) => (
              <div key={video.id} className="bg-white rounded-3xl overflow-hidden shadow-sm card-lift flex flex-col">
                <div className={`${thumbColors[i % thumbColors.length]} aspect-video flex flex-col items-center justify-center`}>
                  <div className="w-14 h-14 border-2 border-white rounded-full flex items-center justify-center opacity-40">
                    <span className="text-white text-2xl">&#9654;</span>
                  </div>
                  <span className="text-xs text-white/50 mt-2 uppercase tracking-widest">Coming Soon</span>
                </div>
                <div className="p-6 flex flex-col flex-1 gap-2">
                  <h3 className="font-extrabold text-blue-900">{video.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed flex-1">{video.description}</p>
                  <span className="text-xs text-slate-400">{video.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA
        bg="bg-orange-500"
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
