export const site = {
  name: "Fletcher Physiotherapy",
  shortName: "Fletcher Physio",
  legalName: "Fletcher Physiotherapy",
  tagline: "We Come To You",
  description:
    "Professional home visit physiotherapy across Newcastle, Lake Macquarie and the Central Coast. Specialising in NDIS, Support at Home and Home Care Package physiotherapy for older adults, families and private clients.",
  url: "https://fletcherphysiotherapy.com.au",
  phone: "0466 488 869",
  phoneHref: "tel:+61466488869",
  email: "info@fletcherphysiotherapy.com.au",
  emailHref: "mailto:info@fletcherphysiotherapy.com.au",
  bookingUrl: "/contact",
  areasServed: ["Newcastle", "Lake Macquarie", "Central Coast"],
  region: "NSW",
  geo: { lat: -32.9283, lng: 151.7817 },
  hours: "Mon–Fri 8:00am – 6:00pm",
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
  },
} as const;

export type NavLink = { label: string; href: string };

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Team", href: "/our-team" },
  { label: "Locations", href: "/locations" },
  { label: "Referrals", href: "/referrals" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

export const servicesNav: NavLink[] = [
  { label: "Home Visit Physiotherapy", href: "/home-visit-physiotherapy" },
  { label: "NDIS Physiotherapy", href: "/ndis-physiotherapy" },
  { label: "Support at Home Physiotherapy", href: "/support-at-home-physiotherapy" },
  { label: "Chronic Pain Management", href: "/chronic-pain-management" },
  { label: "Falls Prevention", href: "/falls-prevention" },
  { label: "All Services", href: "/services" },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: string;
  href: string;
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: "home-visit-physiotherapy",
    title: "Home Visit Physiotherapy",
    short:
      "Professional physiotherapy delivered in the comfort and safety of your own home — no travel, no waiting rooms.",
    icon: "home",
    href: "/home-visit-physiotherapy",
    featured: true,
  },
  {
    slug: "ndis-physiotherapy",
    title: "NDIS Physiotherapy",
    short:
      "Functional, goal-focused physiotherapy for NDIS participants — self-managed, plan-managed and agency-managed.",
    icon: "shield",
    href: "/ndis-physiotherapy",
    featured: true,
  },
  {
    slug: "support-at-home-physiotherapy",
    title: "Support at Home Physiotherapy",
    short:
      "Physiotherapy for Home Care Package and Support at Home clients to stay strong, mobile and safely independent.",
    icon: "heart",
    href: "/support-at-home-physiotherapy",
    featured: true,
  },
  {
    slug: "chronic-pain-management",
    title: "Chronic Pain Management",
    short:
      "Evidence-based, compassionate care that reduces fear of movement and helps you return to the things that matter.",
    icon: "pulse",
    href: "/chronic-pain-management",
  },
  {
    slug: "falls-prevention",
    title: "Falls Prevention",
    short:
      "Balance assessment, home safety review and tailored exercise to reduce falls risk and build confidence.",
    icon: "balance",
    href: "/falls-prevention",
  },
  {
    slug: "post-hospital-rehabilitation",
    title: "Post Hospital Rehabilitation",
    short:
      "Recover safely at home after surgery, illness or a hospital stay with structured, supported rehabilitation.",
    icon: "recovery",
    href: "/services#post-hospital-rehabilitation",
  },
  {
    slug: "musculoskeletal-physiotherapy",
    title: "Musculoskeletal Physiotherapy",
    short:
      "Assessment and hands-on treatment for joint, muscle and back pain, combined with practical exercise.",
    icon: "joint",
    href: "/services#musculoskeletal-physiotherapy",
  },
  {
    slug: "balance-training",
    title: "Balance Training",
    short:
      "Targeted programs to improve stability, coordination and confidence on your feet, indoors and out.",
    icon: "balance",
    href: "/services#balance-training",
  },
  {
    slug: "strength-mobility-programs",
    title: "Strength & Mobility Programs",
    short:
      "Personalised strengthening and mobility plans to keep you active, independent and moving well.",
    icon: "strength",
    href: "/services#strength-mobility-programs",
  },
];

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  photo: string;
  credentials: string;
  bio: string[];
  interests: string[];
  languages?: string;
};

export const team: TeamMember[] = [
  {
    slug: "daniel-lee",
    name: "Daniel Lee",
    role: "Director & Principal Physiotherapist",
    photo: "/team/daniel-lee.jpg",
    credentials: "Master of Pain Management, University of Sydney",
    bio: [
      "Daniel has a Master's degree in Pain Management from the University of Sydney and a strong focus on pain management and functional rehabilitation.",
      "His approach centres on understanding each patient's experience and goals, combining hands-on treatment with simple, practical strategies to help patients move with confidence and return to meaningful daily activities.",
      "He focuses on long-term outcomes, reducing fear around movement, and building independence through tailored rehabilitation.",
    ],
    interests: [
      "Chronic Pain",
      "Functional Rehabilitation",
      "Home Visit Physiotherapy",
      "NDIS",
      "Support at Home",
      "Falls Prevention",
    ],
  },
  {
    slug: "christine-nguyen",
    name: "Christine Nguyen",
    role: "Physiotherapist",
    photo: "/team/christine-nguyen.jpg",
    credentials: "Bachelor of Physiotherapy, University of Newcastle",
    bio: [
      "Christine is a University of Newcastle graduate physiotherapist who is passionate about helping people move better, feel stronger, and return to the activities they enjoy. She uses an evidence-based approach and tailors treatment plans to each person's goals and lifestyle.",
      "Christine has experience working in hospital and private practice rehabilitation settings, supporting patients recovering from stroke, post-operative orthopaedic surgery, and musculoskeletal injuries. She also has a strong interest in geriatric rehabilitation, helping older adults improve mobility, balance, and confidence while reducing falls risk.",
      "Her treatment approach focuses on exercise-based rehabilitation, supported by manual therapy when appropriate. Christine is trained in the Mulligan Concept and dry needling. She works with private patients, Chronic Disease Management (EPC) referrals, and Workers Compensation patients.",
      "Outside the clinic, Christine enjoys staying active through badminton, bouldering, running, and gym training. Fluent in English, Cantonese, and Mandarin, she strives to create a welcoming and supportive environment for all patients.",
    ],
    interests: [
      "Geriatric Rehabilitation",
      "Musculoskeletal Physiotherapy",
      "Post-Operative Rehabilitation",
      "Stroke Recovery",
      "Dry Needling",
      "Mulligan Concept",
    ],
    languages: "English, Cantonese, Mandarin",
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "Do you provide home visits?",
    a: "Yes. Home visits are our core service. We come to you and deliver physiotherapy in the comfort and safety of your own home, so there is no travel, parking or waiting rooms to worry about.",
  },
  {
    q: "Do you accept NDIS participants?",
    a: "Yes. We work with NDIS participants who are self-managed, plan-managed and agency-managed. We provide functional assessments, mobility and exercise programs, falls prevention and pain management aligned to your plan goals.",
  },
  {
    q: "Do you see Home Care Package clients?",
    a: "Yes. We regularly support clients with Home Care Packages, working alongside your provider and care plan to help you stay strong, mobile and independent at home.",
  },
  {
    q: "Do you provide Support at Home services?",
    a: "Yes. We provide physiotherapy for Support at Home clients, focused on maintaining independence, mobility, strength, balance and falls prevention so you can remain safely in your own home.",
  },
  {
    q: "Do I need a GP referral?",
    a: "Not for private physiotherapy — you can contact us directly. A GP referral may be required for some funding streams, such as Chronic Disease Management (EPC) plans. We are happy to guide you through what applies to your situation.",
  },
  {
    q: "Do you service Newcastle?",
    a: "Yes. Newcastle is one of our primary service areas and we provide home visit physiotherapy across the region.",
  },
  {
    q: "Do you service Lake Macquarie?",
    a: "Yes. We provide mobile physiotherapy throughout Lake Macquarie and surrounding suburbs.",
  },
  {
    q: "Do you service the Central Coast?",
    a: "Yes. We provide home visit physiotherapy across the Central Coast. Contact us to confirm availability in your suburb.",
  },
  {
    q: "What should I prepare for my first appointment?",
    a: "Just a comfortable space to move and any relevant medical information, medications list, referrals or reports. We bring the equipment needed for your assessment and treatment.",
  },
  {
    q: "How do I book an appointment?",
    a: "You can book online through our contact page, or call us on 0466 488 869. We will confirm your appointment and answer any questions about funding and what to expect.",
  },
];

export type LocationArea = {
  name: string;
  blurb: string;
  suburbs: string[];
};

export const locations: LocationArea[] = [
  {
    name: "Newcastle",
    blurb:
      "Home visit physiotherapy across Newcastle and inner suburbs, supporting older adults, NDIS participants and rehabilitation clients.",
    suburbs: [
      "Newcastle",
      "New Lambton",
      "Hamilton",
      "Mayfield",
      "Merewether",
      "Wallsend",
      "Charlestown",
      "Adamstown",
    ],
  },
  {
    name: "Lake Macquarie",
    blurb:
      "Mobile physiotherapy throughout the Lake Macquarie region, helping clients stay mobile, strong and safely at home.",
    suburbs: [
      "Belmont",
      "Warners Bay",
      "Toronto",
      "Cardiff",
      "Morisset",
      "Swansea",
      "Mount Hutton",
      "Glendale",
    ],
  },
  {
    name: "Central Coast",
    blurb:
      "Home-based physiotherapy across the Central Coast for Support at Home, Home Care Package and private clients.",
    suburbs: [
      "Gosford",
      "Wyong",
      "The Entrance",
      "Tuggerah",
      "Erina",
      "Woy Woy",
      "Terrigal",
      "Bateau Bay",
    ],
  },
];

export const whyChoose = [
  {
    title: "We Come To You",
    text: "No travel, no parking, no waiting rooms. We deliver expert physiotherapy in the comfort and safety of your home.",
    icon: "home",
  },
  {
    title: "NDIS Experience",
    text: "Confident support for self-managed, plan-managed and agency-managed NDIS participants and their goals.",
    icon: "shield",
  },
  {
    title: "Support at Home Experience",
    text: "Experienced working with Home Care Package and Support at Home clients and their providers.",
    icon: "heart",
  },
  {
    title: "Personalised Care",
    text: "Individualised, patient-centred plans built around your goals, lifestyle and long-term outcomes.",
    icon: "user",
  },
  {
    title: "Falls Prevention",
    text: "Balance training, home safety review and tailored exercise to reduce falls risk and build confidence.",
    icon: "balance",
  },
  {
    title: "Rehabilitation",
    text: "Structured recovery after surgery, illness or hospital — safely supported in your own home.",
    icon: "recovery",
  },
  {
    title: "Chronic Pain Expertise",
    text: "Master's-qualified pain management, reducing fear of movement and restoring meaningful activity.",
    icon: "pulse",
  },
];

export const testimonials = [
  {
    quote:
      "Daniel came to Mum's home every week and her confidence on her feet has completely turned around. We finally feel she is safe at home.",
    author: "Sarah M.",
    detail: "Daughter & Home Care Package family, Newcastle",
  },
  {
    quote:
      "As a support coordinator I refer clients knowing they will get thorough functional assessments and clear reports. Communication is excellent.",
    author: "James P.",
    detail: "Support Coordinator, Lake Macquarie",
  },
  {
    quote:
      "After my hip surgery I dreaded travelling to a clinic. Having physio at home meant I actually did my program and recovered faster.",
    author: "Margaret T.",
    detail: "Post-surgical rehabilitation client, Central Coast",
  },
];
