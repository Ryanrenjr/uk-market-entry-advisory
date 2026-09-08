import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ContactPage" });
  return { title: t("title"), description: t("description") };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("ContactPage");

  return (
    <PageHero
      eyebrow={t("eyebrow")}
      title={t("title")}
      description={t("description")}
    >
      <Button href={`mailto:${t("email")}`} variant="secondary">
        {t("emailCta")}
      </Button>
    </PageHero>
  );
}
