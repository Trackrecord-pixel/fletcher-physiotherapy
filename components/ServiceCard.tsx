import Link from "next/link";
import Icon, { type IconName } from "./Icon";

export default function ServiceCard({
  title,
  short,
  icon,
  href,
}: {
  title: string;
  short: string;
  icon: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="card card-hover group flex h-full flex-col focus-visible:ring-2 focus-visible:ring-navy-500"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-beige-100 text-navy-800 transition-colors group-hover:bg-navy-800 group-hover:text-white">
        <Icon name={icon as IconName} className="h-6 w-6" />
      </span>
      <h3 className="mt-5 text-xl text-navy-900">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-600">{short}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-800">
        Learn more
        <Icon
          name="arrow"
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
        />
      </span>
    </Link>
  );
}
