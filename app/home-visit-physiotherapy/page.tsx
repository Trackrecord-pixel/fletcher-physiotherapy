import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Home Visit Physiotherapy Newcastle | Mobile Physio",
  description:
    "Home visit physiotherapy in Newcastle, Lake Macquarie and the Central Coast. We come to you — professional mobile physiotherapy in the comfort and safety of your own home.",
  alternates: { canonical: "/home-visit-physiotherapy" },
};

export default function Page() {
  return (
    <ServiceDetail
      slug="home-visit-physiotherapy"
      eyebrow="Home Visit Physiotherapy"
      title="Professional physiotherapy that comes to you"
      intro="No travel, no parking, no waiting rooms. Our mobile physiotherapists deliver expert care in the comfort and safety of your own home across Newcastle, Lake Macquarie and the Central Coast."
      lead={[
        "Home visit physiotherapy removes the biggest barriers to consistent care — getting to and from a clinic. For older adults, people living with disability, and anyone recovering from surgery or illness, travel can be exhausting, painful or simply not possible. We solve that by bringing the physiotherapy to you.",
        "Being treated in your own environment is also clinically powerful. We assess and train you in the exact spaces where you face challenges — your hallway, your stairs, your bathroom, your favourite chair. That means your program is genuinely relevant to your daily life, and the gains you make translate directly into real-world independence.",
        "We bring the equipment we need, work around your routine, and keep families, carers and referrers informed every step of the way.",
      ]}
      benefits={[
        "Care in the comfort of your home",
        "No travel, parking or waiting rooms",
        "Assessment in your real environment",
        "Equipment brought to you",
        "Flexible appointment times",
        "Clear updates for family & carers",
      ]}
      process={[
        { step: "1", title: "Get in touch", text: "Book online or call us. We discuss your needs, goals and funding — NDIS, Home Care Package or private." },
        { step: "2", title: "Home assessment", text: "We visit you at home for a thorough functional assessment and build a personalised plan together." },
        { step: "3", title: "Ongoing care", text: "We deliver hands-on treatment and exercise, reviewing progress and adjusting your program over time." },
      ]}
      who={[
        { icon: "user", title: "Older Adults", text: "Stay strong, mobile and confident without the stress of travelling to a clinic." },
        { icon: "shield", title: "NDIS Participants", text: "Goal-focused physiotherapy delivered at home and aligned to your plan." },
        { icon: "heart", title: "Home Care Clients", text: "Support at Home and Home Care Package physiotherapy to help you stay safely at home." },
        { icon: "recovery", title: "Post-Hospital", text: "Recover safely after surgery or illness with supported, structured rehabilitation." },
        { icon: "pulse", title: "Chronic Pain", text: "Manage persistent pain with strategies that fit into your everyday life." },
        { icon: "balance", title: "Falls Risk", text: "Reduce falls risk with balance training and a home safety review." },
      ]}
      ctaTitle="Ready for physiotherapy in the comfort of your home?"
    />
  );
}
