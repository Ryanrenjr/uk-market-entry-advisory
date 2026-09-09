import { getTranslations } from "next-intl/server";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default async function ServicesFinalCta() {
  const t = await getTranslations("ServicesPage.finalCta");

  return (
    <Section spacing="default" background="surface">
      <Container size="narrow">
        <Reveal>
          <div className="text-center">
            <h2 className="text-balance font-display text-h2 text-primary-dark">
              {t("title")}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-body-lg text-primary-dark/60">
              {t("subtitle")}
            </p>
            <div className="mt-8">
              <Button href="/contact" size="lg">
                {t("cta")}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
