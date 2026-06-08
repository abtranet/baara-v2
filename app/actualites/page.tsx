import type { Metadata } from "next";
import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";
import SectionHeader from "@/components/SectionHeader";
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
      <section className="bg-blue-700 text-white py-20">
        <Container>
          <div className="max-w-2xl">
            <span className="inline-block text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-4">
              Actualités / News
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
              Actualités IA et Afrique
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed">
              A bilingual hub for practical AI news, tools, opportunities, and digital transformation stories connected to Africa and the diaspora.
            </p>
            <p className="text-blue-300 text-sm mt-3">
              Un espace bilingue pour les actualités IA, les outils pratiques, et les opportunités numériques en Afrique.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          <SectionHeader
            eyebrow="Articles"
            title="Latest stories"
            subtitle="Static articles below. Sign up for the newsletter for weekly updates."
          />
          <div className="grid sm:grid-cols-2 gap-6">
            {newsArticles.map((article) => (
              <article
                key={article.id}
                className="bg-indigo-50 border border-blue-100 rounded-2xl p-6 flex flex-col gap-3"
              >
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <span className="text-xs font-semibold uppercase tracking-widest text-cyan-600">
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
                <h2 className="font-bold text-slate-900 leading-snug">{article.title}</h2>
                {article.lang === "fr" && article.titleEn !== article.title && (
                  <p className="text-slate-400 text-sm italic">{article.titleEn}</p>
                )}
                <p className="text-slate-600 text-sm leading-relaxed">
                  {article.lang === "fr" ? article.summary : article.summaryEn}
                </p>
                {article.lang === "fr" && (
                  <p className="text-slate-400 text-xs italic">{article.summaryEn}</p>
                )}
              </article>
            ))}
          </div>

          <div className="mt-12 bg-blue-700 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-white mb-3">
              Get AI news in your inbox — in English and French
            </h2>
            <p className="text-blue-200 mb-6">
              Weekly updates on AI in Africa, automation tools, healthcare IT, and career opportunities.
            </p>
            <CTAButton href="/newsletter" variant="secondary">
              Subscribe to the Newsletter
            </CTAButton>
          </div>
        </Container>
      </section>
    </>
  );
}
