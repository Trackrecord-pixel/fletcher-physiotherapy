import Link from "next/link";
import Icon from "./Icon";

export default function PageHero({
  eyebrow,
  title,
  intro,
  breadcrumb,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  breadcrumb?: { name: string; href: string }[];
}) {
  return (
    <section className="relative overflow-hidden border-b border-navy-100 bg-gradient-to-b from-sand to-white">
      <div
        className="pointer-events-none absolute right-0 top-0 h-80 w-80 translate-x-1/3 -translate-y-1/4 rounded-full bg-beige-100 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-px relative py-14 lg:py-20">
        {breadcrumb && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-navy-500">
              {breadcrumb.map((b, i) => (
                <li key={b.href} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden="true">/</span>}
                  {i < breadcrumb.length - 1 ? (
                    <Link href={b.href} className="hover:text-navy-800">
                      {b.name}
                    </Link>
                  ) : (
                    <span className="font-medium text-navy-700">{b.name}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <span className="eyebrow">
          <Icon name="home" className="h-4 w-4" /> {eyebrow}
        </span>
        <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-navy-900 sm:text-5xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-navy-600">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
