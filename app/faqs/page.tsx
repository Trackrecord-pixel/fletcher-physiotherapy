import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import { FaqSchema, BreadcrumbSchema } from "@/components/StructuredData";
import { faqs, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQs | Home Visit, NDIS & Home Care Package Physiotherapy",
  description:
    "Frequently asked questions about Fletcher Physiotherapy — home visits, NDIS, Home Care Packages, Support at Home, GP referrals and our service areas across Newcastle, Lake Macquarie and the Central Coast.",
  alternates: { canonical: "/faqs" },
};

export default function FaqsPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title="Frequently asked questions"
        intro="Answers to the questions we hear most about home visits, funding and our service areas. Can't find what you need? Just get in touch."
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "FAQs", href: "/faqs" },
        ]}
      />

      <section className="section-py bg-white">
        <div className="container-px grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <FAQAccordion items={faqs} />
          </div>
          <div className="lg:col-span-5">
            <div className="card sticky top-28 bg-sand">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-800 text-white">
                <Icon name="phone" className="h-6 w-6" />
              </span>
              <h2 className="mt-5 text-xl text-navy-900">Still have questions?</h2>
              <p className="mt-2 text-sm text-navy-600">
                Our team is happy to talk through your situation, funding and goals
                — with no obligation.
              </p>
              <a href={site.phoneHref} className="btn-primary mt-6 w-full">
                <Icon name="phone" className="h-4 w-4" /> {site.phone}
              </a>
              <Link href="/contact" className="btn-secondary mt-3 w-full">
                Send an enquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <FaqSchema items={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "FAQs", href: "/faqs" },
        ]}
      />
    </>
  );
}
