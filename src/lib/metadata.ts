import type { Metadata } from "next";
import { routing } from "@/i18n/routing";

function resolveSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL;

  if (!raw) {
    // next build / next start always run with NODE_ENV=production, so this
    // is the real guard against ever shipping canonical/OG/sitemap URLs
    // that point at localhost.
    if (process.env.NODE_ENV === "production") {
      throw new Error(
        "NEXT_PUBLIC_SITE_URL is required in production. Set it to the site's canonical https URL (see .env.example).",
      );
    }
    return "http://localhost:3000";
  }

  let parsed: URL;
  try {
    parsed = new URL(raw);
  } catch {
    throw new Error(`NEXT_PUBLIC_SITE_URL is not a valid URL: "${raw}"`);
  }

  if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
    throw new Error(
      `NEXT_PUBLIC_SITE_URL must use http or https, got "${parsed.protocol}"`,
    );
  }

  return raw.replace(/\/+$/, "");
}

export const siteUrl = resolveSiteUrl();

const ogLocale: Record<string, string> = {
  en: "en_GB",
  zh: "zh_CN",
};

interface BuildMetadataArgs {
  locale: string;
  path: string;
  title: string;
  description: string;
}

export function buildMetadata({
  locale,
  path,
  title,
  description,
}: BuildMetadataArgs): Metadata {
  const languages: Record<string, string> = {};
  for (const loc of routing.locales) {
    languages[loc] = `${siteUrl}/${loc}${path}`;
  }
  languages["x-default"] = `${siteUrl}/${routing.defaultLocale}${path}`;

  const url = `${siteUrl}/${locale}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "London Thames International",
      locale: ogLocale[locale] ?? "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
