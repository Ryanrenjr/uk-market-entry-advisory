import { getTranslations } from "next-intl/server";
import { ChartBar, Compass, Landmark, Workflow } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import IconBox from "@/components/ui/IconBox";
import Reveal from "@/components/ui/Reveal";
import SplitImage from "@/components/ui/SplitImage";

const icons = [Landmark, ChartBar, Compass, Workflow] as const;

export default async function WhyUsSection() {
  const t = await getTranslations("HomePage.whyUs");

  const items = [1, 2, 3, 4].map((n) => ({
    title: t(`item${n}.title`),
    description: t(`item${n}.description`),
  }));

  return (
    <Section spacing="default" border>
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SplitImage
              src="/images/london-city-street-sunny.jpg"
              alt={t("photoAlt")}
              caption={t("photoCaption")}
              className="lg:aspect-auto lg:h-full"
            />
          </Reveal>

          <div>
            <Reveal>
              <SectionHeading number="04" title={t("title")} />
            </Reveal>

            <div className="mt-10">
              {items.map((item, index) => {
                const Icon = icons[index];
                return (
                  <Reveal key={item.title} delay={index * 0.06}>
                    <div className="flex items-start gap-4 border-t border-primary-dark/8 py-6 first:pt-0">
                      <IconBox icon={Icon} />
                      <div>
                        <h3 className="font-display text-h4 text-primary-dark">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-body-sm text-primary-dark/60">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
