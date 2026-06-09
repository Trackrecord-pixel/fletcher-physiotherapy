import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import { BreadcrumbSchema } from "@/components/StructuredData";
import { team } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Team | Newcastle Physiotherapists",
  description:
    "Meet the Fletcher Physiotherapy team — experienced, caring physiotherapists specialising in home visits, pain management, NDIS, Support at Home and geriatric rehabilitation across Newcastle, Lake Macquarie and the Central Coast.",
  alternates: { canonical: "/our-team" },
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="Experienced physiotherapists who care about your outcomes"
        intro="Our clinicians combine clinical expertise with genuine compassion, working with you toward long-term independence and confidence."
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "Our Team", href: "/our-team" },
        ]}
      />

      <section className="section-py bg-white">
        <div className="container-px space-y-16">
          {team.map((m, idx) => (
            <Reveal key={m.slug}>
              <article
                id={m.slug}
                className="grid scroll-mt-28 gap-8 lg:grid-cols-12 lg:gap-12"
              >
                <div className={`lg:col-span-5 ${idx % 2 ? "lg:order-2" : ""}`}>
                  <div className="relative overflow-hidden rounded-3xl border border-navy-100 bg-sand shadow-card">
                    <div className="relative aspect-[4/5] w-full">
                      <Image
                        src={m.photo}
                        alt={`${m.name} — ${m.role} at Fletcher Physiotherapy`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className={`lg:col-span-7 ${idx % 2 ? "lg:order-1" : ""}`}>
                  <h2 className="text-3xl text-navy-900">{m.name}</h2>
                  <p className="mt-1 text-base font-semibold text-navy-500">
                    {m.role}
                  </p>
                  <p className="mt-2 inline-flex items-center gap-2 text-sm text-navy-600">
                    <Icon name="doc" className="h-4 w-4 text-navy-400" />
                    {m.credentials}
                  </p>
                  <div className="mt-5 space-y-4 text-navy-700">
                    {m.bio.map((p, i) => (
                      <p key={i} className="leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>

                  {m.languages && (
                    <p className="mt-4 text-sm text-navy-600">
                      <span className="font-semibold text-navy-800">Languages:</span>{" "}
                      {m.languages}
                    </p>
                  )}

                  <div className="mt-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-navy-500">
                      Areas of interest
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {m.interests.map((t) => (
                        <li
                          key={t}
                          className="rounded-full bg-beige-100 px-3.5 py-1.5 text-xs font-medium text-navy-700"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection title="Work with a team that comes to you" />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Our Team", href: "/our-team" },
        ]}
      />
    </>
  );
}
