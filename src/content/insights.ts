export type Locale = "en" | "zh";

export const insightCategories = [
  "uk-market",
  "ecommerce",
  "compliance",
  "business-setup",
  "people-mobility",
] as const;

export type InsightCategory = (typeof insightCategories)[number];

interface LocalizedText {
  en: string;
  zh: string;
}

interface LocalizedSection {
  heading: LocalizedText;
  paragraphs: LocalizedText[];
}

export interface InsightArticleData {
  slug: string;
  category: InsightCategory;
  readingTime: number;
  title: LocalizedText;
  summary: LocalizedText;
  body?: LocalizedSection[];
}

export interface ResolvedInsightArticle {
  slug: string;
  category: InsightCategory;
  readingTime: number;
  title: string;
  summary: string;
  body?: { heading: string; paragraphs: string[] }[];
}

const articles: InsightArticleData[] = [
  {
    slug: "validating-product-market-fit-before-entering-the-uk",
    category: "uk-market",
    readingTime: 6,
    title: {
      en: "How to Validate Product-Market Fit Before Entering the UK",
      zh: "进入英国之前，如何验⁠证产品是否真的有市⁠场",
    },
    summary: {
      en: "Before committing to channels or stock, there are a small number of signals worth checking first — and a few common mistakes worth avoiding.",
      zh: "在投入渠道或备货之前，有几个关键信号值得先确认，也有几个常见误区值得提前避开。",
    },
    body: [
      {
        heading: {
          en: "Start with demand, not with a store.",
          zh: "先看需求，而不是先开店。",
        },
        paragraphs: [
          {
            en: "Many Chinese businesses treat \"entering the UK\" as synonymous with opening a channel — an Amazon UK listing, a TikTok Shop, a website. But a channel is not a market. Before any of that, the real question is simpler: does UK demand for this specific product actually exist, at a price and margin that make sense.",
            zh: "很多中国企业把「进入英国」等同于开通一个渠道——一个 Amazon UK listing、一个 TikTok Shop，或一个独立站。但渠道不等于市场。在此之前，真正需要回答的问题很简单：这个具体产品在英国是否真的存在需求，价格与利润空间是否合理。",
          },
        ],
      },
      {
        heading: {
          en: "Signals worth checking early.",
          zh: "值得优先确认的早期信号。",
        },
        paragraphs: [
          {
            en: "A handful of early indicators tend to be more reliable than intuition: comparable products already selling in the UK, search and category demand data, the density and pricing of existing competitors, and whether the product's positioning translates without significant adaptation.",
            zh: "相比直觉判断，几个早期指标往往更可靠：英国市场上是否已有可比产品在售、搜索与品类需求数据、现有竞争者的密度与定价，以及产品定位是否无需大幅调整就能被当地消费者理解。",
          },
        ],
      },
      {
        heading: {
          en: "Where assumptions usually go wrong.",
          zh: "最容易出错的几个假设。",
        },
        paragraphs: [
          {
            en: "Three patterns come up repeatedly: assuming that a product's success in another market — China, the US, or elsewhere in Europe — will transfer directly; assuming price expectations are similar to the domestic market; and assuming a product is compliant simply because it is sold elsewhere, when UK-specific regulation may say otherwise.",
            zh: "有三种情况反复出现：假设产品在其他市场（中国、美国，或欧洲其他国家）的成功可以直接复制到英国；假设英国消费者的价格预期与国内市场相似；以及假设产品既然能在其他地方销售，就自然符合英国的合规要求——而实际情况往往并非如此。",
          },
        ],
      },
      {
        heading: {
          en: "What a validation exercise should produce.",
          zh: "一次真正有效的验证，应该产出什么。",
        },
        paragraphs: [
          {
            en: "The output of this stage should not be a vague sense of optimism. It should be a clear view of demand, competitive positioning, likely margin after landed cost and platform fees, and an honest read on compliance exposure — enough to make a GO, TEST FIRST, or NO-GO decision with confidence.",
            zh: "这一阶段的结果，不应该只是一种模糊的乐观判断，而应该清楚呈现：需求情况、竞争定位、扣除到岸成本与平台费用后的实际利润空间，以及对合规风险的真实评估——足以支撑一个有信心的 GO、先测试，或 NO-GO 决策。",
          },
        ],
      },
      {
        heading: {
          en: "The next step depends on the answer.",
          zh: "下一步，取决于验证结果。",
        },
        paragraphs: [
          {
            en: "A strong signal usually leads into a structured entry roadmap. A mixed signal is often better served by a short, real-world market test before committing further. And occasionally, the most useful outcome is deciding not to proceed — which is itself a valuable result of getting the sequence right.",
            zh: "如果信号积极，通常可以进入结构化的市场进入路线图；如果信号并不明确，更稳妥的做法往往是先做一次真实的市场测试，再决定是否进一步投入；而有时候，最有价值的结论，是决定暂不进入——这本身，也是把顺序做对之后才能得到的重要结果。",
          },
        ],
      },
    ],
  },
  {
    slug: "amazon-uk-tiktok-shop-or-dtc-choosing-the-right-channel",
    category: "ecommerce",
    readingTime: 5,
    title: {
      en: "Amazon UK, TikTok Shop or DTC: Choosing the Right Entry Channel",
      zh: "进入英国，Amazon、TikTok Shop还是独⁠立⁠站？",
    },
    summary: {
      en: "Each channel suits a different kind of product, brand stage and operating capability — the right starting point depends on more than which platform is trending.",
      zh: "每个渠道适合的产品类型、品牌阶段与运营能力都不同——选对起点，需要考虑的不只是哪个平台正在流行。",
    },
  },
  {
    slug: "what-chinese-manufacturers-underestimate-about-the-uk-market",
    category: "uk-market",
    readingTime: 6,
    title: {
      en: "What Chinese Manufacturers Often Underestimate About the UK Market",
      zh: "中国制造商进入英国最容易低估的几个问题",
    },
    summary: {
      en: "Product quality and price competitiveness are rarely the deciding factor — the gaps that catch manufacturers out are usually elsewhere.",
      zh: "产品质量与价格优势往往不是决定成败的关键——真正容易被低估的问题，通常出现在别的地方。",
    },
  },
  {
    slug: "vat-eori-and-uk-market-entry",
    category: "compliance",
    readingTime: 7,
    title: {
      en: "VAT, EORI and UK Market Entry: What Businesses Need to Understand",
      zh: "进入英国市场前，VAT与EORI应该怎么理解",
    },
    summary: {
      en: "Two acronyms that are easy to underestimate — a plain-language overview of what they mean for a business entering the UK.",
      zh: "两个容易被忽视的关键概念——用简明的语言，解释它们对进入英国市场的企业究竟意味着什么。",
    },
  },
  {
    slug: "when-does-a-chinese-business-need-a-uk-company",
    category: "business-setup",
    readingTime: 5,
    title: {
      en: "When Does a Chinese Business Actually Need a UK Company?",
      zh: "中国企业什么时候真的需要英国公司？",
    },
    summary: {
      en: "Setting up a UK entity is a significant step — not always a necessary one, and not always the first one.",
      zh: "注册英国公司是重要的一步，但并非总是必要的一步，也未必是最先要做的一步。",
    },
  },
  {
    slug: "why-we-prefer-a-30-day-market-test-before-scaling",
    category: "uk-market",
    readingTime: 5,
    title: {
      en: "Why We Prefer a 30-Day Market Test Before Scaling",
      zh: "为什么我们建议先做30⁠天市场验证",
    },
    summary: {
      en: "Plans and research can only go so far — a short, structured test against real market behaviour tends to be more reliable than either.",
      zh: "计划和研究只能说明一部分问题——一次结构化的短期真实市场测试，往往比两者都更可靠。",
    },
  },
];

function resolve(article: InsightArticleData, locale: Locale): ResolvedInsightArticle {
  return {
    slug: article.slug,
    category: article.category,
    readingTime: article.readingTime,
    title: article.title[locale],
    summary: article.summary[locale],
    body: article.body?.map((section) => ({
      heading: section.heading[locale],
      paragraphs: section.paragraphs.map((p) => p[locale]),
    })),
  };
}

export function getAllInsightSlugs(): string[] {
  return articles.map((article) => article.slug);
}

export function getInsightArticles(locale: Locale): ResolvedInsightArticle[] {
  return articles.map((article) => resolve(article, locale));
}

export function getInsightArticle(
  locale: Locale,
  slug: string,
): ResolvedInsightArticle | undefined {
  const found = articles.find((article) => article.slug === slug);
  return found ? resolve(found, locale) : undefined;
}
