import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

interface InlineLinkProps {
  href: string;
  children: string;
  className?: string;
}

export default function InlineLink({ href, children, className = "" }: InlineLinkProps) {
  const baseClasses =
    "group inline-flex items-center gap-1.5 rounded-sm text-sm font-medium text-accent transition-colors hover:text-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
  const classes = `${baseClasses} ${className}`;
  const content = (
    <>
      {children}
      <ArrowRight
        className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
        aria-hidden
      />
    </>
  );

  if (href.startsWith("#")) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
