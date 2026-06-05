import type { MetadataRoute } from "next";
import { getSiteUrl, navItems } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const lastModified = new Date();
  return navItems.map(({ href }) => ({
    url: `${base}${href === "/" ? "" : href}`,
    lastModified,
  }));
}
