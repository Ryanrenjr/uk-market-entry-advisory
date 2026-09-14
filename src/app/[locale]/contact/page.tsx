import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/metadata";
import PagePhotoHero from "@/components/ui/PagePhotoHero";
import PhotoSection from "@/components/ui/PhotoSection";
import Button from "@/components/ui/Button";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ContactPage" });
  return buildMetadata({
    locale,
    path: "/contact",
    title: t("title"),
    description: t("description"),
  });
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("ContactPage");

  return (
    <>
      <PagePhotoHero
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
        photoSrc="/images/london-westminster-dusk.jpg"
        photoAlt={t("cityPhoto.alt")}
        photoCaption={t("cityPhoto.caption")}
      >
        <Button href={`mailto:${t("email")}`} variant="secondary">
          {t("emailCta")}
        </Button>
      </PagePhotoHero>
      <PhotoSection
        src="/images/london-stpauls-dome-blue.jpg"
        alt={t("cityPhoto2.alt")}
        caption={t("cityPhoto2.caption")}
      />
    </>
  );
}
