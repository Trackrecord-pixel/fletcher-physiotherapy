import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LocalBusinessSchema } from "@/components/StructuredData";
import { site } from "@/lib/site";

export const viewport: Viewport = {
  themeColor: "#13243d",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Home Visit Physiotherapy Newcastle | Fletcher Physiotherapy",
    template: "%s | Fletcher Physiotherapy",
  },
  description: site.description,
  keywords: [
    "home visit physiotherapy Newcastle",
    "mobile physiotherapy Newcastle",
    "NDIS physiotherapy Newcastle",
    "home care package physiotherapy Newcastle",
    "support at home physiotherapy Newcastle",
    "physiotherapist Newcastle",
    "mobile physio Lake Macquarie",
    "mobile physio Central Coast",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: site.url,
    siteName: site.name,
    title: "Home Visit Physiotherapy Newcastle | Fletcher Physiotherapy",
    description: site.description,
    images: [
      {
        url: "/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "Fletcher Physiotherapy home visit physiotherapy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Visit Physiotherapy Newcastle | Fletcher Physiotherapy",
    description: site.description,
    images: ["/images/og-default.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }] },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU">
      <body>
        <LocalBusinessSchema />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
