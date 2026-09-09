import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/metadata";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import InsightsExplorer from "@/components/insights/InsightsExplorer";
import { getInsightArticles, type Locale } from "@/content/insights";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "InsightsPage" });
  return buildMetadata({
    locale,
    path: "/insights",
    title: t("metaTitle"),
    description: t("metaDescription"),
  });
}

export default async function InsightsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tHero = await getTranslations("InsightsPage.hero");
  const articles = getInsightArticles(locale as Locale);

  return (
    <>
      <PageHero
        eyebrow={tHero("eyebrow")}
        title={tHero("title")}
        description={tHero("description")}
      />
      <Section spacing="default">
        <Container>
          <InsightsExplorer articles={articles} />
        </Container>
      </Section>
    </>
  );
}
