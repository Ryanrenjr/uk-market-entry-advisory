import { getTranslations } from "next-intl/server";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Tag from "@/components/ui/Tag";
import InlineLink from "@/components/ui/InlineLink";
import Reveal from "@/components/ui/Reveal";

export default async function InsightsSection() {
  const t = await getTranslations("HomePage.insights");

  const items = [1, 2, 3].map((n) => ({
    tag: t(`item${n}.tag`),
    title: t(`item${n}.title`),
    description: t(`item${n}.description`),
  }));

  return (
    <Section spacing="default" border>
      <Container>
        <Reveal>
          <SectionHeading number="06" title={t("title")} description={t("disclaimer")} />
        </Reveal>

        <div className="mt-12">
          {items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <div className="grid gap-3 border-t border-primary-dark/8 py-8 sm:grid-cols-12 sm:gap-6">
                <div className="flex flex-wrap gap-2 sm:col-span-3">
                  <Tag tone="accent">{item.tag}</Tag>
                  <Tag tone="outline">{t("sampleLabel")}</Tag>
                </div>
                <div className="sm:col-span-9">
                  <h3 className="font-display text-h4 text-primary-dark">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-body-sm text-primary-dark/60">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="border-t border-primary-dark/8 pt-8">
            <InlineLink href="/insights">{t("viewAll")}</InlineLink>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
