import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Zap, Shield, Globe, TrendingUp } from "lucide-react";
import ModuleGrid from "./ModuleGrid";

export const metadata: Metadata = { title: "Platform — Sova" };

/* ─── Integration data ───────────────────────────────────────────────────── */

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

const CATEGORY_COLORS: Record<string, string> = {
  "Paid Media": "#C8921A",
  Analytics: "#2EA5A0",
  Email: "#1A6478",
  Commerce: "#D84F18",
  POS: "#2EA5A0",
  CRM: "#1C2B4A",
  Creative: "#C8921A",
  Social: "#1A6478",
};

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function PlatformPage() {
  return (
    <>
      {/* ══ HERO ══════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ background: "#1C2B4A" }}
      >
        {/* Ambient glows */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 55% 80% at 90% 30%, rgba(200,146,26,0.12) 0%, transparent 65%), " +
              "radial-gradient(ellipse 40% 60% at 10% 70%, rgba(46,165,160,0.07) 0%, transparent 60%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-36 pb-24">
          {/* Eyebrow */}
          <div
            className="font-sans-ui text-[11px] font-semibold tracking-[0.24em] uppercase mb-6"
            style={{ color: "#C8921A" }}
          >
            The Sova Platform
          </div>

          {/* Headline */}
          <h1
            className="font-display text-[60px] sm:text-[80px] lg:text-[100px] leading-[0.88] mb-8 max-w-4xl"
            style={{ color: "#FDFBF8" }}
          >
            THE COMPLETE FRANCHISE MARKETING OS
          </h1>

          <div className="rule-gold mb-8" />

          {/* Sub — single sentence, no paragraph */}
          <p
            className="text-lg mb-10 max-w-xl"
            style={{
              fontFamily: "'Constantia', Georgia, serif",
              color: "rgba(253,251,248,0.72)",
            }}
          >
            One platform. Every location. Head office in control.
          </p>

          <Link
            href="/demo"
            className="font-sans-ui inline-flex items-center gap-2.5 text-base font-medium tracking-wide px-7 py-3.5 rounded-sm transition-all duration-200 active:scale-[0.98]"
            style={{ background: "#C8921A", color: "#fff" }}
          >
            Book a Demo
            <ArrowRight size={16} />
          </Link>

          {/* ── Stat bar ─────────────────────────────────────────── */}
          <div
            className="mt-20 pt-8 grid grid-cols-2 sm:grid-cols-4 gap-8"
            style={{ borderTop: "1px solid rgba(253,251,248,0.1)" }}
          >
            {[
              { n: "8", l: "Integrated modules" },
              { n: "12+", l: "Native integrations" },
              { n: "100%", l: "Canadian focus" },
              { n: "CASL", l: "Compliance built in" },
            ].map(({ n, l }) => (
              <div key={l}>
                <div
                  className="font-display text-[44px] leading-none mb-1"
                  style={{ color: "#C8921A" }}
                >
                  {n}
                </div>
                <div
                  className="font-sans-ui text-sm"
                  style={{ color: "rgba(253,251,248,0.50)" }}
                >
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PLATFORM PILLARS ════════════════════════════════════════════════ */}
      <section className="py-16" style={{ background: "#F5F1EB" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: Zap,
                color: "#C8921A",
                title: "Fast to deploy",
                sub: "Live in days, not months.",
              },
              {
                icon: Shield,
                color: "#1A6478",
                title: "Brand-safe",
                sub: "Guardrails at every level.",
              },
              {
                icon: Globe,
                color: "#2EA5A0",
                title: "Built for Canada",
                sub: "CASL, French, coast-to-coast.",
              },
              {
                icon: TrendingUp,
                color: "#D84F18",
                title: "Scales with you",
                sub: "2 locations or 2,000.",
              },
            ].map(({ icon: Icon, color, title, sub }) => (
              <div
                key={title}
                className="rounded-sm p-5 flex items-start gap-4"
                style={{
                  background: "#FDFBF8",
                  border: "1px solid rgba(28,43,74,0.08)",
                }}
              >
                <div
                  className="w-9 h-9 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: `${color}18` }}
                >
                  <Icon size={18} style={{ color }} />
                </div>
                <div>
                  <div
                    className="font-sans-ui font-semibold text-sm leading-snug mb-0.5"
                    style={{ color: "#1C2B4A" }}
                  >
                    {title}
                  </div>
                  <div
                    className="font-sans-ui text-[12px]"
                    style={{ color: "#6B7280" }}
                  >
                    {sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ MODULE GRID ═════════════════════════════════════════════════════ */}
      <section className="py-20" style={{ background: "#EDE9E3" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Section header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <div>
              <div
                className="font-sans-ui text-[11px] font-semibold tracking-[0.22em] uppercase mb-3"
                style={{ color: "#C8921A" }}
              >
                8 Modules
              </div>
              <h2
                className="font-display text-[44px] sm:text-[58px] leading-[0.92]"
                style={{ color: "#1C2B4A" }}
              >
                EVERYTHING YOUR NETWORK NEEDS
              </h2>
            </div>
            <p
              className="font-sans-ui text-sm max-w-xs"
              style={{ color: "#6B7280" }}
            >
              Click any module to see capabilities.
            </p>
          </div>

          {/* Client component handles click-to-expand */}
          <ModuleGrid />
        </div>
      </section>

      {/* ══ INTEGRATIONS ════════════════════════════════════════════════════ */}
      <section className="py-20" style={{ background: "#1C2B4A" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
            <div>
              <div
                className="font-sans-ui text-[11px] font-semibold tracking-[0.22em] uppercase mb-3"
                style={{ color: "#C8921A" }}
              >
                Integrations
              </div>
              <h2
                className="font-display text-[38px] sm:text-[50px] leading-[0.92]"
                style={{ color: "#FDFBF8" }}
              >
                CONNECTS WITH YOUR STACK
              </h2>
            </div>
            <p
              className="font-sans-ui text-sm max-w-xs"
              style={{ color: "rgba(253,251,248,0.50)" }}
            >
              Native integrations — no custom dev required.
            </p>
          </div>

          {/* Integration chips */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {INTEGRATIONS.map((integ) => {
              const accent = CATEGORY_COLORS[integ.category] ?? "#C8921A";
              return (
                <div
                  key={integ.name}
                  className="rounded-sm px-4 py-3.5 flex items-center gap-3"
                  style={{
                    background: "rgba(253,251,248,0.05)",
                    border: "1px solid rgba(253,251,248,0.09)",
                  }}
                >
                  {/* colour dot */}
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: accent }}
                  />
                  <div>
                    <div
                      className="font-sans-ui text-sm font-medium leading-snug"
                      style={{ color: "#FDFBF8" }}
                    >
                      {integ.name}
                    </div>
                    <div
                      className="font-sans-ui text-[10px] tracking-[0.12em] uppercase mt-0.5"
                      style={{ color: `${accent}bb` }}
                    >
                      {integ.category}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <p
            className="mt-6 font-sans-ui text-[12px] text-center"
            style={{ color: "rgba(253,251,248,0.30)" }}
          >
            Additional integrations available via API.
          </p>
        </div>
      </section>

      {/* ══ CTA ═════════════════════════════════════════════════════════════ */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: "#F5F1EB" }}
      >
        {/* Subtle background rule */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 60% at 50% 100%, rgba(200,146,26,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <div
            className="font-sans-ui text-[11px] font-semibold tracking-[0.22em] uppercase mb-4"
            style={{ color: "#C8921A" }}
          >
            Get Started
          </div>

          <h2
            className="font-display text-[52px] sm:text-[70px] lg:text-[84px] leading-[0.90] mb-6"
            style={{ color: "#1C2B4A" }}
          >
            SEE THE PLATFORM IN ACTION
          </h2>

          <div className="rule-gold mx-auto mb-8" />

          <p
            className="text-base mb-10"
            style={{
              fontFamily: "'Constantia', Georgia, serif",
              color: "#6B7280",
            }}
          >
            45-minute walkthrough, mapped to your network's structure.
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
                border: "1px solid rgba(28,43,74,0.22)",
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
