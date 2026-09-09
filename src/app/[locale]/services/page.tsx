import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/metadata";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import StagesNav from "@/components/services/StagesNav";
import StageSection from "@/components/services/StageSection";
import EngagementFormatsSection from "@/components/services/EngagementFormatsSection";
import ServicesFinalCta from "@/components/services/ServicesFinalCta";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ServicesPage" });
  return buildMetadata({
    locale,
    path: "/services",
    title: t("metaTitle"),
    description: t("metaDescription"),
  });
}

const stageItemCounts = [
  { item: "item1", analyse: 6, deliverables: 3 },
  { item: "item2", analyse: 7, deliverables: 4 },
  { item: "item3", analyse: 5, deliverables: 3 },
  { item: "item4", analyse: 5, deliverables: 4 },
] as const;

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tHero = await getTranslations("ServicesPage.hero");
  const tNav = await getTranslations("ServicesPage.stagesNav");
  const tStages = await getTranslations("ServicesPage.stages");

  const labels = {
    solves: tStages("labels.solves"),
    who: tStages("labels.who"),
    analyse: tStages("labels.analyse"),
    deliverables: tStages("labels.deliverables"),
    next: tStages("labels.next"),
  };

  const stages = stageItemCounts.map(({ item, analyse, deliverables }) => ({
    number: tStages(`${item}.number`),
    question: tStages(`${item}.question`),
    name: tStages(`${item}.name`),
    whatItSolves: tStages(`${item}.whatItSolves`),
    whoItIsFor: tStages(`${item}.whoItIsFor`),
    analyse: Array.from({ length: analyse }, (_, i) =>
      tStages(`${item}.analyse.item${i + 1}`),
    ),
    deliverables: Array.from({ length: deliverables }, (_, i) =>
      tStages(`${item}.deliverables.item${i + 1}`),
    ),
    next: tStages(`${item}.next`),
  }));

  return (
    <>
      <PageHero
        eyebrow={tHero("eyebrow")}
        title={tHero("title")}
        description={tHero("subtitle")}
      />

      <Section spacing="tight">
        <Container>
          <StagesNav
            label={tNav("label")}
            stages={stages.map((s) => ({ number: s.number, question: s.question }))}
          />
        </Container>
      </Section>

      {stages.map((stage, index) => (
        <StageSection
          key={stage.number}
          {...stage}
          labels={labels}
          background={index % 2 === 1 ? "surface" : "none"}
        />
      ))}

      <EngagementFormatsSection />
      <ServicesFinalCta />
    </>
  );
}
