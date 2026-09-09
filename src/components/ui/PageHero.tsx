import type { ReactNode } from "react";
import Container from "./Container";
import Section from "./Section";

type Size = "default" | "hero";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  size?: Size;
  children?: ReactNode;
}

export default function PageHero({
  eyebrow,
  title,
  description,
  size = "default",
  children,
}: PageHeroProps) {
  return (
    <Section spacing="default" border>
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-eyebrow uppercase text-accent">{eyebrow}</p>
          <h1
            className={`mt-4 text-balance font-display text-primary-dark ${
              size === "hero" ? "text-display" : "text-h1"
            }`}
          >
            {title}
          </h1>
          <p className="mt-6 text-body-lg text-primary-dark/60">
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
