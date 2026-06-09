import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Support at Home Physiotherapy Newcastle | Home Care Package Physio",
  description:
    "Support at Home and Home Care Package physiotherapy in Newcastle, Lake Macquarie and the Central Coast. We come to you so older adults can stay strong, mobile and safely independent at home.",
  alternates: { canonical: "/support-at-home-physiotherapy" },
};

export default function Page() {
  return (
    <ServiceDetail
      slug="support-at-home-physiotherapy"
      eyebrow="Support at Home Physiotherapy"
      title="Helping older adults stay safely and confidently at home"
      intro="We come to you so you can receive physiotherapy in the comfort and safety of your own home. Supporting Home Care Package and Support at Home clients to maintain independence, mobility and strength."
      lead={[
        "Staying in your own home is one of the most important things for quality of life as we age. Our Support at Home physiotherapy is built entirely around that goal — helping you remain mobile, strong, steady on your feet and safely independent in the home you love.",
        "We work alongside your Home Care Package or Support at Home funding and care plan, coordinating with your provider and family. Your program might include strength and balance work, falls prevention, mobility training, pain management and practical advice on moving safely around your home.",
        "We come to you so you can receive physiotherapy in the comfort and safety of your own home — no stressful travel, and care that fits naturally into your daily routine.",
      ]}
      benefitsHeading="Focused on independence"
      benefits={[
        "Maintaining independence at home",
        "Mobility & movement",
        "Falls prevention",
        "Strength building",
        "Balance & confidence",
        "Remaining safely at home",
      ]}
      process={[
        { step: "1", title: "Maintain mobility", text: "Keep moving well with gentle, progressive programs designed for your ability." },
        { step: "2", title: "Build strength & balance", text: "Reduce falls risk and grow confidence with targeted strength and balance training." },
        { step: "3", title: "Stay safely at home", text: "Practical strategies and home safety advice to help you remain independent." },
      ]}
      who={[
        { icon: "user", title: "Older Adults", text: "Support to stay active, capable and confident in everyday life." },
        { icon: "heart", title: "Home Care Packages", text: "Physiotherapy coordinated with your package and provider." },
        { icon: "home", title: "Support at Home", text: "Home-based therapy aligned to your Support at Home plan." },
        { icon: "balance", title: "Falls Prevention", text: "Lower falls risk with balance work and home safety review." },
        { icon: "strength", title: "Strength & Mobility", text: "Build the strength needed for stairs, chairs and daily tasks." },
        { icon: "users", title: "Families & Carers", text: "Guidance and reassurance for the people supporting you." },
      ]}
      ctaTitle="Help your loved one stay safely at home"
      ctaText="Book a home visit or speak with our team about Home Care Package and Support at Home physiotherapy."
    />
  );
}
