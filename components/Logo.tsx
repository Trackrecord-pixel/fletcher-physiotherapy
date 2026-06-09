import Link from "next/link";
import { site } from "@/lib/site";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-3"
      aria-label={`${site.name} home`}
    >
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-xl ${
          light ? "bg-white text-navy-900" : "bg-navy-800 text-white"
        } font-serif text-lg font-semibold shadow-card transition-transform group-hover:scale-105`}
      >
        F
      </span>
      <span className="leading-tight">
        <span
          className={`block font-serif text-lg font-semibold ${
            light ? "text-white" : "text-navy-900"
          }`}
        >
          Fletcher
        </span>
        <span
          className={`block text-[0.7rem] font-semibold uppercase tracking-[0.22em] ${
            light ? "text-beige-200" : "text-navy-500"
          }`}
        >
          Physiotherapy
        </span>
      </span>
    </Link>
  );
}
