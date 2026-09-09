import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { getAllInsightSlugs } from "@/content/insights";
import { siteUrl } from "@/lib/metadata";

const staticPaths = [
  "",
  "/services",
  "/how-we-work",
  "/insights",
  "/about",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const insightPaths = getAllInsightSlugs().map((slug) => `/insights/${slug}`);
  const allPaths = [...staticPaths, ...insightPaths];

  return allPaths.map((path) => ({
    url: `${siteUrl}/${routing.defaultLocale}${path}`,
    lastModified: new Date(),
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((locale) => [locale, `${siteUrl}/${locale}${path}`]),
      ),
    },
  }));
}
