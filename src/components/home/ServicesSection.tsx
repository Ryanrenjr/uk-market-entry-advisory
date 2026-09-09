import { getTranslations } from "next-intl/server";
import { Building2, FlaskConical, Route, SearchCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import IconBox from "@/components/ui/IconBox";
import Tag from "@/components/ui/Tag";
import InlineLink from "@/components/ui/InlineLink";
import Reveal from "@/components/ui/Reveal";

const icons = [SearchCheck, Route, FlaskConical, Building2] as const;

export default async function ServicesSection() {
  const t = await getTranslations("HomePage.services");

  const includes2 = [
    t("item2.includes.item1"),
    t("item2.includes.item2"),
    t("item2.includes.item3"),
    t("item2.includes.item4"),
    t("item2.includes.item5"),
    t("item2.includes.item6"),
    t("item2.includes.item7"),
  ].join(" · ");

  const includes4 = [
    t("item4.includes.item1"),
    t("item4.includes.item2"),
    t("item4.includes.item3"),
    t("item4.includes.item4"),
    t("item4.includes.item5"),
  ].join(" · ");

  const outcomes = [
    t("item1.outcomes.go"),
    t("item1.outcomes.testFirst"),
    t("item1.outcomes.noGo"),
  ];

  return (
    <Section spacing="default" border>
      <Container>
        <Reveal>
          <SectionHeading number="02" title={t("title")} />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal delay={0}>
            <Card className="flex h-full flex-col">
              <div className="flex items-start justify-between gap-4">
                <IconBox icon={icons[0]} tone="accent" />
                <span className="text-eyebrow tabular-nums text-primary-dark/60">
                  {t("item1.number")}
                </span>
              </div>
              <h3 className="mt-6 font-display text-h3 text-primary-dark">
                {t("item1.name")}
              </h3>
              <p className="mt-3 text-body-sm text-primary-dark/60">
                {t("item1.description")}
              </p>
              <p className="mt-6 text-caption uppercase text-primary-dark/60">
                {t("item1.outcomeLabel")}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {outcomes.map((outcome) => (
                  <Tag key={outcome} tone="outline">
                    {outcome}
                  </Tag>
                ))}
              </div>
              <InlineLink href="/services" className="mt-auto pt-6">
                {t("learnMore")}
              </InlineLink>
            </Card>
          </Reveal>

          <Reveal delay={0.08}>
            <Card className="flex h-full flex-col">
              <div className="flex items-start justify-between gap-4">
                <IconBox icon={icons[1]} tone="accent" />
                <span className="text-eyebrow tabular-nums text-primary-dark/60">
                  {t("item2.number")}
                </span>
              </div>
              <h3 className="mt-6 font-display text-h3 text-primary-dark">
                {t("item2.name")}
              </h3>
              <p className="mt-3 text-body-sm text-primary-dark/60">
                {t("item2.description")}
              </p>
              <p className="mt-6 text-body-sm text-primary-dark/60">
                {includes2}
              </p>
              <InlineLink href="/services" className="mt-auto pt-6">
                {t("learnMore")}
              </InlineLink>
            </Card>
          </Reveal>

          <Reveal delay={0.16}>
            <Card className="flex h-full flex-col">
              <div className="flex items-start justify-between gap-4">
                <IconBox icon={icons[2]} tone="accent" />
                <span className="text-eyebrow tabular-nums text-primary-dark/60">
                  {t("item3.number")}
                </span>
              </div>
              <h3 className="mt-6 font-display text-h3 text-primary-dark">
                {t("item3.name")}
              </h3>
              <p className="mt-3 text-body-sm text-primary-dark/60">
                {t("item3.description")}
              </p>
              <InlineLink href="#market-test" className="mt-auto pt-6">
                {t("item3.cta")}
              </InlineLink>
            </Card>
          </Reveal>

          <Reveal delay={0.24}>
            <Card className="flex h-full flex-col">
              <div className="flex items-start justify-between gap-4">
                <IconBox icon={icons[3]} tone="accent" />
                <span className="text-eyebrow tabular-nums text-primary-dark/60">
                  {t("item4.number")}
                </span>
              </div>
              <h3 className="mt-6 font-display text-h3 text-primary-dark">
                {t("item4.name")}
              </h3>
              <p className="mt-3 text-body-sm text-primary-dark/60">
                {t("item4.description")}
              </p>
              <p className="mt-6 text-body-sm text-primary-dark/60">
                {includes4}
              </p>
              <InlineLink href="/services" className="mt-auto pt-6">
                {t("learnMore")}
              </InlineLink>
            </Card>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
