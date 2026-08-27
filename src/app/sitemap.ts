import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/renovations/",
    "/heating/",
    "/servicing/",
    "/bathrooms/",
    "/design/",
    "/projects/",
    "/projects/woodstock/",
    "/projects/turweston/",
    "/projects/bloxham-road/",
    "/schools/",
    "/about/",
    "/smh-gas-specialist/",
    "/contact/",
    "/contact/thanks/",
    "/privacy/",
  ];
  return routes.map((route) => ({
    url: `${siteConfig.url}${route === "" ? "/" : route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
