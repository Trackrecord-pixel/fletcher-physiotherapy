"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import Icon from "./Icon";
import { primaryNav, servicesNav, site } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-card backdrop-blur"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-navy-800 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      {/* Top utility bar */}
      <div className="hidden border-b border-navy-100 bg-navy-800 text-white lg:block">
        <div className="container-px flex h-10 items-center justify-between text-xs">
          <p className="font-medium tracking-wide">
            Home Visit Physiotherapy · Newcastle · Lake Macquarie · Central Coast
          </p>
          <div className="flex items-center gap-5">
            <a href={site.phoneHref} className="inline-flex items-center gap-1.5 hover:text-beige-200">
              <Icon name="phone" className="h-3.5 w-3.5" /> {site.phone}
            </a>
            <a href={site.emailHref} className="inline-flex items-center gap-1.5 hover:text-beige-200">
              <Icon name="mail" className="h-3.5 w-3.5" /> {site.email}
            </a>
          </div>
        </div>
      </div>

      <nav className="container-px flex h-20 items-center justify-between py-3" aria-label="Primary">
        <Logo />

        <div className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((link) =>
            link.label === "Services" ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={link.href}
                  aria-haspopup="true"
                  aria-expanded={servicesOpen}
                  className={`inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-navy-900"
                      : "text-navy-600 hover:text-navy-900"
                  }`}
                >
                  {link.label}
                  <Icon name="chevron" className="h-3.5 w-3.5" />
                </Link>
                {servicesOpen && (
                  <div className="absolute left-0 top-full w-72 pt-2">
                    <div className="rounded-2xl border border-navy-100 bg-white p-2 shadow-card-hover">
                      {servicesNav.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="block rounded-xl px-4 py-2.5 text-sm font-medium text-navy-700 transition-colors hover:bg-beige-100 hover:text-navy-900"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-navy-900"
                    : "text-navy-600 hover:text-navy-900"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={site.phoneHref} className="btn-secondary">
            <Icon name="phone" className="h-4 w-4" /> Call
          </a>
          <Link href={site.bookingUrl} className="btn-primary">
            Book Online
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-navy-100 text-navy-800 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-navy-100 bg-white lg:hidden">
          <div className="container-px space-y-1 py-4">
            {primaryNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block rounded-xl px-4 py-3 text-base font-medium ${
                  isActive(link.href)
                    ? "bg-beige-100 text-navy-900"
                    : "text-navy-700 hover:bg-navy-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 rounded-xl bg-sand p-2">
              <p className="px-2 py-1 text-xs font-semibold uppercase tracking-widest text-navy-500">
                Services
              </p>
              {servicesNav.slice(0, 5).map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="block rounded-lg px-4 py-2.5 text-sm font-medium text-navy-700 hover:bg-white"
                >
                  {s.label}
                </Link>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3 pt-3">
              <a href={site.phoneHref} className="btn-secondary w-full">
                <Icon name="phone" className="h-4 w-4" /> Call
              </a>
              <Link href={site.bookingUrl} className="btn-primary w-full">
                Book Online
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
