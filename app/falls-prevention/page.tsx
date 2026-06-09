import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Falls Prevention Physiotherapy | Newcastle Home Visits",
  description:
    "Falls prevention and balance training physiotherapy at home in Newcastle, Lake Macquarie and the Central Coast. Balance assessment, home safety review and tailored exercise to reduce falls risk and build confidence.",
  alternates: { canonical: "/falls-prevention" },
};

export default function Page() {
  return (
    <ServiceDetail
      slug="falls-prevention"
      eyebrow="Falls Prevention"
      title="Stay steady, confident and safe on your feet"
      intro="Falls prevention physiotherapy delivered in your home across Newcastle, Lake Macquarie and the Central Coast. Balance assessment, home safety review and tailored exercise to reduce falls risk and restore confidence."
      lead={[
        "A single fall can dramatically change someone's independence and confidence. The good news is that falls are largely preventable — and the most effective programs combine strength, balance training and a review of the home environment, exactly what home visit physiotherapy is built to deliver.",
        "We start with a thorough balance and mobility assessment, then walk through your home to identify and address hazards and tricky spaces — stairs, rugs, bathrooms and lighting. From there we build a personalised exercise program that strengthens your legs, sharpens your balance and rebuilds the confidence to move freely.",
        "Because we train you in your own home, the improvements translate directly into safer everyday movement where it counts.",
      ]}
      benefitsHeading="What's included"
      benefits={[
        "Comprehensive balance assessment",
        "Home safety & hazard review",
        "Strength & balance exercise program",
        "Confidence building",
        "Mobility & gait training",
        "Family & carer guidance",
      ]}
      process={[
        { step: "1", title: "Assess", text: "We assess your balance, strength and mobility, and review your home for hazards." },
        { step: "2", title: "Strengthen", text: "A tailored program builds the strength and balance that keep you steady." },
        { step: "3", title: "Sustain", text: "We progress your program and embed safe habits for lasting confidence." },
      ]}
      who={[
        { icon: "user", title: "Older Adults", text: "Reduce falls risk and stay confidently independent at home." },
        { icon: "balance", title: "Balance Concerns", text: "Address unsteadiness, dizziness and near-falls before they become falls." },
        { icon: "recovery", title: "After a Fall", text: "Rebuild strength and confidence following a recent fall." },
        { icon: "heart", title: "Home Care Clients", text: "Falls prevention as part of your Home Care Package or Support at Home plan." },
        { icon: "shield", title: "NDIS Participants", text: "Balance and safety goals supported within your NDIS plan." },
        { icon: "home", title: "Home Safety", text: "Practical changes to make your living spaces safer." },
      ]}
      ctaTitle="Reduce falls risk and build lasting confidence"
    />
  );
}
