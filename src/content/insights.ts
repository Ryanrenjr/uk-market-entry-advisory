export type Locale = "en" | "zh";

export const insightCategories = [
  "uk-market",
  "ecommerce",
  "compliance",
  "business-setup",
  "people-mobility",
] as const;

export type InsightCategory = (typeof insightCategories)[number];

export type InsightStatus = "published" | "draft";

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
  status: InsightStatus;
  /** ISO date (YYYY-MM-DD). Set only once the article is actually published. */
  publishedAt?: string;
  /** ISO date (YYYY-MM-DD). Set only when the article content is substantively revised. */
  updatedAt?: string;
  title: LocalizedText;
  summary: LocalizedText;
  body?: LocalizedSection[];
}

export interface ResolvedInsightArticle {
  slug: string;
  category: InsightCategory;
  readingTime: number;
  status: InsightStatus;
  publishedAt?: string;
  updatedAt?: string;
  title: string;
  summary: string;
  body?: { heading: string; paragraphs: string[] }[];
}

const articles: InsightArticleData[] = [
  {
    slug: "validating-product-market-fit-before-entering-the-uk",
    category: "uk-market",
    readingTime: 6,
    status: "published",
    publishedAt: "2026-09-17",
    title: {
      en: "How to Validate Product-Market Fit Before Entering the UK",
      zh: "进入英国之前，如何判断产品是否真的有市场",
    },
    summary: {
      en: "Before committing stock, marketing budget or local infrastructure, the commercial question comes first: can this product find enough demand in the UK, at a price and margin that make the opportunity worth pursuing?",
      zh: "在投入大量库存、营销预算或本地基础设施之前，更重要的问题应该先被回答：这个产品在英国是否存在足够的真实需求？以当地能够接受的价格销售后，利润空间是否仍然成立？",
    },
    body: [
      {
        heading: {
          en: "Overview.",
          zh: "概述。",
        },
        paragraphs: [
          {
            en: "Entering the UK is not the same as opening a UK sales channel. Amazon UK, TikTok Shop, a DTC website or a retail distributor are routes to market; they are not evidence that the market itself is attractive.",
            zh: "进入英国，不等于开一个英国销售渠道。Amazon UK、TikTok Shop、独立站或线下经销，只是不同的进入路径，它们本身并不能证明这个市场值得投入。",
          },
          {
            en: "Before committing meaningful stock, marketing budget or local infrastructure, the commercial question comes first: can this product find enough demand in the UK, at a price and margin that make the opportunity worth pursuing?",
            zh: "在投入大量库存、营销预算或本地基础设施之前，更重要的问题应该先被回答：这个产品在英国是否存在足够的真实需求？以当地能够接受的价格销售后，利润空间是否仍然成立？",
          },
          {
            en: "A useful market-entry assessment should reduce that question into a small number of testable areas.",
            zh: "一次真正有价值的英国市场进入诊断，应该把这个大问题拆成几个可以验证的商业判断。",
          },
        ],
      },
      {
        heading: {
          en: "Start with demand, not with a store.",
          zh: "先判断需求，而不是先选平台。",
        },
        paragraphs: [
          {
            en: "The first question is not \"Which platform should we launch on?\" It is whether enough relevant demand exists for the product in the first place.",
            zh: "第一个问题不应该是\"我们先做 Amazon 还是 TikTok Shop\"，而应该是：这个产品在英国是否真的存在足够的相关需求。",
          },
          {
            en: "That means looking beyond headline market size. Useful early signals can include the presence of comparable products, category and search demand, customer problems already being addressed, seasonality, review activity and the maturity of existing sellers.",
            zh: "这里不能只看一个宏观市场规模数字。更值得关注的是可比产品是否已经形成稳定销售、品类和搜索需求是否存在、消费者正在解决什么问题、需求是否存在明显季节性，以及现有品牌和卖家的成熟程度。",
          },
          {
            en: "The aim is not to prove that \"the UK market is large.\" The aim is to understand whether this specific product, at this specific positioning, has a credible place within it.",
            zh: "目标不是证明\"英国市场很大\"，而是判断：你的这个具体产品、以这个具体定位进入英国时，是否有一个合理的位置。",
          },
          {
            en: "A product can perform well in China, the United States or another European market and still require a different proposition in Britain. Customer expectations, price tolerance, product language, pack size, channel behaviour and competitive benchmarks may all differ.",
            zh: "一个产品即使在中国、美国或欧洲其他市场表现很好，也不能直接假设英国结果相同。消费者预期、价格接受度、产品表达、规格、渠道习惯与竞争基准，都可能发生变化。",
          },
        ],
      },
      {
        heading: {
          en: "Understand the competitive position, not just the competitors.",
          zh: "不只是看竞争对手，而是判断自己的竞争位置。",
        },
        paragraphs: [
          {
            en: "A competitor list is useful, but it is not enough.",
            zh: "列出十几个竞争对手很容易，但这还不是竞争分析。",
          },
          {
            en: "What matters is where the product would sit relative to the alternatives already available — including which price bands are crowded, where the strongest products appear differentiated, how established the leading listings or brands already are, what customers repeatedly praise or complain about, and whether there is a clear reason to choose this product at the intended price.",
            zh: "真正需要回答的是：你的产品进入以后，会处在什么位置？例如哪些价格带已经非常拥挤、头部产品真正依靠什么形成差异、主要品牌或 listing 已经积累了多强的市场优势、消费者反复表扬或抱怨的问题是什么，以及按照计划中的售价，消费者为什么应该选择你的产品。",
          },
          {
            en: "This is where an apparently attractive category can become less attractive. High demand may already be captured by mature competitors with thousands of reviews, strong retail relationships or economics that are difficult for a new entrant to match.",
            zh: "有些品类看起来需求很大，但头部竞争者已经拥有大量评论、稳定渠道关系或更强的成本结构，新进入者并不一定有合理的切入空间。",
          },
          {
            en: "Equally, a competitive market is not automatically a bad market. Competition can confirm that demand exists. The real question is whether there is a commercially defensible position for a new entrant.",
            zh: "反过来，有竞争也并不意味着这个市场不能进入。竞争往往恰恰说明需求真实存在。关键是：新进入者有没有一个商业上能够站得住的位置。",
          },
        ],
      },
      {
        heading: {
          en: "Test the unit economics before testing the marketing.",
          zh: "先把单位经济模型算清楚，再谈营销。",
        },
        paragraphs: [
          {
            en: "Revenue is not the same as commercial viability.",
            zh: "有销售额，不等于这个市场值得做。",
          },
          {
            en: "A UK selling price needs to support the full cost of reaching the customer. Depending on the route to market, that can include product cost, freight, duties where applicable, VAT treatment, platform fees, fulfilment, returns, promotional spend, payment costs and customer acquisition.",
            zh: "英国终端售价必须能够覆盖产品真正到达消费者之前发生的完整成本。根据渠道不同，其中可能包括产品成本、国际运输、可能涉及的关税、VAT 处理、平台费用、仓储履约、退货、推广、支付费用以及获客成本等。",
          },
          {
            en: "This is why a product that looks attractive at factory cost can look very different after it is landed and sold in Britain.",
            zh: "这也是为什么一个在出厂价层面看起来利润非常好的产品，真正落地英国后，可能变成完全不同的一笔账。",
          },
          {
            en: "Before a launch, we want to understand at least three things: the realistic selling-price range, the likely cost structure at that price, and the margin left after the costs that actually matter.",
            zh: "进入市场前，至少应该回答三个问题：英国市场现实可接受的售价区间是多少，在这个售价下完整成本结构是什么，以及扣除真正需要发生的成本后还能留下多少利润空间。",
          },
          {
            en: "If the economics only work under an optimistic selling price or an unrealistically low marketing cost, that is an important signal before inventory is committed.",
            zh: "如果一套商业模型只有在非常乐观的售价、非常低的推广成本下才能成立，那么在备货之前知道这一点，比上线之后再发现要便宜得多。",
          },
        ],
      },
      {
        heading: {
          en: "Treat compliance as a commercial variable.",
          zh: "把合规当成商业变量，而不是最后的手续。",
        },
        paragraphs: [
          {
            en: "Compliance should not be an afterthought added once the sales plan is complete.",
            zh: "合规不应该等销售方案全部确定以后才被补上。",
          },
          {
            en: "Different product categories can bring different requirements around documentation, labelling, testing, claims, packaging or responsible parties. The exact obligations depend on the product and how it is placed on the market, so specialist advice may be needed.",
            zh: "不同产品类别可能涉及不同的文件、标签、测试、产品声明、包装或责任主体要求，具体义务也取决于产品类别与进入市场的方式，因此某些项目需要相应专业人士进一步确认。",
          },
          {
            en: "From a market-entry perspective, the important point is commercial: does the compliance burden change the time, cost or practicality of entering the UK?",
            zh: "从市场进入的角度，我们更关心的是：这些合规要求会不会改变进入英国的时间、成本或实际可行性。",
          },
          {
            en: "A product may have attractive demand but still require additional testing, documentation changes or packaging work before it can be launched appropriately. Those requirements belong in the entry decision, not in a checklist completed at the end.",
            zh: "一个产品可能有不错的市场需求，但如果正式销售前还需要补充测试、修改包装或准备额外文件，这些成本和时间就应该被纳入最初的商业判断，而不是上线前最后一刻才处理。",
          },
        ],
      },
      {
        heading: {
          en: "Choose the channel after understanding the product.",
          zh: "先理解产品，再决定渠道。",
        },
        paragraphs: [
          {
            en: "Amazon UK, TikTok Shop, DTC and retail are not interchangeable launch options.",
            zh: "Amazon UK、TikTok Shop、独立站和零售渠道，并不是可以随意互换的几个按钮。",
          },
          {
            en: "A search-led product with clear existing demand may behave very differently from a discovery-led product that needs demonstration, education or creator content. A high-consideration product may need more trust and explanation than a low-cost impulse purchase. A brand with strong repeat purchase economics may justify DTC investment that would make little sense for another category.",
            zh: "搜索驱动型产品和需要内容种草、展示教育的产品，适合的渠道可能完全不同；高客单、需要较强信任的产品，与低价格冲动型消费品的进入逻辑也不一样；高复购品牌可能有能力支撑独立站获客，而另一些品类做 DTC 可能并不划算。",
          },
          {
            en: "The right question is therefore not which platform is growing fastest, but which channel gives this product the best chance to reach the right customer with workable economics.",
            zh: "所以真正应该问的不是哪个平台现在最火，而是哪个渠道最有可能让这个产品，以可持续的成本触达到正确的英国消费者。",
          },
          {
            en: "Sometimes that means one primary channel. Sometimes it means a small test across two routes. Sometimes the right answer is to delay channel investment until the offer itself has been adapted.",
            zh: "有时候答案是一个核心渠道；有时候应该用两个渠道做小规模验证；也有时候，最合理的决定是先调整产品方案，而不是马上投入任何平台。",
          },
        ],
      },
      {
        heading: {
          en: "End with a decision, not a report.",
          zh: "最终应该得到一个决定，而不只是一份报告。",
        },
        paragraphs: [
          {
            en: "A market-entry assessment should not finish with fifty pages of information and no clear conclusion. It should produce a decision framework.",
            zh: "市场诊断不应该以几十页信息结束，却没有明确结论。它最终应该帮助企业做出决策。",
          },
          {
            en: "We generally think in three broad outcomes: GO, where the evidence is strong enough to justify moving into structured entry planning; TEST FIRST, where the opportunity is credible but one or more important assumptions should be tested with real market behaviour before larger investment; and NO-GO or PAUSE, where the current proposition does not support further investment without a significant change in product, price, positioning or economics.",
            zh: "我们通常把结果理解为三类：进入（GO），现有证据已经足以支持进入下一阶段，开始制定正式的英国市场进入路线图；先测试（TEST FIRST），市场机会存在，但仍有一个或几个关键假设需要通过真实市场行为验证，再决定是否扩大投入；暂不进入或暂停（NO-GO / PAUSE），按照当前产品、价格、定位或成本结构，继续投入的商业依据不足，需要先调整方案。",
          },
          {
            en: "A no-go result is not a failed project. Avoiding the wrong inventory, channel or infrastructure commitment can be one of the most valuable outcomes of the assessment.",
            zh: "\"暂不进入\"并不意味着项目失败。避免错误的备货、渠道投入或本地基础设施成本，本身就是一次有价值的市场判断。",
          },
        ],
      },
      {
        heading: {
          en: "The purpose of validation is to improve the next decision.",
          zh: "市场验证的目的，是让下一步决策更好。",
        },
        paragraphs: [
          {
            en: "No desk-based assessment can remove every uncertainty. That is not the objective.",
            zh: "任何桌面研究都不可能消除所有不确定性，这也不是市场诊断真正的目标。",
          },
          {
            en: "The objective is to separate the questions that can be answered through research from the questions that need real-world testing — and to avoid spending heavily before the important assumptions have been examined.",
            zh: "真正的目标，是区分哪些问题可以通过研究回答，哪些问题必须放到真实市场中测试，并避免企业在关键假设还没有被验证之前就投入过多资源。",
          },
          {
            en: "A strong signal should lead to a structured UK market-entry roadmap. A mixed signal is often better followed by a controlled market test. And when the evidence does not support the opportunity, the right decision may simply be to stop, adapt and reassess.",
            zh: "如果市场信号清晰，下一步应该进入结构化的英国市场进入路线图；如果机会存在但证据不完整，可以进行一次可控的真实市场测试；如果证据并不支持当前方案，那么停止、调整后再重新判断，同样是一种正确的结果。",
          },
          {
            en: "Good market entry is not about moving fastest. It is about reducing the cost of being wrong.",
            zh: "好的市场进入，不是比谁走得最快，而是尽量降低\"判断错了\"的成本。",
          },
        ],
      },
    ],
  },
  {
    slug: "amazon-uk-tiktok-shop-or-dtc-choosing-the-right-channel",
    category: "ecommerce",
    readingTime: 5,
    status: "published",
    publishedAt: "2026-09-17",
    title: {
      en: "Amazon UK, TikTok Shop or DTC: Choosing the Right Entry Channel",
      zh: "Amazon UK、TikTok Shop还是独立站？第一步应该怎么选",
    },
    summary: {
      en: "Each channel suits a different kind of product, brand stage and operating capability — the right starting point depends on more than which platform is trending.",
      zh: "每个渠道适合的产品类型、品牌阶段与运营能力都不同——选对起点，需要考虑的不只是哪个平台正在流行。",
    },
    body: [
      {
        heading: {
          en: "Overview.",
          zh: "概述。",
        },
        paragraphs: [
          {
            en: "The question is not which channel is best. Amazon UK, TikTok Shop and a direct-to-consumer website solve different commercial problems, and a channel that performs well for one product can perform poorly for another at a similar price point.",
            zh: "问题从来不是哪个渠道最好。Amazon UK、TikTok Shop 和独立站解决的是不同的商业问题，同一个价格带的两个产品，换一个渠道，结果可能完全不同。",
          },
          {
            en: "Choosing a channel before understanding how the product is actually bought — searched for, discovered, compared, trusted — tends to produce disappointing results even when the underlying product is sound.",
            zh: "在真正理解这个产品是怎么被购买的——是被搜索出来的、被刷到的、被比较出来的，还是被信任出来的——之前就选定渠道，即使产品本身没有问题，结果往往也不会理想。",
          },
        ],
      },
      {
        heading: {
          en: "Search-led demand behaves differently from discovery-led demand.",
          zh: "搜索型需求和发现型需求，逻辑完全不同。",
        },
        paragraphs: [
          {
            en: "Amazon UK is largely a search-led channel. Customers arrive already knowing roughly what they want and compare listings on price, reviews, specification and delivery speed. This rewards products with clear, comparable value and a track record of reviews.",
            zh: "Amazon UK 本质上是一个搜索型渠道。消费者进来的时候，通常已经大致知道自己想买什么，然后在价格、评价、参数和配送速度上做比较。这更适合价值点清晰、容易横向对比、并且已经积累了一定评价的产品。",
          },
          {
            en: "TikTok Shop is largely a discovery-led channel. Demand is created in the moment, often before the customer was looking for the product at all. This favours products that demonstrate well on video, solve a visible problem quickly, or benefit from a creator explaining why they matter.",
            zh: "TikTok Shop 更多是一个发现型渠道。需求往往是被当场创造出来的，消费者在刷到之前，可能根本没有想过要买这个东西。这更适合那些在视频里演示效果好、能快速解决一个看得见的问题，或者需要达人解释清楚价值的产品。",
          },
          {
            en: "A DTC website can serve either behaviour, but it depends on the business bringing its own traffic — through paid acquisition, content, email or an existing audience. Without that traffic, a DTC site is a well-built shop with no footfall.",
            zh: "独立站两种需求都能承接，但前提是企业自己能带来流量——通过付费广告、内容、邮件营销，或已有的用户基础。如果没有这些流量来源，独立站更像一个装修很好但没有客流的门店。",
          },
        ],
      },
      {
        heading: {
          en: "Does the product need to be seen to be understood?",
          zh: "这个产品是不是需要被看见，才能被理解？",
        },
        paragraphs: [
          {
            en: "Some products sell adequately from a static image and a specification list. Others only make sense in motion — showing how something is used, how it fits, or what problem it solves before and after. The more a product depends on demonstration, the more content-native channels like TikTok Shop tend to outperform search-only listings.",
            zh: "有些产品，靠一张静态图片和一份参数表就足以卖出去；但有些产品，只有在动态展示中才讲得清楚——怎么用、怎么装、用前用后的差别是什么。一个产品越依赖演示，像 TikTok Shop 这样以内容为主的渠道，往往就越有优势，单靠搜索型 listing 很难讲清楚。",
          },
        ],
      },
      {
        heading: {
          en: "Price point and margin change what a channel can absorb.",
          zh: "价格与利润空间，决定了一个渠道能不能撑得住。",
        },
        paragraphs: [
          {
            en: "Marketplace and creator-driven channels both carry costs — platform commission, advertising, sometimes affiliate or creator fees — that need to be absorbed inside the selling price. A low average selling price with thin margin leaves very little room for the acquisition cost that a discovery-led channel usually requires.",
            zh: "无论是平台型渠道还是达人驱动型渠道，都有各自的成本——平台佣金、广告投放，有时候还包括分佣或达人费用，这些成本最终都要从售价里消化。如果客单价低、利润空间本来就薄，留给获客成本的空间就会非常有限，而发现型渠道往往正好需要比较高的获客投入。",
          },
          {
            en: "A higher-margin, higher-consideration product can often justify the acquisition cost of a discovery-led channel, or the investment required to build an owned DTC audience. A low-margin, low-consideration product usually cannot — which tends to push it toward search-led marketplaces instead.",
            zh: "利润空间更高、决策周期也更长的产品，往往能够承担发现型渠道的获客成本，或者投入资源去搭建独立站自己的用户群。而利润薄、决策很轻的产品，通常承担不起这些成本——这类产品更适合走搜索型的平台渠道。",
          },
        ],
      },
      {
        heading: {
          en: "Brand maturity changes what is realistic.",
          zh: "品牌的成熟程度，决定了现实中能做到什么。",
        },
        paragraphs: [
          {
            en: "A new brand with no UK reviews, no repeat customers and no existing audience is starting from very little trust. Marketplaces can partially substitute for that trust through reviews and ratings. DTC cannot — it depends on the brand already having some credibility, or building it through paid content before a website can convert efficiently.",
            zh: "一个在英国还没有评价、没有回头客、也没有 existing 受众的新品牌，起点的信任基础非常薄弱。平台渠道可以通过评价和星级部分弥补这种信任缺口；独立站则很难做到这一点——它更依赖品牌本身已经具备一定可信度，或者先通过内容投放积累信任，独立站才有可能有效转化。",
          },
          {
            en: "Brands with strong repeat-purchase economics — where a customer is likely to buy again — can justify a heavier upfront investment in owning that relationship through DTC. Brands selling a largely one-off product usually cannot recover that investment as easily.",
            zh: "复购经济性强的品牌——也就是消费者很可能会再次购买——可以为了掌握这段客户关系，承担更高的前期独立站投入。而主要卖一次性产品的品牌，通常很难在合理时间内收回这笔前期投入。",
          },
        ],
      },
      {
        heading: {
          en: "Operational capability is part of the decision, not an afterthought.",
          zh: "运营能力是决策的一部分，而不是事后才考虑的事。",
        },
        paragraphs: [
          {
            en: "Fulfilment expectations differ by channel. Marketplaces often have strict delivery-speed and service-level requirements. Discovery-led sales can arrive in unpredictable bursts around a viral moment, which strains fulfilment and customer service if the business is not prepared for it. A DTC site places the entire fulfilment and support burden directly on the business, with no marketplace infrastructure to fall back on.",
            zh: "不同渠道对履约的要求也不一样。平台型渠道通常对配送时效和服务水平有比较严格的要求；发现型渠道的订单可能会围绕某个爆款时刻突然集中涌入，如果企业没有提前准备，仓储和客服很容易被打乱。而独立站则把整个履约和客服的压力都直接放在企业自己身上，没有平台的基础设施可以依靠。",
          },
          {
            en: "Content capability matters just as much as logistics. A channel like TikTok Shop requires a continuous supply of short-form content, ideally produced quickly and cheaply enough to test multiple angles. A business without that capability — in-house or through partners — will struggle to sustain a discovery-led channel regardless of how suitable the product is.",
            zh: "内容生产能力和物流能力同样重要。像 TikTok Shop 这样的渠道，需要持续供应短视频内容，而且最好能够快速、低成本地测试不同的角度。如果企业没有这样的内容生产能力——无论是自建团队还是靠合作伙伴——即使产品本身适合，也很难真正撑起一个发现型渠道。",
          },
        ],
      },
      {
        heading: {
          en: "Who owns the customer relationship.",
          zh: "谁真正拥有这段客户关系。",
        },
        paragraphs: [
          {
            en: "Marketplaces own the customer relationship. The business gains a sale, but rarely a durable, addressable relationship with that customer beyond the platform. TikTok Shop sits somewhere between the two — a creator or the platform algorithm often mediates discovery, even where the transaction happens on-platform. A DTC website is the only route where the business fully owns the customer data and the relationship going forward.",
            zh: "平台渠道拥有的是客户关系。企业获得的是一次交易，而很少能获得一段可以在平台之外持续触达的客户关系。TikTok Shop 介于两者之间——即使交易发生在平台内，达人或平台算法往往仍然主导着发现的过程。只有独立站，企业才能真正拥有客户数据，并长期掌握这段关系。",
          },
          {
            en: "That matters most for brands planning to build long-term customer value in the UK. It matters less for a business simply testing whether UK demand exists for a product before deciding anything else.",
            zh: "对于计划在英国长期沉淀客户价值的品牌来说，这一点非常重要；但对于只是想先验证英国是否存在需求、其他决定都还没有做的企业来说，这一点的重要性会低很多。",
          },
        ],
      },
      {
        heading: {
          en: "A simple decision framework.",
          zh: "一个简单的决策框架。",
        },
        paragraphs: [
          {
            en: "Start by asking whether the product is more naturally searched for or more naturally discovered. Then ask whether the price and margin can absorb the acquisition cost the preferred channel typically requires. Then be honest about fulfilment and content capability — a channel that is theoretically right but operationally unworkable is not actually the right channel yet.",
            zh: "第一步，先判断这个产品更容易被搜索出来，还是更容易被发现出来。第二步，判断价格和利润空间能不能承担该渠道通常需要的获客成本。第三步，诚实地评估履约和内容生产能力——一个理论上适合、但运营上根本做不到的渠道，其实并不是真正适合的渠道。",
          },
          {
            en: "In practice, many businesses start with one primary channel, treat it as a controlled test, and only add a second channel once the first is generating reliable, well-understood signals. Spreading a limited budget and limited operational capacity across three channels at once rarely produces a clear result in any of them.",
            zh: "在实际操作中，很多企业会先从一个主要渠道开始，把它当作一次可控的测试，等第一个渠道跑出稳定、可以解读的信号之后，再考虑加入第二个渠道。把有限的预算和运营能力同时分散到三个渠道上，往往哪个渠道都得不出清晰的结果。",
          },
        ],
      },
    ],
  },
  {
    slug: "what-chinese-manufacturers-underestimate-about-the-uk-market",
    category: "uk-market",
    readingTime: 5,
    status: "published",
    publishedAt: "2026-09-17",
    title: {
      en: "What Chinese Manufacturers Often Underestimate About the UK Market",
      zh: "中国制造商进入英国，最容易低估的几个问题",
    },
    summary: {
      en: "Product quality and price competitiveness are rarely the deciding factor — the gaps that catch manufacturers out are usually elsewhere.",
      zh: "产品质量与价格优势往往不是决定成败的关键——真正容易被低估的问题，通常出现在别的地方。",
    },
    body: [
      {
        heading: {
          en: "Overview.",
          zh: "概述。",
        },
        paragraphs: [
          {
            en: "Manufacturers moving from domestic or wholesale supply into direct UK selling often underestimate how many separate layers sit between the retail price a customer pays and the profit the business actually keeps. The gap is rarely one big surprise — it is usually several smaller ones stacking together.",
            zh: "从内销或批发供应转向英国直接零售的制造商，往往低估了从消费者支付的零售价，到企业实际留下的利润之间，中间隔着多少层。真正的落差很少是某一个大意外造成的，通常是好几个小问题叠加在一起的结果。",
          },
          {
            en: "None of these gaps are unique to any one manufacturer. They are structural features of selling into a market from a distance, and they are worth naming individually rather than folding into a vague sense that \"the UK is different.\"",
            zh: "这些落差不是某一家制造商特有的问题，而是从远距离进入一个市场时的结构性特征。与其笼统地归结为\"英国市场不一样\"，不如把它们一个一个拆开来看。",
          },
        ],
      },
      {
        heading: {
          en: "Retail price is not the same as available margin.",
          zh: "零售价，不等于可用的利润空间。",
        },
        paragraphs: [
          {
            en: "A product priced competitively against UK alternatives can still leave very little for the manufacturer once every cost between factory and customer is accounted for. The retail price is the top line; what matters commercially is what remains after landed cost, channel fees, fulfilment, marketing, returns and operating overhead.",
            zh: "一个在英国市场上定价具有竞争力的产品，扣除从工厂到消费者之间的所有成本后，留给制造商的可能所剩无几。零售价只是最上面那一层数字；真正对商业决策有意义的，是扣除到岸成本、渠道费用、履约、营销、退货和运营开支之后，还能剩下多少。",
          },
          {
            en: "This is why two products with an identical UK retail price can have completely different commercial outcomes for the manufacturer, depending on how each layer of cost is structured underneath.",
            zh: "这也是为什么两个在英国零售价完全相同的产品，最终对制造商来说，商业结果可能天差地别——差别就在于下面每一层成本是怎么构成的。",
          },
          {
            en: "Consider two manufacturers each selling a £25 product into the UK. One has priced with a healthy factory margin but has not yet accounted for VAT, marketplace fees, fulfilment or returns; the other has built all of these into its cost model from the start. Both can quote the same headline margin internally — only one of them has a model that survives contact with a real UK sale.",
            zh: "假设两家制造商都以£25的价格向英国销售同一类产品。一家在出厂环节留出了不错的利润空间，却还没有把 VAT、平台费用、履约和退货算进去；另一家从一开始就把这些都纳入了成本模型。两家企业内部报出来的利润率数字可能完全一样——但只有一家的模型，真正经得起一笔真实英国订单的检验。",
          },
        ],
      },
      {
        heading: {
          en: "VAT, import costs and fulfilment sit underneath the price, not on top of it.",
          zh: "VAT、进口成本与履约费用，都藏在价格之下，而不是价格之外。",
        },
        paragraphs: [
          {
            en: "Depending on how a product is sold and who is treated as the importer, VAT and import costs may need to be built into the retail price rather than added afterward — UK consumer prices are generally VAT-inclusive. Getting this sequencing wrong at the planning stage is a common source of a pricing model that looks profitable on paper and is not in practice.",
            zh: "根据产品的销售方式和谁被认定为进口方，VAT 和进口相关成本往往需要被计算进零售价本身，而不是事后再加上去——英国消费者看到的价格通常已经含税。在规划阶段如果把这个顺序搞错，很容易做出一个账面上看起来盈利、实际却站不住脚的定价模型。",
          },
          {
            en: "Fulfilment adds a further, often underestimated layer — storage, pick-and-pack, last-mile delivery and the platform's own fulfilment fees where a marketplace programme is used. These costs scale with volume in ways that are easy to model too optimistically before real sales data exists.",
            zh: "履约环节又是另一层经常被低估的成本——仓储、揀选打包、最后一公里配送，以及如果使用平台履约项目，还包括平台自身的履约费用。这些成本会随着销量变化，在还没有真实销售数据之前，很容易被过于乐观地估算。",
          },
        ],
      },
      {
        heading: {
          en: "Returns are a UK-specific cost, not a rounding error.",
          zh: "退货是一项英国市场特有的成本，不是可以忽略的小数点。",
        },
        paragraphs: [
          {
            en: "UK consumers, particularly in categories like apparel, footwear and homeware, return goods at rates that can materially affect unit economics. A return is not just lost revenue — it involves reverse logistics, restocking or write-off, and sometimes a refunded platform fee that is not fully recovered.",
            zh: "英国消费者，尤其是在服装、鞋类和家居品类中，退货率可能高到足以实质影响单位经济模型。一次退货损失的不只是收入——还涉及逆向物流、重新上架或报废，有时候平台费用也无法完全退回。",
          },
          {
            en: "A manufacturer that has only sold wholesale or B2B domestically may not have priced returns into the model at all, because the concept barely existed in that channel. Selling direct to UK consumers usually requires building a realistic returns rate into the pricing from the start.",
            zh: "如果制造商此前主要做的是内销批发或 B2B 业务，很可能从来没有把退货计入过定价模型，因为在那种渠道里，退货几乎不是一个概念。而直接面向英国消费者销售，通常需要从一开始就把一个现实的退货率算进定价里。",
          },
        ],
      },
      {
        heading: {
          en: "Marketing and acquisition cost is frequently underpriced in the plan.",
          zh: "营销与获客成本，在方案里经常被低估。",
        },
        paragraphs: [
          {
            en: "A product with no existing UK reviews or brand recognition typically needs a meaningful marketing investment simply to become visible, let alone to convert. Business plans built primarily around the product's manufacturing cost advantage sometimes leave this line almost blank, treating visibility as something that happens on its own.",
            zh: "一个在英国还没有任何评价、也没有品牌认知度的产品，通常需要一定的营销投入才能被看见，更不用说转化。有些商业计划主要围绕制造成本优势展开，却几乎没有认真填过营销这一栏，仿佛曝光会自己发生。",
          },
          {
            en: "The cost of this gap is not always obvious immediately. A product can sell reasonably in the first weeks on the strength of an initial promotional push, then slow sharply once that spend is reduced — revealing that the underlying, sustainable acquisition cost was never actually modelled.",
            zh: "这个落差的代价，不一定会立刻显现出来。一个产品可能在最初几周，靠着上线时的推广投入卖得还不错，但一旦这笔预算减少，销量就明显放缓——这时候才发现，真正可持续的获客成本，其实从来没有被认真测算过。",
          },
        ],
      },
      {
        heading: {
          en: "Compliance can change the timeline and cost, not only the paperwork.",
          zh: "合规改变的是时间和成本，而不只是文件。",
        },
        paragraphs: [
          {
            en: "Depending on the product category, requirements around labelling, testing, documentation or responsible-person arrangements can add weeks to a launch timeline and real cost to the budget. Treating compliance as a final checklist rather than an input to the launch date is a common planning error.",
            zh: "根据产品类别不同，标签、测试、文件或责任人安排等方面的要求，可能会让上市时间延后数周，并带来实实在在的预算成本。把合规当成最后一步的检查清单，而不是纳入上市时间规划的一个输入变量，是一个常见的规划失误。",
          },
          {
            en: "A product that is fully compliant for sale in its domestic market is not automatically compliant for the UK. Reviewing this early, alongside pricing and channel planning, avoids a launch date that has to move because a requirement was discovered late.",
            zh: "一个在本国市场完全合规的产品，并不会自动在英国市场也同样合规。把合规审查提前到和定价、渠道规划同步进行，可以避免因为某项要求发现得太晚，而不得不推迟上市日期的情况。",
          },
        ],
      },
      {
        heading: {
          en: "Positioning has to be re-earned in the UK, not re-used.",
          zh: "定位需要在英国重新建立，而不是直接照搬。",
        },
        paragraphs: [
          {
            en: "A positioning that works domestically — built on price, specification or a particular quality signal — does not automatically transfer. UK buyers evaluate products against a different set of existing alternatives, review norms and price anchors. The commercial argument for the product often needs to be reconstructed for the UK context, not simply translated.",
            zh: "在国内市场有效的定位——建立在价格、参数或某种品质信号之上——并不会自动迁移到英国。英国消费者是在一套不同的替代品、评价习惯和价格锚点下做判断的。这个产品的商业说服力，往往需要针对英国的语境重新构建，而不只是把文案翻译过去。",
          },
          {
            en: "A specification that reads as a strong selling point domestically — a particular certification, a familiar brand heritage, a locally recognised standard — may carry little meaning to a UK buyer who has never encountered it. Re-earning positioning sometimes means finding a different, locally legible way to make the same underlying claim.",
            zh: "在国内市场是有力卖点的某个参数——某项认证、一段熟悉的品牌历史，或者某个本地公认的标准——对从未接触过它的英国消费者来说，可能几乎没有意义。重新建立定位，有时候意味着要为同一个底层价值主张，找到一种英国消费者能看懂的表达方式。",
          },
        ],
      },
      {
        heading: {
          en: "Operating complexity compounds rather than adds.",
          zh: "运营复杂度是叠加的，不是简单相加的。",
        },
        paragraphs: [
          {
            en: "Each layer above — VAT treatment, fulfilment, returns, marketing, compliance, positioning — is manageable in isolation. The difficulty is that they interact: a compliance delay pushes back a marketing calendar; a higher-than-expected return rate changes the true acquisition cost; a fulfilment choice affects delivery speed, which affects marketplace ranking. Underestimating the UK market is rarely about missing one factor. It is usually about underestimating how many of these move together.",
            zh: "上面这些环节——VAT 处理、履约、退货、营销、合规、定位——单独来看都是可以管理的。真正的难点在于它们会相互影响：合规延迟会打乱营销节奏；退货率高于预期会改变真实的获客成本；履约方式的选择会影响配送速度，进而影响平台排名。低估英国市场，很少是因为漏算了某一个因素，更多时候是低估了这些因素会同时联动。",
          },
        ],
      },
    ],
  },
  {
    slug: "vat-eori-and-uk-market-entry",
    category: "compliance",
    readingTime: 5,
    status: "published",
    publishedAt: "2026-09-17",
    title: {
      en: "VAT, EORI and UK Market Entry: What Businesses Need to Understand",
      zh: "VAT、EORI与英国市场进入：第一次做英国业务前要弄清什么",
    },
    summary: {
      en: "Two acronyms that are easy to underestimate — a plain-language overview of what they mean for a business entering the UK.",
      zh: "两个容易被忽视的关键概念——用简明的语言，解释它们对进入英国市场的企业究竟意味着什么。",
    },
    body: [
      {
        heading: {
          en: "Overview.",
          zh: "概述。",
        },
        paragraphs: [
          {
            en: "VAT and EORI are two of the first acronyms a business hears when it starts selling into the UK, and they are often mentioned in the same breath — which can create the impression that they are the same thing, or that every business needs both from day one. Neither is accurate. They are separate systems, serving separate purposes, and the right answer for a specific business depends on how it is structured and how it plans to sell.",
            zh: "VAT 和 EORI 是企业开始向英国销售时最早听到的两个缩写词，而且经常被放在一起提到——这很容易让人误以为两者是同一件事，或者认为每个企业从第一天起就都需要同时拥有两者。这两种印象都不准确。它们是两套独立的制度，服务于不同的目的，具体一家企业需要什么，取决于它的架构和销售方式。",
          },
          {
            en: "This article explains what each system is for, and the factors that typically determine whether and how they apply — without attempting to give a definitive answer for any individual business. VAT and customs rules depend on specific facts, and the authoritative source for current rules is UK government guidance, not a general article.",
            zh: "本文会解释这两套制度分别是做什么用的，以及通常会影响它们是否适用、如何适用的关键因素——但不会针对任何具体企业给出确定性的结论。VAT 与海关相关规则取决于具体的事实情况，权威依据应以英国政府现行指引为准，而不是一篇通用性文章。",
          },
        ],
      },
      {
        heading: {
          en: "VAT is a tax on the transaction, not a registration you either have or don't.",
          zh: "VAT 是针对交易本身的税，不是一个\"有或没有\"的简单开关。",
        },
        paragraphs: [
          {
            en: "Value Added Tax is charged on most goods and services sold in the UK. UK consumer prices are generally VAT-inclusive, which means VAT is embedded in the price a customer sees rather than added separately at checkout in the way US sales tax often is.",
            zh: "增值税（VAT）针对大多数在英国销售的商品和服务征收。英国消费者看到的价格通常已经含税，也就是说 VAT 已经包含在消费者看到的价格里，而不是像美国的销售税那样，在结账时单独另加。",
          },
          {
            en: "Whether a specific business needs to register for VAT is a separate question from whether VAT applies to the transaction at all. A business can be liable to account for VAT on UK sales through a marketplace's own VAT mechanism in some circumstances, without necessarily needing its own UK VAT registration — and in other circumstances registration is required directly. Which situation applies depends on facts specific to the business.",
            zh: "某笔具体业务是否需要注册 VAT，和这笔交易本身是否涉及 VAT，是两个不同的问题。在某些情况下，企业在英国的销售可能通过平台自身的 VAT 处理机制来承担相应税务责任，不一定需要企业自己单独注册英国 VAT；而在另一些情况下，则需要企业直接注册。具体适用哪种情况，取决于企业自身的具体情况。",
          },
        ],
      },
      {
        heading: {
          en: "Whether registration is required depends on establishment and turnover — and the rules differ for overseas businesses.",
          zh: "是否需要注册，取决于企业的\"设立地\"和营业额——海外企业适用的规则并不相同。",
        },
        paragraphs: [
          {
            en: "UK-established businesses are generally required to register for VAT once their taxable turnover passes a registration threshold, which is set and periodically reviewed by HMRC. That figure changes over time, so it should always be checked directly against current HMRC guidance rather than relied on from an older source, including this one.",
            zh: "在英国设立的企业，通常需要在其应税营业额超过一个注册门槛后完成 VAT 注册，这个门槛由 HMRC（英国税务海关总署）设定并会定期调整。这个具体数字会随时间变化，因此应该始终以 HMRC 当前的官方指引为准，而不是依赖包括本文在内的任何旧资料。",
          },
          {
            en: "For businesses that are not established in the UK, the position is often different: an overseas business selling goods into the UK may face VAT registration obligations that are not tied to the same turnover threshold that applies to UK-established businesses. This is one of the most common points of confusion for businesses entering the UK from abroad, and it is worth confirming specifically rather than assuming the domestic threshold applies.",
            zh: "对于没有在英国设立的企业来说，情况通常有所不同：一家从海外向英国销售商品的企业，其 VAT 注册义务，未必与适用于英国本土企业的那个营业额门槛挂钩。这是海外企业进入英国市场时最容易产生混淆的地方之一，值得专门确认清楚，而不是想当然地套用本土企业的门槛。",
          },
        ],
      },
      {
        heading: {
          en: "EORI is about moving goods across a customs border, not about tax on the sale.",
          zh: "EORI 解决的是货物跨境流转的问题，而不是销售环节的税务问题。",
        },
        paragraphs: [
          {
            en: "An Economic Operators Registration and Identification (EORI) number is a customs identifier used when goods cross a border where customs controls apply. It is primarily relevant to businesses that import goods into the UK, or move goods between Great Britain and other customs territories, rather than to the sale itself.",
            zh: "EORI（经济经营者注册识别号）本质上是一个海关识别编号，用于货物跨越需要接受海关监管的边境时使用。它主要与\"把货物运进英国\"或\"在英国与其他关税领土之间移动货物\"这类行为相关，而不是与销售这个动作本身相关。",
          },
          {
            en: "A business that only ever sells goods already located inside the UK — for example, goods already held in a UK warehouse under a marketplace's fulfilment programme — may have a different EORI requirement than a business that is itself importing goods from overseas on each order. Who is legally acting as the importer of the goods is often the deciding factor.",
            zh: "如果一家企业只销售已经存放在英国境内的货物——例如通过平台履约项目、已经存放在英国仓库的库存——它的 EORI 相关要求，可能与那些需要在每一笔订单中自行从海外进口货物的企业不同。谁在法律上被认定为货物的\"进口方\"，往往是决定性因素。",
          },
        ],
      },
      {
        heading: {
          en: "Great Britain and Northern Ireland are not automatically the same for these purposes.",
          zh: "大不列颠（GB）与北爱尔兰（NI），在这方面并不完全一样。",
        },
        paragraphs: [
          {
            en: "The UK's customs and VAT arrangements are not entirely uniform across the whole of the United Kingdom. Goods movements involving Northern Ireland can be subject to different rules and different EORI arrangements than movements solely within Great Britain, reflecting Northern Ireland's distinct position for trade purposes.",
            zh: "英国的海关与 VAT 安排，在整个联合王国范围内并不完全统一。涉及北爱尔兰的货物流转，可能适用与仅在大不列颠境内流转不同的规则和不同的 EORI 安排，这与北爱尔兰在贸易层面的特殊地位有关。",
          },
          {
            en: "A business planning to sell or move goods into or via Northern Ireland should treat this as a distinct question, rather than assuming that whatever applies to Great Britain automatically applies there too.",
            zh: "如果企业计划向北爱尔兰销售或经由北爱尔兰流转货物，应该把这当作一个单独的问题来对待，而不是假设适用于大不列颠的规则，会自动同样适用于北爱尔兰。",
          },
        ],
      },
      {
        heading: {
          en: "The sales structure chosen changes the answer.",
          zh: "选择怎样的销售结构，会直接改变答案。",
        },
        paragraphs: [
          {
            en: "Selling through a UK marketplace fulfilment programme, selling direct from an overseas warehouse, appointing a UK importer of record, or using a third-party UK fulfilment provider are all different structures, and each can carry different VAT and customs consequences. There is rarely a single \"correct\" structure in the abstract — the right choice depends on volume, product category, margin and how much operational complexity the business is ready to take on.",
            zh: "通过英国平台的履约项目销售、直接从海外仓库发货、指定一个英国进口方（importer of record），或者使用第三方英国履约服务商——这些都是不同的销售结构，每一种在 VAT 和海关层面可能带来不同的结果。抽象来说，很少存在一个\"唯一正确\"的结构——具体选哪种，取决于销量、产品类别、利润空间，以及企业愿意承担多少运营复杂度。",
          },
        ],
      },
      {
        heading: {
          en: "In practice, before the first UK sale.",
          zh: "在第一笔英国订单之前，实际应该做什么。",
        },
        paragraphs: [
          {
            en: "Before committing to a specific sales structure, it is worth mapping out clearly: who will be treated as the importer of the goods, where the goods will physically be held, which marketplace or channel rules apply, and what the resulting VAT and EORI position looks like under that specific structure. This is a factual exercise that benefits from being done early, rather than resolved after stock has already arrived.",
            zh: "在确定具体销售结构之前，值得先把以下几件事想清楚：谁将被认定为货物的进口方、货物实际会存放在哪里、适用哪个平台或渠道的规则，以及在这种具体结构下，VAT 和 EORI 的情况会是怎样的。这是一项基于事实的梳理工作，最好尽早进行，而不是等货已经到了英国之后才去弄清楚。",
          },
        ],
      },
      {
        heading: {
          en: "Where the structure is unclear, this is a question for a qualified adviser.",
          zh: "如果结构还不清晰，这应该交给具备相应资质的专业人士来判断。",
        },
        paragraphs: [
          {
            en: "VAT and customs obligations depend on specific facts, are subject to change, and carry real consequences for getting them wrong. Where a business's structure is unclear, or where more than one of the scenarios above could plausibly apply, the appropriate next step is advice from a qualified UK tax or customs professional, and confirmation against current HMRC guidance — not a general assumption based on how another business's situation was handled.",
            zh: "VAT 与海关相关义务取决于具体事实，规则也会发生变化，一旦处理错误会带来实际后果。如果企业自身的结构还不清晰，或者上述多种情况都有可能适用，恰当的下一步是寻求具备相应资质的英国税务或海关专业人士的意见，并以 HMRC 当前的官方指引为准——而不是简单参照其他企业的处理方式来推断自己的情况。",
          },
        ],
      },
    ],
  },
  {
    slug: "when-does-a-chinese-business-need-a-uk-company",
    category: "business-setup",
    readingTime: 5,
    status: "published",
    publishedAt: "2026-09-17",
    title: {
      en: "When Does a Chinese Business Actually Need a UK Company?",
      zh: "中国企业什么时候真的需要一家英国公司？",
    },
    summary: {
      en: "Setting up a UK entity is a significant step — not always a necessary one, and not always the first one.",
      zh: "注册英国公司是重要的一步，但并非总是必要的一步，也未必是最先要做的一步。",
    },
    body: [
      {
        heading: {
          en: "Overview.",
          zh: "概述。",
        },
        paragraphs: [
          {
            en: "A UK limited company is often treated as the default first step for a Chinese business entering the UK — something to set up early, almost as a formality, before anything else happens. In practice, a UK company is a meaningful commitment with ongoing filing, reporting and governance obligations, and it is not always the right first move.",
            zh: "很多中国企业进入英国时，会默认把注册一家英国有限公司当作第一步——几乎当成一个前置手续，在其他事情都还没开始之前先做掉。但实际上，注册一家英国公司是一项有实质意义的承诺，伴随持续的申报、报告和治理义务，它并不总是应该迈出的第一步。",
          },
          {
            en: "The more useful question is not \"should we eventually have a UK company\" — for a business seriously pursuing the UK, the answer is often yes eventually — but \"do we need one now, for what we are actually trying to do at this stage.\"",
            zh: "更值得问的问题，不是\"我们最终要不要有一家英国公司\"——对于真正认真投入英国市场的企业来说，最终的答案往往是需要的——而是\"以我们现在实际要做的事情来看，现在就需要吗\"。",
          },
        ],
      },
      {
        heading: {
          en: "Testing UK demand does not, by itself, require a UK company.",
          zh: "单纯测试英国市场需求，本身并不需要一家英国公司。",
        },
        paragraphs: [
          {
            en: "A business validating whether UK demand exists for a product — through a controlled market test, a marketplace listing, or a small initial run through a UK fulfilment provider — can often do so without a UK entity. Many marketplace selling arrangements and fulfilment services are available to overseas companies directly.",
            zh: "企业如果只是想验证英国市场对某个产品是否存在需求——通过一次可控的市场测试、一个平台 listing，或者借助英国履约服务商做一次小规模试销——往往并不需要一个英国主体。很多平台销售安排和履约服务，本身就是面向海外公司直接开放的。",
          },
          {
            en: "Incorporating a UK company before this question has been answered adds cost and ongoing obligation to a stage of the business where the priority should be learning as cheaply and quickly as possible whether the opportunity is real.",
            zh: "在这个问题还没有得到答案之前就急着注册英国公司，会在这个阶段增加成本和持续性义务，而这个阶段本应该优先做的，是用尽可能低的成本、尽可能快地弄清楚这个机会是不是真实存在。",
          },
        ],
      },
      {
        heading: {
          en: "Marketplace selling and direct importing raise a different set of questions.",
          zh: "平台销售和直接进口，涉及的是另一组问题。",
        },
        paragraphs: [
          {
            en: "Selling through a UK marketplace programme, or importing goods directly into the UK, involves questions about VAT treatment, customs and who is acting as the importer of record — separate questions from whether a UK company needs to exist. A business can, in some structures, sell into the UK or import goods without a UK-incorporated entity, depending on how the arrangement is structured.",
            zh: "通过英国平台项目销售，或者直接把货物进口到英国，涉及的是 VAT 处理、海关和谁是进口方这些问题——这些和\"是否需要一家英国公司存在\"是不同的问题。在某些结构下，企业不需要一个在英国注册成立的实体，也可以向英国销售或进口货物，具体取决于安排的方式。",
          },
          {
            en: "This is also where the structure chosen for VAT and customs purposes interacts with the UK company question. The two decisions are related, but they are not the same decision, and one does not automatically dictate the other.",
            zh: "这里也涉及到 VAT 和海关结构方面的选择——这个问题和是否需要英国公司是相关的，但并不是同一个决定，其中一个的答案，不会自动决定另一个。",
          },
        ],
      },
      {
        heading: {
          en: "Hiring people or contracting directly with UK customers changes the picture.",
          zh: "在英国雇人，或直接与英国客户签约，会改变情况。",
        },
        paragraphs: [
          {
            en: "The calculation shifts once a business wants to employ people in the UK, sign UK-law commercial contracts in its own name, hold a UK bank account for operating purposes, or take on UK liabilities directly. These activities are where a UK entity — whether a fully incorporated company or a registered branch of the overseas company — usually becomes genuinely relevant rather than optional.",
            zh: "一旦企业希望在英国雇佣员工、以自己的名义签署适用英国法律的商业合同、开立用于日常运营的英国银行账户，或者直接承担英国境内的法律责任，情况就会发生变化。这些活动，通常才是一个英国主体——无论是完全注册成立的公司，还是海外公司在英国注册的分支机构——真正变得必要，而不只是可选的地方。",
          },
          {
            en: "Even here, there can be more than one route. Some businesses use an employer-of-record arrangement to employ a UK-based person without first incorporating their own UK entity, as an interim step. This is a structural choice with its own trade-offs, not a shortcut that avoids the underlying question of what the business actually needs long-term.",
            zh: "即便到了这一步，路径也不止一种。有些企业会先通过 Employer of Record（名义雇主）安排来雇佣英国本地人员，作为在自己注册英国实体之前的过渡方案。这本身是一种有取舍的结构性选择，而不是一个能绕开\"企业长期到底需要什么\"这个根本问题的捷径。",
          },
        ],
      },
      {
        heading: {
          en: "A physical UK presence changes the calculation further.",
          zh: "拥有实体的英国存在，会进一步改变这个判断。",
        },
        paragraphs: [
          {
            en: "Opening a UK office, warehouse or showroom, or running local commercial operations with UK-based staff and management, generally points toward needing a formal UK presence of some kind. At this stage the more useful question usually becomes which structure — a subsidiary, a branch, or another arrangement — rather than whether a structure is needed at all.",
            zh: "开设英国办公室、仓库或展示空间，或者由英国本地员工和管理团队运营本地商业活动，通常意味着确实需要某种正式的英国存在。到了这个阶段，更值得讨论的问题往往变成了应该选择哪种结构——子公司、分支机构，还是其他安排——而不再是要不要有这个结构。",
          },
          {
            en: "It is also worth separating the desire for a UK presence from the need for one. A showroom or office can be a genuine commercial asset for building trust with UK buyers, but it is a choice made for commercial reasons, not something automatically required simply because a business is selling into the UK.",
            zh: "同时也值得把\"想要有英国存在\"和\"需要有英国存在\"区分开来。展示空间或办公室，对于与英国买家建立信任来说，可以是真正有价值的商业资产，但这是出于商业考虑做出的选择，而不是因为企业在向英国销售，就自动必须具备的条件。",
          },
        ],
      },
      {
        heading: {
          en: "Investor and customer expectations are a separate, legitimate factor.",
          zh: "投资人与客户的期望，是另一个合理的考量因素。",
        },
        paragraphs: [
          {
            en: "Some UK customers, particularly larger retailers or institutional buyers, may prefer or require a UK-registered counterparty for contracting purposes. Some investors expect a UK holding structure as part of a funding round. These are legitimate commercial reasons to consider a UK entity earlier than the operational triggers above would otherwise suggest — worth weighing, but distinct from a legal requirement.",
            zh: "一些英国客户，尤其是规模较大的零售商或机构买家，可能更倾向于、甚至要求签约对手是一家在英国注册的主体。一些投资人在融资时，也可能期望看到某种英国控股架构。这些都是合理的商业考量，可能让企业比上面提到的运营触发点更早考虑设立英国主体——值得权衡，但这和法律上的强制要求是两回事。",
          },
        ],
      },
      {
        heading: {
          en: "Three different things get conflated, and they shouldn't be.",
          zh: "有三件不同的事情经常被混为一谈，其实不应该。",
        },
        paragraphs: [
          {
            en: "Incorporating a new UK limited company, registering an overseas company's UK establishment or branch, and simply selling into the UK as a foreign business are three distinct positions with different obligations and different purposes. Selling to UK customers, on its own, does not automatically require incorporating a UK limited company — the correct structure depends on how the business plans to operate, not simply on the fact that it has UK customers.",
            zh: "注册一家全新的英国有限公司、把海外公司在英国登记为\"分支机构\"或\"英国机构\"，以及作为外国企业单纯向英国销售——这是三种不同的情况，各自的义务和目的都不一样。单纯向英国客户销售，本身并不会自动要求企业注册一家英国有限公司——正确的结构取决于企业打算如何运营，而不只是因为它有了英国客户这一个事实。",
          },
          {
            en: "In practice, this means a business can be selling successfully into the UK, generating real revenue, and still have no UK-incorporated entity at all — and that can be entirely appropriate, provided the underlying VAT, customs and contractual questions have been properly worked through for that specific structure.",
            zh: "在实际操作中，这意味着一家企业完全可以已经在英国成功销售、产生真实收入，却仍然没有任何在英国注册成立的实体——只要与这种具体结构相关的 VAT、海关和合同问题都已经处理妥当，这完全可以是合适的安排。",
          },
        ],
      },
      {
        heading: {
          en: "A practical way to think about timing.",
          zh: "一个实用的判断时机的方法。",
        },
        paragraphs: [
          {
            en: "A reasonable approach is to treat UK incorporation as a decision tied to a specific operational trigger — hiring, direct contracting, a physical presence, or a clear investor/customer requirement — rather than a symbolic first step taken to signal commitment. The right structure, and the right timing, depend on the specific business and should be confirmed with a qualified UK corporate or tax adviser rather than assumed from general practice.",
            zh: "一个比较合理的做法，是把英国公司注册和具体的运营触发点绑定在一起——雇人、直接签约、实体存在，或明确的投资人 / 客户要求——而不是把它当成一个用来表态\"我们是认真的\"的象征性第一步。具体应该选择什么结构、什么时机注册，取决于每家企业自身的情况，应该向具备相应资质的英国公司法或税务顾问确认，而不是套用一般性做法。",
          },
        ],
      },
    ],
  },
  {
    slug: "why-we-prefer-a-30-day-market-test-before-scaling",
    category: "uk-market",
    readingTime: 5,
    status: "published",
    publishedAt: "2026-09-17",
    title: {
      en: "Why We Prefer a 30-Day Market Test Before Scaling",
      zh: "为什么我们建议先做30天市场测试，再决定是否扩大投入",
    },
    summary: {
      en: "Plans and research can only go so far — a short, structured test against real market behaviour tends to be more reliable than either.",
      zh: "计划和研究只能说明一部分问题——一次结构化的短期真实市场测试，往往比两者都更可靠。",
    },
    body: [
      {
        heading: {
          en: "Overview.",
          zh: "概述。",
        },
        paragraphs: [
          {
            en: "Research can tell us what should happen. A product with strong comparable demand, reasonable pricing and no obvious compliance issues looks, on paper, like it should sell. Whether it actually does — at what price, through what message, to which customers — is a different question, and one that only real market behaviour can answer.",
            zh: "研究能告诉我们理论上应该发生什么。一个有可比需求、定价合理、也没有明显合规问题的产品，账面上看起来应该能卖得动。但它实际上到底卖不卖得动——以什么价格、用什么话术、卖给哪些客户——是另一个问题，只有真实的市场表现才能回答。",
          },
          {
            en: "This is why we generally prefer a short, controlled market test before larger investment, rather than moving straight from research into full-scale launch.",
            zh: "这也是为什么我们通常建议在加大投入之前，先做一次短期、可控的市场测试，而不是直接从研究阶段跳到全面上线。",
          },
        ],
      },
      {
        heading: {
          en: "Pricing response is a live signal, not a spreadsheet assumption.",
          zh: "价格反应是一个真实的现场信号，而不是表格里的假设。",
        },
        paragraphs: [
          {
            en: "A pricing model built from research and competitor benchmarking is an informed estimate. Real customers responding to a real price — clicking through, abandoning at checkout, comparing against a specific competitor listing next to it — tell us something research alone cannot: whether the specific price, in the specific context it is shown, actually converts.",
            zh: "一个基于研究和竞品对标搭建出来的定价模型，只是一个有依据的估算。而真实客户对真实价格的反应——点进来、结账时放弃、和旁边某个具体竞品做比较——能告诉我们一些光靠研究得不到的信息：这个具体价格，在具体展示场景下，到底转不转化。",
          },
        ],
      },
      {
        heading: {
          en: "Conversion tells you whether the offer works, not just whether the product is good.",
          zh: "转化率反映的是这个方案是否成立，而不只是产品好不好。",
        },
        paragraphs: [
          {
            en: "A product can be genuinely good and still convert poorly because of how it is presented — the images, the copy, the reviews it has or hasn't accumulated yet, the price anchor next to it. A market test separates \"is the product wrong\" from \"is the offer wrong,\" which is very difficult to do from research alone.",
            zh: "一个产品本身可能确实不错，但因为呈现方式的问题——图片、文案、还没积累起来的评价、旁边的价格锚点——转化率依然很差。市场测试能够把\"产品不对\"和\"方案不对\"这两件事区分开来，而这一点，光靠研究是很难做到的。",
          },
          {
            en: "This distinction changes what happens next. If the product itself is the problem, no amount of copywriting or creative iteration will fix it, and that is valuable to know quickly. If the offer is the problem, a market test usually points fairly directly at what to change — the images, the price framing, the trust signals — without requiring a wholesale rethink of the product.",
            zh: "这个区分会直接影响下一步该怎么做。如果问题出在产品本身，再怎么优化文案或素材也解决不了，而尽早知道这一点是有价值的。如果问题出在方案本身，市场测试通常能相对直接地指出该改什么——图片、价格呈现方式、信任信号——而不需要从头重新思考整个产品。",
          },
        ],
      },
      {
        heading: {
          en: "Acquisition cost tells you whether the economics hold at real spend.",
          zh: "获客成本告诉我们，在真实投放下这套经济模型是否成立。",
        },
        paragraphs: [
          {
            en: "Estimated acquisition costs are usually based on industry benchmarks or comparable categories. Real advertising spend against a real UK audience reveals the business's own actual acquisition cost — which can be meaningfully higher or lower than the benchmark, and which directly determines whether the unit economics work in practice.",
            zh: "预估的获客成本，通常是基于行业基准或可比品类推算出来的。而真实的广告投放，面向真实的英国受众，才能揭示企业自己真正的获客成本——这个数字可能明显高于或低于基准值，而它直接决定了单位经济模型在实际中是否成立。",
          },
          {
            en: "This is particularly important for businesses new to the UK, where there is no historical account data to draw on. A benchmark from a different market, or from a different category, is a starting assumption at best — the test replaces that assumption with the business's own number.",
            zh: "对于刚进入英国市场的企业来说，这一点尤其重要，因为它们还没有可以参考的历史投放数据。来自其他市场或其他品类的基准数据，充其量只是一个起点假设——测试的意义，就是用企业自己真实跑出来的数字，去替换这个假设。",
          },
        ],
      },
      {
        heading: {
          en: "Customer questions and friction reveal what research misses.",
          zh: "客户的疑问和购买阻力，暴露的是研究阶段看不到的问题。",
        },
        paragraphs: [
          {
            en: "Live customers ask questions research doesn't anticipate, hesitate at points a spreadsheet doesn't model, and abandon a purchase for reasons that only become visible when real people are actually going through the buying process. This kind of friction — a confusing size guide, an unclear delivery estimate, a missing certification badge — is often small to fix, but invisible until tested.",
            zh: "真实客户会问出研究阶段完全没有预料到的问题，会在表格没有建模过的环节犹豫，也会因为一些只有真人走完购买流程才会显现出来的原因而放弃购买。这类购买阻力——一个让人困惑的尺码表、不清晰的配送预估、缺失的认证标识——往往很容易修复，但在测试之前根本看不见。",
          },
          {
            en: "Some of this friction is specific to selling across borders — a size chart calibrated to a different market's conventions, or a delivery estimate that does not account for customs clearance. A test surfaces these details while the volume of orders affected is still small.",
            zh: "有一部分购买阻力，是跨境销售特有的——比如尺码表是按照另一个市场的习惯校准的，或者配送预估没有把清关时间算进去。测试能在受影响的订单量还很小的时候，就把这些细节暴露出来。",
          },
        ],
      },
      {
        heading: {
          en: "Returns and operational issues surface early, when the cost of learning is lower.",
          zh: "退货和运营问题会更早暴露，而这时候试错的成本更低。",
        },
        paragraphs: [
          {
            en: "A small, controlled test surfaces fulfilment delays, packaging problems, unexpectedly high return rates or customer service patterns while the volume — and the cost of getting it wrong — is still manageable. Learning these things after a full-scale launch, with significantly more inventory and marketing spend committed, is a far more expensive way to find the same information.",
            zh: "一次小规模、可控的测试，能在体量还可控、试错成本还不高的时候，就暴露履约延迟、包装问题、异常偏高的退货率，或者某些客服问题的规律。如果等到全面上线之后、投入了更多库存和营销预算之后才发现这些问题，代价会高得多。",
          },
          {
            en: "It also gives the business a chance to test its own response — how quickly a fulfilment issue is noticed, how a return is actually processed, how a customer service query is answered — under real but manageable pressure, rather than discovering gaps in the process for the first time during a high-volume period.",
            zh: "这也让企业有机会测试自己的应对能力——多快能发现履约问题、退货实际处理起来是什么样子、客服问题回应得够不够及时——是在真实但可控的压力下完成这些测试，而不是等到订单量很大的时候，才第一次发现流程里的漏洞。",
          },
        ],
      },
      {
        heading: {
          en: "What 30 days can prove — and what it cannot.",
          zh: "30天能证明什么，又不能证明什么。",
        },
        paragraphs: [
          {
            en: "A 30-day test can give a reasonably reliable early read on pricing response, initial conversion, early acquisition cost and obvious operational friction. It is not long enough to fully capture seasonality, longer-cycle repeat purchase behaviour, or slow-building word-of-mouth effects — and we do not claim that it can.",
            zh: "一次30天的测试，能够对定价反应、初步转化、早期获客成本以及明显的运营阻力，给出一个相对可靠的早期判断。但它不足以完整反映季节性、周期更长的复购行为，或者需要时间积累的口碑效应——我们也不会声称它可以做到这一点。",
          },
          {
            en: "The purpose of a 30-day test is not to eliminate uncertainty. It is to reduce it enough that the next decision — scale, adjust or stop — is based on real signals rather than assumptions alone.",
            zh: "30天测试的目的，不是消除不确定性，而是把不确定性降低到足够的程度，让下一步的决定——扩大、调整，还是暂停——建立在真实信号之上，而不只是依赖假设。",
          },
        ],
      },
      {
        heading: {
          en: "Scale, Adjust or Stop.",
          zh: "扩大、调整，还是暂停。",
        },
        paragraphs: [
          {
            en: "A test that shows strong pricing response, healthy conversion and acquisition costs that leave a workable margin usually supports scaling with more confidence. A mixed result — reasonable interest but weak conversion, or good conversion at an unsustainable acquisition cost — usually points to a specific adjustment, not abandonment. A clearly negative result, where the economics do not work even under a controlled test, is valuable information delivered at a much lower cost than discovering the same thing after a full launch.",
            zh: "如果测试显示定价反应良好、转化健康，获客成本也能留出可行的利润空间，通常可以更有信心地扩大投入。如果结果比较中性——有一定兴趣但转化偏弱，或者转化不错但获客成本难以为继——通常意味着需要做具体的调整，而不是直接放弃。如果结果明显偏负面，即使在可控测试下经济模型也不成立，这同样是有价值的信息，而且获得这个信息的成本，远低于在全面上线之后才发现同样的问题。",
          },
        ],
      },
    ],
  },
  {
    slug: "uk-unit-economics-39-99-product",
    category: "ecommerce",
    readingTime: 5,
    status: "published",
    publishedAt: "2026-09-17",
    title: {
      en: "What Is Really Left from a £39.99 UK Sale?",
      zh: "一个£39.99的产品卖到英国，最后到底还能剩多少钱？",
    },
    summary: {
      en: "Retail price, revenue, contribution margin and profit are four different numbers. A hypothetical, clearly-labelled walk-through of the layers that sit underneath a UK selling price — and why a product can look attractive and still have poor unit economics.",
      zh: "零售价、收入、边际贡献与利润，是四个不同的数字。这是一次假设性的、明确标注为示例的拆解，展示一个英国零售价背后到底藏着多少层成本——以及为什么一个产品可能看起来很有吸引力，单位经济模型却并不理想。",
    },
    body: [
      {
        heading: {
          en: "Overview.",
          zh: "概述。",
        },
        paragraphs: [
          {
            en: "£39.99 looks like a clean, appealing UK price point — comparable to plenty of successful listings, easy to promote, easy to justify against a factory cost that looks attractive in isolation. The number worth asking about is not the £39.99. It is what is actually left of it once every layer between that price and the manufacturer's bank account has taken its share.",
            zh: "£39.99 看起来是一个干净、有吸引力的英国定价——和很多成功的 listing 相当，容易推广，单独拿出厂价来看也显得很有优势。真正值得追问的，不是这个 £39.99 本身，而是从这个价格到制造商银行账户之间，每一层各自拿走一部分之后，最后还能剩下多少。",
          },
          {
            en: "The example below is hypothetical. The specific figures are illustrative only, and will vary significantly by product category, channel, weight and size, operating model and business structure. The purpose is not to produce a universal answer, but to show how many separate layers exist, and why retail price and profit are very different numbers.",
            zh: "下面的例子是假设性的。其中的具体数字仅作说明用途，会因产品品类、渠道、重量体积、运营模式和企业结构的不同而有很大差异。这个例子的目的，不是要给出一个通用答案，而是展示这中间到底有多少层，以及为什么零售价和利润，是两个非常不同的数字。",
          },
        ],
      },
      {
        heading: {
          en: "The starting point: what £39.99 already contains.",
          zh: "起点：£39.99 里面本身已经包含了什么。",
        },
        paragraphs: [
          {
            en: "UK consumer prices are generally shown VAT-inclusive, so the £39.99 a customer pays is not pure revenue available to the business before tax. Depending on the product category and the seller's VAT position, a portion of that price may need to be accounted for as VAT rather than treated as income.",
            zh: "英国消费者看到的价格通常已经含税，所以顾客支付的这 £39.99，并不是企业在税前可以直接使用的纯收入。根据产品品类和卖家自身的 VAT 情况，这笔金额里有一部分可能需要作为 VAT 处理，而不是当作收入。",
          },
          {
            en: "For illustration only — and this will vary by product and by the seller's specific VAT treatment — a portion in the region of one-sixth of a VAT-inclusive price is a commonly used rule of thumb for the VAT component at the standard rate. This is illustrative, not a claim about any specific business's obligations, which depend on its own circumstances and should be confirmed against current HMRC guidance.",
            zh: "仅作说明用途——具体情况会因产品和卖家自身的 VAT 处理方式而不同——按标准税率计算，含税价格中大约六分之一左右对应 VAT 部分，是一个常见的粗略估算方法。这只是说明性质，并不是对任何具体企业税务义务的断言，具体情况取决于企业自身情况，应以 HMRC 当前指引为准确认。",
          },
        ],
      },
      {
        heading: {
          en: "Landed cost, freight and customs duty come off next.",
          zh: "紧接着要扣除的，是到岸成本、运费与可能涉及的关税。",
        },
        paragraphs: [
          {
            en: "Before the product is even in the UK, there is the factory cost, international freight, and — depending on the product's tariff classification — customs duty that may apply on import. These costs do not move in proportion to the retail price; a change in freight rates or duty classification can materially change the landed cost without the retail price changing at all.",
            zh: "在产品到达英国之前，首先要计算出厂成本、国际运费，以及根据产品的关税分类，进口时可能涉及的关税。这些成本并不会随零售价成比例变动——运费涨了，或者关税分类不同，到岸成本可能会明显改变，而零售价本身完全没变。",
          },
          {
            en: "A product with a low factory cost can still have a high landed cost once freight and duty are added — particularly for bulky, heavy or high-tariff categories. This is one of the most common gaps between a manufacturer's internal sense of \"our cost\" and the cost that actually matters for UK pricing.",
            zh: "一个出厂成本很低的产品，加上运费和关税之后，到岸成本仍然可能偏高——尤其是体积大、重量大，或者关税税率较高的品类。这也是制造商内部理解的\"我们的成本\"，和真正决定英国定价的成本之间，最常见的落差之一。",
          },
        ],
      },
      {
        heading: {
          en: "Marketplace fees, payment costs and fulfilment take their share next.",
          zh: "平台佣金、支付费用与履约成本，紧接着各拿走一部分。",
        },
        paragraphs: [
          {
            en: "Selling through a UK marketplace typically involves a referral or commission fee, calculated as a percentage of the sale price, plus separate fulfilment fees if the marketplace's own logistics programme is used — covering storage, picking, packing and delivery. Payment processing carries its own smaller fee. Together, these are commonly a meaningful proportion of the sale price, and they apply whether or not the product ultimately makes a profit.",
            zh: "通过英国平台销售，通常涉及按售价一定比例收取的推荐费或佣金，如果使用平台自身的物流项目，还需要另外支付履约费用——包括仓储、揀选、打包和配送。支付处理也会产生一笔单独但相对较小的费用。这几项加在一起，通常会占售价相当可观的比例，而且不管这个产品最终有没有盈利，这些费用都照样要付。",
          },
          {
            en: "Storage costs, in particular, are easy to underestimate for products that do not sell through quickly — slower-moving inventory can accumulate storage charges that quietly erode margin well before a single unit is returned or discounted.",
            zh: "仓储成本尤其容易被低估，特别是对于周转不快的产品——滞销库存会不断累积仓储费用，在还没有发生任何退货或折价之前，就已经在悄悄侵蚀利润。",
          },
        ],
      },
      {
        heading: {
          en: "Advertising, returns and customer service are real costs, not optional extras.",
          zh: "广告、退货与客服，都是实打实的成本，不是可有可无的附加项。",
        },
        paragraphs: [
          {
            en: "A new product with no UK sales history typically needs advertising spend to become visible at all, and that spend is a direct cost against each sale during the period it is needed. Returns add a further cost — lost margin on the unit, reverse logistics, and sometimes a fee that is not fully refunded even when the product is sent back. Customer service, particularly for a product that generates questions, adds a smaller but real ongoing cost.",
            zh: "一个在英国没有销售记录的新产品，通常需要投放广告才能获得曝光，而在需要投放的这段时间里，这笔支出是直接摊在每一笔销售上的成本。退货带来的是另一层成本——这一单的利润没了、逆向物流的费用，有时候即使把货退回去了，相关费用也不会被全额退还。客服支出，尤其是对于容易引发咨询的产品，会带来一笔相对较小但同样真实、持续存在的成本。",
          },
        ],
      },
      {
        heading: {
          en: "Four different numbers get confused as one — and they shouldn't be.",
          zh: "有四个不同的数字经常被混为一谈——其实不应该。",
        },
        paragraphs: [
          {
            en: "Retail price is what the customer pays. Revenue is what the business actually receives after VAT is accounted for. Contribution margin is what remains after the direct, variable costs of that specific sale — landed cost, fees, fulfilment, advertising, returns. Profit is what remains after fixed and operating overhead — office costs, salaries, financing and everything else that exists regardless of any single sale — is also covered.",
            zh: "零售价，是顾客支付的金额。收入，是扣除 VAT 之后企业实际收到的金额。边际贡献（contribution margin），是扣除这笔具体销售的直接、可变成本——到岸成本、平台费用、履约、广告、退货——之后剩下的部分。利润，则是在此基础上，进一步扣除固定和运营开支——办公成本、人员薪资、融资成本，以及所有不依赖于某一笔具体销售而存在的开支之后，最终剩下的部分。",
          },
          {
            en: "A product can have a healthy contribution margin and still fail to reach profit if fixed overhead is too high relative to sales volume. It can also have an attractive retail price and a respectable revenue line while having almost no contribution margin at all, once every variable cost above is properly counted.",
            zh: "一个产品可能边际贡献看起来不错，但如果固定开支相对于销量而言太高，最终仍然达不到盈利。它也可能零售价看起来很有吸引力、收入数字也说得过去，但一旦把上面提到的每一项可变成本都算清楚，边际贡献却所剩无几。",
          },
        ],
      },
      {
        heading: {
          en: "The real lesson.",
          zh: "真正值得记住的结论。",
        },
        paragraphs: [
          {
            en: "A product can look genuinely attractive at the retail-price level — competitive against alternatives, backed by a healthy factory-cost margin — and still have poor UK unit economics once VAT, landed cost, marketplace fees, fulfilment, advertising and returns are all properly counted. Neither outcome is visible from the retail price alone.",
            zh: "一个产品在零售价层面完全可能看起来很有吸引力——价格对比同类产品有竞争力，出厂成本也留出了不错的利润空间——但只要把 VAT、到岸成本、平台费用、履约、广告和退货都算清楚，英国市场的单位经济模型仍然可能并不理想。单看零售价，这两种结果都看不出来。",
          },
          {
            en: "This is why unit economics are worked out layer by layer, using the business's own real numbers, before committing to inventory, marketing spend or a specific channel — rather than assumed from the retail price and the factory cost alone.",
            zh: "这也是为什么单位经济模型需要用企业自己真实的数字，一层一层地算清楚，而不是只凭零售价和出厂成本就做出判断——而且应该在投入库存、营销预算或确定具体渠道之前完成，而不是事后才补算。",
          },
        ],
      },
    ],
  },
  {
    slug: "building-a-uk-team-before-relocating-staff",
    category: "people-mobility",
    readingTime: 5,
    status: "published",
    publishedAt: "2026-09-17",
    title: {
      en: "What to Consider Before Building a UK Team",
      zh: "在英国建立本地团队前，企业应该先想清楚什么？",
    },
    summary: {
      en: "Building a UK team is really several smaller decisions — which functions need to be local, employee versus contractor versus specialist, and only then, whether anyone actually needs to relocate.",
      zh: "在英国建立团队，其实是好几个更小的决定——哪些职能需要本地化、是员工还是承包商还是外部专业人士，最后才轮到是否真的需要有人搬迁到英国。",
    },
    body: [
      {
        heading: {
          en: "Overview.",
          zh: "概述。",
        },
        paragraphs: [
          {
            en: "Building a UK team is often discussed as a single decision — \"when do we hire in the UK\" — when it is really several smaller decisions bundled together: which functions need a local presence at all, whether that presence should be an employee, a contractor or an external specialist, and only after that, whether anyone actually needs to relocate.",
            zh: "在英国建立团队，经常被当作一个单一的决定来讨论——\"我们什么时候开始在英国招人\"——但实际上，这是好几个更小的决定捆绑在一起：哪些职能真的需要本地存在、这种本地存在应该是员工、承包商还是外部专业人士，只有在这之后，才轮到是否真的需要有人搬迁到英国这个问题。",
          },
        ],
      },
      {
        heading: {
          en: "Start with the function, not the person.",
          zh: "先想清楚职能，而不是先想人。",
        },
        paragraphs: [
          {
            en: "Before asking who should be in the UK, it is worth asking which functions genuinely require a physical UK presence to do their job well, and which do not. Some functions are location-agnostic. Others depend heavily on being close to the market, the customer or the regulatory environment.",
            zh: "在讨论谁应该在英国之前，值得先问一问，哪些职能真的需要有人在英国现场才能把工作做好，哪些其实不需要。有些职能与地点无关；有些职能则高度依赖于是否贴近市场、客户或监管环境。",
          },
          {
            en: "A useful test is to ask what would actually be lost if this function were run remotely for another six months. Where the honest answer is \"very little,\" the function can usually wait. Where the answer is \"a specific relationship, deal or compliance requirement would suffer,\" that is a clearer signal that local presence genuinely matters now.",
            zh: "一个有用的判断方法，是问自己：如果这个职能再远程运营半年，真正会损失什么？如果诚实的答案是\"损失不大\"，那这个职能通常可以再等一等。如果答案是\"某段具体的客户关系、某笔交易，或者某项合规要求会因此受损\"，那就是本地存在现在确实重要的更清晰信号。",
          },
        ],
      },
      {
        heading: {
          en: "Which functions genuinely benefit from being local.",
          zh: "哪些职能真的能从\"本地\"中获益。",
        },
        paragraphs: [
          {
            en: "Sales and account management — particularly for larger retail or institutional buyers — often benefit meaningfully from a local presence, because relationship-building, negotiation and trust are harder to establish remotely. Customer-facing operations that depend on UK time zones, local market knowledge or in-person meetings fall into a similar category.",
            zh: "销售和客户关系管理——尤其是面向规模较大的零售商或机构买家时——通常能从本地存在中获益不少，因为建立关系、谈判和信任，远程做起来会更难。依赖英国时区、本地市场知识或线下会面的客户相关工作，也属于类似情况。",
          },
          {
            en: "Operations and customer support can sometimes be run remotely or from a regional hub, particularly in the early stages, provided time zone overlap and language capability are genuinely sufficient — this depends heavily on the specific business and customer base, not on a general rule.",
            zh: "运营和客服，在某些情况下——尤其是早期阶段——可以远程或者从区域枢纽来运营，前提是时区重叠和语言能力确实足够——这在很大程度上取决于具体的业务和客户群体，而不是一条普遍适用的规则。",
          },
          {
            en: "Leadership of the UK operation is a slightly different question again: it can sometimes be handled by someone visiting regularly during an early testing phase, but as the operation grows, a UK-based leader with day-to-day authority usually becomes more valuable than someone directing from a distance.",
            zh: "英国业务的领导角色，又是一个略有不同的问题：在早期测试阶段，有时候可以由定期来访的人来负责；但随着业务规模扩大，一个常驻英国、拥有日常决策权的负责人，通常会比远程指挥更有价值。",
          },
        ],
      },
      {
        heading: {
          en: "Employee, contractor or external specialist.",
          zh: "员工、承包商，还是外部专业人士。",
        },
        paragraphs: [
          {
            en: "A direct UK employee is usually appropriate where the role is ongoing, central to the business and requires day-to-day integration with the rest of the team. A contractor or freelance specialist can be a sensible way to access a specific skill — compliance, marketing, logistics — without committing to a permanent role before the need is proven.",
            zh: "如果一个岗位是持续性的、对业务至关重要，并且需要与团队其他成员日常紧密配合，那么招聘一名直接的英国员工通常比较合适。而承包商或自由职业专业人士，则是获取某项具体技能——合规、营销、物流——的一种合理方式，可以在需求还没有得到验证之前，不必承诺一个永久性岗位。",
          },
          {
            en: "An external specialist agency or advisory firm can provide access to expertise — legal, tax, compliance, logistics — on an as-needed basis, which is often more efficient in the early stages than building that capability in-house before the volume justifies it.",
            zh: "外部专业机构或顾问公司，可以按需提供法律、税务、合规、物流等方面的专业能力，在早期阶段，这往往比在业务量还不足以支撑之前，就自建这项内部能力要更高效。",
          },
        ],
      },
      {
        heading: {
          en: "Cost implications go well beyond salary.",
          zh: "成本远不止薪资那么简单。",
        },
        paragraphs: [
          {
            en: "A UK employee involves employer costs beyond gross salary — statutory contributions, pension obligations, and the administrative cost of UK payroll and employment compliance. These are ongoing costs that exist whether or not the role is generating revenue yet, which is worth factoring into timing as much as into budget.",
            zh: "雇佣一名英国员工，涉及的成本远不止税前薪资本身——还包括法定缴款、养老金相关义务，以及英国薪酬和用工合规方面的管理成本。这些是持续性的成本，不管这个岗位有没有开始产生收入，都照样存在，这一点在考虑时机的时候，和考虑预算同样重要。",
          },
          {
            en: "There is also a cost to under-resourcing a function that genuinely needs local capability — a missed opportunity, a slow response to a UK customer, or a compliance requirement handled too late. The comparison worth making is not \"hire versus don't hire\" in isolation, but the cost of building the capability against the cost of the gap it fills.",
            zh: "反过来，如果某个真正需要本地能力的职能长期资源不足，同样会有代价——错失的机会、对英国客户响应太慢，或者合规要求处理得太晚。真正值得比较的，不是孤立地看\"招不招人\"，而是搭建这项能力的成本，和不补上这个缺口所付出的代价，哪个更大。",
          },
        ],
      },
      {
        heading: {
          en: "Reporting structure affects how well a local team actually functions.",
          zh: "汇报结构会直接影响本地团队能不能真正发挥作用。",
        },
        paragraphs: [
          {
            en: "A UK team that reports into a headquarters process not designed for a different time zone, language and market context often struggles, regardless of how capable the individuals are. Deciding how much autonomy a UK team or leader genuinely has — and building a reporting rhythm that respects the time difference — is as important as the hiring decision itself.",
            zh: "如果英国团队的汇报流程，是按照总部原有的、没有考虑到不同时区、语言和市场背景而设计的，那么无论团队成员本身多有能力，往往都会遇到困难。决定英国团队或负责人真正拥有多少自主权——并且建立一套尊重时差的汇报节奏——和招聘决定本身同样重要。",
          },
          {
            en: "This is often underestimated because it looks like a soft, cultural issue rather than a structural one. In practice, a UK team that has to wait for same-day sign-off from a headquarters that is asleep for half of the UK working day cannot operate at the pace the market requires, regardless of how the reporting line is drawn on paper.",
            zh: "这一点经常被低估，因为它看起来像是一个软性的文化问题，而不是结构性问题。但实际上，如果英国团队的日常决策，需要等待在英国工作时间有一半都在休息的总部当天签字确认，那么不管汇报关系在纸面上怎么设计，团队都很难跟上市场需要的节奏。",
          },
        ],
      },
      {
        heading: {
          en: "Timing: what should already be true before this makes sense.",
          zh: "时机：在这之前，哪些事情应该已经确认清楚。",
        },
        paragraphs: [
          {
            en: "Building a UK team generally makes more sense once there is already a reasonably validated commercial reason for it — proven demand, a growing volume of UK activity, or a specific relationship that genuinely requires a local presence — rather than being built ahead of that evidence in the hope that the team will generate it.",
            zh: "建立英国团队，通常在已经有一个相对经过验证的商业理由之后再进行会更合理——比如已验证的需求、持续增长的英国业务量，或者一段确实需要本地存在的客户关系——而不是在证据出现之前就先把团队搭建起来，指望团队本身能创造出这些证据。",
          },
          {
            en: "Building ahead of that evidence is sometimes a deliberate, well-reasoned choice — for example, to secure a specific person before a competitor does, or to meet a customer's stated requirement for a UK contact. Even then, it is worth being explicit that this is a calculated exception, rather than treating early hiring as the default approach.",
            zh: "在证据齐备之前就提前搭建团队，有时候也可能是一个经过深思熟虑的选择——比如为了在竞争对手之前锁定某个关键人选，或者满足客户明确提出的\"需要有英国联系人\"的要求。即使在这种情况下，也值得明确这是一次经过权衡的例外安排，而不是把提前招聘当成默认做法。",
          },
        ],
      },
      {
        heading: {
          en: "Relocation is a separate, later question.",
          zh: "人员搬迁，是另一个更晚才需要考虑的问题。",
        },
        paragraphs: [
          {
            en: "Once a business has decided that a specific role genuinely needs to be based in the UK, and has decided who should fill it, a further question follows: does that person need to relocate from overseas, or can the role be filled locally in the UK. Where relocation is being considered, immigration permission is a separate and specialist area in its own right.",
            zh: "一旦企业确定某个具体岗位确实需要常驻英国，并且已经确定了合适的人选，接下来还有一个问题：这个人是否需要从海外搬迁过来，还是可以直接在英国本地招聘。如果确实涉及人员从海外搬迁，移民许可是一个单独的、需要专业资质的领域。",
          },
          {
            en: "Where immigration permission is relevant, businesses should coordinate with an appropriately regulated immigration professional.",
            zh: "如涉及人员赴英及移民许可，应由具备相应监管资质的专业人士提供具体意见。",
          },
        ],
      },
    ],
  },
];

function sortByPublishedDateDesc(list: InsightArticleData[]): InsightArticleData[] {
  return [...list].sort((a, b) => {
    const aTime = a.publishedAt ? Date.parse(a.publishedAt) : 0;
    const bTime = b.publishedAt ? Date.parse(b.publishedAt) : 0;
    return bTime - aTime;
  });
}

function resolve(article: InsightArticleData, locale: Locale): ResolvedInsightArticle {
  return {
    slug: article.slug,
    category: article.category,
    readingTime: article.readingTime,
    status: article.status,
    publishedAt: article.publishedAt,
    updatedAt: article.updatedAt,
    title: article.title[locale],
    summary: article.summary[locale],
    body: article.body?.map((section) => ({
      heading: section.heading[locale],
      paragraphs: section.paragraphs.map((p) => p[locale]),
    })),
  };
}

function publishedOnly(list: InsightArticleData[]): InsightArticleData[] {
  return list.filter((article) => article.status === "published");
}

export function getAllPublishedInsightSlugs(): string[] {
  return publishedOnly(articles).map((article) => article.slug);
}

export function getPublishedInsightArticles(locale: Locale): ResolvedInsightArticle[] {
  return sortByPublishedDateDesc(publishedOnly(articles)).map((article) =>
    resolve(article, locale),
  );
}

export function getPublishedInsightArticle(
  locale: Locale,
  slug: string,
): ResolvedInsightArticle | undefined {
  const found = publishedOnly(articles).find((article) => article.slug === slug);
  return found ? resolve(found, locale) : undefined;
}

// Related articles prioritise the same category first, then fall back to
// other recent published articles, and always exclude the current one.
export function getRelatedInsightArticles(
  locale: Locale,
  currentSlug: string,
  limit = 3,
): ResolvedInsightArticle[] {
  const current = articles.find((article) => article.slug === currentSlug);
  const others = sortByPublishedDateDesc(publishedOnly(articles)).filter(
    (article) => article.slug !== currentSlug,
  );
  const sameCategory = current
    ? others.filter((article) => article.category === current.category)
    : [];
  const rest = others.filter((article) => !sameCategory.includes(article));
  return [...sameCategory, ...rest].slice(0, limit).map((article) => resolve(article, locale));
}
