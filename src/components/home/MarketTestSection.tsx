import { getTranslations } from "next-intl/server";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import Spotlight from "@/components/ui/Spotlight";

export default async function MarketTestSection() {
  const t = await getTranslations("HomePage.marketTest");

  const weeks = [
    { number: "01", label: t("weeks.week1.label"), title: t("weeks.week1.title") },
    { number: "02", label: t("weeks.week2.label"), title: t("weeks.week2.title") },
    { number: "03", label: t("weeks.week3.label"), title: t("weeks.week3.title") },
    { number: "04", label: t("weeks.week4.label"), title: t("weeks.week4.title") },
  ];

  const receiveItems = [
    t("receiveItems.item1"),
    t("receiveItems.item2"),
    t("receiveItems.item3"),
    t("receiveItems.item4"),
    t("receiveItems.item5"),
  ];

  return (
    <Spotlight>
      <Section id="market-test" spacing="default" background="dark">
        <Container>
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="text-caption tabular-nums text-white/50">03</span>
              <span aria-hidden className="h-px w-4 bg-white/20" />
              <p className="text-eyebrow uppercase text-accent-light">
                {t("eyebrow")}
              </p>
            </div>
            <h2 className="mt-4 max-w-2xl text-balance font-display text-h2 text-white">
              {t("title")}
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {weeks.map((week, index) => (
              <Reveal key={week.number} delay={index * 0.08}>
                <div className="border-t border-white/15 pt-6 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
                  <span className="text-eyebrow text-white/50">{week.label}</span>
                  <p className="mt-3 font-display text-h4 text-white">
                    {week.title}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.32}>
            <div className="mt-16 border-t border-white/15 pt-10">
              <p className="text-caption uppercase text-white/50">
                {t("receiveTitle")}
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {receiveItems.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/15 px-3 py-1 text-caption font-medium text-white/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-10">
                <Button href="/contact" variant="outline" size="lg">
                  {t("cta")}
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </Spotlight>
  );
}
