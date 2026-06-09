import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import ReferralForm from "@/components/ReferralForm";
import Reveal from "@/components/Reveal";
import { BreadcrumbSchema } from "@/components/StructuredData";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Referrals | Refer to Home Visit Physiotherapy",
  description:
    "Refer a patient or participant to Fletcher Physiotherapy. We welcome referrals from GPs, support coordinators, case managers, home care providers and families across Newcastle, Lake Macquarie and the Central Coast.",
  alternates: { canonical: "/referrals" },
};

const referrers = [
  { icon: "doc", title: "GPs", text: "Refer patients for home-based physiotherapy, including Chronic Disease Management (EPC) plans. We provide clear assessment and progress reports." },
  { icon: "users", title: "Support Coordinators", text: "Connect NDIS participants with reliable, goal-focused physiotherapy and thorough documentation for plan reviews." },
  { icon: "user", title: "Case Managers", text: "Arrange physiotherapy for clients with confidence — we communicate clearly and deliver dependable care." },
  { icon: "heart", title: "Home Care Providers", text: "Refer Home Care Package and Support at Home clients for mobility, strength and falls prevention support." },
  { icon: "home", title: "Family Members", text: "Help a loved one stay safe and independent at home. We'll guide you through the whole process." },
];

export default function ReferralsPage() {
  return (
    <>
      <PageHero
        eyebrow="Referrals"
        title="Refer to Fletcher Physiotherapy"
        intro="We make referrals simple and fast. Whether you're a health professional, provider or family member, we'll handle the next steps and keep you informed."
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "Referrals", href: "/referrals" },
        ]}
      />

      <section className="section-py bg-white">
        <div className="container-px">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {referrers.map((r, i) => (
              <Reveal key={r.title} delay={(i % 3) * 70}>
                <div className="card card-hover h-full">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-beige-100 text-navy-800">
                    <Icon name={r.icon as never} className="h-6 w-6" />
                  </span>
                  <h2 className="mt-5 text-lg text-navy-900">{r.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600">
                    {r.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-sand">
        <div className="container-px grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">
              <Icon name="doc" className="h-4 w-4" /> Referral Form
            </span>
            <h2 className="mt-4 text-3xl text-navy-900">Send us a referral</h2>
            <p className="mt-4 text-navy-600">
              Complete the form and our team will contact the participant to
              arrange an initial home visit assessment. Prefer to talk first?
            </p>
            <div className="mt-6 space-y-3">
              <a href={site.phoneHref} className="flex items-center gap-3 text-navy-800 hover:text-navy-900">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-navy-800 shadow-card">
                  <Icon name="phone" className="h-5 w-5" />
                </span>
                <span className="font-semibold">{site.phone}</span>
              </a>
              <a href={site.emailHref} className="flex items-center gap-3 text-navy-800 hover:text-navy-900">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-navy-800 shadow-card">
                  <Icon name="mail" className="h-5 w-5" />
                </span>
                <span className="font-semibold">{site.email}</span>
              </a>
            </div>
          </div>
          <div className="lg:col-span-7">
            <ReferralForm />
          </div>
        </div>
      </section>

      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Referrals", href: "/referrals" },
        ]}
      />
    </>
  );
}
