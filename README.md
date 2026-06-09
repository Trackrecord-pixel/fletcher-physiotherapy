# Fletcher Physiotherapy — Website

Production-ready marketing website for **Fletcher Physiotherapy**, specialising in
**home visit physiotherapy** across Newcastle, Lake Macquarie and the Central Coast.

Built with **Next.js 15 (App Router)**, **TypeScript** and **Tailwind CSS**.
Mobile-first, accessible (WCAG-aware), SEO-optimised and ready to deploy on **Vercel**.

---

## ✨ Features

- 13 pages: Home, About, Services, Home Visit, NDIS, Support at Home, Chronic Pain,
  Falls Prevention, Our Team, Locations, Referrals, Contact, FAQs
- Reusable component library (header, footer, hero, service cards, forms, FAQ accordion)
- Premium navy / white / soft-beige healthcare aesthetic with subtle animations & hover effects
- Per-page SEO metadata, Open Graph & Twitter cards
- Structured data (JSON-LD): `MedicalBusiness`, `MedicalProcedure`, `FAQPage`, `BreadcrumbList`
- Auto-generated `sitemap.xml`, `robots.txt` and PWA `manifest`
- Accessible: skip link, semantic landmarks, focus styles, keyboard-friendly menus,
  reduced-motion support, labelled forms

---

## 🚀 Getting started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
# open http://localhost:3000

# 3. Production build
npm run build
npm run start
```

Requires Node.js 18.18+ (Node 20 LTS recommended).

---

## 📁 Project structure

```
fletcher-physiotherapy/
├─ app/
│  ├─ layout.tsx            # Root layout, fonts, global metadata, business schema
│  ├─ page.tsx              # Home
│  ├─ globals.css           # Tailwind + design tokens
│  ├─ sitemap.ts            # sitemap.xml
│  ├─ robots.ts             # robots.txt
│  ├─ manifest.ts           # PWA manifest
│  ├─ not-found.tsx         # 404
│  └─ <route>/page.tsx      # one folder per page
├─ components/              # Header, Footer, Hero, ServiceCard, forms, etc.
├─ lib/site.ts              # Single source of truth: business info, services, team, FAQs
├─ public/
│  ├─ team/                 # Team photos (replace placeholders)
│  ├─ images/               # OG image + logo
│  └─ favicon.svg
├─ tailwind.config.ts
└─ next.config.mjs
```

---

## ✏️ Customising content

Almost everything lives in **`lib/site.ts`** — phone, email, service areas, services,
team bios, FAQs, locations and testimonials. Edit there and it updates site-wide.

### Replace the team photos
Drop real images into `public/team/`, keeping these exact filenames:

- `public/team/daniel-lee.jpg`
- `public/team/christine-nguyen.jpg`

Portrait orientation (~4:5, e.g. 800×1000px) looks best. The current files are
generated placeholders.

### Replace the OG / social share image
Swap `public/images/og-default.png` (1200×630px).

---

## 📨 Wiring up the forms

The Contact and Referral forms (`components/ContactForm.tsx`,
`components/ReferralForm.tsx`) currently show a success state on submit (no backend).
To deliver enquiries, connect one of:

- **Formspree / Getform / Web3Forms** — set the form `action` to your endpoint, or
- A **Next.js Route Handler** (`app/api/contact/route.ts`) that emails via Resend,
  SendGrid or Nodemailer.

Look for the `onSubmit` handler comment in each form component.

---

## 🗺️ Maps

The Locations page uses styled map **placeholders**. To show live maps, replace each
placeholder block in `app/locations/page.tsx` with a Google Maps embed:

```tsx
<iframe
  src="https://www.google.com/maps/embed?pb=..."
  title="Newcastle service area"
  loading="lazy"
  className="h-full min-h-[18rem] w-full rounded-3xl border-0"
  referrerPolicy="no-referrer-when-downgrade"
/>
```

---

## 🔍 SEO checklist after launch

1. Update `site.url` in `lib/site.ts` if the domain differs from
   `https://fletcherphysiotherapy.com.au`.
2. Submit `https://yourdomain/sitemap.xml` to Google Search Console.
3. Create / claim the **Google Business Profile** and match the NAP (name, address, phone).
4. Replace placeholder social links in `lib/site.ts` (`site.social`).

Primary target keywords are already woven into titles, headings and copy:
*home visit physiotherapy Newcastle, mobile physiotherapy Newcastle, NDIS physiotherapy
Newcastle, home care package physiotherapy Newcastle, support at home physiotherapy
Newcastle, physiotherapist Newcastle, mobile physio Lake Macquarie, mobile physio
Central Coast.*

---

## ▲ Deploy to Vercel

1. Push this folder to a GitHub/GitLab repo.
2. In [Vercel](https://vercel.com), **Add New → Project** and import the repo.
3. Framework preset auto-detects **Next.js** — no extra config needed.
4. Click **Deploy**.
5. Add your custom domain (`fletcherphysiotherapy.com.au`) under
   **Project → Settings → Domains**.

Or via CLI:

```bash
npm i -g vercel
vercel          # preview
vercel --prod   # production
```

---

## ♿ Accessibility & performance notes

- System + Google fonts loaded with `display: swap`
- `next/image` for optimised, lazy-loaded team photos
- Colour palette chosen for readable contrast on navy/white/beige
- Honors `prefers-reduced-motion`
- Run [Lighthouse](https://developer.chrome.com/docs/lighthouse) after deploy to confirm scores.

---

© Fletcher Physiotherapy. Content is general information only and not a substitute for
individual physiotherapy or medical advice.
