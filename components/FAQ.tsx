"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-stone-200">
      {items.map((item, i) => (
        <div key={i}>
          <button
            className="w-full text-left py-5 flex justify-between items-start gap-4 cursor-pointer"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span className="font-semibold text-stone-900">{item.question}</span>
            <span className="text-amber-600 font-bold text-xl leading-none flex-shrink-0">
              {openIndex === i ? "−" : "+"}
            </span>
          </button>
          {openIndex === i && (
            <div className="pb-5 text-stone-600 leading-relaxed">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}
