import type { Metadata } from "next";
import Link from "next/link";
import {
  Megaphone,
  BarChart3,
  MapPin,
  ShoppingBag,
  Brain,
  FileText,
  Users,
  Globe,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = { title: "Platform" };

/* ─── Data ──────────────────────────────────────────────────────────────── */

const MODULES = [
  {
    id: "campaign-engine",
    icon: Megaphone,
    accentColor: "#C8921A",
    name: "Campaign Engine",
    headline: "Launch, localise, and scale every campaign — without losing brand control.",
    paragraphs: [
      "The Sova Campaign Engine is the operational core of your franchise marketing program. Head office sets the brand guardrails — approved messaging, visual standards, CASL opt-in requirements — and franchisees customise within those boundaries. Every campaign, from coast-to-coast brand pushes to hyper-local seasonal offers, flows through a single approval layer that keeps your network both agile and compliant.",
      "Multi-location campaigns can be deployed in minutes rather than days. Creative templates adapt automatically to each franchisee's market, pulling in local addresses, phone numbers, and photography without requiring manual intervention from your corporate team. Co-op spend tracking ensures that marketing fund contributions are allocated transparently and that every franchisee gets fair access to shared media budgets.",
      "Sova integrates directly with your existing email service provider and SMS platform, so franchisees can reach their local subscriber lists while respecting the permission records managed centrally. Automated suppression lists and unsubscribe handling are enforced network-wide, eliminating the compliance risk of franchisees running independent lists.",
    ],
    features: [
      "Multi-location campaign builder with brand-locked templates",
      "CASL opt-in management and automated suppression",
      "Co-op spend tracking and fund transparency reporting",
      "Franchisee customisation within head-office guardrails",
      "One-click campaign deployment across any number of locations",
      "Creative adaptation and localisation at scale",
    ],
  },
  {
    id: "paid-media",
    icon: BarChart3,
    accentColor: "#1A6478",
    name: "Paid Media",
    headline: "Every advertising dollar, across every location, fully accountable.",
    paragraphs: [
      "Managing paid media across a franchise network without a centralised platform means budget leakage, inconsistent targeting, and no clear picture of what is actually working. Sova's Paid Media module consolidates Google Ads, Meta, programmatic display, and out-of-home buys across your entire network into one unified dashboard — giving head office the visibility it needs and franchisees the flexibility they want.",
      "Automated budget pacing prevents individual locations from overspending their monthly allocations, and smart alerts notify both the franchisee and the area manager when a campaign is trending outside its targets. Cross-channel attribution connects online ad spend to in-store foot traffic and online conversions, giving you a true return-on-ad-spend figure for each location rather than platform-reported vanity metrics.",
      "Franchisees who want to run incremental local campaigns can do so through Sova's self-serve media buying interface, which enforces approved placements and keyword exclusion lists. Every dollar spent — whether by head office or by an individual franchisee — is visible in the same reporting layer, making audit season and co-op reconciliation straightforward.",
    ],
    features: [
      "Unified media buying dashboard across Google, Meta, and programmatic",
      "Per-location budget controls and automated pacing alerts",
      "Cross-channel attribution connecting ad spend to real outcomes",
      "Franchisee self-serve buying within approved parameters",
      "Co-op reconciliation and audit-ready spend reports",
    ],
  },
  {
    id: "geofencing",
    icon: MapPin,
    accentColor: "#2EA5A0",
    name: "Geofencing",
    headline: "Own your trade area. Defend it. Activate it.",
    paragraphs: [
      "Location is everything in franchise marketing, and Sova's Geofencing module gives you precision tools to reach the right customers at the right moment. Build geofences around each franchise location, your delivery radius, high-traffic retail corridors, and competitor sites — then trigger time-sensitive offers the moment a qualified prospect enters your zone.",
      "Drive-time audience segmentation goes beyond simple radius targeting. Sova calculates realistic drive-time boundaries for each location based on local road networks, so your geofences match the territory your franchisees actually serve. Weather-triggered campaigns allow you to activate promotions automatically when conditions meet your criteria — a coffee brand pushing hot drinks on cold mornings, or a home-services franchise targeting post-storm cleanup campaigns.",
      "Foot-traffic attribution closes the loop between your digital ad spend and physical visits. Sova reports on how many devices that saw a geofenced ad subsequently visited a franchisee location, giving you a concrete measure of offline conversion that platforms like Google and Meta cannot provide independently.",
    ],
    features: [
      "Trade-area geofence builder with drive-time segmentation",
      "Competitor conquest targeting around rival locations",
      "Weather-triggered campaign automation",
      "Time-of-day and day-of-week ad scheduling per location",
      "Foot-traffic attribution and offline conversion reporting",
      "Franchisee-level geofence performance dashboards",
    ],
  },
  {
    id: "vendor-marketplace",
    icon: ShoppingBag,
    accentColor: "#D84F18",
    name: "Vendor Marketplace",
    headline: "Vetted Canadian vendors. Network-negotiated pricing. Transparent procurement.",
    paragraphs: [
      "Franchisees sourcing their own marketing vendors — print shops, signage suppliers, promotional merchandise, local photographers, and digital agencies — face a structural disadvantage: they negotiate as single locations against suppliers who serve thousands of businesses. Sova's Vendor Marketplace changes that dynamic by aggregating purchasing power across your entire network.",
      "Every vendor in the marketplace has been vetted for quality, reliability, and alignment with Canadian franchise brand standards. Network-wide pricing agreements are negotiated by Sova on behalf of the brands on the platform, delivering savings that an individual franchisee or even a mid-sized head-office team cannot replicate. Procurement happens directly within Sova — franchisees browse, request quotes, and place orders without leaving the platform.",
      "Head office retains full visibility into what franchisees are ordering and from which suppliers. Project tracking and approval workflows ensure that franchise materials are brand-compliant before they go to print or production, eliminating the costly reprints and brand inconsistencies that arise when franchisees source independently.",
    ],
    features: [
      "Curated directory of pre-vetted Canadian marketing vendors",
      "Network-wide pricing agreements across print, signage, and digital",
      "In-platform procurement and quote management",
      "Brand compliance approvals before production",
      "Project tracking from brief to delivery",
      "Vendor performance ratings and issue escalation",
    ],
  },
  {
    id: "network-analytics",
    icon: BarChart3,
    accentColor: "#1C2B4A",
    name: "Network Analytics",
    headline: "Real-time intelligence across every location — no spreadsheets required.",
    paragraphs: [
      "For franchise marketing leaders, the most expensive problem is not underperformance — it is not knowing which locations are underperforming and why. Sova's Network Analytics module consolidates data from every location into a single real-time intelligence layer, so you can identify outliers, surface root causes, and act before small issues become systemic ones.",
      "Franchisee scorecards deliver structured performance summaries for each location across your chosen KPIs — marketing spend efficiency, campaign participation rates, lead volumes, and more. Cohort analysis lets you benchmark similar locations against each other, distinguishing genuine underperformance from seasonality or market conditions. Peer benchmarking reports give franchisees a clear view of where they stand within their region without exposing sensitive data from other operators.",
      "Executive digest reports are generated automatically on your preferred cadence, pulling the signal from the noise and surfacing the three to five things your leadership team needs to know. Custom KPI dashboards can be configured for different roles — area managers see their regional rollup, the CMO sees the network view, and franchisees see only their own data.",
    ],
    features: [
      "Real-time location performance index across your network",
      "Franchisee scorecards with configurable KPIs",
      "Cohort and peer benchmarking without exposing sensitive data",
      "Automated executive digest reports on any cadence",
      "Custom dashboards by role — franchisee, area manager, CMO",
      "Anomaly flagging and performance trend alerts",
    ],
  },
  {
    id: "ai-intelligence",
    icon: Brain,
    accentColor: "#C8921A",
    name: "AI Intelligence",
    headline: "Insight that recommends. Automation that acts.",
    paragraphs: [
      "Franchise marketing teams are data-rich and time-poor. Sova's AI Intelligence layer is designed to do the synthesis work that currently consumes analyst hours — surfacing anomalies, predicting demand curves, recommending budget reallocation, and drafting campaign briefs — so your team spends time on strategic decisions rather than data consolidation.",
      "The anomaly detection engine monitors every location's marketing performance in real time and alerts you when something deviates meaningfully from its historical pattern or its peer group. Budget reallocation recommendations are generated weekly, identifying locations that are likely to underdeliver on their targets and proposing shifts in spend that will improve network-wide return on investment.",
      "Natural language reporting lets any member of your team ask questions of the platform in plain English — 'which locations saw the biggest drop in email open rate last month?' or 'which markets should we increase spend in heading into Q4?' — and receive structured, data-backed answers without waiting for an analyst to run a query. The AI campaign brief generator accelerates creative development by producing audience-specific briefs from your brand guidelines and performance history.",
    ],
    features: [
      "Real-time anomaly detection and performance alerts",
      "Demand forecasting by location, category, and season",
      "Weekly budget reallocation recommendations",
      "AI campaign brief generator from brand guidelines",
      "Natural language reporting — ask the platform questions directly",
      "Predictive churn scoring for at-risk franchisee marketing engagement",
    ],
  },
  {
    id: "content-studio",
    icon: FileText,
    accentColor: "#1A6478",
    name: "Content Studio",
    headline: "Brand-safe content at scale, without a bottleneck at head office.",
    paragraphs: [
      "Inconsistent brand expression across franchise locations is one of the most damaging — and most preventable — problems in franchise marketing. It happens because franchisees need local content, cannot always wait for head office approval cycles, and often lack access to properly licensed brand assets. Sova's Content Studio resolves all three problems in a single module.",
      "A centralised digital asset library gives franchisees on-demand access to every approved logo file, photography asset, video, and brand element — versioned, tagged, and searchable. Template-locked creative tools allow franchisees to personalise approved layouts with their location's details without touching the elements that must remain consistent. Every output goes through a lightweight approval workflow before it is published or sent to production.",
      "For head office creative teams, the Content Studio provides a version-controlled library with clear expiry management — when a campaign ends or seasonal assets are retired, franchisees can no longer access them. Usage analytics show which assets are being downloaded, adapted, and deployed, giving your team data to inform future creative investment.",
    ],
    features: [
      "Centralised digital asset library with version control",
      "Template-locked creative tools for franchisee self-service",
      "Localisation workflow with head-office approval gates",
      "Asset expiry management for time-limited campaigns",
      "Usage analytics on creative downloads and deployments",
      "Integrated with the Campaign Engine for one-click publishing",
    ],
  },
  {
    id: "field-management",
    icon: Users,
    accentColor: "#2EA5A0",
    name: "Field Management",
    headline: "Your field team, connected to the network they support.",
    paragraphs: [
      "Regional managers and franchise business consultants are the connective tissue between head office strategy and franchisee execution. Yet most of them operate with a patchwork of spreadsheets, email threads, and CRM workarounds that were never designed for franchise field operations. Sova's Field Management module gives them a structured, purpose-built workspace for every franchisee relationship they manage.",
      "Visit logs capture the outcomes of field visits — action items, performance discussions, compliance observations, and follow-up commitments — in a format that is visible to the area manager's supervisor and accessible to the franchisee. This creates accountability in both directions and builds a searchable record of each franchisee's progress over time. Performance rollups give area managers a territory-wide view without requiring them to manually aggregate location-level data.",
      "Compliance flags surface automatically when a franchisee has not participated in a required campaign, has not submitted mandatory marketing fund reporting, or has been identified by the Analytics module as an outlier. Area managers can assign corrective actions, set follow-up reminders, and track resolution — all without leaving Sova. The closed loop between field observation and head-office visibility is what transforms a reactive support model into a proactive one.",
    ],
    features: [
      "Structured visit logs with action items and follow-up tracking",
      "Territory performance rollups for area managers",
      "Automated compliance flags for campaign participation and reporting",
      "Corrective action assignment and resolution tracking",
      "Franchisee progress history and relationship timeline",
      "Escalation workflows to head-office marketing leadership",
    ],
  },
];

const INTEGRATIONS = [
  { name: "Google Ads", category: "Paid Media" },
  { name: "Meta Ads", category: "Paid Media" },
  { name: "Google Analytics 4", category: "Analytics" },
  { name: "Mailchimp", category: "Email" },
  { name: "Klaviyo", category: "Email" },
  { name: "Shopify", category: "Commerce" },
  { name: "Lightspeed", category: "POS" },
  { name: "Square", category: "POS" },
  { name: "Salesforce", category: "CRM" },
  { name: "HubSpot", category: "CRM" },
  { name: "Canva", category: "Creative" },
  { name: "Hootsuite", category: "Social" },
];

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function PlatformPage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden grid-subtle"
        style={{ background: "#1C2B4A" }}
      >
        {/* Warm glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 70% at 80% 50%, rgba(200,146,26,0.10) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-36 pb-28">
          <div className="max-w-3xl">
            <div
              className="font-sans-ui text-[11px] font-semibold tracking-[0.22em] uppercase mb-6"
              style={{ color: "#C8921A" }}
            >
              The Sova Platform
            </div>
            <h1
              className="font-display text-[64px] sm:text-[80px] lg:text-[96px] leading-[0.9] mb-8"
              style={{ color: "#FDFBF8" }}
            >
              THE COMPLETE FRANCHISE MARKETING OPERATING SYSTEM
            </h1>
            <div className="rule-gold mb-8" />
            <p
              className="text-xl leading-relaxed mb-10 max-w-2xl"
              style={{
                fontFamily: "'Constantia', Georgia, serif",
                color: "rgba(253,251,248,0.78)",
              }}
            >
              Sova is purpose-built for Canadian franchise brands — giving head office, area managers, and franchisees a single platform to plan, execute, and measure marketing across every location in the network.
            </p>
            <Link
              href="/demo"
              className="font-sans-ui inline-flex items-center gap-2.5 text-base font-medium tracking-wide px-7 py-3.5 rounded-sm transition-all duration-200 active:scale-[0.98]"
              style={{ background: "#C8921A", color: "#fff" }}
            >
              Book a Demo
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Module count strip */}
          <div
            className="mt-20 pt-8 grid grid-cols-2 sm:grid-cols-4 gap-8"
            style={{ borderTop: "1px solid rgba(253,251,248,0.1)" }}
          >
            {[
              { n: "8", l: "Integrated modules" },
              { n: "1", l: "Unified platform" },
              { n: "100%", l: "Canadian franchise focus" },
              { n: "CASL", l: "Compliance built in" },
            ].map(({ n, l }) => (
              <div key={l}>
                <div
                  className="font-display text-[40px] leading-none mb-1"
                  style={{ color: "#C8921A" }}
                >
                  {n}
                </div>
                <div
                  className="font-sans-ui text-sm"
                  style={{ color: "rgba(253,251,248,0.55)" }}
                >
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Module sections ──────────────────────────────────────────────── */}
      {MODULES.map((mod, i) => {
        const Icon = mod.icon;
        const isAlt = i % 2 === 1;
        const bg = isAlt ? "#FDFBF8" : "#EDE9E3";

        return (
          <section
            key={mod.id}
            id={mod.id}
            className="py-24"
            style={{ background: bg }}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
              <div
                className={`grid lg:grid-cols-2 gap-16 items-start ${
                  isAlt ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Text column */}
                <div>
                  {/* Module badge */}
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                      style={{ background: mod.accentColor }}
                    >
                      <Icon size={20} color="#fff" />
                    </div>
                    <span
                      className="font-sans-ui text-[11px] font-semibold tracking-[0.2em] uppercase"
                      style={{ color: mod.accentColor }}
                    >
                      {mod.name}
                    </span>
                  </div>

                  <h2
                    className="font-display text-[36px] sm:text-[44px] lg:text-[50px] leading-[0.95] mb-6"
                    style={{ color: "#1C2B4A" }}
                  >
                    {mod.headline.toUpperCase()}
                  </h2>

                  <div
                    className="w-12 h-0.5 mb-8"
                    style={{ background: mod.accentColor }}
                  />

                  <div
                    className="space-y-4 mb-10"
                    style={{ fontFamily: "'Constantia', Georgia, serif" }}
                  >
                    {mod.paragraphs.map((p, pi) => (
                      <p
                        key={pi}
                        className="text-base leading-relaxed"
                        style={{ color: "#4A5568" }}
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Feature list column */}
                <div
                  className="rounded-sm p-8 lg:p-10 h-fit"
                  style={{
                    background: isAlt ? "#F5F1EB" : "#FDFBF8",
                    border: "1px solid rgba(28,43,74,0.08)",
                  }}
                >
                  <div
                    className="font-sans-ui text-[11px] font-semibold tracking-[0.18em] uppercase mb-6"
                    style={{ color: "#718096" }}
                  >
                    Key capabilities
                  </div>
                  <ul className="space-y-4">
                    {mod.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3">
                        <CheckCircle2
                          size={17}
                          className="flex-shrink-0 mt-0.5"
                          style={{ color: mod.accentColor }}
                        />
                        <span
                          className="font-sans-ui text-sm leading-snug"
                          style={{ color: "#1C2B4A" }}
                        >
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── Integration strip ─────────────────────────────────────────────── */}
      <section className="py-20" style={{ background: "#1C2B4A" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <div
              className="font-sans-ui text-[11px] font-semibold tracking-[0.2em] uppercase mb-4"
              style={{ color: "#C8921A" }}
            >
              Integrations
            </div>
            <h2
              className="font-display text-[40px] sm:text-[52px] leading-none"
              style={{ color: "#FDFBF8" }}
            >
              CONNECTS WITH THE TOOLS YOU ALREADY USE
            </h2>
            <p
              className="mt-4 text-base max-w-xl mx-auto"
              style={{
                fontFamily: "'Constantia', Georgia, serif",
                color: "rgba(253,251,248,0.65)",
              }}
            >
              Sova integrates natively with the platforms your network depends on — no custom development required.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {INTEGRATIONS.map((integ) => (
              <div
                key={integ.name}
                className="rounded-sm px-5 py-4 flex flex-col gap-1"
                style={{
                  background: "rgba(253,251,248,0.06)",
                  border: "1px solid rgba(253,251,248,0.1)",
                }}
              >
                <div
                  className="font-sans-ui text-sm font-medium"
                  style={{ color: "#FDFBF8" }}
                >
                  {integ.name}
                </div>
                <div
                  className="font-sans-ui text-[11px] tracking-[0.12em] uppercase"
                  style={{ color: "rgba(200,146,26,0.8)" }}
                >
                  {integ.category}
                </div>
              </div>
            ))}
          </div>

          <p
            className="mt-8 text-center font-sans-ui text-sm"
            style={{ color: "rgba(253,251,248,0.4)" }}
          >
            Additional integrations available via API. Contact us for a full compatibility list.
          </p>
        </div>
      </section>

      {/* ── Bottom CTA ────────────────────────────────────────────────────── */}
      <section className="py-24" style={{ background: "#F5F1EB" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <div
            className="font-sans-ui text-[11px] font-semibold tracking-[0.2em] uppercase mb-4"
            style={{ color: "#C8921A" }}
          >
            Get Started
          </div>
          <h2
            className="font-display text-[52px] sm:text-[68px] lg:text-[80px] leading-[0.92] mb-6"
            style={{ color: "#1C2B4A" }}
          >
            READY TO SEE THE PLATFORM IN ACTION?
          </h2>
          <div className="rule-gold mx-auto mb-8" />
          <p
            className="text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
            style={{
              fontFamily: "'Constantia', Georgia, serif",
              color: "#4A5568",
            }}
          >
            Book a 45-minute walkthrough with a Sova franchise marketing specialist. We will map the platform to your network's specific structure and show you exactly where the gaps are.
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
              href="/solutions"
              className="font-sans-ui inline-flex items-center gap-2.5 text-base font-medium tracking-wide px-7 py-3.5 rounded-sm transition-all duration-200"
              style={{
                border: "1px solid rgba(28,43,74,0.25)",
                color: "#1C2B4A",
              }}
            >
              View Solutions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
