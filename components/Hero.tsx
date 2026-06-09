import Link from "next/link";
import Icon from "./Icon";
import { site } from "@/lib/site";

const stats = [
  { value: "100%", label: "Care in your home" },
  { value: "3", label: "Regions serviced" },
  { value: "NDIS", label: "Registered approach" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sand via-white to-white">
      <div
        className="pointer-events-none absolute right-0 top-0 h-[34rem] w-[34rem] translate-x-1/3 -translate-y-1/4 rounded-full bg-beige-100 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-px relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div className="animate-fade-up">
          <span className="eyebrow">
            <Icon name="home" className="h-4 w-4" /> {site.tagline} · Home Visit Physiotherapy
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.08] text-navy-900 sm:text-5xl lg:text-6xl">
            Professional Physiotherapy in the Comfort of Your Home
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-600">
            Specialising in home visit physiotherapy for NDIS, Support at Home,
            and private clients across Newcastle, Lake Macquarie and the Central
            Coast.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={site.bookingUrl} className="btn-primary">
              Book Online <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-serif text-2xl font-semibold text-navy-900 sm:text-3xl">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-navy-500">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative animate-fade-in">
          <div className="relative overflow-hidden rounded-[2rem] border border-navy-100 bg-white shadow-card-hover">
            <div className="aspect-[4/5] w-full bg-gradient-to-br from-navy-800 via-navy-700 to-navy-900">
              <div className="flex h-full flex-col items-center justify-center p-10 text-center text-white">
                <Icon name="home" className="h-16 w-16 text-beige-200" />
                <p className="mt-6 font-serif text-2xl">We Come To You</p>
                <p className="mt-2 max-w-xs text-sm text-navy-100">
                  Supporting independence through home-based physiotherapy.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-navy-100 bg-white p-5 shadow-card sm:block">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-beige-100 text-navy-800">
                <Icon name="shield" className="h-6 w-6" />
              </span>
              <div>
                <p className="text-sm font-semibold text-navy-900">NDIS & Support at Home</p>
                <p className="text-xs text-navy-500">Specialist physiotherapy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
