# baara-v2

A comparison build of [baara.us](https://www.baara.us) — a clean-slate Next.js 16 site for Baara AI Automation and Baara Academy.

**This repo is a comparison build and should not be indexed until Baara decides to replace or publish it publicly.**

---

## Why this is a separate repo

This is a standalone comparison build created independently of the current live Baara.us website. The goal is to evaluate a modern Next.js architecture, updated design, and expanded page structure before deciding whether to replace the current site.

It does not connect to, share code with, or modify the current Baara.us repository.

---

## Running locally

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Editing content

All content is data-driven. Edit these files:

| File | What to edit |
|------|-------------|
| `lib/site.ts` | Brand name, founder info, contact email, social URLs |
| `lib/content/services.ts` | AI automation service cards |
| `lib/content/pricing.ts` | Pricing tiers and FAQ |
| `lib/content/academy.ts` | Curriculum, academy tracks, FAQ |
| `lib/content/caseStudies.ts` | Case study scenarios |
| `lib/content/news.ts` | News articles (static — see TODO for live RSS) |
| `lib/content/videos.ts` | Demo video metadata |
| `lib/content/navigation.ts` | Header and footer navigation links |

---

## Updating CTAs

CTAs are implemented in individual page files. Search for `CTAButton` to find and update call-to-action labels, URLs, and variants.

The Calendly booking URL is controlled by `NEXT_PUBLIC_CALENDLY_URL` in your `.env.local`.

---

## Adding new Academy courses

1. Add a new entry to `academyTracks` in `lib/content/academy.ts`
2. Create a new route in `app/academy/[course-slug]/page.tsx`
3. Add the route to `lib/routes.ts`
4. Add curriculum content to `lib/content/academy.ts` if needed

---

## Environment variables

Copy `.env.example` to `.env.local` and fill in values:

```env
NEXT_PUBLIC_SITE_URL=https://www.baara.us
NEXT_PUBLIC_INDEXING=false          # Keep false until you are ready to replace baara.us
NEXT_PUBLIC_CALENDLY_URL=           # Your Calendly booking link
NEXT_PUBLIC_WHATSAPP_URL=           # WhatsApp community link
NEXT_PUBLIC_LINKEDIN_URL=           # LinkedIn profile/page URL
NEXT_PUBLIC_INSTAGRAM_URL=          # Instagram profile URL
NEXT_PUBLIC_TIKTOK_URL=             # TikTok profile URL
NEXT_PUBLIC_X_URL=                  # X/Twitter profile URL
CONTACT_EMAIL=sales@globalsabt.com  # Contact email displayed in footer and contact page
SUPABASE_URL=                       # Server-only Supabase project URL
SUPABASE_SERVICE_ROLE_KEY=          # Server-only service role key; never expose in the browser
SUPABASE_LEADS_TABLE=leads          # Supabase table for form submissions
RESEND_API_KEY=                     # Server-only Resend API key for form notifications
RESEND_FROM=                        # Verified sender, e.g. Baara <hello@baara.us>
LEAD_NOTIFICATION_TO=sales@globalsabt.com
```

Do not prefix Supabase service role or Resend API keys with `NEXT_PUBLIC_`. They are used only by the `/api/leads` route handler.

Create the Supabase table before enabling forms:

```sql
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  form_type text not null check (form_type in ('audit', 'waitlist', 'roadmap', 'newsletter', 'contact')),
  first_name text not null,
  email text not null,
  country text,
  background text,
  language text,
  message text,
  source_path text,
  metadata jsonb not null default '{}'::jsonb
);

alter table public.leads enable row level security;
```

The app inserts leads with the server-side service role key. Do not add public client insert policies unless you intentionally build a separate protected flow.

---

## How indexing is controlled

Indexing is controlled by a single environment variable:

```
NEXT_PUBLIC_INDEXING=false   # Disallows all crawling (default — safe for staging/comparison)
NEXT_PUBLIC_INDEXING=true    # Allows crawling and enables full sitemap
```

**When `NEXT_PUBLIC_INDEXING=false` (default):**
- All pages return `noindex, nofollow` robots metadata
- `robots.ts` disallows all user agents
- `sitemap.ts` returns an empty array
- Safe to deploy to Vercel preview without conflicting with live baara.us

**When `NEXT_PUBLIC_INDEXING=true`:**
- Pages return `index, follow` robots metadata
- `robots.ts` allows all crawling and includes sitemap URL
- `sitemap.ts` returns all canonical production URLs

---

## Deploying to Vercel preview safely

1. Connect this repo to a new Vercel project (separate from the current baara.us project)
2. Set `NEXT_PUBLIC_INDEXING=false` in Vercel environment variables
3. Deploy to a preview URL (e.g., `baara-v2.vercel.app`)
4. The live baara.us will not be affected — this preview will be disallowed from indexing

---

## Switching to production indexing

When you are ready to replace baara.us with this build:

1. Set `NEXT_PUBLIC_INDEXING=true` in production environment
2. Set `NEXT_PUBLIC_SITE_URL=https://www.baara.us`
3. Update DNS to point to this deployment
4. Verify sitemap at `/sitemap.xml`
5. Submit sitemap to Google Search Console
6. Monitor crawl errors and canonical signal pickup

---

## SEO checklist before replacing baara.us

- [ ] All pages have unique `<title>` and `<meta description>`
- [ ] All pages have a single visible `<h1>`
- [ ] Important content is server-rendered (not client-side only)
- [ ] All internal links use Next.js `<Link>` component
- [ ] Canonical URLs resolve correctly with indexing on
- [ ] Sitemap generates at `/sitemap.xml`
- [ ] Robots generates at `/robots.txt`
- [ ] 404 page is in place
- [ ] All planned routes resolve (no broken navigation links)
- [ ] Redirects in `next.config.ts` are working
- [ ] JSON-LD structured data on homepage, services, and course pages
- [ ] No PHI or confidential data exposed
- [ ] Legal pages reviewed by counsel
- [ ] Footer disclaimer present on all pages
- [ ] Forms do not fake backend submission

---

## Redirect notes

Redirects defined in `next.config.ts`:

| From | To | Type |
|------|----|------|
| `/about` | `/a-propos` | Permanent |
| `/community` | `/communaute` | Permanent |
| `/news` | `/actualites` | Permanent |
| `/projects` | `/` | Permanent |
| `/projects/yatela` | `/` | Permanent |
| `/awards/incubation-politique` | `/actualites` | Permanent |

---

## Form integration

All forms submit to `/api/leads`, which validates inputs server-side, ignores honeypot spam submissions, stores valid leads in Supabase, and sends a Resend notification email to `LEAD_NOTIFICATION_TO` (`sales@globalsabt.com` by default).

Forms using this backend:
- `app/contact/page.tsx` — contact form
- `app/newsletter/page.tsx` — newsletter signup
- `app/academy/healthcare-it-roadmap/page.tsx` — roadmap lead magnet
- `app/academy/interoperability-foundations/page.tsx` — waitlist
- `app/academy/ai-automation-for-healthcare/page.tsx` — waitlist

---

## Compliance notes

- Baara Academy is vendor-neutral. No official Epic, Oracle Health, Varian, Elekta, ARIA, MOSAIQ, or other vendor certifications are claimed.
- No guaranteed employment, income, or revenue outcomes are stated anywhere in this codebase.
- Forms display a warning against submitting PHI, confidential employer data, passwords, or API keys.
- Legal pages are placeholders and must be reviewed by qualified legal counsel before production use.
- AI automation content uses careful language ("can be designed to connect with") rather than claiming active integrations.
- No employer-owned materials, real patient data, or confidential client data are included anywhere in this repo.

---

## Assumptions made during build

- No i18n library installed yet. Language toggle is a visual placeholder. Full implementation with `next-intl` is documented as a TODO.
- No actual video embeds. Video page uses placeholder cards with "Coming Soon" state.
- News articles are static. TODO comments indicate where to wire in RSS or CMS.
- Pricing is editable from `lib/content/pricing.ts` — not connected to a payment processor.
- Social links default to `#` if environment variables are not set.

---

## Tech stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Static data-driven content
- No heavy UI library dependencies
