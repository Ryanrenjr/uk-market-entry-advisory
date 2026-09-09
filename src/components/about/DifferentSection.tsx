import { getTranslations } from "next-intl/server";
import { Briefcase, Building2, Languages, MapPin, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import IconBox from "@/components/ui/IconBox";
import Reveal from "@/components/ui/Reveal";

const icons = [MapPin, Languages, Briefcase, Building2, Sparkles] as const;

export default async function DifferentSection() {
  const t = await getTranslations("AboutPage.different");

  const items = [1, 2, 3, 4, 5].map((n) => ({
    title: t(`item${n}.title`),
    description: t(`item${n}.description`),
  }));

  return (
    <Section spacing="default" border>
      <Container>
        <Reveal>
          <SectionHeading number="02" title={t("title")} />
        </Reveal>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const Icon = icons[index];
            return (
              <Reveal key={item.title} delay={index * 0.06}>
                <div className="border-t border-primary-dark/8 pt-6">
                  <IconBox icon={Icon} />
                  <h3 className="mt-5 font-display text-h4 text-primary-dark">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-body-sm text-primary-dark/60">
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
