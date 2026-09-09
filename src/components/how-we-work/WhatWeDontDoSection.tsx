import { getTranslations } from "next-intl/server";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

export default async function WhatWeDontDoSection() {
  const t = await getTranslations("HowWeWorkPage.whatWeDontDo");

  const items = [t("item1"), t("item2"), t("item3"), t("item4")];

  return (
    <Section spacing="default" border>
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
        </Reveal>

        <div className="mt-10 space-y-6">
          {items.map((item, index) => (
            <Reveal key={item} delay={index * 0.08}>
              <p className="border-l-2 border-primary-dark/15 pl-6 text-body-lg text-primary-dark/70">
                {item}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
