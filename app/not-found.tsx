import Link from "next/link";
import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";

export default function NotFound() {
  return (
    <>
      <section className="bg-blue-700 text-white py-24">
        <Container>
          <div className="text-center max-w-xl mx-auto">
            <p className="text-8xl font-extrabold text-blue-500 mb-4">404</p>
            <h1 className="text-3xl font-extrabold mb-4">Page not found</h1>
            <p className="text-blue-100 mb-10">
              This page does not exist or has moved. Here are some places to go instead.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <CTAButton href="/" variant="secondary">Home</CTAButton>
              <CTAButton href="/services" variant="ghost">AI Automation Services</CTAButton>
              <CTAButton href="/academy" variant="ghost">Baara Academy</CTAButton>
            </div>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <Link href="/academy/healthcare-it-career-launch" className="text-cyan-300 hover:text-cyan-200 hover:underline">
                Healthcare IT Career Launch
              </Link>
              <span className="text-blue-500">&middot;</span>
              <Link href="/pricing" className="text-cyan-300 hover:text-cyan-200 hover:underline">
                Pricing
              </Link>
              <span className="text-blue-500">&middot;</span>
              <Link href="/contact" className="text-cyan-300 hover:text-cyan-200 hover:underline">
                Contact
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
