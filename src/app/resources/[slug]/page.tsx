import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { notFound } from "next/navigation";

const ARTICLES: Record<string, Article> = {
  "canadian-franchise-marketing-playbook": {
    badge: "Guide",
    badgeVariant: "gold",
    category: "Marketing Strategy",
    readTime: "18 min read",
    title: "The Canadian Franchise Marketing Playbook",
    subtitle: "Build a marketing system that scales across your entire franchise network — from co-op fund governance to local campaign execution.",
    sections: [
      {
        heading: "Why Franchise Marketing Is Different",
        body: `Franchise marketing sits at an unusual intersection: brand consistency must coexist with local relevance. Head office needs control. Franchisees need autonomy. The result, when done well, is a marketing system that feels local everywhere but brand-consistent everywhere too.

Most brands fail at one or the other. They either lock down creative so tightly that franchisees can't respond to local market conditions, or they open the gates so wide that the brand becomes a patchwork of inconsistent expressions. The Sova model resolves this tension through structured flexibility — guardrails at the top, customisation within them.`,
      },
      {
        heading: "Co-Op Fund Governance",
        body: `The foundation of any scalable franchise marketing system is a well-structured co-op fund. Contribution rates typically range from 1–4% of gross sales, pooled centrally and allocated through an annual media plan. Best practice:

**Contribution transparency.** Franchisees should see exactly how their contributions are pooled and where the network budget is deployed. Opaque fund management erodes trust faster than almost anything else in the franchisor-franchisee relationship.

**Eligible spend categories.** Define clearly what the fund can and cannot pay for. National broadcast, regional digital, grand opening support, and content production are common eligible categories. Local-only promotions or franchisee-specific events typically are not.

**Approval workflows.** Any franchisee-driven spend should route through an approval process before money is committed. A two-stage review — brand team plus finance — catches compliance issues before they become brand problems.`,
      },
      {
        heading: "Campaign Architecture",
        body: `Effective franchise campaigns have three tiers:

**National campaigns** establish brand equity and drive category awareness. These are fully produced by head office and pushed to all locations simultaneously. Franchisees have no creative input but benefit directly from the awareness lift.

**Regional campaigns** respond to local market conditions — competitive activity, seasonal demand, local events. These should be planned quarterly with input from field managers and regional franchisee councils.

**Local campaigns** are where individual operators drive traffic. These should operate within a template library, with pre-approved creative that can be localised with address, hours, and a limited range of offer variants.`,
      },
      {
        heading: "Digital Channel Mix for Canadian Franchise Markets",
        body: `Canadian digital consumption patterns differ meaningfully from US benchmarks. Key considerations:

- **Meta platforms** remain the highest-reach social channel, but costs have risen significantly in urban markets. Allocate 25–35% of digital budgets here.
- **Google Search** drives the highest purchase-intent traffic. For QSR and service franchise categories, branded and category search terms should be protected at the network level.
- **Programmatic display and OOH** are increasingly effective for drive-time targeting in mid-size Canadian markets where CPMs remain lower than in Toronto or Vancouver.
- **CASL compliance** is non-negotiable. All email and SMS channels require documented express consent — implied consent has a 24-month window from the date of last business interaction.`,
      },
      {
        heading: "Performance Measurement",
        body: `Network-level measurement requires a consistent KPI framework applied across all locations. The most useful metrics at the head office level:

- **Location Performance Index (LPI):** A composite score weighting revenue trend, campaign participation rate, and digital presence health.
- **Cost per incremental visit:** Particularly relevant for QSR and retail franchise categories with strong foot-traffic data.
- **Co-op return on investment:** Total network marketing spend measured against total network revenue growth.
- **Franchisee participation rate:** What percentage of franchisees are running approved digital campaigns? This is a leading indicator of overall marketing health.

Scorecards should be delivered monthly at the location level and quarterly in aggregate to franchisee councils.`,
      },
      {
        heading: "Getting Started",
        body: `The most common mistake franchise brands make when improving their marketing systems is trying to change everything at once. Instead, sequence your improvements:

1. Establish a single source of truth for brand assets and approved creative
2. Implement a co-op fund transparency dashboard
3. Standardise campaign templates and the approval workflow
4. Layer in performance measurement with consistent KPIs
5. Add intelligent features — geofencing, AI-driven budget recommendations, predictive performance — once the foundation is solid

Building a marketing system that scales takes 12–18 months for a brand with 50+ locations. The investment pays back through improved franchisee satisfaction, reduced brand risk, and measurably better marketing ROI across the network.`,
      },
    ],
  },

  "state-of-canadian-franchise-marketing-2025": {
    badge: "Research",
    badgeVariant: "teal",
    category: "Industry Research",
    readTime: "12 min read",
    title: "State of Canadian Franchise Marketing 2025",
    subtitle: "Annual research covering budget allocation trends, digital adoption rates, and performance benchmarks across 800+ Canadian franchise locations.",
    sections: [
      {
        heading: "Research Overview",
        body: `This report synthesises marketing performance data and operator survey responses from 800+ Canadian franchise locations across 22 brands. Categories represented include QSR, home services, personal services, retail, and fitness. Data was collected between January and March 2025.

The headline finding: Canadian franchise brands that have centralised their marketing technology stack are outperforming decentralised peers by 34% on cost-per-acquisition metrics, while also reporting higher franchisee satisfaction scores.`,
      },
      {
        heading: "Budget Allocation Trends",
        body: `Average co-op fund contribution rates held steady at 2.8% of gross sales in 2025, consistent with 2024. However, the composition of spend within those funds shifted significantly:

- **Digital channels:** 61% of total marketing budgets (up from 52% in 2023)
- **Traditional media (broadcast, print, OOH):** 24% (down from 31%)
- **Events and local activations:** 9%
- **Production and creative:** 6%

Within digital, Meta platforms captured the largest share at 28% of digital spend, followed by Google at 24%, programmatic at 19%, and emerging channels (connected TV, podcast, digital OOH) at 18%.`,
      },
      {
        heading: "Digital Adoption by Franchise Category",
        body: `Digital maturity varies significantly by franchise category. QSR brands lead adoption, with 78% of locations running geofencing campaigns and 91% participating in centralised digital programs. Home services brands trail significantly, with only 43% running consistent digital programs at the location level.

The gap correlates strongly with franchisee age and technology comfort. Brands that invest in franchisee digital education programs close the adoption gap approximately 40% faster than those relying on head office mandates alone.`,
      },
      {
        heading: "Performance Benchmarks",
        body: `Key performance benchmarks for Canadian franchise marketing in 2025:

| Metric | Industry Median | Top Quartile |
|---|---|---|
| Digital CPM (Canada) | $8.40 | $5.20 |
| Cost per in-store visit | $4.10 | $2.30 |
| Email open rate | 22% | 34% |
| Campaign participation rate | 67% | 89% |
| Co-op ROI | 4.2x | 7.1x |

Top-quartile performance is consistently associated with centralised campaign management, real-time performance visibility at the location level, and structured franchisee coaching programs.`,
      },
      {
        heading: "Franchisee Satisfaction and Marketing",
        body: `For the third consecutive year, marketing support ranked in the top three drivers of franchisee satisfaction — ahead of operational support in 14 of 22 brands surveyed. The specific drivers of satisfaction differ from what head office teams typically expect:

Franchisees rate **transparency** over marketing fund allocation as more important than creative quality. They want to know how their co-op contributions are being spent, and they want to see performance data that proves the investment is working.

The second-highest driver is **ease of local execution.** Franchisees who can launch approved campaigns in under 30 minutes report dramatically higher satisfaction than those navigating complex approval processes.`,
      },
      {
        heading: "Looking Ahead: 2025–2026",
        body: `Three trends will define Canadian franchise marketing over the next 18 months:

**AI-assisted campaign optimisation** is moving from experiment to standard practice. Brands deploying AI for budget reallocation and creative performance prediction are seeing 18–24% improvements in campaign efficiency.

**First-party data strategy** is becoming urgent. With third-party cookie deprecation complete in most browsers, franchise brands without owned email and SMS programs are at a structural disadvantage.

**Location-based intelligence** is the next competitive frontier. Brands that can connect foot-traffic data, competitive location density, and weather-triggered campaign logic will have a meaningful edge in trade-area marketing.`,
      },
    ],
  },

  "casl-compliance-franchise-marketers": {
    badge: "Guide",
    badgeVariant: "gold",
    category: "Compliance",
    readTime: "9 min read",
    title: "CASL Compliance for Franchise Marketers",
    subtitle: "What every Canadian franchise brand needs to know about express consent, implied consent, and managing opt-outs at scale across multiple locations.",
    sections: [
      {
        heading: "What CASL Requires",
        body: `Canada's Anti-Spam Legislation (CASL) applies to all commercial electronic messages (CEMs) sent to or from Canada. A CEM is any electronic message that encourages participation in a commercial activity — including email, SMS, and certain social media messages.

CASL requires that senders have either **express** or **implied** consent before sending a CEM, and that every CEM includes a functioning unsubscribe mechanism that processes within 10 business days.

Non-compliance carries significant penalties: up to $1 million per violation for individuals and $10 million per violation for organisations. The CRTC has issued fines in the millions against Canadian businesses for systematic CASL violations.`,
      },
      {
        heading: "Express vs. Implied Consent",
        body: `**Express consent** is explicit, affirmative agreement to receive commercial messages. It must be obtained separately from other terms and conditions — burying consent in a sign-up form footer does not meet the standard. Express consent does not expire.

**Implied consent** exists in specific relationships: existing business relationships (customers who purchased within the last 24 months), club or association memberships, and publicly disclosed contact information (e.g., an email on a business website). Implied consent expires after 24 months from the most recent qualifying interaction.

For franchise systems, this creates complexity. A customer who visits franchisee location A has an implied consent relationship with that franchisee. But does that imply consent for messages from the franchisor brand? The answer is no — unless the relationship with the brand was clearly communicated at the point of data collection.`,
      },
      {
        heading: "Franchise-Specific CASL Challenges",
        body: `Franchise systems face three structural CASL challenges that standalone businesses do not:

**Data ownership and consent portability.** When a customer provides their email to a franchise location, does that consent extend to head office communications? It does only if the data was collected with clear disclosure of who would send messages.

**Franchisee non-compliance risk.** If a franchisee sends non-CASL-compliant messages, the franchisor may share liability if they have significant control over the franchisee's marketing activities. This is a meaningful risk for brands that provide email marketing tools to franchisees.

**Unsubscribe processing at scale.** An opt-out submitted at any touchpoint — website, email, in-store kiosk — must suppress that contact across the entire network within 10 business days. Most franchise systems do not have unified suppression lists.`,
      },
      {
        heading: "Building a Compliant Consent Architecture",
        body: `Best practice for franchise CASL compliance:

1. **Centralise your consent database.** All opt-in and opt-out events should write to a single suppression list that all sending systems check before deployment.

2. **Dual-purpose consent capture.** When collecting email addresses at the location level, include clear language about which entities will send messages: "You agree to receive marketing messages from [Franchise Location] and [Brand Name]."

3. **Timestamp every consent event.** Implied consent has an expiry. You must be able to prove when the qualifying relationship began. Store timestamps with every consent record.

4. **Automate unsubscribe processing.** Manual unsubscribe processing at scale is not viable. Every CRM and email platform in your network should write opt-outs to the central suppression list automatically.

5. **Audit annually.** Review your consent records, expiry dates, and unsubscribe processing workflows at least once per year.`,
      },
      {
        heading: "Practical Steps for Immediate Compliance",
        body: `If your franchise system is not currently CASL-compliant, prioritise these actions:

**Immediate (0–30 days):**
- Audit your current email list for consent documentation
- Implement a functioning unsubscribe mechanism in all CEM channels
- Create a central suppression list and connect all sending systems to it

**Short-term (30–90 days):**
- Update all consent capture points to clearly disclose senders
- Train franchisees on CASL requirements and your consent architecture
- Document your consent procedures in writing

**Ongoing:**
- Monitor implied consent expiry dates and re-engagement campaigns
- Review new marketing channels against CASL requirements before launch
- Maintain records of all consent events for a minimum of three years

CASL compliance is not a one-time project — it is an ongoing operational discipline. The brands that build it into their marketing infrastructure are significantly better protected than those that treat it as a checklist.`,
      },
    ],
  },

  "co-op-fund-policy-template": {
    badge: "Template",
    badgeVariant: "navy",
    category: "Operations",
    readTime: "Template",
    title: "Co-Op Fund Policy Template",
    subtitle: "A battle-tested template for structuring your franchise marketing fund — contribution rates, eligible spend categories, approval workflows, and audit provisions.",
    sections: [
      {
        heading: "How to Use This Template",
        body: `This template provides a complete structural framework for a franchise co-op marketing fund policy. Sections in [brackets] should be customised to your brand. This document should be reviewed by your franchise counsel before distribution to franchisees, as it may interact with your Franchise Disclosure Document (FDD) and franchise agreement.

The policy should be incorporated by reference into your franchise agreement and updated annually, with any material changes communicated to franchisees in writing with a minimum of 90 days notice.`,
      },
      {
        heading: "Section 1: Fund Overview",
        body: `**[BRAND NAME] National Marketing Fund Policy**

**1.1 Purpose**
The [Brand Name] National Marketing Fund (the "Fund") exists to pool franchisee marketing contributions for the purpose of building brand awareness, driving consumer traffic, and producing marketing materials that benefit the entire franchise network.

**1.2 Administration**
The Fund is administered by [Brand Name] Corp. (the "Franchisor"). The Franchisor maintains fiduciary responsibility over Fund assets and is accountable for reporting fund allocation and performance to franchisees annually.

**1.3 Contribution Rate**
Each franchisee shall contribute [X]% of weekly gross sales to the Fund, payable [weekly/monthly] by [payment method]. Contribution rates may be adjusted by the Franchisor with [90 days] written notice.`,
      },
      {
        heading: "Section 2: Eligible Expenditures",
        body: `**2.1 Approved Uses**
Fund assets may be used for the following purposes:
- National and regional advertising across digital, broadcast, and out-of-home channels
- Production of brand-approved marketing creative and content
- Digital marketing platform fees and technology costs
- Grand opening support programs for new franchise locations
- Marketing research and consumer insights
- Franchisee marketing training and education

**2.2 Excluded Expenditures**
The following may not be funded from the National Marketing Fund:
- Location-specific promotions that do not benefit the broader network
- Franchisor administrative overhead (salaries, facilities, general operations)
- Charitable donations or sponsorships not approved by the Fund committee
- Any expenditure not pre-approved through the Fund approval process`,
      },
      {
        heading: "Section 3: Governance and Approval",
        body: `**3.1 Marketing Committee**
A Marketing Advisory Committee composed of [X] franchisee representatives and [X] Franchisor representatives shall provide input on the annual marketing plan and Fund budget allocation. The Committee is advisory; final decisions rest with the Franchisor.

**3.2 Annual Budget**
The Franchisor shall present an annual marketing budget to the Marketing Advisory Committee no later than [November 30] of each calendar year for the following fiscal year. The budget shall include channel allocation, production budget, and anticipated campaign calendar.

**3.3 Franchisee-Initiated Spend**
Franchisees may request Fund support for locally-initiated marketing programs through the Fund approval process. Requests must be submitted using the approved request form with a minimum of [21 days] advance notice. Approval requires sign-off from the Marketing Director and is at the Franchisor's sole discretion.`,
      },
      {
        heading: "Section 4: Reporting and Audit",
        body: `**4.1 Quarterly Reporting**
The Franchisor shall provide franchisees with quarterly reports including: total contributions received, total expenditures by category, campaign performance summary, and Fund reserve balance.

**4.2 Annual Audit**
The Fund shall be subject to an annual independent audit by a chartered professional accountant. Audit results shall be made available to all franchisees within [120 days] of fiscal year end.

**4.3 Record Retention**
All Fund financial records shall be retained for a minimum of [7] years and shall be available for inspection by any franchisee upon [30 days] written request.

**4.4 Fund Surplus**
Any Fund surplus at fiscal year end shall be carried forward to the following year's Fund budget. The Franchisor shall not derive profit from the Fund.`,
      },
      {
        heading: "Section 5: Amendments",
        body: `**5.1 Policy Amendments**
This policy may be amended by the Franchisor with [90 days] written notice to all active franchisees. Material amendments — defined as changes to contribution rates, eligible expenditure categories, or governance structure — require ratification by a simple majority of the Marketing Advisory Committee before taking effect.

**5.2 Emergency Provisions**
In the event of a brand crisis, competitive emergency, or other situation requiring immediate marketing response, the Franchisor may authorise Fund expenditures without the standard approval process. Any such expenditures shall be disclosed in the next quarterly report.

**5.3 Policy Effective Date**
This policy supersedes all previous co-op fund policies and is effective as of [DATE].

---

*This template is provided for informational purposes. It does not constitute legal advice. Consult qualified franchise counsel before implementing any co-op fund policy.*`,
      },
    ],
  },

  "geofencing-roi-canadian-qsr": {
    badge: "Research",
    badgeVariant: "teal",
    category: "Case Study",
    readTime: "7 min read",
    title: "Geofencing ROI in Canadian QSR: A 12-Month Study",
    subtitle: "How three Canadian QSR brands used precision geofencing to increase in-store visits by 23% while reducing cost-per-acquisition by 31%.",
    sections: [
      {
        heading: "Study Overview",
        body: `This case study documents the geofencing deployment and results across three Canadian QSR brands — anonymised as Brand A (coffee and bakery, 180 locations), Brand B (burger QSR, 94 locations), and Brand C (chicken QSR, 67 locations) — over a 12-month period from Q1 2024 to Q4 2024.

All three brands deployed geofencing through a centralised platform, enabling consistent measurement methodology and comparable results. The study tracked incremental in-store visits, cost-per-visit, and campaign ROI using mobile device measurement panels and point-of-sale integration.`,
      },
      {
        heading: "Geofence Architecture",
        body: `Each brand deployed three types of geofences:

**Own-location fences** targeted consumers within 800 metres of each brand location. These fences served re-engagement offers to lapsed customers and loyalty programme prompts.

**Competitor conquest fences** surrounded the three highest-volume competitor locations within each trade area. Consumers detected at competitor locations received comparative offers within a 15-minute window.

**Behavioural audience fences** targeted locations where the target customer skews highly: gym and fitness studio parking lots, transit hubs during commute hours, and office parks at lunch.

Fence radii were calibrated by location type — drive-through locations used smaller, more precise radii (400–600m) while walk-traffic locations in urban cores used 200–350m radii to reduce noise from adjacent buildings.`,
      },
      {
        heading: "Performance Results",
        body: `Across all three brands and the 12-month study period:

**Visit lift:** Average incremental visit lift of 23% attributable to geofencing campaigns, measured against matched control groups of non-exposed consumers in the same trade areas.

**Cost per incremental visit:** $2.80 average across the three brands, compared to a baseline CPA of $4.10 for non-geofencing digital campaigns.

**Cost-per-acquisition reduction:** 31% improvement in CPA versus non-geofencing digital channels.

**Competitor conquest effectiveness:** Conquest campaigns generated visit lift of 8–12% from consumers detected at competitor locations — lower than own-trade-area campaigns but highly incremental given the audience is actively in a purchase decision.

**Daypart performance:** Lunch (11am–2pm) and drive-time (4–7pm) windows significantly outperformed other periods, with visit lift 40% higher than off-peak geofencing campaigns.`,
      },
      {
        heading: "Brand-Level Findings",
        body: `**Brand A (Coffee/Bakery):** Saw the strongest morning commute performance. Commuter geofences around transit stations and park-and-ride lots drove 34% visit lift in the 6–9am window. Co-op fund contribution from geofencing campaigns justified the entire program cost within the first six months.

**Brand B (Burger QSR):** Lunch daypart was the highest-performing window. Geofences deployed around office parks with 2,000+ employees drove measurably higher average cheque size — lunch customers converted to combo purchases at a higher rate than the overall lunch average.

**Brand C (Chicken QSR):** Dinner daypart and weekend family occasions drove strongest results. Geofences around community sports facilities and family entertainment venues consistently outperformed other location types in this category.`,
      },
      {
        heading: "Implementation Lessons",
        body: `Three implementation lessons from the 12-month deployment:

**Centralised management is essential.** Brands that attempted to run geofencing location-by-location produced inconsistent results and incurred significantly higher management overhead. Centralised deployment with location-level performance reporting is the right model.

**Creative must be contextual.** Generic creative underperforms dramatically in geofencing. The highest-performing campaigns served contextually relevant creative — weather-triggered copy, daypart-specific offers, competitor-conquest messaging — rather than repurposing national campaign creative.

**Attribution takes time to calibrate.** Geofencing attribution is strong but not instant. Allow 60–90 days for the measurement panel to accumulate sufficient visit data for statistically significant results, particularly at lower-volume locations.`,
      },
      {
        heading: "Applying These Findings",
        body: `For QSR brands considering geofencing investment, these results suggest a clear deployment framework:

1. Start with own-location fences in the 5–10 highest-volume locations per region
2. Calibrate daypart targeting to your category's peak purchase windows
3. Add competitor conquest targeting once baseline measurement is established
4. Expand to behavioural audience fences only after own-location and conquest fences are optimised
5. Measure incrementality against control groups, not just raw campaign metrics

The ROI case for geofencing in Canadian QSR is well-established. The differentiation is in execution quality: brands that centralise management, contextualise creative, and apply disciplined measurement consistently outperform those that run geofencing as a media channel without the supporting operational infrastructure.`,
      },
    ],
  },

  "building-franchise-brand-standards-manual": {
    badge: "Guide",
    badgeVariant: "gold",
    category: "Brand",
    readTime: "11 min read",
    title: "Building a Franchise Brand Standards Manual",
    subtitle: "From logo usage to approved vendor lists — how to create a brand standards document that actually protects your brand without stifling franchisee initiative.",
    sections: [
      {
        heading: "Why Brand Standards Fail",
        body: `Most franchise brand standards manuals fail in the same way: they are exhaustive on what not to do and almost silent on what to do instead. Franchisees receive a 60-page PDF full of logo exclusion zones and prohibited colour combinations, with no practical guidance on what good actually looks like.

The result is one of two failure modes: franchisees ignore the manual entirely, or they comply technically while violating the spirit — producing bland, lifeless marketing that is on-brand only in the most minimal sense.

Effective brand standards are half constraint and half inspiration. They tell operators what the rules are and why they exist, and they give operators enough latitude to make those rules work in their specific market.`,
      },
      {
        heading: "The Core Elements",
        body: `A functional brand standards manual should cover:

**Brand essence and voice.** Before any visual standards, articulate what the brand stands for and how it sounds. Include sample copy — headlines, social captions, in-store signage — that demonstrates the brand voice in practice. This is the most important section and the most frequently omitted.

**Visual identity system.** Logo usage, colour palette, typography, imagery direction, and iconography. For each element, include examples of correct and incorrect usage — but frame "incorrect" as guidance rather than prohibition.

**Marketing templates.** Pre-approved templates for the most common use cases: social posts, digital ads, print collateral, email headers. Templates should be editable enough to be useful locally but structured enough to maintain brand consistency.

**Approved vendor list.** For categories where brand compliance is critical — signage, uniforms, printed materials — provide a vetted vendor list with brand-negotiated pricing. This removes a major source of brand deviation and is genuinely useful to franchisees.

**Approval process.** A clear, fast process for approving materials that fall outside the template library. The faster the approval process, the more likely franchisees are to use it. Approval turnaround exceeding five business days will drive workarounds.`,
      },
      {
        heading: "Structuring for Usability",
        body: `Brand standards documents that get used share common structural characteristics:

**Searchable and navigable.** Franchisees reach for brand standards in a moment of need — they are producing a specific piece of marketing and need a specific answer. Organise by use case, not by design discipline. "How do I create a Facebook event?" is more useful than "Social Media — Organic — Facebook — Events."

**Digital-first.** A PDF published to a shared drive in 2019 is not a functional brand standards system in 2025. Brand standards should live in a searchable, versioned, digital platform — ideally integrated with the template library and asset management system.

**Version controlled.** Every update should be versioned with a clear change summary. Franchisees should receive notification of material changes with adequate lead time for existing materials to be phased out.

**Right-sized.** Brand standards for a 50-location brand should not be as complex as standards for a 500-location brand. Start with the minimum effective set of standards and add complexity only when you have evidence it is needed.`,
      },
      {
        heading: "Setting the Right Level of Control",
        body: `The most contentious question in franchise brand standards is: how much should franchisees be allowed to customise?

The answer varies by element. Some brand elements are non-negotiable — primary logo, core colour palette, fundamental brand voice. These should be locked absolutely, with zero franchisee deviation permitted.

Other elements benefit from structured flexibility. Event marketing, community sponsorships, local partnerships — these are areas where franchisee knowledge of their local market creates genuine value. Establish a clear process for locally-driven marketing that routes through brand approval, and make that process fast enough to be practical.

The test for any standard is: does the control serve the customer or the brand team? If a rule primarily makes the brand team's job easier without meaningfully improving the customer experience, it probably should not be a rule.`,
      },
      {
        heading: "Enforcement and Compliance",
        body: `Brand standards without enforcement are suggestions. Enforcement without education is adversarial. The most effective compliance programs:

**Start with education, not enforcement.** New franchisees receive a brand standards onboarding, not a warning letter. The goal is operators who understand the why behind the standards, not operators who fear violations.

**Build compliance into operations.** Field manager visit checklists should include brand compliance review. Marketing compliance should be a routine part of franchise performance reviews, not a separate disciplinary process.

**Use data to identify problems early.** Regular digital audits — scanning location social accounts, local listings, and digital creative — surface brand deviations before they become systemic. Brands that conduct quarterly audits identify and resolve issues 60% faster than those relying on complaint-driven compliance.

**Celebrate strong brand execution.** Recognition programs for franchisees who produce excellent local marketing are more effective at raising network standards than compliance enforcement. Showcase strong examples in your franchisee newsletter. Make good brand execution aspirational, not merely mandatory.`,
      },
      {
        heading: "Keeping Standards Current",
        body: `Brand standards decay without deliberate maintenance. Review your brand standards manual annually for:

- Elements that no longer reflect how consumers actually interact with the brand
- Channels that have grown in importance and lack sufficient coverage (e.g., short-form video, digital OOH)
- Templates that franchisees consistently work around — these indicate standards that don't serve the need
- Vendor approvals that need refreshing as suppliers change

Schedule a biennial comprehensive review with input from franchisees, field managers, and your marketing team. The franchisees who consistently produce strong local marketing have practical knowledge that should inform your standards — engage them early in the review process.

Brand standards are a living document. The brands that treat them as such maintain stronger brand consistency and higher franchisee buy-in than those that publish and forget.`,
      },
    ],
  },
};

interface Article {
  badge: string;
  badgeVariant: "gold" | "teal" | "navy";
  category: string;
  readTime: string;
  title: string;
  subtitle: string;
  sections: { heading: string; body: string }[];
}

export function generateStaticParams() {
  return Object.keys(ARTICLES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES[slug];
  if (!article) return { title: "Not Found" };
  return { title: article.title };
}

function renderBody(text: string) {
  return text.split("\n\n").map((para, i) => {
    if (para.startsWith("| ")) {
      const rows = para.split("\n").filter((r) => !r.match(/^\|[-|]+\|$/));
      return (
        <div key={i} className="overflow-x-auto my-6">
          <table className="w-full font-sans-ui text-[13px] border-collapse">
            {rows.map((row, ri) => {
              const cells = row.split("|").filter(Boolean).map((c) => c.trim());
              const Tag = ri === 0 ? "th" : "td";
              return (
                <tr key={ri} className={ri === 0 ? "border-b-2 border-[#1C2B4A]" : "border-b border-[rgba(28,43,74,0.08)]"}>
                  {cells.map((cell, ci) => (
                    <Tag key={ci} className={`px-4 py-2.5 text-left ${ri === 0 ? "font-semibold text-[#1C2B4A] text-[11px] uppercase tracking-wide" : "text-[#4A5568]"}`}>
                      {cell}
                    </Tag>
                  ))}
                </tr>
              );
            })}
          </table>
        </div>
      );
    }
    const parts = para.split(/(\*\*[^*]+\*\*)/g);
    const rendered = parts.map((part, j) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={j} className="font-semibold text-[#1C2B4A]">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
    if (para.startsWith("- ")) {
      const items = para.split("\n").map((line) => line.replace(/^- /, ""));
      return (
        <ul key={i} className="list-disc list-inside space-y-1.5 my-4 text-[16px] leading-relaxed text-[#4A5568]" style={{ fontFamily: "'Constantia', Georgia, serif" }}>
          {items.map((item, j) => <li key={j}>{item}</li>)}
        </ul>
      );
    }
    return (
      <p key={i} className="text-[17px] leading-relaxed text-[#4A5568] mb-5" style={{ fontFamily: "'Constantia', Georgia, serif" }}>
        {rendered}
      </p>
    );
  });
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = ARTICLES[slug];
  if (!article) notFound();

  return (
    <>
      {/* Back nav */}
      <div className="pt-28 pb-6 bg-[#EDE9E3]">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <Link href="/resources" className="inline-flex items-center gap-2 font-sans-ui text-[12px] text-[#718096] hover:text-[#1C2B4A] transition-colors">
            <ArrowLeft size={14} /> Back to Resources
          </Link>
        </div>
      </div>

      {/* Article header */}
      <section className="pb-12 bg-[#EDE9E3]">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-5">
            <Badge variant={article.badgeVariant}>{article.badge}</Badge>
            <span className="font-sans-ui text-[11px] text-[#718096]">{article.category}</span>
            <span className="w-1 h-1 rounded-full bg-[#718096]/40" />
            <span className="inline-flex items-center gap-1.5 font-sans-ui text-[11px] text-[#718096]">
              <Clock size={11} /> {article.readTime}
            </span>
          </div>
          <h1 className="font-display text-[clamp(36px,5vw,60px)] text-[#1C2B4A] leading-[0.92] mb-5">
            {article.title.toUpperCase()}
          </h1>
          <p className="text-[19px] leading-relaxed text-[#4A5568]" style={{ fontFamily: "'Constantia', Georgia, serif" }}>
            {article.subtitle}
          </p>
          <div className="mt-8 h-px bg-gradient-to-r from-[#C8921A] via-[#C8921A]/30 to-transparent" />
        </div>
      </section>

      {/* Article body */}
      <section className="py-12 bg-[#FDFBF8]">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          {article.sections.map((s, i) => (
            <div key={i} className="mb-10">
              <h2 className="font-display text-[26px] text-[#1C2B4A] mb-4">{s.heading.toUpperCase()}</h2>
              <div>{renderBody(s.body)}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1C2B4A]">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <div className="inline-flex items-center gap-2 font-sans-ui text-[11px] font-semibold tracking-[0.2em] text-[#C8921A] uppercase mb-4">
            <BookOpen size={12} /> More Resources
          </div>
          <h2 className="font-display text-[40px] text-white mb-4">EXPLORE THE LIBRARY.</h2>
          <p className="text-[15px] text-white/55 max-w-md mx-auto mb-8" style={{ fontFamily: "'Constantia', Georgia, serif" }}>
            Guides, research, and templates for Canadian franchise marketers.
          </p>
          <Link href="/resources" className="inline-flex items-center gap-2 font-sans-ui text-[13px] font-semibold bg-[#C8921A] text-white px-6 py-3 rounded-sm hover:bg-[#B07D14] transition-colors">
            View All Resources <ArrowLeft size={14} className="rotate-180" />
          </Link>
        </div>
      </section>
    </>
  );
}
