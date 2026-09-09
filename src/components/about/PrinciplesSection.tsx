import { getTranslations } from "next-intl/server";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

export default async function PrinciplesSection() {
  const t = await getTranslations("AboutPage.principles");

  const principles = [
    t("item1"),
    t("item2"),
    t("item3"),
    t("item4"),
    t("item5"),
  ];

  return (
    <Section spacing="default" border>
      <Container size="narrow">
        <Reveal>
          <p className="text-center text-eyebrow uppercase text-primary-dark/60">
            {t("title")}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-4 text-center">
            {principles.map((principle, index) => (
              <span key={principle} className="flex items-center gap-3">
                <span className="font-display text-h3 text-primary-dark">
                  {principle}
                </span>
                {index < principles.length - 1 && (
                  <span aria-hidden className="text-h3 text-accent/40">
                    ·
                  </span>
                )}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
