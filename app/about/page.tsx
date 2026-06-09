import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Icon from "@/components/Icon";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "About Us | Home Visit Physiotherapy",
  description:
    "Fletcher Physiotherapy helps people remain independent, mobile and confident in their own homes across Newcastle, Lake Macquarie and the Central Coast through individualised, patient-centred care.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: "user",
    title: "Individualised Care",
    text: "No two people are the same. Every assessment and program is tailored to your body, your home and your goals.",
  },
  {
    icon: "balance",
    title: "Functional Goals",
    text: "We focus on the activities that matter to you — getting out of a chair, walking to the letterbox, playing with grandchildren.",
  },
  {
    icon: "recovery",
    title: "Long-Term Outcomes",
    text: "We build lasting strength, confidence and independence rather than short-term fixes.",
  },
  {
    icon: "heart",
    title: "Patient-Centred Approach",
    text: "You are a partner in your care. We listen first, then plan treatment around your life and priorities.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Fletcher Physiotherapy"
        title="Supporting independence through home-based physiotherapy"
        intro="We are committed to helping people remain independent, mobile and confident within their own homes and communities."
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
      />

      <section className="section-py bg-white">
        <div className="container-px grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 prose-navy">
            <SectionHeading
              eyebrow="Our Story"
              title="Physiotherapy built around your life, not a clinic"
            />
            <div className="mt-6 space-y-4 text-navy-700">
              <p>
                Fletcher Physiotherapy was founded on a simple belief: people heal
                better, move better and feel better in the comfort of their own
                home. Too many older adults and people living with disability or
                chronic conditions struggle with travel, parking and busy clinic
                waiting rooms — barriers that can get in the way of the care they
                need.
              </p>
              <p>
                So we changed the model. We come to you. Our physiotherapists
                deliver expert, hands-on care in your living room, bedroom or
                backyard — wherever you feel most comfortable and wherever your
                everyday challenges actually happen. Practising in your real
                environment means your program is genuinely relevant to your life.
              </p>
              <p>
                We work closely with NDIS participants, Home Care Package and
                Support at Home clients, families, support coordinators, case
                managers and GPs. Whether you are recovering from surgery, managing
                chronic pain, reducing falls risk or rebuilding strength, our goal
                is the same — to help you stay independent, mobile and confident for
                the long term.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="card sticky top-28 bg-sand">
              <h3 className="text-xl text-navy-900">What we stand for</h3>
              <ul className="mt-5 space-y-4">
                {[
                  "We come to you — care in the comfort of home",
                  "Individualised, evidence-based treatment",
                  "Clear communication with families & referrers",
                  "A focus on dignity, safety and independence",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-navy-800 text-white">
                      <Icon name="check" className="h-4 w-4" />
                    </span>
                    <span className="text-sm text-navy-700">{t}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-primary mt-7 w-full">
                Book Online <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-py bg-sand">
        <div className="container-px">
          <SectionHeading
            center
            eyebrow="Our Values"
            title="The principles behind every visit"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 4) * 80}>
                <div className="card card-hover h-full">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-800 text-white">
                    <Icon name={v.icon as never} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg text-navy-900">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600">
                    {v.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
      />
    </>
  );
}
