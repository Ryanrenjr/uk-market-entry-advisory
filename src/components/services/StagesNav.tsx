interface Stage {
  number: string;
  question: string;
}

interface StagesNavProps {
  label: string;
  stages: Stage[];
}

export default function StagesNav({ label, stages }: StagesNavProps) {
  return (
    <div>
      <p className="text-caption uppercase text-primary-dark/60">{label}</p>
      <ol className="mt-4 flex flex-wrap gap-3">
        {stages.map((stage) => (
          <li key={stage.number}>
            <a
              href={`#stage-${stage.number}`}
              className="inline-flex items-center gap-2 rounded-full border border-primary-dark/12 px-4 py-2 text-body-sm text-primary-dark/70 transition-colors hover:border-primary-dark/25 hover:text-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <span className="text-caption font-medium text-accent">
                {stage.number}
              </span>
              {stage.question}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}
