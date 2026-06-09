import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import FeatureList from "@/components/FeatureList";
import { BreadcrumbSchema } from "@/components/StructuredData";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Physiotherapy Services | Home Visits Newcastle & Central Coast",
  description:
    "Explore Fletcher Physiotherapy services: home visit physiotherapy, NDIS, Support at Home, chronic pain management, falls prevention, post-hospital rehabilitation, balance training and strength & mobility programs.",
  alternates: { canonical: "/services" },
};

const detailed = [
  {
    id: "post-hospital-rehabilitation",
    title: "Post Hospital Rehabilitation",
    text: "Returning home after surgery, illness or a hospital stay is a vulnerable time. We provide structured, supported rehabilitation in your home to help you recover safely, regain strength and reduce the risk of readmission.",
    points: ["Post-surgical recovery", "Reconditioning after illness", "Safe return to daily activities", "Coordination with your care team"],
  },
  {
    id: "musculoskeletal-physiotherapy",
    title: "Musculoskeletal Physiotherapy",
    text: "Assessment and hands-on treatment for joint, muscle, back and neck pain, combined with practical exercise to restore movement and function.",
    points: ["Back & neck pain", "Joint & muscle injuries", "Manual therapy", "Tailored exercise programs"],
  },
  {
    id: "balance-training",
    title: "Balance Training",
    text: "Targeted programs to improve stability, coordination and confidence on your feet — practised in the spaces where you actually move each day.",
    points: ["Balance assessment", "Vestibular & stability work", "Confidence building", "Home environment practice"],
  },
  {
    id: "strength-mobility-programs",
    title: "Strength & Mobility Programs",
    text: "Personalised strengthening and mobility plans designed to keep you active, independent and moving well for the long term.",
    points: ["Progressive strengthening", "Mobility & flexibility", "Functional movement", "Ongoing progress reviews"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Physiotherapy services delivered in your home"
        intro="Comprehensive, evidence-based physiotherapy for older adults, NDIS participants, Support at Home clients and private patients — all delivered where you live."
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
        ]}
      />

      <section className="section-py bg-white">
        <div className="container-px">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 70}>
                <ServiceCard {...s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-sand">
        <div className="container-px space-y-8">
          {detailed.map((d) => (
            <Reveal key={d.id}>
              <div id={d.id} className="card scroll-mt-28 grid gap-8 lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <h2 className="text-2xl text-navy-900">{d.title}</h2>
                  <p className="mt-3 text-navy-600">{d.text}</p>
                </div>
                <div className="lg:col-span-5">
                  <FeatureList columns={1} items={d.points} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
        ]}
      />
    </>
  );
}
