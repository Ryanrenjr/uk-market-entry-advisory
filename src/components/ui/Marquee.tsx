interface MarqueeProps {
  items: string[];
  label?: string;
}

export default function Marquee({ items, label }: MarqueeProps) {
  const track = [...items, ...items];

  return (
    <div className="border-y border-primary-dark/8 bg-white">
      <div className="mx-auto flex max-w-7xl items-center gap-8 px-6 py-5 lg:px-8">
        {label && (
          <span className="shrink-0 text-eyebrow uppercase text-primary-dark/60">
            {label}
          </span>
        )}
        <div className="group relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          <div className="flex w-max animate-marquee gap-14 group-hover:[animation-play-state:paused]">
            {track.map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="whitespace-nowrap text-body-sm font-medium text-primary-dark/60"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
