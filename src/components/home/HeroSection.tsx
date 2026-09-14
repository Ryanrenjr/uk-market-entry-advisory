import Image from "next/image";
import { getTranslations } from "next-intl/server";
import Container from "@/components/ui/Container";
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
    <section className="relative isolate -mt-18 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/london-city-blue-hour.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "50% 62%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary-dark/70 to-primary-dark/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 via-transparent to-primary-dark/20" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-primary-dark/85 to-transparent" />
      </div>

      <Container>
        <div className="grid items-center gap-16 py-28 lg:grid-cols-[1.15fr_1fr] lg:gap-12 lg:py-36">
          <div>
            <div className="flex items-center gap-3">
              <span aria-hidden className="h-px w-8 bg-accent-light" />
              <p className="text-eyebrow uppercase text-accent-light">{t("eyebrow")}</p>
            </div>
            <h1 className="mt-5 text-balance font-display text-display text-white">
              {t("titleLine1")}
              <br />
              {t("titleLine2")}
            </h1>
            <p className="mt-6 max-w-xl text-body-lg text-white/70">
              {t("description")}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/contact" size="lg" variant="secondary">
                {t("primaryCta")}
              </Button>
              <Button href="/services" variant="outline" size="lg">
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
    </section>
  );
}
