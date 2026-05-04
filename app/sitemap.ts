import type { MetadataRoute } from "next";
import { services, site } from "@/lib/site";
import { posts } from "@/lib/posts";
import { locations } from "@/lib/locations";
import { vehicles } from "@/lib/vehicles";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/services",
    "/pricing",
    "/process",
    "/reviews",
    "/gallery",
    "/blog",
    "/about",
    "/contact",
    "/book",
    "/faq",
    "/materials",
    "/aftercare",
    "/warranty",
    "/locations",
    "/vehicles",
    "/privacy",
    "/terms",
  ].map((p) => ({
    url: `${site.url}${p}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : p === "/privacy" || p === "/terms" ? 0.3 : 0.7,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${site.url}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const locationRoutes = locations.map((l) => ({
    url: `${site.url}/locations/${l.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const vehicleRoutes = vehicles.map((v) => ({
    url: `${site.url}/vehicles/${v.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const blogRoutes = posts.map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...locationRoutes,
    ...vehicleRoutes,
    ...blogRoutes,
  ];
}
