import type { ReactNode } from "react";
import { getTranslations } from "next-intl/server";
import { ArrowRight, Building2, FlaskConical, Route, SearchCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import IconBox from "@/components/ui/IconBox";
import Tag from "@/components/ui/Tag";
import Reveal from "@/components/ui/Reveal";
import { Link } from "@/i18n/navigation";

const icons = [SearchCheck, Route, FlaskConical, Building2] as const;

function CardLabel({ children }: { children: string }) {
  return (
    <span className="mt-auto flex items-center gap-1.5 pt-6 text-sm font-medium text-accent transition-colors group-hover:text-primary-dark">
      {children}
      <ArrowRight
        className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
        aria-hidden
      />
    </span>
  );
}

function CardWrapper({ href, children }: { href: string; children: ReactNode }) {
  const className = "group block h-full";
  if (href.startsWith("#")) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export default async function ServicesSection() {
  const t = await getTranslations("HomePage.services");

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
            <CardWrapper href="/services">
              <Card hover className="flex h-full flex-col">
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
                <CardLabel>{t("learnMore")}</CardLabel>
              </Card>
            </CardWrapper>
          </Reveal>

          <Reveal delay={0.08}>
            <CardWrapper href="/services">
              <Card hover className="flex h-full flex-col">
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
                <CardLabel>{t("learnMore")}</CardLabel>
              </Card>
            </CardWrapper>
          </Reveal>

          <Reveal delay={0.16}>
            <CardWrapper href="#market-test">
              <Card hover className="flex h-full flex-col">
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
                <CardLabel>{t("item3.cta")}</CardLabel>
              </Card>
            </CardWrapper>
          </Reveal>

          <Reveal delay={0.24}>
            <CardWrapper href="/services">
              <Card hover className="flex h-full flex-col">
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
                <CardLabel>{t("learnMore")}</CardLabel>
              </Card>
            </CardWrapper>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
