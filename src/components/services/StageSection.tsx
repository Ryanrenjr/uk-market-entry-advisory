import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

interface StageLabels {
  solves: string;
  who: string;
  analyse: string;
  deliverables: string;
  next: string;
}

interface StageSectionProps {
  number: string;
  question: string;
  name: string;
  whatItSolves: string;
  whoItIsFor: string;
  analyse: string[];
  deliverables: string[];
  next: string;
  labels: StageLabels;
  background?: "none" | "surface";
}

export default function StageSection({
  number,
  question,
  name,
  whatItSolves,
  whoItIsFor,
  analyse,
  deliverables,
  next,
  labels,
  background = "none",
}: StageSectionProps) {
  return (
    <Section id={`stage-${number}`} spacing="default" background={background} border>
      <Container>
        <Reveal>
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
            <span className="font-display text-h2 tabular-nums text-accent">
              {number}
            </span>
            <h2 className="text-balance font-display text-h2 text-primary-dark">{question}</h2>
          </div>
          <p className="mt-3 text-eyebrow uppercase text-primary-dark/60">
            {name}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal delay={0.06}>
            <div>
              <p className="text-caption uppercase text-primary-dark/60">
                {labels.solves}
              </p>
              <p className="mt-3 text-body-lg text-primary-dark/80">
                {whatItSolves}
              </p>

              <p className="mt-8 text-caption uppercase text-primary-dark/60">
                {labels.who}
              </p>
              <p className="mt-3 text-body-sm text-primary-dark/60">
                {whoItIsFor}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div>
              <p className="text-caption uppercase text-primary-dark/60">
                {labels.analyse}
              </p>
              <p className="mt-3 text-body-sm text-primary-dark/60">
                {analyse.join(" · ")}
              </p>

              <p className="mt-8 text-caption uppercase text-primary-dark/60">
                {labels.deliverables}
              </p>
              <p className="mt-3 text-body-sm text-primary-dark/60">
                {deliverables.join(" · ")}
              </p>

              <div className="mt-8 border-l-2 border-accent/40 pl-4">
                <p className="text-caption uppercase text-primary-dark/60">
                  {labels.next}
                </p>
                <p className="mt-2 text-body-sm text-primary-dark/70">{next}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
