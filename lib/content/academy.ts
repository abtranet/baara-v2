export const curriculum = [
  { week: 1, title: "Healthcare IT Career Paths & Digital Healthcare Overview" },
  { week: 2, title: "Hospital Systems, EHR Workflows & Clinical Application Support" },
  { week: 3, title: "Tickets, Incidents, Service Requests, Change Control & Documentation" },
  { week: 4, title: "HL7, FHIR, ADT, Orders, Results, Charges & Healthcare Data Exchange" },
  { week: 5, title: "AI Productivity & Safe Automation for Healthcare & Business Workflows" },
  { week: 6, title: "Workflow Documentation & Portfolio Project" },
  { week: 7, title: "Resume, LinkedIn, Job Search & Interview Preparation" },
  { week: 8, title: "Capstone Presentation & Individual Career Roadmap" },
];

export const careerLaunchFaqs = [
  {
    question: "Do I need a healthcare background?",
    answer:
      "No, but healthcare, admin, IT support, customer service, data, or operations experience can help. The program is designed to help learners understand healthcare IT workflows and career paths from a practical foundation.",
  },
  {
    question: "Do I need coding experience?",
    answer:
      "No. This first program focuses on healthcare IT concepts, EHR workflows, support processes, documentation, AI productivity, and career readiness. Technical tracks can be added later.",
  },
  {
    question: "Is this an official Epic certification?",
    answer:
      "No. Baara Academy is vendor-neutral and does not provide official Epic, Oracle Health, Varian, Elekta, ARIA, MOSAIQ, or other vendor certifications.",
  },
  {
    question: "Can I take this from Africa?",
    answer:
      "Yes, learners from Africa are welcome. However, U.S. remote healthcare IT jobs may require work authorization, employer-specific hiring rules, and security requirements. The program does not guarantee employment.",
  },
  {
    question: "Is a job guaranteed?",
    answer:
      "No. The program provides practical training, portfolio support, and career preparation, but employment depends on the learner's background, location, work authorization, job market, and effort.",
  },
  {
    question: "Is the program in English or French?",
    answer:
      "English is the first delivery language. French resources and bilingual support are part of the long-term plan.",
  },
  {
    question: "What tools do I need?",
    answer:
      "A computer, reliable internet, email, Zoom access, Google Docs or Microsoft Office, and willingness to complete assignments.",
  },
  {
    question: "How much time should I expect each week?",
    answer:
      "Plan for 3 to 5 hours per week, including live sessions, recordings, assignments, and portfolio work.",
  },
];

export const academyTracks = [
  {
    id: "hca",
    title: "Healthcare IT Foundations",
    status: "available" as const,
    href: "/academy/healthcare-it-career-launch",
  },
  {
    id: "ehr",
    title: "EHR & Clinical Applications Support",
    status: "coming" as const,
    href: "/academy",
  },
  {
    id: "interop",
    title: "Healthcare Interoperability Foundations",
    status: "waitlist" as const,
    href: "/academy/interoperability-foundations",
  },
  {
    id: "radonc",
    title: "Radiation Oncology IT Introduction",
    status: "coming" as const,
    href: "/academy",
  },
  {
    id: "ai-hca",
    title: "AI Automation for Healthcare & Business Workflows",
    status: "waitlist" as const,
    href: "/academy/ai-automation-for-healthcare",
  },
  {
    id: "career",
    title: "Career Readiness for African Professionals",
    status: "available" as const,
    href: "/academy/healthcare-it-career-launch",
  },
];
