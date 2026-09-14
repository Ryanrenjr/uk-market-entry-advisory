"use client";

import { useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Languages } from "lucide-react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

interface LanguageSwitcherProps {
  light?: boolean;
}

export default function LanguageSwitcher({ light = false }: LanguageSwitcherProps) {
  const t = useTranslations("LanguageSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function handleChange(nextLocale: (typeof routing.locales)[number]) {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <div
      className="flex items-center gap-1.5 text-sm"
      aria-label={t("label")}
    >
      <Languages
        className={`h-4 w-4 transition-colors duration-300 ${light ? "text-white/60" : "text-primary-dark/50"}`}
        aria-hidden
      />
      {routing.locales.map((loc, index) => (
        <span key={loc} className="flex items-center">
          {index > 0 && (
            <span className={`mx-1 transition-colors duration-300 ${light ? "text-white/30" : "text-primary-dark/20"}`}>
              /
            </span>
          )}
          <button
            type="button"
            onClick={() => handleChange(loc)}
            disabled={isPending}
            aria-current={locale === loc}
            className={`rounded-sm transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
              locale === loc
                ? light
                  ? "font-semibold text-white"
                  : "font-semibold text-primary-dark"
                : light
                  ? "text-white/70 hover:text-white"
                  : "text-primary-dark/60 hover:text-primary-dark"
            }`}
          >
            {t(loc)}
          </button>
        </span>
      ))}
    </div>
  );
}
