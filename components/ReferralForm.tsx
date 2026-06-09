"use client";

import { useState, type FormEvent } from "react";
import Icon from "./Icon";
import { site } from "@/lib/site";

const referrerTypes = [
  "GP",
  "Support Coordinator",
  "Case Manager",
  "Home Care Provider",
  "Family Member",
  "Other",
];

const funding = [
  "NDIS – Self-managed",
  "NDIS – Plan-managed",
  "NDIS – Agency-managed",
  "Home Care Package",
  "Support at Home",
  "Private",
  "Chronic Disease Management (EPC)",
  "Not sure",
];

export default function ReferralForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="card text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-beige-100 text-navy-800">
          <Icon name="check" className="h-7 w-7" />
        </span>
        <h3 className="mt-5 text-2xl">Referral received</h3>
        <p className="mt-3 text-navy-600">
          Thank you for your referral. We will contact the participant and confirm
          next steps. For anything urgent, call{" "}
          <a href={site.phoneHref} className="font-semibold text-navy-800 underline">
            {site.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card space-y-6" noValidate>
      <fieldset className="space-y-5">
        <legend className="text-sm font-semibold uppercase tracking-widest text-navy-500">
          Referrer details
        </legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="ref-name" label="Your name" required autoComplete="name" />
          <div>
            <label htmlFor="ref-type" className="mb-1.5 block text-sm font-medium text-navy-800">
              I am a <span className="text-navy-400">*</span>
            </label>
            <select
              id="ref-type"
              name="referrerType"
              required
              className="w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-800 focus:border-navy-500 focus:ring-2 focus:ring-navy-200"
            >
              {referrerTypes.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="ref-org" label="Organisation (optional)" />
          <Field id="ref-email" label="Your email" type="email" required autoComplete="email" />
        </div>
        <Field id="ref-phone" label="Your phone" type="tel" required autoComplete="tel" />
      </fieldset>

      <fieldset className="space-y-5 border-t border-navy-100 pt-6">
        <legend className="text-sm font-semibold uppercase tracking-widest text-navy-500">
          Participant details
        </legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="p-name" label="Participant name" required />
          <Field id="p-phone" label="Participant phone" type="tel" />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="p-suburb" label="Participant suburb" />
          <div>
            <label htmlFor="funding" className="mb-1.5 block text-sm font-medium text-navy-800">
              Funding type
            </label>
            <select
              id="funding"
              name="funding"
              className="w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-800 focus:border-navy-500 focus:ring-2 focus:ring-navy-200"
            >
              {funding.map((f) => (
                <option key={f}>{f}</option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="reason" className="mb-1.5 block text-sm font-medium text-navy-800">
            Reason for referral / goals
          </label>
          <textarea
            id="reason"
            name="reason"
            rows={4}
            placeholder="Mobility, falls risk, pain, post-hospital rehabilitation, NDIS goals, etc."
            className="w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-800 focus:border-navy-500 focus:ring-2 focus:ring-navy-200"
          />
        </div>
        <label className="flex items-start gap-3 text-sm text-navy-600">
          <input type="checkbox" required className="mt-1 h-4 w-4 rounded border-navy-300 text-navy-800 focus:ring-navy-500" />
          <span>
            I have the participant&rsquo;s consent to share these details with
            Fletcher Physiotherapy.
          </span>
        </label>
      </fieldset>

      <button type="submit" className="btn-primary w-full">
        Submit Referral <Icon name="arrow" className="h-4 w-4" />
      </button>
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
