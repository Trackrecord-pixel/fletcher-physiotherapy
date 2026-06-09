import Icon from "./Icon";
import { testimonials } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section className="section-py bg-sand">
      <div className="container-px">
        <SectionHeading
          center
          eyebrow="Trusted by families & coordinators"
          title="What our clients and referrers say"
          intro="We are proud to support older adults, families, support coordinators and case managers across the region."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={i * 100}>
              <figure className="card h-full">
                <div className="flex gap-1 text-beige-400" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Icon key={s} name="star" className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-navy-700">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 border-t border-navy-100 pt-4">
                  <p className="text-sm font-semibold text-navy-900">{t.author}</p>
                  <p className="text-xs text-navy-500">{t.detail}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
