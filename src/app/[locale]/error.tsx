"use client";

import { useEffect } from "react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Section spacing="default">
      <Container size="narrow">
        <div className="text-center">
          <p className="text-eyebrow uppercase text-accent">Error</p>
          <h1 className="mt-4 text-balance font-display text-h1 text-primary-dark">
            Something went wrong.
          </h1>
          <p className="mt-4 text-body-lg text-primary-dark/70">
            An unexpected error occurred. Please try again — 出现意外错误，请重试。
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => retry()}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-dark px-7 py-3.5 text-sm font-medium tracking-wide text-white transition-all duration-200 ease-out hover:bg-secondary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Try again / 重试
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
