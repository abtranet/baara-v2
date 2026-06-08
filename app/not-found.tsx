import Link from "next/link";
import CTAButton from "@/components/CTAButton";

export default function NotFound() {
  return (
    <>
      <section className="bg-blue-900 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-8xl font-extrabold text-blue-700 mb-4">404</p>
          <h1 className="text-3xl font-extrabold text-white mb-4">Page not found</h1>
          <p className="text-blue-200 mb-10 max-w-md mx-auto">
            This page does not exist or has moved. Here are some places to go instead.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <CTAButton href="/" variant="primary">Home</CTAButton>
            <CTAButton href="/services" variant="ghost">AI Automation Services</CTAButton>
            <CTAButton href="/academy" variant="ghost">Baara Academy</CTAButton>
          </div>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <Link href="/academy/healthcare-it-career-launch" className="text-orange-300 hover:text-orange-200 hover:underline">
              Healthcare IT Career Launch
            </Link>
            <span className="text-blue-600">&middot;</span>
            <Link href="/pricing" className="text-orange-300 hover:text-orange-200 hover:underline">
              Pricing
            </Link>
            <span className="text-blue-600">&middot;</span>
            <Link href="/contact" className="text-orange-300 hover:text-orange-200 hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
