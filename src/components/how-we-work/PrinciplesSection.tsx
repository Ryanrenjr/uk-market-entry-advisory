import { getTranslations } from "next-intl/server";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

export default async function PrinciplesSection() {
  const t = await getTranslations("HowWeWorkPage.principles");

  const principles = [
    t("item1"),
    t("item2"),
    t("item3"),
    t("item4"),
  ];

  return (
    <Section spacing="default" background="dark">
      <Container size="narrow">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="text-caption tabular-nums text-white/50">02</span>
            <span aria-hidden className="h-px w-4 bg-white/20" />
          </div>
          <h2 className="mt-3 text-balance font-display text-h2 text-white">
            {t("title")}
          </h2>
        </Reveal>

        <div className="mt-12">
          {principles.map((principle, index) => (
            <Reveal key={principle} delay={index * 0.08}>
              <div className="flex items-start gap-6 border-t border-white/15 py-8">
                <span
                  aria-hidden
                  className="mt-4 h-px w-8 shrink-0 bg-accent-light"
                />
                <p className="font-display text-h3 text-white">{principle}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
