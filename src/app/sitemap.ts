import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { getPublishedInsightArticles } from "@/content/insights";
import { siteUrl } from "@/lib/metadata";

const staticPaths = [
  "",
  "/services",
  "/how-we-work",
  "/insights",
  "/about",
  "/contact",
];

function alternatesFor(path: string) {
  return {
    languages: Object.fromEntries(
      routing.locales.map((locale) => [locale, `${siteUrl}/${locale}${path}`]),
    ),
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Static marketing pages don't carry a real per-page last-modified date,
  // so it's omitted rather than stamped with the build time — a fabricated
  // "updated today" on every build actively misleads crawlers.
  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${siteUrl}/${routing.defaultLocale}${path}`,
    alternates: alternatesFor(path),
  }));

  // Insight articles do have real dates once published — use those, and
  // only those, for lastModified.
  const insightEntries: MetadataRoute.Sitemap = getPublishedInsightArticles(
    routing.defaultLocale,
  ).map((article) => {
    const path = `/insights/${article.slug}`;
    const lastModified = article.updatedAt ?? article.publishedAt;
    return {
      url: `${siteUrl}/${routing.defaultLocale}${path}`,
      ...(lastModified ? { lastModified } : {}),
      alternates: alternatesFor(path),
    };
  });

  return [...staticEntries, ...insightEntries];
}
