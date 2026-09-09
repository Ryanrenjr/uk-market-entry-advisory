import type { ReactNode } from "react";

type Tone = "outline" | "neutral" | "accent";

const toneStyles: Record<Tone, string> = {
  outline: "border border-primary-dark/12 text-primary-dark/70",
  neutral: "border border-transparent bg-primary-dark/5 text-primary-dark/70",
  accent: "border border-accent/15 bg-accent/8 text-accent",
};

interface TagProps {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}

export default function Tag({ children, tone = "outline", className = "" }: TagProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-caption font-medium ${toneStyles[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
