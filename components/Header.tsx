"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/lib/content/navigation";
import CTAButton from "./CTAButton";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-blue-700 shadow-md">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-extrabold text-white tracking-tight">
              Baara
            </span>
            <span className="hidden sm:block text-xs text-blue-300 font-medium border-l border-blue-500 pl-2 leading-tight">
              AI + Skills
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-blue-100 hover:text-white font-medium px-3 py-2 rounded-md hover:bg-blue-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <button
              aria-label="Toggle language"
              className="hidden sm:flex items-center gap-1 text-xs font-semibold text-blue-200 hover:text-white border border-blue-500 rounded-md px-2 py-1.5 transition-colors"
              title="Language toggle — full i18n coming soon"
            >
              <span>EN</span>
              <span className="text-blue-400">/</span>
              <span>FR</span>
            </button>

            <CTAButton href="/contact" variant="secondary" size="sm" className="hidden sm:inline-flex">
              Free Audit
            </CTAButton>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden p-2 text-blue-100 hover:text-white"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-blue-800 border-t border-blue-600 px-4 py-4">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-blue-100 hover:text-white font-medium py-2.5 px-3 rounded-lg hover:bg-blue-700 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-blue-700 flex gap-3">
              <CTAButton href="/contact" variant="secondary" size="sm" className="flex-1 justify-center">
                Book Free Audit
              </CTAButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
