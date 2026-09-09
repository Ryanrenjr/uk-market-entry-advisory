import { getTranslations } from "next-intl/server";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const stepFocusCounts = [4, 5, 5, 5, 4] as const;

export default async function MethodologySection() {
  const t = await getTranslations("HowWeWorkPage.methodology");

  const steps = stepFocusCounts.map((count, index) => {
    const item = `steps.item${index + 1}`;
    return {
      number: t(`${item}.number`),
      title: t(`${item}.title`),
      focus: Array.from({ length: count }, (_, i) =>
        t(`${item}.focus.item${i + 1}`),
      ),
    };
  });

  return (
    <Section spacing="default">
      <Container>
        <Reveal>
          <SectionHeading number="01" title={t("title")} />
        </Reveal>

        <div className="mt-12">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.06}>
              <div className="grid gap-4 border-t border-primary-dark/8 py-10 lg:grid-cols-12 lg:items-baseline lg:gap-8">
                <span className="font-display text-h1 tabular-nums text-accent lg:col-span-2">
                  {step.number}
                </span>
                <h3 className="font-display text-h3 text-primary-dark lg:col-span-3">
                  {step.title}
                </h3>
                <p className="text-body-sm text-primary-dark/60 lg:col-span-7">
                  {step.focus.join(" · ")}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
