import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/metadata";
import PagePhotoHero from "@/components/ui/PagePhotoHero";
import PerspectiveSection from "@/components/about/PerspectiveSection";
import DifferentSection from "@/components/about/DifferentSection";
import NetworkSection from "@/components/about/NetworkSection";
import PrinciplesSection from "@/components/about/PrinciplesSection";
import AboutFinalCta from "@/components/about/AboutFinalCta";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "AboutPage" });
  return buildMetadata({
    locale,
    path: "/about",
    title: t("metaTitle"),
    description: t("metaDescription"),
  });
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tHero = await getTranslations("AboutPage.hero");
  const tPhoto = await getTranslations("AboutPage.cityPhoto");

  return (
    <>
      <PagePhotoHero
        eyebrow={tHero("eyebrow")}
        title={tHero("title")}
        description={tHero("description")}
        photoSrc="/images/london-gherkin-sunset.jpg"
        photoAlt={tPhoto("alt")}
        photoCaption={tPhoto("caption")}
      />
      <PerspectiveSection />
      <DifferentSection />
      <NetworkSection />
      <PrinciplesSection />
      <AboutFinalCta />
    </>
  );
}
