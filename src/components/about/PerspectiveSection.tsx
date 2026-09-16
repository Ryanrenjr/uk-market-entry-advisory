import { getTranslations } from "next-intl/server";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import SplitImage from "@/components/ui/SplitImage";

export default async function PerspectiveSection() {
  const t = await getTranslations("AboutPage.perspective");

  return (
    <Section spacing="default">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="text-caption tabular-nums text-primary-dark/60">
                  01
                </span>
                <span aria-hidden className="h-px w-4 bg-primary-dark/20" />
              </div>
              <h2 className="mt-3 text-balance font-display text-h2 text-primary-dark">
                {t("title")}
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-8 text-body-lg text-primary-dark/70">
                {t("body1")}
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-6 text-body-lg text-primary-dark/80">
                {t("body2")}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <SplitImage
              src="/images/europe-frankfurt-skyline.jpg"
              alt={t("photoAlt")}
              caption={t("photoCaption")}
              className="lg:order-last"
            />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
