"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const photoHeroRoutes = [
    "/",
    "/about",
    "/services",
    "/how-we-work",
    "/insights",
    "/contact",
  ];
  const hasPhotoHero = photoHeroRoutes.includes(pathname);
  const light = hasPhotoHero && !scrolled && !open;

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? "border-primary-dark/8 bg-background/85 backdrop-blur-md"
          : "border-transparent bg-background/0"
      }`}
    >
      <Container className="flex h-18 items-center justify-between py-4">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className={`flex items-center gap-2.5 text-base font-semibold tracking-tight transition-colors duration-300 ${
            light ? "text-white" : "text-primary-dark"
          }`}
        >
          <Image
            src="/images/logo-mark.png"
            alt=""
            width={32}
            height={32}
            priority
            className={`rounded-full transition-colors duration-300 ${
              light ? "h-8 w-8 bg-white/95 p-1 shadow-sm" : "h-8 w-8"
            }`}
          />
          <span>London Thames International</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.key}
                href={item.href}
                className={`relative py-1 text-sm transition-colors duration-300 ${
                  isActive
                    ? light
                      ? "font-medium text-white"
                      : "font-medium text-primary-dark"
                    : light
                      ? "text-white/70 hover:text-white"
                      : "text-primary-dark/60 hover:text-primary-dark"
                }`}
              >
                {t(item.key)}
                <span
                  aria-hidden
                  className={`absolute -bottom-0.5 left-0 h-px w-full transition-opacity duration-200 ${
                    light ? "bg-accent-light" : "bg-accent"
                  } ${isActive ? "opacity-100" : "opacity-0"}`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <LanguageSwitcher light={light} />
          <Button
            href="/contact"
            variant={light ? "secondary" : "primary"}
            size="sm"
          >
            {t("cta")}
          </Button>
        </div>

        <button
          type="button"
          className={`inline-flex items-center justify-center rounded-md p-2 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:hidden ${
            light ? "text-white" : "text-primary-dark"
          }`}
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? t("closeMenu") : t("openMenu")}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-primary-dark/8 bg-background lg:hidden">
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
                size="sm"
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
