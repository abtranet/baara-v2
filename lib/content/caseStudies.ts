export const caseStudies = [
  {
    id: "local-service",
    label: "Sample Workflow Scenario",
    industry: "Local Service Company",
    challenge:
      "A local home services company was losing leads because follow-up happened only when the owner had time — often hours or days after an inquiry.",
    workflow:
      "Web form submission triggers an immediate WhatsApp message and email with booking link. If no response in 24 hours, a follow-up message is sent automatically.",
    tools: ["Tally", "Make", "WhatsApp Business API", "Calendly", "Airtable"],
    outcome:
      "Leads receive a response within minutes. The owner no longer manually follows up on cold inquiries. Booking rates from web inquiries improved significantly.",
    next: "Add a CRM stage tracker and monthly client satisfaction survey automation.",
  },
  {
    id: "ecommerce",
    label: "Sample Workflow Scenario",
    industry: "E-Commerce Brand",
    challenge:
      "An online store was sending order confirmation emails but had no post-purchase follow-up, review requests, or repeat purchase nudges.",
    workflow:
      "Order completion triggers a 3-step email sequence: day 1 confirmation, day 7 usage tip, day 14 review request with incentive.",
    tools: ["Shopify", "MailerLite", "Make", "Airtable"],
    outcome:
      "Repeat purchase rate improved. Review volume increased. All sequences run automatically without manual work.",
    next: "Build a VIP segment for high-value customers and a win-back sequence for inactive buyers.",
  },
  {
    id: "real-estate",
    label: "Representative Automation Scenario",
    industry: "Real Estate Team",
    challenge:
      "A small real estate team was managing leads across phone, email, and social DMs with no central system. Leads were falling through the cracks between agents.",
    workflow:
      "All lead sources feed into a central Airtable CRM. Each new lead triggers an automatic assignment, a follow-up task, and a first-touch text.",
    tools: ["Airtable", "Zapier", "Google Voice", "Gmail"],
    outcome:
      "Every lead is logged and assigned automatically. No lead falls through the cracks. Team lead has a live view of pipeline at all times.",
    next: "Integrate calendar availability and add automated showing confirmation and reminder sequences.",
  },
];
