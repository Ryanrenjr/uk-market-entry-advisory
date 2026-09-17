import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/metadata";
import PagePhotoHero from "@/components/ui/PagePhotoHero";
import PhotoSection from "@/components/ui/PhotoSection";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import InsightsExplorer from "@/components/insights/InsightsExplorer";
import { getPublishedInsightArticles, type Locale } from "@/content/insights";

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
  const tPhoto = await getTranslations("InsightsPage.cityPhoto");
  const tPhoto2 = await getTranslations("InsightsPage.cityPhoto2");
  const articles = getPublishedInsightArticles(locale as Locale);

  return (
    <>
      <PagePhotoHero
        eyebrow={tHero("eyebrow")}
        title={tHero("title")}
        description={tHero("description")}
        photoSrc="/images/london-bank-of-england.jpg"
        photoAlt={tPhoto("alt")}
        photoCaption={tPhoto("caption")}
      />
      <Section spacing="default">
        <Container>
          <InsightsExplorer articles={articles} />
        </Container>
      </Section>
      <PhotoSection
        src="/images/client-uk-market-data-review.jpg"
        alt={tPhoto2("alt")}
        caption={tPhoto2("caption")}
      />
    </>
  );
}
