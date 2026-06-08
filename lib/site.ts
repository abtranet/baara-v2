export const site = {
  name: "Baara",
  tagline: "AI Automation and Digital Skills for African Talent and Small Businesses",
  description:
    "Baara helps African entrepreneurs, professionals, and small businesses use practical AI automation, digital workflows, and career-focused training to save time, grow opportunities, and build future-ready skills.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.baara.us",
  email: process.env.CONTACT_EMAIL || "sales@globalsabt.com",
  founder: {
    name: "Abdel Traore",
    title: "Founder, Baara | Healthcare IT Professional",
    bio: "Malian-born, bilingual English/French healthcare IT professional based in Jacksonville, Florida. Deep experience in healthcare IT, radiation oncology systems, EHR workflows, clinical application support, HL7/FHIR, EMR integration, workflow documentation, AI productivity, and healthcare interoperability.",
  },
  social: {
    calendly: process.env.NEXT_PUBLIC_CALENDLY_URL || "",
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_URL || "",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "",
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "",
    tiktok: process.env.NEXT_PUBLIC_TIKTOK_URL || "",
    x: process.env.NEXT_PUBLIC_X_URL || "",
  },
  indexing: process.env.NEXT_PUBLIC_INDEXING === "true",
};
