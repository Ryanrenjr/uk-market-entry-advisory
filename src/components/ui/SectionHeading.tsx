import type { ReactNode } from "react";

type Align = "left" | "center";

interface SectionHeadingProps {
  number?: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: Align;
  className?: string;
}

export default function SectionHeading({
  number,
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div className={`${isCentered ? "text-center" : ""} ${className}`}>
      {(number || eyebrow) && (
        <div
          className={`flex items-center gap-3 ${isCentered ? "justify-center" : ""}`}
        >
          {number && (
            <span className="text-caption tabular-nums text-primary-dark/60">
              {number}
            </span>
          )}
          {number && eyebrow && (
            <span aria-hidden className="h-px w-4 bg-primary-dark/20" />
          )}
          {eyebrow && (
            <p className="text-eyebrow uppercase text-accent">{eyebrow}</p>
          )}
        </div>
      )}
      <h2
        className={`text-balance font-display text-h2 text-primary-dark ${
          number || eyebrow ? "mt-3" : ""
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-body-lg text-primary-dark/60 ${
            isCentered ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
