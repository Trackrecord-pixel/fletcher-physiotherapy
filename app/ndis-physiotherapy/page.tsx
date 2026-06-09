import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "NDIS Physiotherapy Newcastle | Home Visit NDIS Physio",
  description:
    "NDIS physiotherapy in Newcastle, Lake Macquarie and the Central Coast. Home visits for self-managed, plan-managed and agency-managed participants. Functional assessments, mobility, exercise, falls prevention and pain management.",
  alternates: { canonical: "/ndis-physiotherapy" },
};

export default function Page() {
  return (
    <ServiceDetail
      slug="ndis-physiotherapy"
      eyebrow="NDIS Physiotherapy"
      title="NDIS physiotherapy that supports your goals"
      intro="Home visit physiotherapy for NDIS participants across Newcastle, Lake Macquarie and the Central Coast. We support self-managed, plan-managed and agency-managed participants with functional, goal-focused care."
      lead={[
        "Every NDIS participant is different, and so is every plan. We take the time to understand your goals — whether that's walking further, moving more safely around your home, building strength, managing pain or taking part in the activities you enjoy — and we design physiotherapy that works toward them.",
        "Because we come to you, your therapy happens in the environment where your goals actually matter. We provide thorough functional assessments, clear documentation and reliable communication with your support coordinator, plan manager and broader support team.",
        "We work with all plan management types and are happy to discuss how physiotherapy can be funded under your plan.",
      ]}
      benefitsHeading="How we support NDIS goals"
      benefits={[
        "Functional assessments",
        "Mobility training",
        "Tailored exercise programs",
        "Falls prevention",
        "Pain management",
        "Clear reports for your plan",
      ]}
      process={[
        { step: "1", title: "Self-managed", text: "You manage your own funding. Contact us directly and we'll arrange your home visits and invoicing." },
        { step: "2", title: "Plan-managed", text: "We liaise with your plan manager for billing so you can focus on your therapy and goals." },
        { step: "3", title: "Agency-managed", text: "We work within NDIA processes to deliver and document your physiotherapy supports." },
      ]}
      who={[
        { icon: "balance", title: "Mobility & Movement", text: "Improve how you move and transfer around your home and community." },
        { icon: "strength", title: "Strength & Conditioning", text: "Build capacity with progressive, individualised exercise programs." },
        { icon: "pulse", title: "Pain Management", text: "Reduce the impact of pain on your daily activities and participation." },
        { icon: "shield", title: "Falls Prevention", text: "Lower falls risk through balance training and home safety review." },
        { icon: "recovery", title: "Functional Rehab", text: "Rebuild the skills and confidence needed for everyday tasks." },
        { icon: "doc", title: "Reports & Reviews", text: "Detailed documentation to support plan reviews and funding." },
      ]}
      extraCta={{ label: "Refer an NDIS Participant", href: "/referrals" }}
      ctaTitle="Refer an NDIS participant or book an assessment"
      ctaText="We make NDIS physiotherapy simple for participants, families and support coordinators across the region."
    />
  );
}
