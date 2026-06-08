import type { Metadata } from "next";
import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";
import FinalCTA from "@/components/FinalCTA";
import JsonLd from "@/components/JsonLd";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import { buildMetadata } from "@/lib/seo";
import { serviceSchema } from "@/lib/schema";
import { services, toolEcosystem } from "@/lib/content/services";

export const metadata: Metadata = buildMetadata({
  title: "AI Automation Services for Small Businesses and African Entrepreneurs",
  description:
    "Baara helps small businesses, entrepreneurs, and African-led organizations automate follow-up, customer communication, operations, reporting, and repetitive workflows.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd schema={serviceSchema("AI Automation Services", "Practical AI automation workflows for small businesses and African entrepreneurs.")} />

      {/* Hero */}
      <section className="bg-blue-700 text-white py-20">
        <Container>
          <div className="max-w-2xl">
            <span className="inline-block text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-4">
              AI Automation Services
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-5 leading-tight">
              AI Automation Services That Turn Manual Work Into Simple Systems
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed mb-8">
              Baara helps small businesses, entrepreneurs, and African-led organizations automate follow-up, customer communication, operations, reporting, and repetitive workflows.
            </p>
            <CTAButton href="/contact" variant="secondary" size="lg">
              Book a Free Audit
            </CTAButton>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="section-padding bg-indigo-50">
        <Container>
          <SectionHeader
            eyebrow="What Baara Builds"
            title="Six automation services, one practical goal"
            subtitle="Reduce manual work, capture more leads, and build systems that run without you."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <ServiceCard key={s.id} {...s} />
            ))}
          </div>
        </Container>
      </section>

      {/* Tool Ecosystem */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeader
            eyebrow="Tools & Platforms"
            title="Tools Baara can work with"
            subtitle="These workflows can be designed to connect with the tools you already use. Final compatibility depends on your specific setup and data."
          />
          <div className="flex flex-wrap gap-3">
            {toolEcosystem.map((tool) => (
              <span
                key={tool}
                className="bg-indigo-50 text-blue-700 border border-blue-200 text-sm font-medium px-4 py-2 rounded-full"
              >
                {tool}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA
        title="Ready to automate your first workflow?"
        subtitle="Book a free audit and walk away with a clear picture of your highest-impact automation opportunities."
        primaryLabel="Book a Free Audit"
        primaryHref="/contact"
        secondaryLabel="See Case Studies"
        secondaryHref="/case-studies"
      />
    </>
  );
}
