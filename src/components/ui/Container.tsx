import type { ReactNode } from "react";

type Size = "default" | "narrow" | "prose";

const sizeStyles: Record<Size, string> = {
  default: "max-w-7xl",
  narrow: "max-w-5xl",
  prose: "max-w-copy",
};

interface ContainerProps {
  children: ReactNode;
  size?: Size;
  className?: string;
}

export default function Container({
  children,
  size = "default",
  className = "",
}: ContainerProps) {
  return (
    <div className={`mx-auto w-full px-6 lg:px-8 ${sizeStyles[size]} ${className}`}>
      {children}
    </div>
  );
}
