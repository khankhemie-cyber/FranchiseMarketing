import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ModuleGrid from "./ModuleGrid";

export const metadata: Metadata = { title: "Platform" };

/* ─── Integration data ───────────────────────────────────────────────────── */

const INTEGRATIONS = [
  { name: "Google Ads", category: "Paid Media" },
  { name: "Meta", category: "Paid Media" },
  { name: "GA4", category: "Analytics" },
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
  CRM: "#C8921A",
  Creative: "#D84F18",
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
        <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1920&q=80" alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover opacity-[0.12]" />

        {/* Ambient glows */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 85% 20%, rgba(200,146,26,0.13) 0%, transparent 65%), " +
              "radial-gradient(ellipse 45% 60% at 10% 80%, rgba(46,165,160,0.08) 0%, transparent 60%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-36 pb-20">
          {/* Eyebrow */}
          <div
            className="font-sans-ui text-[11px] font-semibold tracking-[0.26em] uppercase mb-6"
            style={{ color: "#C8921A" }}
          >
            The Sova Platform
          </div>

          {/* Headline */}
          <h1
            className="font-display text-[58px] sm:text-[78px] lg:text-[100px] leading-[0.88] mb-8 max-w-5xl"
            style={{ color: "#FDFBF8" }}
          >
            THE COMPLETE FRANCHISE OPERATING SYSTEM
          </h1>

          <div className="rule-gold mb-8" />

          {/* ── Stat callouts ──────────────────────────────────────────── */}
          <div
            className="mt-16 pt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10"
            style={{ borderTop: "1px solid rgba(253,251,248,0.10)" }}
          >
            {[
              { n: "10", l: "Modules" },
              { n: "All", l: "Roles covered" },
              { n: "Real-time", l: "Data & alerts" },
              { n: "🍁", l: "Canadian-built" },
            ].map(({ n, l }) => (
              <div key={l}>
                <div
                  className="font-display text-[42px] sm:text-[50px] leading-none mb-1"
                  style={{ color: "#C8921A" }}
                >
                  {n}
                </div>
                <div
                  className="font-sans-ui text-[12px] tracking-wide"
                  style={{ color: "rgba(253,251,248,0.48)" }}
                >
                  {l}
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
                10 Modules
              </div>
              <h2
                className="font-display text-[42px] sm:text-[56px] leading-[0.92]"
                style={{ color: "#1C2B4A" }}
              >
                EVERYTHING YOUR NETWORK NEEDS
              </h2>
            </div>
            <p
              className="font-sans-ui text-sm max-w-[200px] text-right hidden sm:block"
              style={{ color: "#6B7280" }}
            >
              Click any module to explore.
            </p>
          </div>

          {/* Client component — 5-col icon grid + active detail panel */}
          <ModuleGrid />
        </div>
      </section>

      {/* ══ INTEGRATIONS STRIP ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-20" style={{ background: "#1C2B4A" }}>
        <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80" alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover opacity-[0.08]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <div>
              <div
                className="font-sans-ui text-[11px] font-semibold tracking-[0.22em] uppercase mb-3"
                style={{ color: "#C8921A" }}
              >
                Integrations
              </div>
              <h2
                className="font-display text-[36px] sm:text-[50px] leading-[0.92]"
                style={{ color: "#FDFBF8" }}
              >
                CONNECTS WITH YOUR STACK
              </h2>
            </div>
            <p
              className="font-sans-ui text-[12px] hidden sm:block"
              style={{ color: "rgba(253,251,248,0.40)" }}
            >
              Native integrations — no custom dev required.
            </p>
          </div>

          {/* Integration tiles — 4-col on desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {INTEGRATIONS.map((integ) => {
              const accent = CATEGORY_COLORS[integ.category] ?? "#C8921A";
              return (
                <div
                  key={integ.name}
                  className="rounded-sm px-4 py-3.5 flex items-center gap-3"
                  style={{
                    background: "rgba(253,251,248,0.05)",
                    border: "1px solid rgba(253,251,248,0.08)",
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: accent }}
                  />
                  <div>
                    <div
                      className="font-sans-ui text-sm font-medium leading-tight"
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
            className="mt-6 font-sans-ui text-[11px] text-center"
            style={{ color: "rgba(253,251,248,0.25)" }}
          >
            Additional integrations available via API.
          </p>
        </div>
      </section>

      {/* ══ CTA ═════════════════════════════════════════════════════════════ */}
      <section
        className="py-28 relative overflow-hidden"
        style={{ background: "#EDE9E3" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse 55% 65% at 50% 105%, rgba(200,146,26,0.09) 0%, transparent 70%)",
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
            className="font-display text-[50px] sm:text-[68px] lg:text-[84px] leading-[0.90] mb-6"
            style={{ color: "#1C2B4A" }}
          >
            BE AMONG THE FIRST BRANDS ON SOVA
          </h2>

          <div className="rule-gold mx-auto mb-8" />

          <p
            className="text-base mb-10"
            style={{
              fontFamily: "'Constantia', Georgia, serif",
              color: "#6B7280",
            }}
          >
            Early access is open to a limited cohort of Canadian franchise brands. Lock in founder pricing before general availability.
          </p>

          <Link
            href="/early-access"
            className="font-sans-ui inline-flex items-center gap-2.5 text-base font-medium tracking-wide px-8 py-4 rounded-sm transition-all duration-200 active:scale-[0.98]"
            style={{ background: "#1C2B4A", color: "#fff" }}
          >
            Join the Waitlist
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
