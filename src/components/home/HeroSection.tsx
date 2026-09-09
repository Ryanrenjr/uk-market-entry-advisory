import { getTranslations } from "next-intl/server";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import HeroVisual from "./HeroVisual";

export default async function HeroSection() {
  const t = await getTranslations("HomePage.hero");

  const nodes = [
    t("visual.nodes.marketValidation"),
    t("visual.nodes.compliance"),
    t("visual.nodes.amazonUk"),
    t("visual.nodes.tiktokShop"),
    t("visual.nodes.companySetup"),
    t("visual.nodes.ukExpansion"),
  ];

  return (
    <Section spacing="default">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
          <div>
            <div className="flex items-center gap-3">
              <span aria-hidden className="h-px w-8 bg-accent" />
              <p className="text-eyebrow uppercase text-accent">{t("eyebrow")}</p>
            </div>
            <h1 className="mt-5 text-balance font-display text-display text-primary-dark">
              {t("titleLine1")}
              <br />
              {t("titleLine2")}
            </h1>
            <p className="mt-6 max-w-xl text-body-lg text-primary-dark/60">
              {t("description")}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/contact" size="lg">
                {t("primaryCta")}
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                {t("secondaryCta")}
              </Button>
            </div>
          </div>

          <HeroVisual
            origin={t("visual.origin")}
            destination={t("visual.destination")}
            nodes={nodes}
          />
        </div>
      </Container>
    </Section>
  );
}
