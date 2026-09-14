interface HeroVisualProps {
  origin: string;
  destination: string;
  nodes: string[];
}

export default function HeroVisual({ origin, destination, nodes }: HeroVisualProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white p-8 shadow-2xl shadow-primary-dark/40 sm:p-10">
      <div
        aria-hidden
        className="bg-grid-dots pointer-events-none absolute inset-0 text-primary-dark/[0.05]"
      />

      <div className="relative flex items-center justify-between">
        <span className="text-eyebrow uppercase text-primary-dark/60">
          {origin}
        </span>
        <span aria-hidden className="h-px flex-1 mx-4 bg-primary-dark/8" />
        <span className="text-eyebrow uppercase text-accent">
          {destination}
        </span>
      </div>

      <ol className="relative mt-10">
        {nodes.map((label, index) => {
          const isLast = index === nodes.length - 1;
          return (
            <li key={label} className="relative flex items-start gap-4 pb-8 last:pb-0">
              <span className="relative mt-1.5 flex h-3 w-3 shrink-0 items-center justify-center">
                {isLast && (
                  <span
                    aria-hidden
                    className="animate-pulse-ring absolute h-3 w-3 rounded-full bg-accent"
                  />
                )}
                <span
                  className={`relative h-2.5 w-2.5 rounded-full border-2 bg-white ${
                    isLast ? "border-accent" : "border-primary-dark/30"
                  }`}
                />
                {!isLast && (
                  <span
                    aria-hidden
                    className="absolute left-1/2 top-3 h-9 w-px -translate-x-1/2 bg-primary-dark/12"
                  />
                )}
              </span>
              <span
                className={`text-body-sm ${
                  isLast ? "font-medium text-primary-dark" : "text-primary-dark/70"
                }`}
              >
                {label}
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
