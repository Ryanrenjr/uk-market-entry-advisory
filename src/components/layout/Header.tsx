"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import LanguageSwitcher from "./LanguageSwitcher";

const navItems = [
  { key: "services", href: "/services" },
  { key: "howWeWork", href: "/how-we-work" },
  { key: "insights", href: "/insights" },
  { key: "about", href: "/about" },
] as const;

export default function Header() {
  const t = useTranslations("Nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-primary-dark/10 bg-background/90 backdrop-blur-sm">
      <Container className="flex h-18 items-center justify-between py-4">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="text-base font-semibold tracking-tight text-primary-dark"
        >
          LeoVisa
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.key}
                href={item.href}
                className={`text-sm transition-colors ${
                  isActive
                    ? "font-medium text-primary-dark"
                    : "text-primary-dark/60 hover:text-primary-dark"
                }`}
              >
                {t(item.key)}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <LanguageSwitcher />
          <Button href="/contact" variant="primary" className="text-xs">
            {t("cta")}
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-primary-dark lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-primary-dark/10 bg-background lg:hidden">
          <Container className="flex flex-col gap-4 py-6">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm text-primary-dark/80"
              >
                {t(item.key)}
              </Link>
            ))}
            <div className="flex items-center justify-between pt-2">
              <LanguageSwitcher />
              <Button
                href="/contact"
                variant="primary"
                className="text-xs"
                onClick={() => setOpen(false)}
              >
                {t("cta")}
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
