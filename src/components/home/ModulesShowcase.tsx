"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Megaphone, BarChart3, MapPin, ShoppingBag,
  Brain, FileText, Users, UserCheck, Database,
} from "lucide-react";

const MODULES = [
  {
    id: "campaigns",
    icon: Megaphone,
    color: "#C8921A",
    badge: "Campaign Engine",
    headline: "Launch. Localise. Scale.",
    body: "Head office sets guardrails. Franchisees customise within them. Every campaign flows through a single approval layer with built-in CASL compliance.",
    features: ["Multi-location campaign builder", "Brand compliance controls", "CASL opt-in management", "Automated creative adaptation", "Co-op spend tracking"],
  },
  {
    id: "paid-media",
    icon: BarChart3,
    color: "#1A6478",
    badge: "Paid Media",
    headline: "Every dollar. Accountable.",
    body: "Consolidate Google, Meta, programmatic, and OOH buys across your entire network. Automated pacing prevents overspend while head office retains full visibility.",
    features: ["Unified media buying dashboard", "Per-location budget controls", "Google & Meta API integration", "Automated pacing & alerts", "Cross-channel attribution"],
  },
  {
    id: "geofencing",
    icon: MapPin,
    color: "#2EA5A0",
    badge: "Geofencing",
    headline: "Own your trade area.",
    body: "Deploy precision geofences around every location — and your competitors'. Trigger time-sensitive offers when prospects enter your zones.",
    features: ["Trade-area geofence builder", "Competitor conquest targeting", "Weather-triggered campaigns", "Drive-time audience segments", "Foot-traffic attribution"],
  },
  {
    id: "crm",
    icon: Database,
    color: "#C8921A",
    badge: "CRM",
    headline: "Every contact. Every deal. One view.",
    body: "A franchise-native CRM that manages franchisee relationships, prospect pipelines, and operator communications — all connected to marketing performance data.",
    features: ["Franchise prospect pipeline", "Operator contact management", "Automated follow-up sequences", "Deal stage tracking", "Performance-linked contacts"],
  },
  {
    id: "franchise-dev",
    icon: UserCheck,
    color: "#1A6478",
    badge: "Franchise Development",
    headline: "Sell franchises. Fill territories.",
    body: "A dedicated development suite for franchise sales teams — territory intelligence, lead routing, FDD tracking, and pipeline management built for franchise growth.",
    features: ["Territory heat maps & availability", "Lead scoring & routing", "FDD distribution tracking", "Multi-unit operator pipeline", "Development analytics"],
  },
  {
    id: "analytics",
    icon: BarChart3,
    color: "#1C2B4A",
    badge: "Network Analytics",
    headline: "The view from head office.",
    body: "A real-time intelligence layer across every location. Compare performance, surface outliers, and deliver franchisee scorecards — all from one screen.",
    features: ["Location performance index", "Franchisee scorecards", "Cohort & peer benchmarking", "Executive digest reports", "Custom KPI dashboards"],
  },
  {
    id: "vendors",
    icon: ShoppingBag,
    color: "#D84F18",
    badge: "Vendor Marketplace",
    headline: "Vetted partners. Network rates.",
    body: "A curated marketplace of Canadian marketing vendors — pre-vetted and with network-wide pricing that independent franchisees can't access alone.",
    features: ["Curated Canadian vendor network", "Network pricing agreements", "In-platform procurement", "Project tracking & approvals", "Vendor performance ratings"],
  },
  {
    id: "ai",
    icon: Brain,
    color: "#C8921A",
    badge: "AI Intelligence",
    headline: "Insight that acts.",
    body: "Sova's AI layer surfaces anomalies, predicts demand curves, recommends budget reallocation, and drafts campaign briefs automatically.",
    features: ["Anomaly detection & alerts", "Demand forecasting", "Budget reallocation engine", "AI campaign brief generator", "Natural language reporting"],
  },
  {
    id: "content",
    icon: FileText,
    color: "#1A6478",
    badge: "Content Studio",
    headline: "Brand-safe content at scale.",
    body: "A centralised content library with approved assets, templated collateral, and a localisation workflow — eliminating rogue brand expressions.",
    features: ["Centralised asset library", "Localisation workflow", "Template-locked creative", "Digital asset management", "Version control & approvals"],
  },
  {
    id: "field",
    icon: Users,
    color: "#2EA5A0",
    badge: "Field Management",
    headline: "Your field team, connected.",
    body: "Give regional managers a structured view of their territories — visit logs, action items, compliance flags, and performance rollups.",
    features: ["Territory dashboards", "Field visit checklists", "Action item tracking", "Compliance flag workflows", "Regional performance rollup"],
  },
];

export function ModulesShowcase() {
  const [active, setActive] = useState(MODULES[0].id);
  const current = MODULES.find((m) => m.id === active)!;
  const Icon = current.icon;

  return (
    <section className="py-24 bg-[#1C2B4A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-14">
          <div className="font-sans-ui text-[11px] font-semibold tracking-[0.2em] text-[#C8921A] uppercase mb-4">
            Platform Modules
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="font-display text-[clamp(40px,5vw,64px)] text-white leading-[0.92]">
              TEN MODULES.<br />ONE NETWORK.
            </h2>
            <p className="font-sans-ui text-[13px] text-white/35 max-w-xs">
              Marketing, CRM, franchise development, analytics, AI — all connected.
            </p>
          </div>
        </div>

        {/* Module pill grid */}
        <div className="flex flex-wrap gap-2 mb-8">
          {MODULES.map((m) => {
            const MIcon = m.icon;
            const isActive = m.id === active;
            return (
              <motion.button
                key={m.id}
                onClick={() => setActive(m.id)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-3.5 py-2 rounded-lg font-sans-ui text-[12px] font-medium transition-all duration-150"
                style={{
                  background: isActive ? m.color : "rgba(255,255,255,0.05)",
                  color: isActive ? "white" : "rgba(255,255,255,0.45)",
                  border: `1px solid ${isActive ? m.color : "rgba(255,255,255,0.07)"}`,
                }}
              >
                <MIcon size={12} />
                {m.badge}
              </motion.button>
            );
          })}
        </div>

        {/* Detail panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="rounded-2xl p-8 md:p-10"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: `1px solid rgba(255,255,255,0.07)`,
              borderTop: `2px solid ${current.color}`,
              backdropFilter: "blur(12px)",
            }}
          >
            <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start">
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: `${current.color}20` }}>
                    <Icon size={22} style={{ color: current.color }} />
                  </div>
                  <div>
                    <div className="font-sans-ui text-[10px] font-semibold tracking-[0.15em] uppercase mb-0.5" style={{ color: current.color }}>
                      {current.badge}
                    </div>
                    <h3 className="font-display text-[32px] md:text-[40px] text-white leading-none">
                      {current.headline}
                    </h3>
                  </div>
                </div>
                <p className="text-[15px] leading-relaxed text-white/55 mb-6 max-w-lg" style={{ fontFamily: "'Constantia', Georgia, serif" }}>
                  {current.body}
                </p>
              </div>

              {/* Feature list */}
              <div className="min-w-[220px]">
                <div className="font-sans-ui text-[10px] font-semibold tracking-[0.15em] text-white/25 uppercase mb-3">Capabilities</div>
                <ul className="space-y-2">
                  {current.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 font-sans-ui text-[12px] text-white/50">
                      <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: current.color }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
