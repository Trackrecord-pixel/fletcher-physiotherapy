import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import ContactForm from "@/components/ContactForm";
import { BreadcrumbSchema } from "@/components/StructuredData";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | Book Home Visit Physiotherapy",
  description:
    "Contact Fletcher Physiotherapy to book home visit physiotherapy in Newcastle, Lake Macquarie and the Central Coast. Call 0466 488 869 or send an enquiry online.",
  alternates: { canonical: "/contact" },
};

const details = [
  { icon: "phone", label: "Phone", value: site.phone, href: site.phoneHref },
  { icon: "mail", label: "Email", value: site.email, href: site.emailHref },
  { icon: "clock", label: "Hours", value: site.hours },
  { icon: "pin", label: "Service areas", value: "Newcastle · Lake Macquarie · Central Coast" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Book your home visit physiotherapy"
        intro="Ready to get started, or have a question about NDIS, Home Care Packages or what to expect? We'd love to hear from you."
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
      />

      <section className="section-py bg-white">
        <div className="container-px grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-2xl text-navy-900">Get in touch</h2>
            <p className="mt-3 text-navy-600">
              We come to you across Newcastle, Lake Macquarie and the Central
              Coast. Call us directly or send an enquiry and we&rsquo;ll respond
              promptly.
            </p>
            <ul className="mt-8 space-y-4">
              {details.map((d) => (
                <li key={d.label}>
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-beige-100 text-navy-800">
                      <Icon name={d.icon as never} className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-navy-500">
                        {d.label}
                      </p>
                      {d.href ? (
                        <a href={d.href} className="text-lg font-semibold text-navy-900 hover:underline">
                          {d.value}
                        </a>
                      ) : (
                        <p className="text-lg font-semibold text-navy-900">{d.value}</p>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl bg-navy-900 p-6 text-white">
              <p className="font-serif text-xl">Prefer to speak now?</p>
              <p className="mt-1 text-sm text-navy-100">
                Call our friendly team for immediate assistance.
              </p>
              <a href={site.phoneHref} className="btn-accent mt-4">
                <Icon name="phone" className="h-4 w-4" /> {site.phone}
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <h2 className="sr-only">Enquiry form</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
      />
    </>
  );
}
