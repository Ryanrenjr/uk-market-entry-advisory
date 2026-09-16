import { getTranslations } from "next-intl/server";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import SplitImage from "@/components/ui/SplitImage";

export default async function EngagementFormatsSection() {
  const t = await getTranslations("ServicesPage.engagementFormats");

  const items = [1, 2, 3, 4].map((n) => ({
    name: t(`item${n}.name`),
    description: t(`item${n}.description`),
  }));

  return (
    <Section spacing="default" border>
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading number="05" title={t("title")} description={t("intro")} />
          </Reveal>

          <Reveal delay={0.1}>
            <SplitImage
              src="/images/client-product-helmets.jpg"
              alt={t("photoAlt")}
              caption={t("photoCaption")}
              className="lg:order-last"
            />
          </Reveal>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.06}>
              <div className="border-t border-primary-dark/8 pt-6">
                <h3 className="font-display text-h4 text-primary-dark">
                  {item.name}
                </h3>
                <p className="mt-2 text-body-sm text-primary-dark/60">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
