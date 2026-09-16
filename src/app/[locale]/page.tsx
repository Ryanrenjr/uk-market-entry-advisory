import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/metadata";
import PhotoSection from "@/components/ui/PhotoSection";
import Marquee from "@/components/ui/Marquee";
import HeroSection from "@/components/home/HeroSection";
import ProblemSection from "@/components/home/ProblemSection";
import ServicesSection from "@/components/home/ServicesSection";
import MarketTestSection from "@/components/home/MarketTestSection";
import WhyUsSection from "@/components/home/WhyUsSection";
import ClientTypesSection from "@/components/home/ClientTypesSection";
import InsightsSection from "@/components/home/InsightsSection";
import FinalCtaSection from "@/components/home/FinalCtaSection";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "HomePage" });
  return buildMetadata({
    locale,
    path: "",
    title: t("metaTitle"),
    description: t("metaDescription"),
  });
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tPhoto = await getTranslations("HomePage.cityPhoto");
  const tEuropePhoto = await getTranslations("HomePage.europePhoto");
  const tChannels = await getTranslations("HomePage.channels");
  const channelItems = [
    tChannels("item1"),
    tChannels("item2"),
    tChannels("item3"),
    tChannels("item4"),
    tChannels("item5"),
  ];

  return (
    <>
      <HeroSection />
      <Marquee label={tChannels("label")} items={channelItems} />
      <ProblemSection />
      <ServicesSection />
      <MarketTestSection />
      <PhotoSection
        src="/images/london-city-skyline-thames.jpg"
        alt={tPhoto("alt")}
        caption={tPhoto("caption")}
      />
      <WhyUsSection />
      <ClientTypesSection />
      <PhotoSection
        src="/images/europe-amsterdam-canal.jpg"
        alt={tEuropePhoto("alt")}
        caption={tEuropePhoto("caption")}
        objectPosition="center 55%"
      />
      <InsightsSection />
      <FinalCtaSection />
    </>
  );
}
