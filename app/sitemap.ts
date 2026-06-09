import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const routes = [
  "",
  "/about",
  "/services",
  "/home-visit-physiotherapy",
  "/ndis-physiotherapy",
  "/support-at-home-physiotherapy",
  "/chronic-pain-management",
  "/falls-prevention",
  "/our-team",
  "/locations",
  "/referrals",
  "/contact",
  "/faqs",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.includes("physiotherapy") ? 0.9 : 0.7,
  }));
}
