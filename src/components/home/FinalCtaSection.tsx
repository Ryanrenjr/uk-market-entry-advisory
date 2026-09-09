import { getTranslations } from "next-intl/server";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default async function FinalCtaSection() {
  const t = await getTranslations("HomePage.finalCta");

  return (
    <Section spacing="default" background="surface" border>
      <Container size="narrow">
        <Reveal>
          <div className="text-center">
            <h2 className="mx-auto text-balance font-display text-h2 text-primary-dark">
              {t("titleLine1")}
              <br />
              {t("titleLine2")}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-body-lg text-primary-dark/60">
              {t("description")}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact" size="lg">
                {t("primaryCta")}
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                {t("secondaryCta")}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
