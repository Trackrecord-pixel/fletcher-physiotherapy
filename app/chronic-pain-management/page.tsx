import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Chronic Pain Management Physiotherapy | Newcastle Home Visits",
  description:
    "Chronic pain management physiotherapy at home in Newcastle, Lake Macquarie and the Central Coast. Master's-qualified, evidence-based care that reduces fear of movement and helps you return to meaningful activity.",
  alternates: { canonical: "/chronic-pain-management" },
};

export default function Page() {
  return (
    <ServiceDetail
      slug="chronic-pain-management"
      eyebrow="Chronic Pain Management"
      title="Move with confidence and reclaim what matters"
      intro="Compassionate, evidence-based chronic pain physiotherapy delivered at home. Led by a Master's-qualified pain management clinician, we help reduce fear of movement and return you to meaningful daily activity."
      lead={[
        "Persistent pain is complex, and it affects far more than the body — it can shrink your world, erode confidence and make movement feel frightening. Our approach combines the latest understanding of pain science with hands-on treatment and simple, practical strategies you can use every day.",
        "Our director, Daniel Lee, holds a Master's degree in Pain Management from the University of Sydney. Care centres on understanding your individual experience and goals, gently rebuilding your capacity for movement and reducing the fear that often keeps pain cycles going.",
        "We focus on long-term outcomes — not quick fixes — helping you return to the activities, relationships and routines that matter most to you.",
      ]}
      benefitsHeading="Our approach to pain"
      benefits={[
        "Understanding your pain experience",
        "Reducing fear of movement",
        "Hands-on & exercise-based care",
        "Practical day-to-day strategies",
        "Graded return to activity",
        "Long-term, lasting outcomes",
      ]}
      process={[
        { step: "1", title: "Understand", text: "We listen to your story and assess how pain affects your movement and life." },
        { step: "2", title: "Rebuild", text: "Gentle, graded movement and treatment to restore confidence and capacity." },
        { step: "3", title: "Return", text: "Practical strategies to get you back to meaningful daily activities." },
      ]}
      who={[
        { icon: "pulse", title: "Persistent Pain", text: "Support for long-standing back, neck, joint and widespread pain." },
        { icon: "recovery", title: "Post-Injury Pain", text: "Move beyond pain that lingers after an injury or surgery." },
        { icon: "user", title: "Fear of Movement", text: "Rebuild trust in your body and confidence to move again." },
        { icon: "shield", title: "NDIS Participants", text: "Pain management aligned to your NDIS goals, delivered at home." },
        { icon: "heart", title: "Older Adults", text: "Gentle, tailored care that respects your pace and priorities." },
        { icon: "strength", title: "Return to Activity", text: "Graded programs to get you back to the things you love." },
      ]}
      ctaTitle="Take the first step toward moving with confidence"
    />
  );
}
