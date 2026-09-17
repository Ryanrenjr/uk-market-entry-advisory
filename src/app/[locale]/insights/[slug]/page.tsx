import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Tag from "@/components/ui/Tag";
import Button from "@/components/ui/Button";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import {
  getAllPublishedInsightSlugs,
  getPublishedInsightArticle,
  type Locale,
} from "@/content/insights";

type Props = { params: Promise<{ locale: string; slug: string }> };

// The full set of articles is known and enumerable — any slug outside
// generateStaticParams should 404 immediately rather than attempt
// on-demand rendering.
export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getAllPublishedInsightSlugs().map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = getPublishedInsightArticle(locale as Locale, slug);
  if (!article) return {};
  return buildMetadata({
    locale,
    path: `/insights/${slug}`,
    title: article.title,
    description: article.summary,
  });
}

export default async function InsightArticlePage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const article = getPublishedInsightArticle(locale as Locale, slug);
  if (!article || !article.body) notFound();

  const t = await getTranslations("InsightsPage");

  return (
    <>
      <Section spacing="default" border>
        <Container size="prose">
          <Link
            href="/insights"
            className="text-body-sm text-primary-dark/60 transition-colors hover:text-primary-dark"
          >
            ← {t("article.back")}
          </Link>

          <div className="mt-6 flex items-center gap-3">
            <Tag tone="accent">{t(`categories.${article.category}`)}</Tag>
            <span className="text-caption text-primary-dark/60">
              {t("card.readingTime", { minutes: article.readingTime })}
            </span>
          </div>

          <h1 className="mt-5 font-display text-h1 text-primary-dark">
            {article.title}
          </h1>
          <p className="mt-6 text-body-lg text-primary-dark/70">
            {article.summary}
          </p>
        </Container>
      </Section>

      <Section spacing="default">
        <Container size="prose">
          <div className="space-y-12">
            {article.body.map((section) => (
              <div key={section.heading}>
                <h2 className="font-display text-h3 text-primary-dark">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="mt-4 text-body-lg text-primary-dark/70"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="tight" background="surface" border>
        <Container size="narrow">
          <div className="flex flex-col items-center gap-6 text-center">
            <h2 className="font-display text-h3 text-primary-dark">
              {t("article.ctaTitle")}
            </h2>
            <Button href="/contact">{t("article.ctaButton")}</Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
