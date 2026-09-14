import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/metadata";
import PhotoSection from "@/components/ui/PhotoSection";
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

  return (
    <>
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <MarketTestSection />
      <WhyUsSection />
      <PhotoSection
        src="/images/london-city-skyline-thames.jpg"
        alt={tPhoto("alt")}
        caption={tPhoto("caption")}
      />
      <ClientTypesSection />
      <InsightsSection />
      <FinalCtaSection />
    </>
  );
}
