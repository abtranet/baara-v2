export const routes = {
  home: "/",
  services: "/services",
  onboarding: "/onboarding",
  caseStudies: "/case-studies",
  videos: "/videos",
  pricing: "/pricing",
  academy: "/academy",
  academyCareerLaunch: "/academy/healthcare-it-career-launch",
  academyRoadmap: "/academy/healthcare-it-roadmap",
  academyInterop: "/academy/interoperability-foundations",
  academyAI: "/academy/ai-automation-for-healthcare",
  actualites: "/actualites",
  communaute: "/communaute",
  newsletter: "/newsletter",
  aPropos: "/a-propos",
  contact: "/contact",
  privacy: "/legal/privacy",
  terms: "/legal/terms",
} as const;

export const sitemapRoutes = Object.values(routes);
