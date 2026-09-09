import { getTranslations } from "next-intl/server";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

export default async function ProblemSection() {
  const t = await getTranslations("HomePage.problem");

  const questions = [
    { number: "01", text: t("q1") },
    { number: "02", text: t("q2") },
    { number: "03", text: t("q3") },
    { number: "04", text: t("q4") },
  ];

  return (
    <Section spacing="default">
      <Container size="narrow">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="text-caption tabular-nums text-primary-dark/60">
              01
            </span>
            <span aria-hidden className="h-px w-4 bg-primary-dark/20" />
          </div>
          <h2 className="mt-3 max-w-2xl text-balance font-display text-h2 text-primary-dark">
            {t("title")}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {questions.map((item, index) => (
            <Reveal key={item.number} delay={index * 0.08}>
              <div className="border-t border-primary-dark/8 pt-6">
                <span className="text-eyebrow text-accent">{item.number}</span>
                <p className="mt-3 font-display text-h4 text-primary-dark">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-16 max-w-xl font-display text-h3 text-primary-dark">
            {t("conclusion")}
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
