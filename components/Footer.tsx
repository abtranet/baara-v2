import Link from "next/link";
import { footerLinks } from "@/lib/content/navigation";
import { site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 text-blue-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-2xl font-extrabold text-white hover:text-orange-400 transition-colors">
              Baara
            </Link>
            <p className="mt-3 text-sm text-blue-400 leading-relaxed">
              AI automation and digital skills for African entrepreneurs, professionals, and communities.
              <br />
              <em className="text-blue-500">Baara</em> means &ldquo;work&rdquo; in Bambara.
            </p>
            <p className="mt-3 text-xs text-blue-500">
              <a href={`mailto:${site.email}`} className="hover:text-orange-400 transition-colors">
                {site.email}
              </a>
            </p>
          </div>

          {/* AI Automation */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wide">AI Automation</h3>
            <ul className="space-y-2.5">
              {footerLinks.automation.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-blue-400 hover:text-orange-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academy */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wide">Baara Academy</h3>
            <ul className="space-y-2.5">
              {footerLinks.academy.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-blue-400 hover:text-orange-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + Legal */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wide">Company</h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-blue-400 hover:text-orange-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-white font-bold text-sm mt-6 mb-4 uppercase tracking-wide">Legal</h3>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-blue-400 hover:text-orange-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer + copyright */}
        <div className="border-t border-blue-900 pt-8 space-y-3">
          <p className="text-xs text-blue-500 leading-relaxed">
            <strong className="text-blue-400">Baara Academy</strong> is vendor-neutral and does not provide
            official Epic, Oracle Health, Varian, Elekta, ARIA, MOSAIQ, or other vendor certifications.
            Programs are educational and do not guarantee employment, salary, or income outcomes.
          </p>
          <p className="text-xs text-blue-600">
            &copy; {year} Baara &middot; A GlobalSABT initiative &middot; Built by Abdel Traore &middot;{" "}
            <span className="text-blue-500">Jacksonville, Florida</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
