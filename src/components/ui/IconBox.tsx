import type { LucideIcon } from "lucide-react";

type Tone = "neutral" | "accent";
type Size = "default" | "lg";

const toneStyles: Record<Tone, string> = {
  neutral: "border-primary-dark/12 bg-white text-primary-dark",
  accent: "border-accent/20 bg-accent/5 text-accent",
};

const sizeStyles: Record<Size, { box: string; icon: string }> = {
  default: { box: "h-10 w-10", icon: "h-5 w-5" },
  lg: { box: "h-12 w-12", icon: "h-6 w-6" },
};

interface IconBoxProps {
  icon: LucideIcon;
  tone?: Tone;
  size?: Size;
  className?: string;
}

export default function IconBox({
  icon: Icon,
  tone = "neutral",
  size = "default",
  className = "",
}: IconBoxProps) {
  return (
    <div
      className={`inline-flex items-center justify-center rounded-xl border ${sizeStyles[size].box} ${toneStyles[tone]} ${className}`}
    >
      <Icon className={sizeStyles[size].icon} strokeWidth={1.75} aria-hidden />
    </div>
  );
}
