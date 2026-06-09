"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

type FormType = "audit" | "waitlist" | "roadmap" | "newsletter" | "contact";

interface LeadFormProps {
  type: FormType;
  title?: string;
  subtitle?: string;
  showCountry?: boolean;
  showBackground?: boolean;
  showLanguage?: boolean;
  showMessage?: boolean;
}

const backgrounds = ["Healthcare", "IT", "Admin", "Student", "Career changer", "Other"];
const languages = ["English", "French", "Both"];

export default function LeadForm({
  type,
  title,
  subtitle,
  showCountry,
  showBackground,
  showLanguage,
  showMessage,
}: LeadFormProps) {
  const pathname = usePathname();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    formData.set("type", type);
    formData.set("sourcePath", pathname || "");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        body: formData,
      });
      const result = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !result.ok) {
        setError(result.error || "We could not submit the form right now. Please try again.");
        return;
      }

      setSubmitted(true);
    } catch {
      setError("We could not submit the form right now. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-8 text-center">
        <div className="text-3xl mb-3">✓</div>
        <h3 className="text-xl font-bold text-stone-900 mb-2">You&apos;re on the list.</h3>
        <p className="text-stone-600">
          {type === "roadmap"
            ? "We&apos;ll send your free Healthcare IT Career Roadmap to your inbox shortly."
            : type === "newsletter"
            ? "Welcome to the Baara Newsletter. You&apos;ll hear from us soon."
            : "Thanks for reaching out. We&apos;ll follow up within 1–2 business days."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <input type="hidden" name="type" value={type} />
      <input type="hidden" name="sourcePath" value={pathname || ""} />
      <div className="hidden" aria-hidden="true">
        <label htmlFor={`${type}-companyWebsite`}>Company website</label>
        <input
          id={`${type}-companyWebsite`}
          type="text"
          name="companyWebsite"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {(title || subtitle) && (
        <div className="mb-6">
          {title && <h3 className="text-xl font-bold text-stone-900">{title}</h3>}
          {subtitle && <p className="text-stone-600 mt-1 text-sm">{subtitle}</p>}
        </div>
      )}

      <div>
        <label htmlFor={`${type}-name`} className="block text-sm font-medium text-stone-700 mb-1">
          First name
        </label>
        <input
          id={`${type}-name`}
          type="text"
          name="firstName"
          required
          autoComplete="given-name"
          className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
          placeholder="Your first name"
        />
      </div>

      <div>
        <label htmlFor={`${type}-email`} className="block text-sm font-medium text-stone-700 mb-1">
          Email address
        </label>
        <input
          id={`${type}-email`}
          type="email"
          name="email"
          required
          autoComplete="email"
          className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
          placeholder="you@example.com"
        />
      </div>

      {showCountry && (
        <div>
          <label htmlFor={`${type}-country`} className="block text-sm font-medium text-stone-700 mb-1">
            Country
          </label>
          <input
            id={`${type}-country`}
            type="text"
            name="country"
            autoComplete="country-name"
            className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="Your country"
          />
        </div>
      )}

      {showBackground && (
        <div>
          <label htmlFor={`${type}-background`} className="block text-sm font-medium text-stone-700 mb-1">
            Current background
          </label>
          <select
            id={`${type}-background`}
            name="background"
            className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <option value="">Select your background</option>
            {backgrounds.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
      )}

      {showLanguage && (
        <div>
          <label htmlFor={`${type}-language`} className="block text-sm font-medium text-stone-700 mb-1">
            Preferred language
          </label>
          <select
            id={`${type}-language`}
            name="language"
            className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <option value="">Select language</option>
            {languages.map((l) => (
              <option key={l} value={l}>{l}</option>
            ))}
          </select>
        </div>
      )}

      {showMessage && (
        <div>
          <label htmlFor={`${type}-message`} className="block text-sm font-medium text-stone-700 mb-1">
            Message <span className="text-stone-400 font-normal">(optional)</span>
          </label>
          <textarea
            id={`${type}-message`}
            name="message"
            rows={4}
            className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="Tell us about your business or what you're looking for."
          />
        </div>
      )}

      <p className="text-xs text-stone-400">
        Do not submit PHI, confidential employer data, passwords, API keys, or sensitive client data.
      </p>

      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-amber-600 hover:bg-amber-700 disabled:opacity-60 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
      >
        {loading ? "Sending..." : "Submit"}
      </button>
    </form>
  );
}
