"use client";

import { useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Search } from "lucide-react";
import { Link } from "@/i18n/navigation";
import {
  insightCategories,
  type Locale,
  type ResolvedInsightArticle,
} from "@/content/insights";
import { formatArticleDate } from "@/lib/format";
import Tag from "@/components/ui/Tag";

interface InsightsExplorerProps {
  articles: ResolvedInsightArticle[];
}

function articleSearchText(article: ResolvedInsightArticle): string {
  const bodyText =
    article.body
      ?.flatMap((section) => [section.heading, ...section.paragraphs])
      .join(" ") ?? "";
  return `${article.title} ${article.summary} ${bodyText}`.toLowerCase();
}

export default function InsightsExplorer({ articles }: InsightsExplorerProps) {
  const t = useTranslations("InsightsPage");
  const locale = useLocale() as Locale;
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return articles.filter((article) => {
      const matchesCategory =
        !activeCategory || article.category === activeCategory;
      const matchesQuery =
        !normalizedQuery || articleSearchText(article).includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [articles, activeCategory, query]);

  return (
    <div>
      <div className="flex flex-col gap-6 border-b border-primary-dark/8 pb-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search
            aria-hidden
            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-primary-dark/60"
          />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t("toolbar.searchPlaceholder")}
            aria-label={t("toolbar.searchLabel")}
            className="w-full rounded-full border border-primary-dark/12 bg-white py-2.5 pl-10 pr-4 text-body-sm text-primary-dark placeholder:text-primary-dark/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveCategory(null)}
            aria-pressed={activeCategory === null}
            className={`rounded-full border px-4 py-2 text-body-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
              activeCategory === null
                ? "border-primary-dark bg-primary-dark text-white"
                : "border-primary-dark/12 text-primary-dark/70 hover:border-primary-dark/25 hover:text-primary-dark"
            }`}
          >
            {t("toolbar.allCategories")}
          </button>
          {insightCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={`rounded-full border px-4 py-2 text-body-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                activeCategory === category
                  ? "border-primary-dark bg-primary-dark text-white"
                  : "border-primary-dark/12 text-primary-dark/70 hover:border-primary-dark/25 hover:text-primary-dark"
              }`}
            >
              {t(`categories.${category}`)}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="py-16 text-center text-body-sm text-primary-dark/60">
          {t("empty.title")}
        </p>
      ) : (
        <div>
          {filtered.map((article) => (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
              className="group -mx-6 grid gap-4 border-b border-primary-dark/8 px-6 py-10 transition-colors duration-200 hover:bg-primary-dark/[0.02] focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent lg:-mx-8 lg:grid-cols-12 lg:gap-8 lg:px-8"
            >
              <div className="lg:col-span-3">
                <Tag tone="accent">{t(`categories.${article.category}`)}</Tag>
                {article.publishedAt && (
                  <p className="mt-3 text-caption text-primary-dark/60">
                    {formatArticleDate(article.publishedAt, locale)} ·{" "}
                    {t("card.readingTime", { minutes: article.readingTime })}
                  </p>
                )}
              </div>
              <div className="lg:col-span-9">
                <h2 className="font-display text-h3 text-primary-dark transition-colors duration-200 group-hover:text-accent">
                  {article.title}
                </h2>
                <p className="mt-3 max-w-2xl text-body-sm text-primary-dark/60">
                  {article.summary}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                  {t("card.readInsight")}
                  <span
                    aria-hidden
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
