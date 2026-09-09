import type { ReactNode } from "react";

type Spacing = "default" | "tight" | "none";
type Background = "none" | "surface" | "dark";

const spacingStyles: Record<Spacing, string> = {
  default: "py-(--spacing-section-y)",
  tight: "py-(--spacing-section-y-sm)",
  none: "",
};

const backgroundStyles: Record<Background, string> = {
  none: "",
  surface: "bg-white",
  dark: "bg-primary-dark text-white",
};

interface SectionProps {
  children: ReactNode;
  spacing?: Spacing;
  background?: Background;
  border?: boolean;
  className?: string;
  id?: string;
}

export default function Section({
  children,
  spacing = "default",
  background = "none",
  border = false,
  className = "",
  id,
}: SectionProps) {
  const borderStyles = border
    ? background === "dark"
      ? "border-t border-white/10"
      : "border-t border-primary-dark/8"
    : "";

  return (
    <section
      id={id}
      className={`${spacingStyles[spacing]} ${backgroundStyles[background]} ${borderStyles} ${className}`}
    >
      {children}
    </section>
  );
}
