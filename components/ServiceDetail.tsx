import Link from "next/link";
import PageHero from "./PageHero";
import SectionHeading from "./SectionHeading";
import Icon, { type IconName } from "./Icon";
import FeatureList from "./FeatureList";
import CTASection from "./CTASection";
import Reveal from "./Reveal";
import { ServiceSchema, BreadcrumbSchema } from "./StructuredData";

export type ServiceDetailProps = {
  slug: string;
  eyebrow: string;
  title: string;
  intro: string;
  lead: string[];
  benefits: string[];
  benefitsHeading?: string;
  who: { icon: string; title: string; text: string }[];
  process?: { step: string; title: string; text: string }[];
  ctaTitle?: string;
  ctaText?: string;
  extraCta?: { label: string; href: string };
};

export default function ServiceDetail({
  slug,
  eyebrow,
  title,
  intro,
  lead,
  benefits,
  benefitsHeading = "What's included",
  who,
  process,
  ctaTitle,
  ctaText,
  extraCta,
}: ServiceDetailProps) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        intro={intro}
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: eyebrow, href: `/${slug}` },
        ]}
      />

      <section className="section-py bg-white">
        <div className="container-px grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 prose-navy">
            <div className="space-y-4 text-navy-700">
              {lead.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            {extraCta && (
              <Link href={extraCta.href} className="btn-primary mt-6">
                {extraCta.label} <Icon name="arrow" className="h-4 w-4" />
              </Link>
            )}
          </div>
          <div className="lg:col-span-5">
            <div className="card sticky top-28 bg-sand">
              <h2 className="text-xl text-navy-900">{benefitsHeading}</h2>
              <div className="mt-5">
                <FeatureList columns={1} items={benefits} />
              </div>
              <Link href="/contact" className="btn-primary mt-7 w-full">
                Book Online <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {process && (
        <section className="section-py bg-navy-900">
          <div className="container-px">
            <SectionHeading
              light
              center
              eyebrow="How it works"
              title="Simple, supported and centred on you"
            />
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {process.map((p, i) => (
                <Reveal key={p.step} delay={i * 90}>
                  <div className="rounded-2xl border border-navy-700 bg-navy-800 p-7">
                    <span className="font-serif text-3xl font-semibold text-beige-300">
                      {p.step}
                    </span>
                    <h3 className="mt-3 text-lg text-white">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-100">
                      {p.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-py bg-sand">
        <div className="container-px">
          <SectionHeading
            center
            eyebrow="Who we help"
            title="Designed for your situation"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {who.map((w, i) => (
              <Reveal key={w.title} delay={(i % 3) * 80}>
                <div className="card card-hover h-full">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-beige-100 text-navy-800">
                    <Icon name={w.icon as IconName} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg text-navy-900">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600">
                    {w.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection title={ctaTitle} text={ctaText} />
      <ServiceSchema name={title} description={intro} slug={slug} />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: eyebrow, href: `/${slug}` },
        ]}
      />
    </>
  );
}
