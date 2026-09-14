import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/metadata";
import PagePhotoHero from "@/components/ui/PagePhotoHero";
import PhotoSection from "@/components/ui/PhotoSection";
import MethodologySection from "@/components/how-we-work/MethodologySection";
import PrinciplesSection from "@/components/how-we-work/PrinciplesSection";
import WhatWeDontDoSection from "@/components/how-we-work/WhatWeDontDoSection";
import HowWeWorkFinalCta from "@/components/how-we-work/HowWeWorkFinalCta";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "HowWeWorkPage" });
  return buildMetadata({
    locale,
    path: "/how-we-work",
    title: t("metaTitle"),
    description: t("metaDescription"),
  });
}

export default async function HowWeWorkPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tHero = await getTranslations("HowWeWorkPage.hero");
  const tPhoto = await getTranslations("HowWeWorkPage.cityPhoto");
  const tPhoto2 = await getTranslations("HowWeWorkPage.cityPhoto2");

  return (
    <>
      <PagePhotoHero
        eyebrow={tHero("eyebrow")}
        title={tHero("title")}
        description={tHero("description")}
        photoSrc="/images/london-tower-bridge-sunset.jpg"
        photoAlt={tPhoto("alt")}
        photoCaption={tPhoto("caption")}
      />
      <MethodologySection />
      <PrinciplesSection />
      <PhotoSection
        src="/images/london-liverpool-street-station.jpg"
        alt={tPhoto2("alt")}
        caption={tPhoto2("caption")}
      />
      <WhatWeDontDoSection />
      <HowWeWorkFinalCta />
    </>
  );
}
