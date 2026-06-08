export const pricingTiers = [
  {
    id: "starter",
    name: "Starter",
    price: "$297/mo",
    tagline: "For businesses taking the first step into automation.",
    popular: false,
    includes: [
      "1 automation workflow",
      "Lead capture form setup",
      "Basic email or WhatsApp follow-up",
      "30-minute onboarding call",
      "Email support",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    price: "$697/mo",
    tagline: "For businesses ready to scale core operations.",
    popular: true,
    includes: [
      "Up to 3 automation workflows",
      "CRM integration",
      "Multi-step follow-up sequences",
      "Monthly performance report",
      "Priority support",
      "Monthly strategy call",
    ],
  },
  {
    id: "scale",
    name: "Scale",
    price: "Custom",
    tagline: "For teams that need a full custom system.",
    popular: false,
    includes: [
      "Custom workflow architecture",
      "Multiple integrations",
      "Advanced AI support flows",
      "Dedicated implementation roadmap",
      "Priority support",
    ],
  },
];

export const pricingFaqs = [
  {
    question: "How long does setup take?",
    answer:
      "Most Starter workflows are live within 1–2 weeks. Growth workflows typically take 2–4 weeks depending on scope and how quickly we receive access to your tools.",
  },
  {
    question: "Do I need technical knowledge?",
    answer:
      "No. Baara handles the technical setup. You share access to your tools, describe your process, and we build and document everything for you.",
  },
  {
    question: "Can Baara work with my existing tools?",
    answer:
      "In most cases, yes. Baara can be designed to connect with common business tools like Google Workspace, Airtable, HubSpot, MailerLite, WhatsApp, Calendly, and more. We assess compatibility during your free audit.",
  },
  {
    question: "Do you support French-speaking businesses?",
    answer:
      "Yes. Abdel Traore is bilingual in English and French, and Baara serves French-speaking African businesses and diaspora entrepreneurs.",
  },
  {
    question: "Is there a long-term contract?",
    answer:
      "No long-term contract is required for monthly plans. You can pause or cancel with reasonable notice. Custom Scale projects may include a project agreement.",
  },
  {
    question: "Do you handle private or sensitive data?",
    answer:
      "We work with standard business operations data. For projects involving sensitive data, healthcare information, or compliance-adjacent workflows, we review scope carefully before proceeding. We do not process PHI.",
  },
  {
    question: "Can I start with one workflow?",
    answer:
      "Yes. The Starter plan is designed exactly for that. Many clients start with one high-impact workflow and expand from there.",
  },
];
