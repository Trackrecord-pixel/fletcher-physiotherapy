"use client";

import { useState, type FormEvent } from "react";
import Icon from "./Icon";
import { site } from "@/lib/site";

const services = [
  "Home Visit Physiotherapy",
  "NDIS Physiotherapy",
  "Support at Home Physiotherapy",
  "Chronic Pain Management",
  "Falls Prevention",
  "Post Hospital Rehabilitation",
  "Other / Not sure",
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Demo handler — connect to your email service or form API (see README).
    setSent(true);
  };

  if (sent) {
    return (
      <div className="card text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-beige-100 text-navy-800">
          <Icon name="check" className="h-7 w-7" />
        </span>
        <h3 className="mt-5 text-2xl">Thank you</h3>
        <p className="mt-3 text-navy-600">
          Your enquiry has been received. Our team will be in touch shortly. For
          urgent matters please call{" "}
          <a href={site.phoneHref} className="font-semibold text-navy-800 underline">
            {site.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Full name" required autoComplete="name" />
        <Field id="phone" label="Phone" type="tel" required autoComplete="tel" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="email" label="Email" type="email" required autoComplete="email" />
        <Field id="suburb" label="Suburb" autoComplete="address-level2" />
      </div>
      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-navy-800">
          What can we help with?
        </label>
        <select
          id="service"
          name="service"
          className="w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-800 focus:border-navy-500 focus:ring-2 focus:ring-navy-200"
        >
          {services.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy-800">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us a little about your situation, goals or funding (NDIS, Home Care Package, private)."
          className="w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-800 focus:border-navy-500 focus:ring-2 focus:ring-navy-200"
        />
      </div>
      <button type="submit" className="btn-primary w-full">
        Send Enquiry <Icon name="arrow" className="h-4 w-4" />
      </button>
      <p className="text-center text-xs text-navy-400">
        We respect your privacy. Your details are only used to respond to your enquiry.
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  type = "text",
  required = false,
  autoComplete,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-navy-800">
        {label} {required && <span className="text-navy-400">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-800 placeholder:text-navy-300 focus:border-navy-500 focus:ring-2 focus:ring-navy-200"
      />
    </div>
  );
}
