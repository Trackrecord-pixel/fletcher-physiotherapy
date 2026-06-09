import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import { BreadcrumbSchema } from "@/components/StructuredData";
import { locations, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service Areas | Newcastle, Lake Macquarie & Central Coast",
  description:
    "Fletcher Physiotherapy provides home visit physiotherapy across Newcastle, Lake Macquarie and the Central Coast. See the suburbs we service and book a mobile physio visit today.",
  alternates: { canonical: "/locations" },
};

export default function LocationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Service Locations"
        title="Home visit physiotherapy across Newcastle, Lake Macquarie & the Central Coast"
        intro="Wherever you are in our service regions, we bring professional physiotherapy to your door. Not sure if we reach your suburb? Just ask."
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "Locations", href: "/locations" },
        ]}
      />

      <section className="section-py bg-white">
        <div className="container-px space-y-10">
          {locations.map((loc, i) => (
            <Reveal key={loc.name} delay={i * 60}>
              <div className="grid gap-6 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <div className="card h-full">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-800 text-white">
                      <Icon name="pin" className="h-6 w-6" />
                    </span>
                    <h2 className="mt-5 text-2xl text-navy-900">{loc.name}</h2>
                    <p className="mt-2 text-navy-600">{loc.blurb}</p>
                    <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-navy-500">
                      Suburbs we service
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {loc.suburbs.map((s) => (
                        <li
                          key={s}
                          className="rounded-full bg-beige-100 px-3 py-1.5 text-xs font-medium text-navy-700"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" className="btn-primary mt-6">
                      Book in {loc.name} <Icon name="arrow" className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
                <div className="lg:col-span-7">
                  {/* Map placeholder — replace with an embedded Google Map iframe (see README) */}
                  <div
                    className="flex h-full min-h-[18rem] items-center justify-center rounded-3xl border border-dashed border-navy-200 bg-sand text-center"
                    role="img"
                    aria-label={`Map of the ${loc.name} service area`}
                  >
                    <div className="px-6">
                      <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-navy-700 shadow-card">
                        <Icon name="pin" className="h-7 w-7" />
                      </span>
                      <p className="mt-4 font-serif text-xl text-navy-900">
                        {loc.name} service area
                      </p>
                      <p className="mt-1 text-sm text-navy-500">
                        Interactive map placeholder
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-sand">
        <div className="container-px py-12 text-center">
          <p className="text-navy-700">
            Not sure if we cover your suburb? Call{" "}
            <a href={site.phoneHref} className="font-semibold text-navy-900 underline">
              {site.phone}
            </a>{" "}
            and we&rsquo;ll let you know.
          </p>
        </div>
      </section>

      <CTASection />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Locations", href: "/locations" },
        ]}
      />
    </>
  );
}
