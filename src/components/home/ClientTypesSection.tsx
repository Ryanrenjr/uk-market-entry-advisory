import { getTranslations } from "next-intl/server";
import { Building2, Factory, Globe } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import IconBox from "@/components/ui/IconBox";
import Reveal from "@/components/ui/Reveal";

const icons = [Factory, Globe, Building2] as const;

export default async function ClientTypesSection() {
  const t = await getTranslations("HomePage.clientTypes");

  const items = [1, 2, 3].map((n) => ({
    title: t(`item${n}.title`),
    description: t(`item${n}.description`),
  }));

  return (
    <Section spacing="default" background="surface" border>
      <Container>
        <Reveal>
          <SectionHeading number="05" title={t("title")} align="center" />
        </Reveal>

        <div className="mt-16 grid gap-12 sm:grid-cols-3 sm:gap-8">
          {items.map((item, index) => {
            const Icon = icons[index];
            return (
              <Reveal key={item.title} delay={index * 0.08}>
                <div className="text-center">
                  <IconBox icon={Icon} tone="accent" className="mx-auto" />
                  <h3 className="mt-5 font-display text-h4 text-primary-dark">
                    {item.title}
                  </h3>
                  <p className="mx-auto mt-2 max-w-xs text-body-sm text-primary-dark/60">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
