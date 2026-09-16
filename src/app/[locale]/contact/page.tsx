import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/metadata";
import PagePhotoHero from "@/components/ui/PagePhotoHero";
import SplitImage from "@/components/ui/SplitImage";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
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
      <Section spacing="default" border>
        <Container>
          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-3">
            <SplitImage
              src="/images/office-exterior-london.jpg"
              alt={t("officePhotoExterior.alt")}
              caption={t("cityPhoto2.caption")}
            />
            <SplitImage
              src="/images/office-lounge-london.jpg"
              alt={t("officePhotoLounge.alt")}
            />
            <SplitImage
              src="/images/office-reception-london.jpg"
              alt={t("cityPhoto2.alt")}
            />
          </div>
          <p className="mt-8 text-center text-body-sm text-primary-dark/60">
            {t("officeAddress")}
          </p>
        </Container>
      </Section>
    </>
  );
}
