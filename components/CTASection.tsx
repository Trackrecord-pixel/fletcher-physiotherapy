import Link from "next/link";
import Icon from "./Icon";
import { site } from "@/lib/site";

export default function CTASection({
  title = "Ready to receive physiotherapy in the comfort of your home?",
  text = "Book online or contact our friendly team today. We service Newcastle, Lake Macquarie and the Central Coast.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-white">
      <div className="container-px pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-navy-900 px-7 py-14 text-center shadow-card-hover sm:px-12 lg:py-20">
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-navy-700/40 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-beige-300/10 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-2xl">
            <span className="eyebrow bg-navy-700 text-beige-100">We Come To You</span>
            <h2 className="mt-5 text-3xl text-white sm:text-4xl">{title}</h2>
            <p className="mt-4 text-lg text-navy-100">{text}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href={site.bookingUrl} className="btn-accent w-full sm:w-auto">
                Book Online <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <a href={site.phoneHref} className="btn-secondary w-full border-white/30 bg-transparent text-white hover:bg-white/10 sm:w-auto">
                <Icon name="phone" className="h-4 w-4" /> {site.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
