import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Store,
  MapPinned,
  Utensils,
  ShoppingCart,
  Wrench,
  Dumbbell,
  Briefcase,
  Quote,
} from "lucide-react";

export const metadata: Metadata = { title: "Solutions" };

/* ─── Data ──────────────────────────────────────────────────────────────── */

const AUDIENCES = [
  {
    id: "head-office",
    icon: Building2,
    label: "Head Office",
    accentColor: "#C8921A",
    headline: "Give your marketing leadership team the control they need — without slowing down the network.",
    sections: [
      {
        title: "Full-network visibility, finally.",
        body: "For most franchise marketing leaders, the honest answer to 'how is the network performing right now?' is 'we will know by Thursday once the reports come in.' Sova replaces that delay with a real-time operations layer. Every location's campaign status, spend rate, creative compliance, and key performance indicators are visible in a single dashboard — updated continuously, not weekly.",
      },
      {
        title: "Brand consistency at scale.",
        body: "The risk of a franchise network is that 50 locations means 50 separate marketing decisions, many of which deviate from brand standards. Sova's content and campaign architecture enforces brand guidelines at the point of creation — franchisees can only work within the guardrails you have set. That means consistent visual identity, consistent messaging hierarchy, and consistent CASL compliance across every market in the country.",
      },
      {
        title: "Strategic resource allocation, not reactive firefighting.",
        body: "Sova's AI Intelligence layer does the synthesis work that currently sits on your team's plate — flagging underperforming locations, recommending budget reallocation, predicting seasonal demand curves, and generating structured briefs for your creative team. The result is a marketing function that operates on evidence rather than intuition, and a team that spends its time on strategy rather than data wrangling.",
      },
      {
        title: "Marketing fund management that builds franchisee trust.",
        body: "Co-op marketing funds are one of the most sensitive operational topics in any franchise system. Sova provides fully transparent co-op tracking — franchisees can see exactly how their contributions are being allocated, and head office can demonstrate clearly that fund governance is sound. That transparency removes a persistent source of franchisee friction and builds the kind of trust that makes adoption of network initiatives far easier.",
      },
    ],
  },
  {
    id: "franchisees",
    icon: Store,
    label: "Franchisees",
    accentColor: "#1A6478",
    headline: "Market like a professional without building a marketing department.",
    sections: [
      {
        title: "Everything you need, ready to use.",
        body: "Most franchisees entered the system to run a business, not to become a marketing generalist. Sova's franchisee experience is designed around that reality — pre-approved campaigns, ready-to-deploy templates, and a curated vendor marketplace that eliminates the need to source, negotiate with, or manage marketing suppliers independently. You can launch a professional local campaign in the time it used to take to brief an agency.",
      },
      {
        title: "Local control where it matters.",
        body: "Your market is not identical to the location two provinces over. Sova gives you the flexibility to adjust messaging, promotional offers, and scheduling within the parameters your franchisor has established — without requiring approvals for every minor change. Geofencing tools let you target your trade area precisely, weather-triggered campaigns activate automatically, and self-serve paid media tools let you invest incremental budget in the placements most relevant to your local customer base.",
      },
      {
        title: "Visibility into your own performance.",
        body: "Understanding how your marketing investment is performing should not require a data analyst. Sova provides franchisee-level dashboards that translate raw campaign data into clear business outcomes: leads generated, return on ad spend, email engagement by segment, and foot-traffic attribution from your digital campaigns. Peer benchmarking reports show how your location compares to similar stores in your region — giving you context without exposing competitive data from other franchisees.",
      },
      {
        title: "Access to network pricing you could not get alone.",
        body: "As a single location, your negotiating power with print suppliers, signage vendors, and creative agencies is limited. As a Sova network member, you access the combined purchasing power of the entire franchise system. Pre-negotiated rates on print, promotional merchandise, photography, and digital services are available directly through the platform — no sourcing, no RFP, no back-and-forth on pricing.",
      },
    ],
  },
  {
    id: "field-managers",
    icon: MapPinned,
    label: "Field Managers",
    accentColor: "#2EA5A0",
    headline: "Move from territory oversight to territory impact.",
    sections: [
      {
        title: "Your territory, structured and searchable.",
        body: "Field managers and franchise business consultants typically carry a territory of 15 to 30 locations — and the operational record for each one lives in a combination of email inboxes, shared drives, and personal notebooks. Sova replaces that fragmented picture with a structured territory workspace: every franchisee's performance history, visit logs, action items, compliance flags, and escalation threads in one place.",
      },
      {
        title: "Conversations with context.",
        body: "Walking into a franchisee coaching conversation with their last three months of marketing performance in front of you changes the quality of the discussion. Sova surfaces the data that matters — campaign participation rates, spend efficiency, creative compliance, peer benchmark position — so that field visits are grounded in evidence rather than impressions. Structured visit logs capture the outcomes and commitments from each conversation, creating accountability on both sides.",
      },
      {
        title: "Proactive rather than reactive support.",
        body: "The traditional field management model is reactive: a franchisee calls with a problem, the field manager responds. Sova inverts that dynamic. Automated compliance flags alert you when a franchisee has not activated a required campaign, when their marketing spend rate suggests a budget problem, or when their performance metrics have shifted meaningfully. You can act before the franchisee even knows there is an issue — which is exactly the kind of support that builds loyalty to the system.",
      },
      {
        title: "A closed loop to head office.",
        body: "Field managers are the most important channel of information flowing between franchisees and head office — but that information rarely makes it upward in a structured form. Sova's escalation workflows, territory rollup reports, and shared visibility across roles ensure that what your field team observes on the ground informs the decisions being made at the corporate level. The gap between what head office believes is happening and what is actually happening in the network closes significantly.",
      },
    ],
  },
];

const VERTICALS = [
  {
    id: "qsr",
    icon: Utensils,
    name: "Quick Service Restaurants",
    accentColor: "#D84F18",
    body: "QSR franchises operate on thin margins, high transaction volumes, and intensely local competition. Sova's geofencing and paid media tools are optimised for drive-time targeting, daypart-specific promotions, and trade-area conquest campaigns. Foot-traffic attribution closes the loop between your digital spend and actual customer visits — giving you a real return-on-ad-spend figure rather than a platform-reported estimate.",
  },
  {
    id: "retail",
    icon: ShoppingCart,
    name: "Retail",
    accentColor: "#C8921A",
    body: "Retail franchise networks face the dual challenge of maintaining a consistent brand experience while responding to highly localised inventory, seasonal demand, and competitive dynamics. Sova's Content Studio and Campaign Engine allow head office to centralise brand standards while giving individual locations the flexibility to promote their own events, local partnerships, and clearance inventory — all within a compliant framework.",
  },
  {
    id: "home-services",
    icon: Wrench,
    name: "Home Services",
    accentColor: "#1A6478",
    body: "Home services franchises — plumbing, HVAC, restoration, landscaping — depend on hyper-local targeting and reputation management. Sova's geofencing module allows franchisees to target specific postal codes and neighbourhoods with precision, while weather-triggered campaigns activate automatically during the conditions that drive demand. The Vendor Marketplace provides access to pre-vetted direct mail and door-hanger suppliers at network pricing.",
  },
  {
    id: "fitness",
    icon: Dumbbell,
    name: "Fitness and Wellness",
    accentColor: "#2EA5A0",
    body: "Fitness and wellness franchises operate with strong seasonality — January, back-to-school, and pre-summer are peak acquisition windows. Sova's demand forecasting surfaces those periods well in advance, allowing head office to pre-build campaign infrastructure and franchisees to activate at the right moment. Member retention campaigns, referral program coordination, and local event marketing are all managed within a single platform.",
  },
  {
    id: "professional-services",
    icon: Briefcase,
    name: "Professional Services",
    accentColor: "#1C2B4A",
    body: "Professional services franchises — financial advisory, legal, accounting, real estate — operate in regulated environments where marketing compliance is non-negotiable. Sova's brand governance layer ensures that every piece of franchisee-generated content has passed through an approval workflow before publication. CASL opt-in management and automated suppression lists protect the network from compliance exposure at every location.",
  },
];

const TESTIMONIAL = {
  quote:
    "Before Sova, our field team was spending two days a week pulling together territory reports from individual franchisee spreadsheets. Now that work is done automatically, and our coaches are spending that time having better conversations with franchisees. The quality of our field program has improved measurably.",
  name: "Director of Franchise Development",
  org: "National QSR Brand, 180+ Canadian Locations",
};

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function SolutionsPage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "#EDE9E3" }}
      >
        <div
          className="absolute inset-0 grid-subtle opacity-60 pointer-events-none"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 55% 65% at 75% 40%, rgba(200,146,26,0.07) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-36 pb-24">
          <div className="max-w-3xl">
            <div
              className="font-sans-ui text-[11px] font-semibold tracking-[0.22em] uppercase mb-6"
              style={{ color: "#C8921A" }}
            >
              Sova Solutions
            </div>
            <h1
              className="font-display text-[64px] sm:text-[80px] lg:text-[96px] leading-[0.9] mb-8"
              style={{ color: "#1C2B4A" }}
            >
              SOLUTIONS FOR EVERY LAYER OF YOUR FRANCHISE
            </h1>
            <div className="rule-gold mb-8" />
            <p
              className="text-xl leading-relaxed max-w-2xl"
              style={{
                fontFamily: "'Constantia', Georgia, serif",
                color: "#4A5568",
              }}
            >
              A franchise marketing platform is only effective if it works for every role in the system — not just head office. Sova is designed for the full structure of the modern franchise organisation: the corporate marketing team, the franchisee running the business, and the field manager holding it all together.
            </p>
          </div>

          {/* Role quick-nav */}
          <div className="mt-16 flex flex-wrap gap-3">
            {AUDIENCES.map((a) => (
              <a
                key={a.id}
                href={`#${a.id}`}
                className="font-sans-ui text-sm font-medium px-4 py-2 rounded-sm transition-all duration-200"
                style={{
                  background: "#FDFBF8",
                  color: "#1C2B4A",
                  border: "1px solid rgba(28,43,74,0.12)",
                }}
              >
                {a.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Audience sections ─────────────────────────────────────────────── */}
      {AUDIENCES.map((audience, i) => {
        const Icon = audience.icon;
        const isAlt = i % 2 === 1;
        const bg = isAlt ? "#FDFBF8" : "#F5F1EB";

        return (
          <section
            key={audience.id}
            id={audience.id}
            className="py-24"
            style={{ background: bg }}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
              {/* Section header */}
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-sm flex items-center justify-center"
                    style={{ background: audience.accentColor }}
                  >
                    <Icon size={20} color="#fff" />
                  </div>
                  <span
                    className="font-sans-ui text-[11px] font-semibold tracking-[0.2em] uppercase"
                    style={{ color: audience.accentColor }}
                  >
                    {audience.label}
                  </span>
                </div>
                <h2
                  className="font-display text-[40px] sm:text-[52px] lg:text-[60px] leading-[0.93] max-w-3xl"
                  style={{ color: "#1C2B4A" }}
                >
                  {audience.headline.toUpperCase()}
                </h2>
                <div
                  className="w-12 h-0.5 mt-6"
                  style={{ background: audience.accentColor }}
                />
              </div>

              {/* Content grid */}
              <div className="grid sm:grid-cols-2 gap-8">
                {audience.sections.map((sec, si) => (
                  <div
                    key={si}
                    className="rounded-sm p-8"
                    style={{
                      background: isAlt ? "#F5F1EB" : "#FDFBF8",
                      border: "1px solid rgba(28,43,74,0.07)",
                    }}
                  >
                    <div
                      className="w-8 h-0.5 mb-4"
                      style={{ background: audience.accentColor }}
                    />
                    <h3
                      className="font-sans-ui text-base font-semibold mb-3"
                      style={{ color: "#1C2B4A" }}
                    >
                      {sec.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{
                        fontFamily: "'Constantia', Georgia, serif",
                        color: "#4A5568",
                      }}
                    >
                      {sec.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* ── Industry verticals ─────────────────────────────────────────────── */}
      <section className="py-24" style={{ background: "#EDE9E3" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-14">
            <div
              className="font-sans-ui text-[11px] font-semibold tracking-[0.2em] uppercase mb-4"
              style={{ color: "#C8921A" }}
            >
              Industry Coverage
            </div>
            <h2
              className="font-display text-[44px] sm:text-[56px] lg:text-[68px] leading-[0.92] max-w-2xl"
              style={{ color: "#1C2B4A" }}
            >
              BUILT FOR THE CANADIAN FRANCHISE LANDSCAPE
            </h2>
            <div className="rule-gold mt-6" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VERTICALS.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.id}
                  className="rounded-sm p-7 flex flex-col gap-4"
                  style={{
                    background: "#FDFBF8",
                    border: "1px solid rgba(28,43,74,0.08)",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-sm flex items-center justify-center flex-shrink-0"
                      style={{ background: v.accentColor }}
                    >
                      <Icon size={17} color="#fff" />
                    </div>
                    <h3
                      className="font-sans-ui text-sm font-semibold leading-snug"
                      style={{ color: "#1C2B4A" }}
                    >
                      {v.name}
                    </h3>
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      fontFamily: "'Constantia', Georgia, serif",
                      color: "#4A5568",
                    }}
                  >
                    {v.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Testimonial callout ───────────────────────────────────────────── */}
      <section className="py-24" style={{ background: "#1C2B4A" }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-[auto_1fr] gap-10 items-start">
            <div
              className="w-14 h-14 rounded-sm flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(200,146,26,0.15)", border: "1px solid rgba(200,146,26,0.2)" }}
            >
              <Quote size={28} style={{ color: "#C8921A" }} />
            </div>
            <div>
              <blockquote
                className="text-xl sm:text-2xl leading-relaxed mb-8"
                style={{
                  fontFamily: "'Constantia', Georgia, serif",
                  color: "rgba(253,251,248,0.88)",
                  fontStyle: "italic",
                }}
              >
                &ldquo;{TESTIMONIAL.quote}&rdquo;
              </blockquote>
              <div
                className="w-10 h-0.5 mb-5"
                style={{ background: "#C8921A" }}
              />
              <div
                className="font-sans-ui text-sm font-semibold"
                style={{ color: "#FDFBF8" }}
              >
                {TESTIMONIAL.name}
              </div>
              <div
                className="font-sans-ui text-sm mt-1"
                style={{ color: "rgba(253,251,248,0.5)" }}
              >
                {TESTIMONIAL.org}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="py-24" style={{ background: "#F5F1EB" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <div
            className="font-sans-ui text-[11px] font-semibold tracking-[0.2em] uppercase mb-4"
            style={{ color: "#C8921A" }}
          >
            Book a Demo
          </div>
          <h2
            className="font-display text-[52px] sm:text-[68px] lg:text-[80px] leading-[0.92] mb-6"
            style={{ color: "#1C2B4A" }}
          >
            SEE HOW SOVA FITS YOUR NETWORK
          </h2>
          <div className="rule-gold mx-auto mb-8" />
          <p
            className="text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
            style={{
              fontFamily: "'Constantia', Georgia, serif",
              color: "#4A5568",
            }}
          >
            Every franchise system is structured differently. Book a 45-minute session with a Sova specialist and we will show you how the platform maps to your specific roles, workflows, and growth priorities — no generic demos, no sales theatre.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/demo"
              className="font-sans-ui inline-flex items-center gap-2.5 text-base font-medium tracking-wide px-7 py-3.5 rounded-sm transition-all duration-200 active:scale-[0.98]"
              style={{ background: "#1C2B4A", color: "#fff" }}
            >
              Book a Demo
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/platform"
              className="font-sans-ui inline-flex items-center gap-2.5 text-base font-medium tracking-wide px-7 py-3.5 rounded-sm transition-all duration-200"
              style={{
                border: "1px solid rgba(28,43,74,0.25)",
                color: "#1C2B4A",
              }}
            >
              Explore the Platform
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
