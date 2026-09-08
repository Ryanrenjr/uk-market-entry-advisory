import type { ReactNode } from "react";
import Container from "./Container";
import Section from "./Section";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}

export default function PageHero({
  eyebrow,
  title,
  description,
  children,
}: PageHeroProps) {
  return (
    <Section className="border-b border-primary-dark/10">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-primary-dark sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-6 text-base leading-relaxed text-primary-dark/60">
            {description}
          </p>
          {children && (
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              {children}
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}
