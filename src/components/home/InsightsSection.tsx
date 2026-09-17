import { getTranslations } from "next-intl/server";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Tag from "@/components/ui/Tag";
import InlineLink from "@/components/ui/InlineLink";
import Reveal from "@/components/ui/Reveal";
import { Link } from "@/i18n/navigation";
import { getPublishedInsightArticles, type Locale } from "@/content/insights";
import { formatArticleDate } from "@/lib/format";

interface InsightsSectionProps {
  locale: Locale;
}

export default async function InsightsSection({ locale }: InsightsSectionProps) {
  const t = await getTranslations("HomePage.insights");
  const tInsights = await getTranslations("InsightsPage");
  const latest = getPublishedInsightArticles(locale).slice(0, 3);

  return (
    <Section spacing="default" border>
      <Container>
        <Reveal>
          <SectionHeading number="06" title={t("title")} />
        </Reveal>

        <div className="mt-12">
          {latest.map((article, index) => (
            <Reveal key={article.slug} delay={index * 0.08}>
              <Link
                href={`/insights/${article.slug}`}
                className="group grid gap-3 border-t border-primary-dark/8 py-8 transition-colors duration-200 hover:bg-primary-dark/[0.02] sm:grid-cols-12 sm:gap-6"
              >
                <div className="sm:col-span-3">
                  <Tag tone="accent">{tInsights(`categories.${article.category}`)}</Tag>
                  {article.publishedAt && (
                    <p className="mt-3 text-caption text-primary-dark/60">
                      {formatArticleDate(article.publishedAt, locale)} ·{" "}
                      {tInsights("card.readingTime", { minutes: article.readingTime })}
                    </p>
                  )}
                </div>
                <div className="sm:col-span-9">
                  <h3 className="font-display text-h4 text-primary-dark transition-colors duration-200 group-hover:text-accent">
                    {article.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-body-sm text-primary-dark/60">
                    {article.summary}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="border-t border-primary-dark/8 pt-8">
            <InlineLink href="/insights">{t("viewAll")}</InlineLink>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
