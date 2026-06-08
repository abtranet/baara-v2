import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import PillHeader from "@/components/PillHeader";
import { buildMetadata } from "@/lib/seo";
import { newsArticles } from "@/lib/content/news";

export const metadata: Metadata = buildMetadata({
  title: "Actualités IA et Afrique | AI News for Africa",
  description:
    "A bilingual hub for practical AI news, tools, opportunities, and digital transformation stories connected to Africa and the diaspora.",
  path: "/actualites",
});

export default function ActualitesPage() {
  return (
    <>
      <section className="bg-blue-900 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <span className="bg-pink-500 text-white font-extrabold text-2xl px-10 py-4 rounded-full shadow-lg">
              Actualités / News
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Actualités IA et Afrique
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            A bilingual hub for practical AI news, tools, opportunities, and digital transformation stories connected to Africa and the diaspora.
          </p>
        </div>
      </section>

      <section className="bg-sky-100 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <PillHeader bg="bg-blue-900" text="text-white" size="md" center>
            📰 Latest Stories
          </PillHeader>
          {/* TODO: Replace with live RSS feed or CMS integration */}
          <div className="grid sm:grid-cols-2 gap-6 mt-4">
            {newsArticles.map((article) => (
              <article key={article.id} className="bg-white rounded-3xl p-6 shadow-sm flex flex-col gap-3 card-lift">
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <span className="bg-orange-100 text-orange-800 font-bold text-xs px-4 py-1.5 rounded-full">
                    {article.source}
                  </span>
                  <span className="text-xs text-slate-400">
                    {new Date(article.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <h2 className="font-extrabold text-blue-900 leading-snug">{article.title}</h2>
                {article.lang === "fr" && article.titleEn !== article.title && (
                  <p className="text-slate-400 text-sm italic">{article.titleEn}</p>
                )}
                <p className="text-slate-600 text-sm leading-relaxed flex-1">
                  {article.lang === "fr" ? article.summary : article.summaryEn}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 bg-blue-900 rounded-3xl p-8 text-center">
            <h2 className="text-xl font-extrabold text-white mb-3">
              Get AI news in your inbox — English and French
            </h2>
            <p className="text-blue-200 mb-6">
              Weekly updates on AI in Africa, automation tools, healthcare IT, and career opportunities.
            </p>
            <CTAButton href="/newsletter" variant="primary" size="md">
              Subscribe to the Newsletter
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
