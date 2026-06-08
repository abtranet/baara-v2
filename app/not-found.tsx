import Link from "next/link";
import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";

export default function NotFound() {
  return (
    <section className="section-padding bg-white">
      <Container narrow>
        <div className="text-center">
          <p className="text-7xl font-extrabold text-stone-200 mb-4">404</p>
          <h1 className="text-3xl font-bold text-stone-900 mb-4">Page not found</h1>
          <p className="text-stone-600 mb-10">
            This page does not exist or has moved. Here are some places to go instead.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-10">
            <CTAButton href="/" variant="primary">
              Home
            </CTAButton>
            <CTAButton href="/services" variant="outline">
              AI Automation Services
            </CTAButton>
            <CTAButton href="/academy" variant="outline">
              Baara Academy
            </CTAButton>
          </div>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <Link href="/academy/healthcare-it-career-launch" className="text-amber-700 hover:underline">
              Healthcare IT Career Launch
            </Link>
            <span className="text-stone-300">·</span>
            <Link href="/pricing" className="text-amber-700 hover:underline">
              Pricing
            </Link>
            <span className="text-stone-300">·</span>
            <Link href="/contact" className="text-amber-700 hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
