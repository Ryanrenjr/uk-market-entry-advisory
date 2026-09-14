import type { Metadata } from "next";
import { routing } from "@/i18n/routing";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

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
      card: "summary",
      title,
      description,
    },
  };
}
