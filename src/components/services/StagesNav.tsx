"use client";

import { useEffect, useState } from "react";

interface Stage {
  number: string;
  question: string;
}

interface StagesNavProps {
  label: string;
  stages: Stage[];
}

export default function StagesNav({ label, stages }: StagesNavProps) {
  const [active, setActive] = useState(stages[0]?.number ?? "");

  useEffect(() => {
    const targets = stages
      .map((stage) => document.getElementById(`stage-${stage.number}`))
      .filter((el): el is HTMLElement => el !== null);

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          const id = visible[0].target.id.replace("stage-", "");
          setActive(id);
        }
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [stages]);

  return (
    <div className="sticky top-[72px] z-30 border-b border-primary-dark/8 bg-background/90 backdrop-blur-md">
      <div className="mx-auto w-full max-w-7xl px-6 py-4 lg:px-8">
        <p className="text-caption uppercase text-primary-dark/60">{label}</p>
        <ol className="mt-4 flex flex-wrap gap-3">
          {stages.map((stage) => {
            const isActive = active === stage.number;
            return (
              <li key={stage.number}>
                <a
                  href={`#stage-${stage.number}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-body-sm transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                    isActive
                      ? "border-primary-dark bg-primary-dark text-white shadow-sm"
                      : "border-primary-dark/12 text-primary-dark/70 hover:border-primary-dark/25 hover:text-primary-dark"
                  }`}
                >
                  <span
                    className={`text-caption font-medium ${isActive ? "text-accent-light" : "text-accent"}`}
                  >
                    {stage.number}
                  </span>
                  {stage.question}
                </a>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
