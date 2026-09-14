import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";

const links = [
  { key: "services", href: "/services" },
  { key: "howWeWork", href: "/how-we-work" },
  { key: "insights", href: "/insights" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
] as const;

export default async function Footer() {
  const t = await getTranslations("Footer");
  const tNav = await getTranslations("Nav");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-primary-dark/8 bg-primary-dark text-white/70">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-2">
          <p className="text-base font-semibold text-white">London Thames International</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
            {t("tagline")}
          </p>
        </div>

        <div>
          <p className="text-eyebrow uppercase text-white/50">{t("quickLinks")}</p>
          <ul className="mt-4 space-y-3">
            {links.map((link) => (
              <li key={link.key}>
                <Link
                  href={link.href}
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  {tNav(link.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-eyebrow uppercase text-white/50">{t("contact")}</p>
          <ul className="mt-4 space-y-3 text-sm text-white/60">
            <li className="break-words">{t("email")}</li>
            <li>{t("location")}</li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 text-xs text-white/50 sm:flex-row">
          <p>{t("rights", { year })}</p>
        </Container>
      </div>
    </footer>
  );
}
