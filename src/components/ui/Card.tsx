import type { ReactNode } from "react";

type Padding = "sm" | "default" | "lg";

const paddingStyles: Record<Padding, string> = {
  sm: "p-6",
  default: "p-8",
  lg: "p-10",
};

interface CardProps {
  children: ReactNode;
  padding?: Padding;
  hover?: boolean;
  className?: string;
}

export default function Card({
  children,
  padding = "default",
  hover = false,
  className = "",
}: CardProps) {
  const hoverStyles = hover
    ? "transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-accent/30 hover:shadow-md hover:shadow-accent/[0.06] motion-reduce:hover:translate-y-0"
    : "";

  return (
    <div
      className={`rounded-2xl border border-primary-dark/8 bg-white ${paddingStyles[padding]} ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
}
