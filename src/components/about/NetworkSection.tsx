import { getTranslations } from "next-intl/server";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

export default async function NetworkSection() {
  const t = await getTranslations("AboutPage.network");

  const domains = [1, 2, 3, 4, 5, 6].map((n) => t(`domains.item${n}`)).join(" · ");

  return (
    <Section spacing="default" background="surface" border>
      <Container size="narrow">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="text-caption tabular-nums text-primary-dark/60">
              03
            </span>
            <span aria-hidden className="h-px w-4 bg-primary-dark/20" />
          </div>
          <h2 className="mt-3 text-balance font-display text-h2 text-primary-dark">
            {t("title")}
          </h2>
          <p className="mt-6 max-w-2xl text-body-lg text-primary-dark/70">
            {t("description")}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 text-body-sm text-primary-dark/60">{domains}</p>
        </Reveal>
      </Container>
    </Section>
  );
}
